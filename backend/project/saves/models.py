from django.db import models
from rest_framework.authtoken.models import Token
from users.models import User
# Create your models here.

class Saves(models.Model):
    name = models.CharField(max_length=50)
    file = models.TextField()
    time_update = models.DateTimeField(auto_now=True)
    time_create = models.DateTimeField(auto_now_add=True)
    parent = models.ForeignKey(User, on_delete=models.CASCADE,null=True, blank=True)


    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Saves'
        verbose_name_plural = 'Saves' 
