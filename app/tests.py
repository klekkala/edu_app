from django.test import TestCase

# Create your tests here.

from pyvows import Vows, expect
from django_pyvows.context import DjangoHTTPContext

DjangoHTTPContext.start_environment("tddapp.settings")

from accounts.views import login
from django.template.loader import render_to_string



class TestLoginForm(TestCase):

    def topic(self):
        self.start_server()


class TestAddAuth(TestCase):

    def topic(self):
        self.start_server()


class TestUpdateData(TestCase):

    def topic(self):
        self.start_server()



class TestNotifications(TestCase):

    def topic(self):
        self.start_server()



class TestRemoveUsers(TestCase):

    def topic(self):
        self.start_server()