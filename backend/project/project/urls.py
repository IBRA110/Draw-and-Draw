from django.contrib import admin
from django.urls import path, include
from project import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/user',include('users.urls')),
    path('api/v1/save',include('saves.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
