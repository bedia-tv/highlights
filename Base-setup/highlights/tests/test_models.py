from django.test import TestCase

from highlights.models import Video
from highlights.models import Highlights
import datetime

video_payload = {
    "title": "「残酷な天使のテーゼ」MUSIC VIDEO（HDver.）/Zankoku na Tenshi no Te-ze“The Cruel Angel's Thesis”",
    "url": "https://www.youtube.com/watch?v=o6wtDPVkKqI",
    "tags": [
        "エヴァンゲリオン",
        "エヴァ",
        "EVA",
        "高橋洋子",
        "アニソン",
        "キングレコード",
        "残酷な天使のテーゼ",
        "魂のルフラン"
    ],
    "thumbnail": "https://i.ytimg.com/vi/o6wtDPVkKqI/maxresdefault.jpg"
}

class VideoModelTest(TestCase):
    def setUp(self):
        super(VideoModelTest, self).setUp()
        video = Video(**video_payload) 
        video.save()

    def testVideoConstruction(self):
        video = Video.objects.get(id=1)
        self.assertEquals(video.url, video_payload['url'])
        self.assertEquals(video.title, video_payload['title'])
        self.assertEquals(video.thumbnail, video_payload['thumbnail'])
        
    
    def testVideoTags(self):
        video = Video.objects.get(url=video_payload['url'])
        video.tags.add(*video_payload['tags'])
        self.assertEqual(sorted(video.get_tags), sorted(video_payload['tags']))


highlight_payload = {
    "video_title": "「残酷な天使のテーゼ」MUSIC VIDEO（HDver.）/Zankoku na Tenshi no Te-ze“The Cruel Angel's Thesis”",    	
    "highlight_name": "Evagelion Opening",
    "comments": "This is so cool.",
    "startTime": 0.04,
    "endTime": 1.03
}

class HighlightsModelTest(TestCase):
    def setUp(self):
        super(HighlightsModelTest, self).setUp()
        video = Video.objects.create(**video_payload)
        self.highlight_id = Highlights.objects.create(**highlight_payload, videoID=video)

    def testHighlightNameLabel(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        field_label = highlight.highlight_name
        self.assertEquals(field_label, highlight_payload['highlight_name'])

    def testHighlightCommentsLabel(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        field_label = highlight.comments
        self.assertEquals(field_label, highlight_payload['comments'])

    def testHighlightStartTimeValue(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        field_value = highlight.startTime
        self.assertEquals(field_value, highlight_payload['startTime'])

    def testHighlightEndTimeValue(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        field_value = highlight.endTime
        self.assertEquals(field_value, highlight_payload['endTime'])

    def testHighlightVideoID(self):
        highlight = Highlights.objects.get(id=self.highlight_id)
        video = highlight.videoID
        self.assertIsNotNone(video)

