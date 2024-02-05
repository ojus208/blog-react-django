
from rest_framework.serializers import ModelSerializer
from .models import Channel
from django.contrib.auth.models import User



class Userserializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username','first_name','last_name','email']



class ChannelSerializer(ModelSerializer):
    # owner = Userserializer(instance=User)
    class Meta:
        model = Channel
        fields = ['name','Profile_img', 'channel_desc']


    def create(self, validated_data):

        return super().create(validated_data)



