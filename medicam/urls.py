from django.contrib import admin
from django.shortcuts import render
from django.urls import include, path
from django.views.generic.base import RedirectView, View

class ServiceWorkerView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'fcm/firebase-messaging-sw.js', content_type="application/x-javascript")

urlpatterns = [
    path('admin123/', admin.site.urls),
    path('i18n/', include('django.conf.urls.i18n')),
    path('clinic/', include('clinic.urls')),
    path('firebase-messaging-sw.js', ServiceWorkerView.as_view()),
    path('', RedirectView.as_view(url='/clinic/')),
]
