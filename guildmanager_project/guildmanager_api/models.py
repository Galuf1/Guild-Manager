from django.db import models
from django.contrib.auth.models import AbstractUser

class AppUser(AbstractUser):
    email =  models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Guild(models.Model):
    name = models.CharField(max_length=50 ,unique=True, null=False)

class Game(models.Model):
    name = models.CharField( max_length=100,unique=True, null=False)
    guild_size = models.IntegerField()
    # guild = models.ManyToManyField(Guild)

class Char(models.Model):
    name = models.CharField( max_length=50,unique=True, null=False)
    # guild = models.ManyToManyField(Guild)
    # game = models.ManyToManyField(Game)