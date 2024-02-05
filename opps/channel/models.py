from distutils.command.upload import upload
from email.policy import default
from unicodedata import name
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class created(models.Model):
    id = models.BigAutoField(primary_key=True)
    created_on = models.DateField(auto_created=True)
    updated_on = models.DateTimeField()


class category(models.Model):
    name = models.CharField(max_length=50)


class Channel(created):
    owner = models.ForeignKey(User , verbose_name=("Owner_of_channel"), on_delete=models.CASCADE)
    name = models.CharField(max_length=150 ,unique=True)
    channel_desc = models.TextField()
    category = models.ManyToManyField(category)
    poster = models.ImageField(upload_to="media", default="")
    Profile_img = models.ImageField(upload_to="media", default="")


    

