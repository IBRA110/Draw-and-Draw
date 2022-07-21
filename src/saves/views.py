from django.shortcuts import render
from django.forms import model_to_dict
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Saves
from users.models import User
from .serializers import SavesSerializer
# Create your views here.


class SavesAPIView(APIView):
    def get(self, request):
        w = Saves.objects.all()
        return Response({'saves': SavesSerializer(w, many=True).data})

    def post(self, request):
        #request.data['parent'] = User.objects.get(email__exact=request.data['parent']) 
        #request.data['parent']=request.data['parent'].id
        serializer = SavesSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'save': serializer.data})

    def put(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response({"error": "Method PUT not allowed"})

        try:
            instance = Saves.objects.get(pk=pk)
        except:
            return Response({"error": "Object does not exists"})

        serializer = SavesSerializer(data=request.data, instance=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"post": serializer.data})

    def delete(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response({"error": "Method DELETE not allowed"})

        # здесь код для удаления записи с переданным pk
        # { "name": "name", "file": "{'asd':'asd'}", "parent": "mamedovarbeiter@gmail.com" }

        return Response({"post": "delete post " + str(pk)})



