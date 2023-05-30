from django.urls import path
from . import views as views
from django.contrib.auth.views import LogoutView

app_name = "account"

urlpatterns = [
    path("user/create/",views.UserCreate.as_view(), name = "signup"),
    path("user/login/",views.UserLoginView.as_view(),name = "login"),
    path("user/logout/",views.LogoutView.as_view(),name = "logout"),
    path("user/retrieve/",views.UserDetailView.as_view(),name = "user_detail"),
    path("user/update/",views.UserUpdateView.as_view()),
    path("user/delete/",views.UserDeleteView.as_view()),

]

