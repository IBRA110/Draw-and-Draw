from django.db import models
from rest_framework.authtoken.models import Token
from django.conf import settings
# Create your models here.

class Saves(models.Model):
    name = models.CharField(max_length=50)
    file = models.TextField()
    time_update = models.DateTimeField(auto_now=True)
    time_create = models.DateTimeField(auto_now_add=True)
    parent = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Saves'
        verbose_name_plural = 'Saves' 
