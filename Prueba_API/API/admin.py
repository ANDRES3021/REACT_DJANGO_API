from django.contrib import admin
from API.models import Joke, User  

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass


@admin.register(Joke)
class JokeAdmin(admin.ModelAdmin):
    list_display=["user", "joke"]
    