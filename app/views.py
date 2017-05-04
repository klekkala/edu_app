from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import user_passes_test
from django.forms import ModelForm
from app.models import Myuser
from django.http import HttpResponseRedirect
# Create your views here.

#views.py
from django.http import HttpResponse

class Register(ModelForm):
     class Meta:
         model = Myuser
         fields = ['first_name','last_name','email','username',"password",'location','is_superuser']
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
@user_passes_test(lambda u:u.is_superuser)
def setquestion(request):
	return render(request,"questions_test.html")
def fire(request):
	return render(request,"firebase.html")
@user_passes_test(lambda u:u.is_superuser)
def  register(request):
	if request.method == 'POST':
		form = Register(request.POST)
		if form.is_valid():
			new_user = Myuser.objects.create_user(**form.cleaned_data)
			login(new_user)
			return HttpResponseRedirect('index.html')
	else:
		form = Register()
	return render(request,"register.html",{'form':form}) 