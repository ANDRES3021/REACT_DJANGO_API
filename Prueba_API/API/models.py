from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    pass

class Joke(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="jokes")
    joke = models.CharField(max_length=500)

