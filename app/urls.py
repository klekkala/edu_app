# howdy/urls.py
from django.conf.urls import url
from app import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view()),
    url(r'^css/$', views.HomePageView.as_view()),
    url(r'^js/$', views.HomePageView.as_view()),
    url(r'^fonts/$', views.HomePageView.as_view()),
    url(r'^tables/$', views.HomePageView.as_view()),
]