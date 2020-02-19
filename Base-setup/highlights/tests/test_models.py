from django.test import TestCase

from highlights.models import Video
from highlights.models import Highlights

class VideoHighlightsModelTest(TestCase):
    def setUp(self):
        # Set up non-modified objects used by all test methods
        super(VideoHighlightsModelTest, self).setUp()
        video = Video.objects.create(title='title', url='www.test.com', video_description = "description",comments = "comments")
        self.highlight_id = Highlights.objects.create(highlight_name='highlight_name',highlight_script = 'highlight_script',comments = 'comments',  startTime = 0.0, endTime = 1.0, videoID=video).id

    def test_video_title_label(self):
        video = Video.objects.get(id=1)
        field_label = Video._meta.get_field('title').verbose_name
        self.assertEquals(field_label, 'title')

    def test_video_url_label(self):
        video = Video.objects.get(id=1)
        field_label = video.url
        self.assertEquals(field_label, 'www.test.com')

    def test_video_description_label(self):
        video = Video.objects.get(id=1)
        field_label = video.video_description
        self.assertEquals(field_label, 'description')

    def test_video_comments_label(self):
        video = Video.objects.get(id=1)
        field_label = Video._meta.get_field('comments').verbose_name
        self.assertEquals(field_label, 'comments')

    def test_video_title_max_length(self):
        video = Video.objects.get(id=1)
        max_length = Video._meta.get_field('title').max_length
        self.assertEquals(max_length, 400)

    def test_highlight_name_label(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        field_label = highlight.highlight_name
        self.assertEquals(field_label, 'highlight_name')

    def test_highlight_comments_label(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        field_label = highlight.comments
        self.assertEquals(field_label, 'comments')

    def test_highlight_startTime_value(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        field_value = highlight.startTime
        self.assertEquals(field_value, 0.0)

    def test_highlight_endTime_value(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        field_value = highlight.endTime
        self.assertEquals(field_value, 1.0)

    def test_highlight_video_ID(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        video = highlight.videoID
        self.assertEquals(video.id, 1)