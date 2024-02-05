from django.contrib import admin
from .models import reply, like, Comment, Blogposts, topic

# Register your models here.

admin.site.register(reply)
admin.site.register(like)
admin.site.register(Comment)
admin.site.register(Blogposts)
admin.site.register(topic)