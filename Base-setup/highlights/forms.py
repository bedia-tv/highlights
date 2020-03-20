from django.forms import ModelForm
from .models import Video, Highlights

class VideoForm(ModelForm):
    class Meta:
        model = Video
        exclude = ('slugURL', 'typemedia', 'exists')
