from django.shortcuts import render
from django.contrib.auth.decorators import login_required
# Create your views here.

#views.py
from django.http import HttpResponse


def login(request):
    return HttpResponse("this is a login")



@login_required(login_url="login")
def home(request):
	current_user = request.user
	if current_user.location!="null":
		location=current_user.location
		print location
	else:
		location="Home"
	return render(request,"index.html",{'location':location})
@login_required(login_url="login")
def charts(request):
	return render(request,"charts.html")
@login_required(login_url="login")
def tables(request):
	return render(request,"tables.html")
@login_required(login_url="login")
def widgets(request):
	return render(request,"widgets.html")
@login_required(login_url="login")
def panels(request):
	return render(request,"panels.html")
def fire(request):
	return render(request,"firebase.html")