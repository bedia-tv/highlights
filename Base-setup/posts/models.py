from django.db import models


class Video(models.Model):
    url = models.URLField()
    title = models.TextField()
    tags = models.TextField(blank=True)
    thumbnail = models.TextField(blank=True)
    comments = models.TextField()



    def __str__(self):
        return self.text[:50]


class Hilights(models.Model):
    url = models.URLField()
    title = models.TextField()
    tags = models.TextField(blank=True)
    thumbnail = models.TextField(blank=True)
    comments = models.TextField()
    startTime = models.IntegerField()
    endTime = models.IntegerField()
    videoID = models.ForeignKey(Video)