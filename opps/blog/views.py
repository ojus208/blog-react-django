from django.shortcuts import render
from rest_framework import generics
from .models import Blogposts , Comment
from .serializers import blogpostSerializer, newcommentserializer
# Create your views here.

class blogs(generics.ListAPIView):
    queryset = Blogposts.objects.all()
    serializer_class = blogpostSerializer

class getcomment(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = newcommentserializer

# class reply-detail()