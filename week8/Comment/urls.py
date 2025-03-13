from django.urls import path
from . import views

app_name = "comment"

urlpatterns = [
    path('create/', views.CommentCreate.as_view(),name = "create"),
    # path('list/cbv/', views.PostListView.as_view(),name = "list"),
    # path('list/', views.PostListApiView.as_view(),name = "list_api"),
    # path('detail/<int:pk>/cbv', views.PostDetailView.as_view(),name = "detail"),
    # path('detail/<int:pk>/', views.PostDetailApiView.as_view(),name = "detail_api"),
    # path('update/<int:pk>/', views.PostUpdateView.as_view(),name = "update"),
    # path('delete/<int:pk>/', views.PostDeleteView.as_view(),name = "delete"),

]


