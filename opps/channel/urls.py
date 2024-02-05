from django.urls import path, include
from rest_framework import routers
from .views import ChannelListView , ChannelView, FilterChannelListView , CreateChannelView


urlpatterns = [
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path("" , ChannelListView.as_view()),
    path("category/<str:category>" , FilterChannelListView.as_view()),
    path("create" , CreateChannelView.as_view()),
    path("<str:name>" , ChannelView.as_view())
]