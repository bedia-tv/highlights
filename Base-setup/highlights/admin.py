from django.contrib import admin
from django.db.models.functions import Lower
from import_export.admin import ImportExportModelAdmin
from django.db import models
from .models import Producer, Video, Speaker, Highlights


class HighlightAdmin(admin.ModelAdmin):
    list_display = ('highlight_name', 'highlight_script',
                    'videoID', 'startTime')
    search_fields = ['highlight_script']
    ordering = ['videoID']

class VideoAdmin(ImportExportModelAdmin):
    list_display = ('title', 'slugURL', 'typemedia',
                    #'video_producer'
                     'video_date')
    #filter_horizontal = ('video_speakers',)
    #list_filter = ('video_producer',)
    search_fields = ['title', ]

admin.site.register(Video, VideoAdmin)
admin.site.register(Highlights, HighlightAdmin)
'''

class SpeakerAdmin(ImportExportModelAdmin):
    list_display = ('speaker_name', 'id', 'speaker_image')
    search_fields = ['speaker_name']





class ProducerAdmin(ImportExportModelAdmin):
    list_display = ('producer_name', 'id', 'Logo_Picture')
    search_fields = ['producer_name']


admin.site.register(Producer, ProducerAdmin)
admin.site.register(Speaker, SpeakerAdmin)

'''