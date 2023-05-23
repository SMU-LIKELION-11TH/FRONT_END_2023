from django.http import JsonResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse, reverse_lazy
from django.views.generic import CreateView, ListView, DetailView, UpdateView, DeleteView, View
from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Post
from .utils import Post_to_Json, PostList_to_Json
class PostCreate(LoginRequiredMixin,CreateView):
    model = Post
    fields = ["title","content","image"]

    def form_valid(self, form):
        current_user = self.request.user
        if current_user.is_authenticated:
            form.instance.author = current_user
            return super(PostCreate, self).form_valid(form)
        else:
            messages.error(self.request, '로그인을 먼저 해주세요.', extra_tags='danger')
            return redirect("account:login")

    def form_invalid(self, form):
        print(form.data,form.errors)
        return super(PostCreate, self).form_invalid(form)

    def get_success_url(self):
        return reverse("post:list")

class PostListView(ListView):
    model = Post
    paginate_by = 10
    template_name = "hyerin/post.html"

class PostListApiView(View):
    def get(self, request, *args, **kwards):
        data = Post.objects.all()
        data = PostList_to_Json(data)
        context = {
            "posts" : data
        }
        return JsonResponse(context)

class PostDetailView(DetailView):
    model = Post
    template_name = "hyerin/postDetail.html"

class PostDetailApiView(View):
    def get(self, request, *args, **kwards):
        print(kwards)
        data = Post.objects.get(id = kwards["pk"])
        data = Post_to_Json(data)
        context = {
            "post" : data
        }
        return JsonResponse(context)
class PostUpdateView(UpdateView):
    model = Post
    fields = ["title","content","image"]
    template_name = "hyerin/editPost.html"

    def form_valid(self, form):
        obj = self.get_object()
        current_user = self.request.user
        if current_user.is_authenticated and current_user == obj.author:
            form.instance.author = current_user
            form.instance.image = obj.image
            return super(PostUpdateView, self).form_valid(form)
        else:
            messages.error(self.request, '로그인을 먼저 해주세요.', extra_tags='danger')
            return redirect("account:login")

    def form_invalid(self, form):
        obj = self.get_object()
        print(1)
        if form.instance.image=="":
            form.instance.image = obj.image
            return super(PostUpdateView, self).form_valid(form)
        else:
            print(form.data,form.errors)
            return super(PostUpdateView, self).form_invalid(form)

    def get_success_url(self):
        return reverse("post:detail",args=(str(self.get_object().pk)))

class PostDeleteView(DeleteView):
    model = Post

    success_url = reverse_lazy("post:list")
    def delete(self, request, *args, **kwargs):
        self.object = self.get_object()
        success_url = self.get_success_url()
        self.object.delete()
        return JsonResponse({"status":True})

    # def get(self, request, *args, **kwargs):
    #     return self.delete(request, *args, **kwargs)

