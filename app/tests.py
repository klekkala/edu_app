from django.test import TestCase

# Create your tests here.

from pyvows import Vows, expect
from django_pyvows.context import DjangoHTTPContext

DjangoHTTPContext.start_environment("tddapp.settings")

from accounts.views import login
from django.template.loader import render_to_string

@Vows.batch
class LoginPageVows(DjangoHTTPContext):

    def topic(self):
        self.start_server()

    class LoginPageURL(DjangoHTTPContext):

        def topic(self):
             return self.url("^login/$")

        def url_should_be_mapped_to_login_view(self, topic):
            expect(topic).to_match_view(login)

    class LoginPageView(DjangoHTTPContext):

        def topic(self):
            return login(self.request())

        def should_return_valid_HTTP_Response(self,topic):
            expect(topic).to_be_http_response()

        def should_return_login_page(self, topic):
            loginTemplate = render_to_string("login.html")
            expect(topic.content.decode()).to_equal(loginTemplate)

