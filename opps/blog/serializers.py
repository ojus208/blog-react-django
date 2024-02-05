
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import reply, like, Comment, Blogposts, topic



class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name']

class replySerializer(serializers.ModelSerializer):
    byuser = userSerializer()
    class Meta:
        model = reply
        fields = ['id', 'replycontent', 'byuser', 'like' ]
        

class likeSerializer(serializers.ModelSerializer):
    class Meta:
        model  = like
        fields = '__all__'
         

class commentSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Comment
        fields = '__all__'
         

class topicSerializer(serializers.ModelSerializer):
    class Meta:
        model  = topic
        fields = '__all__'
         

class blogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Blogposts
        fields = '__all__'
         

class newcommentserializer(serializers.ModelSerializer):
    reply = replySerializer(many=True)
    class Meta:
        model = Comment
        fields = ['id', 'commentcontent', 'reply']