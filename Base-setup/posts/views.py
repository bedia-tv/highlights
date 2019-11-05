from django.views.generic import ListView
from .models import Video, Highlights


class HomePageView(ListView):
    model = Video
    template_name = 'home.html'
    context_object_name = 'all_posts_list'
