from rest_framework import serializers
from .models import Saves
from users.models import User

class SavesSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    file = serializers.CharField()
    time_create = serializers.DateTimeField(read_only=True)
    time_update = serializers.DateTimeField(read_only=True)
    parent = serializers.IntegerField()
    
    class Meta:
        model = Saves
        fields = '__all__'

    def create(self, validated_data): 
        print(validated_data)
        return Saves.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.file = validated_data.get("file", instance.file)
        instance.time_update = validated_data.get("time_update", instance.time_update)
        instance.parent = validated_data.get("parent", instance.parent)
        instance.save()
        return instance
