
from pyexpat import model
from django.db import models
from django.contrib.auth.models import User
from channel.models import Channel

# Create your models here.
class topic(models.Model):
    id = models.AutoField(primary_key=True)
    topicname = models.CharField(max_length=50)


class like(models.Model):
    id = models.AutoField(primary_key=True)
    byuser = models.ForeignKey(User, on_delete=models.CASCADE)
    liked = models.BooleanField()

class reply(models.Model):
    id = models.AutoField(primary_key=True)
    byuser = models.ForeignKey(User, on_delete=models.CASCADE)
    replycontent = models.CharField(max_length=300)
    like = models.ManyToManyField(like, related_name="replylike")


class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    byuser = models.ForeignKey(User, on_delete=models.CASCADE)
    commentcontent = models.CharField(max_length=300)
    reply = models.ManyToManyField(reply, related_name="reply")
    like = models.ManyToManyField(like, related_name="commentlike")


    

class Blogposts(models.Model):
    blogid = models.AutoField(primary_key=True)
    Channel = models.ForeignKey(Channel, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    subtitle = models.CharField(max_length=200)
    blog = models.TextField()
    slug = models.CharField(max_length=300, unique=True)
    tag = models.ManyToManyField(topic, related_name="topics", default=None)
    mainimage = models.ImageField(default="")
    date = models.DateField(auto_now_add=True)
    like = models.ManyToManyField(like, related_name='bloglike', default=None)
    blogcomment = models.ManyToManyField(Comment, related_name="blogcomment")
    views = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.title[:20]}....'

    
    

