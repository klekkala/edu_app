from django.test import TestCase
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required


class LoginTest(TestCase):

    def test_register(self):
        user = User.objects.create_user('new', 'new@gmail.com', 'new')
        self.assertEqual(1+1, 2)

    def test_login(self):
        user = User.objects.create_user('temporary', 'temporary@gmail.com', 'temporary')
        response = self.client.login(username= 'temporary', password= 'temporary')
        self.assertEqual(response, True)


    def test_hacker(self):
        response = self.client.login(username= 'hacker', password= 'hacking')
        self.assertEqual(response, False)


    def test_emptypass(self):
        response = self.client.login(username= 'temporary', password= '')
        self.assertEqual(response, False)


    def test_emptyuser(self):
        response = self.client.login(username= '', password= 'temporary')
        self.assertEqual(response, False)



class RemoveTest(TestCase):

    def test_removeuser(self):
        user = User.objects.delete_user('temporary', 'temporary@gmail.com', 'temporary')
        response = self.client.login(username= 'temporary', password= 'temporary')
        self.assertEqual(response, True)