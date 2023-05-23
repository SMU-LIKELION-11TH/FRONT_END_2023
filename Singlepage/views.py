from django.shortcuts import render
from django.views.generic import TemplateView

class indexTemplateView(TemplateView):
    template_name = "hyerin/index.html"
