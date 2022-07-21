from django.urls import path
from .views import CreateUserView, LoginView

urlpatterns = [
    path('registration/', CreateUserView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login')

]
