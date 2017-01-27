from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Test_Data(models.Model):
   id = models.primary_key=True
   name = models.CharField(max_length = 50)
   age = models.IntegerField()
   gender = models.CharField(max_length = 50)
   score = models.IntegerField()
   subject = models.CharField(max_length = 150)
   region = models.CharField(max_length = 50)