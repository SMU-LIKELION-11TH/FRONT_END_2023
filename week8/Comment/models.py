from django.db import models

# Create your models here.
class Comment(models.Model):
    content = models.CharField(max_length=200)
    author = models.ForeignKey("Account.User",on_delete=models.CASCADE)
    Post = models.ForeignKey("Post.Post",on_delete=models.CASCADE)
    likes = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now = True)

