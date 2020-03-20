from django.test import TestCase
from graphene.test import Client
from graphene import Schema
from highlights.schema import schema
from django.test.utils import override_settings
from highlights.models import Video, Highlights

create_video_payload = {
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


class VideosTest(TestCase):
    def setUp(self):
        self.client = Client(schema=schema)

    def testCreateVideo(self):
        executed = self.client.execute(
            '''
            mutation createVideo($videoInput: VideoInput!) {
                createVideo(input: $videoInput) {
                    video {
                        id
                        title
                        url
                    }
                }
            }
            ''',
            variables={
                'videoInput': create_video_payload
            }
        )
        video_id = executed['data']['createVideo']['video']['id']
        self.assertIsNotNone(Video.objects.get(id=video_id))

    def testGetVideos(self):
        Video.objects.create(**create_video_payload)
        executed = self.client.execute(
            '''
            query {
                videos {
                    id
                    title
                    url
                }
            }
            '''
        )
        self.assertIsNotNone(Video.objects.all())


create_highlight_payload = {
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
    "videoTitle": "「残酷な天使のテーゼ」MUSIC VIDEO（HDver.）/Zankoku na Tenshi no Te-ze“The Cruel Angel's Thesis”",
    "highlightName": "Evagelion Opening",
    "comments": "This is so cool.",
    "startTime": 0.04,
    "endTime": 1.03
}

highlight_model_payload = {
    "video_title": "「残酷な天使のテーゼ」MUSIC VIDEO（HDver.）/Zankoku na Tenshi no Te-ze“The Cruel Angel's Thesis”",
    "highlight_name": "Evagelion Opening",
    "comments": "This is so cool.",
    "startTime": 0.04,
    "endTime": 1.03
}


class HighlightsTest(TestCase):
    def setUp(self):
        self.client = Client(schema=schema)

    def testGetHighlights(self):

        Highlights.objects.create(
            **highlight_model_payload, videoID=Video.objects.create(**create_video_payload))
        exeucted = self.client.execute(
            '''
            query  {
                highlights {
                    id
                }
            }
            '''
        )
        self.assertIsNotNone(Highlights.objects.all())

    def testCreateHighlight(self):
        executed = self.client.execute(
            '''
            mutation createHighlight($highlightInput: HighlightInput!) {
                createHighlight(input: $highlightInput) {
                    ok
                    highlight {
                        id
                        videoTitle
                        highlightName
                        comments
                        startTime
                        endTime
                    }
                }
            }
            ''',
            variables={
                'highlightInput': create_highlight_payload
            }
        )
        highlight_id = executed['data']['createHighlight']['highlight']['id']
        self.assertIsNotNone(Highlights.objects.get(id=highlight_id))
