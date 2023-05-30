from django.db import models

class Tag(models.Model):
    name = models.CharField(max_length=100)

class Category(models.Model):
    name = models.CharField(max_length=100)

class Post(models.Model):
    title = models.CharField(max_length = 100)
    author = models.ForeignKey("Account.User",on_delete=models.CASCADE)
    content = models.TextField()
    image = models.ImageField(upload_to="Post",blank = True, null = True)
    tag = models.ForeignKey(Tag,on_delete=models.CASCADE,null = True)
    category = models.ForeignKey(Category,on_delete=models.CASCADE,null = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    likes = models.IntegerField(default=0)


