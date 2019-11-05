from django.db import models

# Create your models here.
class Video(models.Model):
    url = models.URLField()
    title = models.TextField()
    tags = models.TextField(blank=True)
    thumbnail = models.TextField(blank=True)
    comments = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)

class Highlights(models.Model):
    url = models.URLField()
    title = models.TextField()
    tags = models.TextField(blank=True)
    thumbnail = models.TextField(blank=True)
    comments = models.TextField()
    startTime = models.IntegerField()
    endTime = models.IntegerField()
    #videoID = models.ForeignKey(Video)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)
