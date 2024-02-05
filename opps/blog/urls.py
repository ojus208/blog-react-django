from django.urls import path, include
from rest_framework import routers
from .views import blogs , getcomment


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path("" , blogs.as_view()),
    path("comments" , getcomment.as_view())

]