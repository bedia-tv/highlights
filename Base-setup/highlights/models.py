from django.db import models
from django import forms
from django.db import models
from django.contrib.auth.models import User, AbstractBaseUser, Group, Permission
from datetime import date, datetime
from django.template.defaultfilters import slugify
# https://stackoverflow.com/questions/12270852/convert-uuid-32-character-hex-string-into-a-youtube-style-short-id-and-back
import uuid
import base64
#import taggit.managers
from taggit.managers import TaggableManager


def today_utc():
    return datetime.utcnow()


def hex_uuid():
    return uuid.uuid4().hex[:10]


mediatype = [
    ('Video', 'Video'),
    ('Audio', 'Audio')
]


class Speaker(models.Model):

    id = models.CharField(max_length=1000, primary_key=True,
                          unique=True, default=uuid.uuid4)
    speaker_name = models.CharField(max_length=128)
    speaker_description = models.CharField(
        max_length=128, default="", blank=True)
    speaker_image = models.CharField(
        max_length=1000, default="", blank=True)

    def __str__(self):
        return self.speaker_name


class Producer(models.Model):

    id = models.CharField(max_length=1000, primary_key=True,
                          unique=True, default=hex_uuid)
    producer_name = models.CharField(max_length=128)
    Logo_Picture = models.CharField(max_length=1000, default="", blank=True)

    def __str__(self):
        return self.producer_name


class Video(models.Model):
    slugURL = models.CharField(max_length=1000,
                               unique=True, default=hex_uuid)
    title = models.CharField(max_length=400)
    typemedia = models.CharField(
        max_length=400, choices=mediatype, default='Video')
    url = models.URLField()
    tags = TaggableManager(blank=True)
    video_description = models.TextField()
    #video_producer = models.ForeignKey(
        #Producer, related_name='Video_Producer', default='0fbd2ae21f', blank=True, null=True, on_delete=models.SET_NULL)
    thumbnail = models.URLField(blank=True)
    video_date = models.DateField(
        default=today_utc, blank=True, null=True)
    #video_speakers = models.ManyToManyField(
        #Speaker, null=True, blank=True, default="b781ef92-670c-4e74-b584-49fec58e9989")
    comments = models.TextField(default='')
    exists = models.BooleanField(default=False)
    class Meta:
        ordering = ['-video_date']

    def __str__(self):
        return self.title


class Highlights(models.Model):

    id = models.CharField(max_length=1000, primary_key=True,
                          unique=True, default=hex_uuid)
    highlight_name = models.CharField(max_length=128)
    video_title = models.CharField(max_length=400,blank=False)
    tags = TaggableManager(blank=True)
    highlight_script = models.CharField(max_length=1000)
    comments = models.TextField()
    startTime = models.FloatField(default=0.0)
    endTime = models.FloatField(default=0.0)
    videoID = models.ForeignKey(
        Video, related_name='Highlight_Video', blank=True, null=True, on_delete=models.SET_NULL)
    #highlight_speakers = models.ManyToManyField(
        #Speaker, null=True, blank=True, default="b781ef92-670c-4e74-b584-49fec58e9989")

    @property
    def get_tags(self):
        return self.highlight_tags.all()

    def __str__(self):
        return self.id

    class Meta:
        ordering = ('id',)
