from django.test import TestCase

from highlights.models import Video
from highlights.models import Highlights
import datetime

class HighlightsModelTest(TestCase):
    def setUp(self):
        super(HighlightsModelTest, self).setUp()
        video = Video.objects.create(title='title', url='www.test.com', video_description = "description",comments = "comments")

        self.highlight_id = Highlights.objects.create(
            highlight_name='highlight_name',
            highlight_script = 'highlight_script',
            comments = 'comments',  
            startTime = 0.0, 
            endTime = 1.0, 
            videoID=video
        )

    def testHighlightNameLabel(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        field_label = highlight.highlight_name
        self.assertEquals(field_label, 'highlight_name')

    def testHighlightCommentsLabel(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        field_label = highlight.comments
        self.assertEquals(field_label, 'comments')

    def testHighlightStartTimeValue(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        field_value = highlight.startTime
        self.assertEquals(field_value, 0)

    def testHighlightEndTimeValue(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        field_value = highlight.endTime
        self.assertEquals(field_value, 1)

    def testHighlightVideoID(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        video = highlight.videoID
        self.assertEquals(video.id, 1)

class VideoModelTest(TestCase):
    def setUp(self):
        super(VideoModelTest, self).setUp()
        video = Video.objects.create(title='title', url='www.test.com', video_description = "description",comments = "comments")

    def testVideoUrlLabel(self):
        video = Video.objects.get(id=1)
        field_label = video.url
        self.assertEquals(field_label, 'www.test.com')

    def testVideoDescriptionLabel(self):
        video = Video.objects.get(id=1)
        field_label = video.video_description
        self.assertEquals(field_label, 'description')