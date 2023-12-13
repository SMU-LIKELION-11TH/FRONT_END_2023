from django.contrib.auth.hashers import make_password
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import LoginView, LogoutView
from django.shortcuts import render, redirect
from django.views import View
from django.urls import reverse
from django.views.generic import CreateView, ListView, UpdateView, DetailView, DeleteView
from .models import User
from django.contrib import messages
from django.http import JsonResponse

from .utils import object_to_User

class UserCreate(CreateView):
    model = User
    fields = ["username","password","first_name","last_name","email"]
    template_name = 'signup.html'

    def form_valid(self, form):
        form.instance.password = make_password(form.cleaned_data['password'])
        response = super().form_valid(form)
        data = {'success': True}
        return redirect("single_page:main")

    def form_invalid(self, form):
        print(form.errors)
        return redirect("account:signup")

    def get_success_url(self):
        return reverse("single_page:main")


class UserLoginView(LoginView):           # 로그인
    # template_name = 'Account/login_form.html'
    redirect_authenticated_user = True
    template_name = 'login.html'

    def form_valid(self, form):
        return super().form_valid(form)

    def form_invalid(self, form):
        print(form.data)
        print(form.errors)
        messages.error(self.request, '로그인에 실패하였습니다.', extra_tags='danger')
        return super().form_invalid(form)

    def get_success_url(self):
        return reverse('single_page:main')
class UserDetailView(LoginRequiredMixin,DetailView):
    model = User

    def get_object(self, queryset=None):
        return self.request.user

class UserUpdateView(LoginRequiredMixin,UpdateView):
    model = User
    fields = ["username","password","first_name","last_name","email"]

    def get_object(self, queryset=None):
        return self.request.user

    def get_success_url(self):
        return reverse("user_detail")

class UserDeleteView(LoginRequiredMixin,DeleteView):
    model = User

    def get_object(self, queryset=None):
        return self.request.user

    def get_success_url(self):
        return reverse("login")



