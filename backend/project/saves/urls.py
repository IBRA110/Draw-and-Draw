from .views import SavesAPIView
from django.urls import path


urlpatterns = [
    path('', SavesAPIView.as_view(), name='signup')
]
