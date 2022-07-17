from django.db import models
from users.models import User

# Create your models here.

class Saves(models.Model):
    name = models.CharField(max_length=50)
    file = models.TextField()
    time_create = models.DateTimeField(auto_now_add=True)
    parent = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Saves'
        verbose_name_plural = 'Saves' 
