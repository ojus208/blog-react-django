from django.shortcuts import get_object_or_404
from rest_framework.generics import ListCreateAPIView , UpdateAPIView, CreateAPIView, DestroyAPIView, RetrieveAPIView, ListAPIView
from .models import Channel, category
from .serializers import ChannelSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.filters import BaseFilterBackend
# Create your views here.

class ChannelListView(ListCreateAPIView):
    queryset = Channel.objects.all()
    serializer_class = ChannelSerializer



class FilterChannelListView(ListAPIView):
    serializer_class = ChannelSerializer
    lookup_field = 'category'

    def get_queryset(self):
        try:
            cate = category.objects.all().filter( name= 'Technology' ).first()
        except:
            cate = None
        
        if cate != None:
            queryset = Channel.objects.all().filter(category = cate.id)
        return queryset
        
class CreateChannelView(CreateAPIView):
    queryset = Channel.objects.all()
    serializer_class = ChannelSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        print("this is working")
        return super().perform_create(serializer)
    
    
    
        
    

class ChannelView(RetrieveAPIView):
    queryset = Channel.objects.all()
    serializer_class = ChannelSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field  = "name"
     


class CreateChannelView( CreateAPIView):
    queryset = Channel.objects.all()
    serializer_class = ChannelSerializer


# class DestroyChannelView(request, DestroyAPIView):
#     queryset = get_object_or_404(Channel , id=request.id)
#     serializer_class = ChannelSerializer