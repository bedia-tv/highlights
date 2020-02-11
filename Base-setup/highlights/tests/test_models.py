from django.test import TestCase

from highlights.models import Video
from highlights.models import Highlights

class VideoHighlightsModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Video.objects.create(title='title', url='www.test.com', video_description = "description",comments = "comments")
        Highlights.objects.create(highlight_name='highlight_name',highlight_script = 'highlight_script',comments = 'comments',  startTime = 0.0, endTime = 1.0, videoID=1 )

    def test_video_title_label(self):
        video = Video.objects.get(id=1)
        field_label = Video._meta.get_field('title').verbose_name
        self.assertEquals(field_label, 'title')

    def test_video_url_label(self):
        video = Video.objects.get(id=1)
        field_label = Video._meta.get_field('url').verbose_name
        self.assertEquals(field_label, 'www.test.com')

    def test_video_description_label(self):
        video = Video.objects.get(id=1)
        field_label = Video._meta.get_field('video_description').verbose_name
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
        highlight = Highlights.objects.get(id=1)
        field_label = Highlights._meta.get_field('highlight_name').verbose_name
        self.assertEquals(field_label, 'highlight_name')

    def test_highlight_script_label(self):
        highlight = Highlights.objects.get(id=1)
        field_label = Highlights._meta.get_field('highlight_script').verbose_name
        self.assertEquals(field_label, 'highlight_script')

    def test_highlight_comments_label(self):
        highlight = Highlights.objects.get(id=1)
        field_label = Highlights._meta.get_field('comments').verbose_name
        self.assertEquals(field_label, 'comments')

    def test_highlight_startTime_value(self):
        obj = Highlights.objects.get(id=1)
        field_obj = Highlights._meta.get_field('startTime')
        field_value = field_obj.value_from_object(obj)
        self.assertEquals(field_value, 0.0)

    def test_highlight_endTime_value(self):
        obj = Highlights.objects.get(id=1)
        field_obj = Highlights._meta.get_field('endTime')
        field_value = field_obj.value_from_object(obj)
        self.assertEquals(field_value, 1.0)

    def test_highlight_video_ID(self):
        obj = Highlights.objects.get(id=1)
        field_obj = Highlights._meta.get_field('videoID')
        video_ID = field_obj.value_from_object(obj)
        self.assertEquals(video_ID, 1)

    def test_highlight_name_max_length(self):
        highlight = Highlights.objects.get(id=1)
        max_length = Highlights._meta.get_field('highlight_name').max_length
        self.assertEquals(max_length, 128)

    def test_highlight_script_max_length(self):
        highlight = Highlights.objects.get(id=1)
        max_length = Highlights._meta.get_field('highlight_script').max_length
        self.assertEquals(max_length, 1000)

    


