from rest_framework import serializers
from .models import Saves

class SavesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Saves
        fields = "__all__"
