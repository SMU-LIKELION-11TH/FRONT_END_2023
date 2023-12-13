from django.urls import path
from . import views as views

app_name = "single_page"

urlpatterns = [
    path("",views.indexTemplateView.as_view(),name = "main"),
]

