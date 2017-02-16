from django.conf.urls import url
from app import views

urlpatterns = [
	url(r'^$',views.home, name='home'),
	url(r'^charts/',views.charts, name='charts'),
	url(r'^tables/',views.tables, name='tables'),
	url(r'^widgets/',views.widgets, name='widgets'),
	url(r'^panels/',views.panels, name='panels'),
	url(r'^fire/',views.fire, name='fire'),

	
]
