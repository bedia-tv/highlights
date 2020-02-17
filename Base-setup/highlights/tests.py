from django.test import TestCase
# from django.urls import reverse
from graphene.test import Client
from graphene import Schema
from highlights.schema import Query


class VideosQueryTest(TestCase):

    def setUp(self):
        schema = Schema(query=Query)
        self.client = Client(schema=schema)
    
    def test_videos_query(self):
        executed = self.client.execute('''
            {
                videos {
                    id
                }
            }
        ''')
        assert executed == {
            'data': {
                'videos': []
            }
        }

# from highlights.models import Post

# class PostModelTest(TestCase):

#     def setUp(self):
#         Post.objects.create(text='just a test')

#     def test_text_content(self):
#         post=Post.objects.get(id=1)
#         expected_object_name = f'{post.text}'
#         self.assertEqual(expected_object_name, 'just a test')

# class HomePageViewTest(TestCase):

#     def setUp(self):
#         Post.objects.create(text='this is another test')

#     def test_view_url_exists_at_proper_location(self):
#         resp = self.client.get('/')
#         self.assertEqual(resp.status_code, 200)

#     def test_view_url_by_name(self):
#         resp = self.client.get(reverse('home'))
#         self.assertEqual(resp.status_code, 200)

#     def test_view_uses_correct_template(self):
#         resp = self.client.get(reverse('home'))
#         self.assertEqual(resp.status_code, 200)
#         self.assertTemplateUsed(resp, 'home.html')

# class SimpleLogicTest(TestCase):

#     def setUp(self):
#         self.initial = 0
    
#     def test_addition(self):
#         self.assertEqual(self.initial + 1, 1)

#     def test_multiplication(self):
#         self.assertEqual(self.initial * 1, 1)
