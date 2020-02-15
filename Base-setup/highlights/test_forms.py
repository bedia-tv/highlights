from django.test import TestCase
from graphene.test import Client
from graphene import Schema
from highlights.schema import Query, Mutation
from django.test.utils import override_settings

class VideosQueryTest(TestCase):
    @override_settings(DEBUG=True)
    def setUp(self):
        querySchema = Schema(query=Query)
        self.queryClient = Client(schema = querySchema)
        mutationSchema = Schema(mutation = Mutation)
        self.mutationClient = Client(schema = mutationSchema)

    def test_create_video(self):
        executed = self.mutationClient.execute('''
        mutation {
            createVideo(input:{
                url: "www.example.com"
                title: "title"
            }){
                ok
                video{
                    url
                    title
                }
            }  
        }
        ''')
        assert executed == {
            "data": {
                "createVideo": {
                "ok": True,
                "video": {
                        "url": "www.example.com",
                        "title": "title",
                        }
                }
            }
        }

    

    def test_get_video(self):
        mutation = self.mutationClient.execute('''
        mutation {
            createVideo(input:{
                url: "www.example.com"
                title: "title"
            }){
                ok
            }  
        }
        ''')
        if mutation["data"]["createVideo"]["ok"]:
            executed = self.queryClient.execute('''
            query {
                video(url:"www.example.com"){
                    url                        
                    title
                    thumbnail
                    videoDescription
                    comments
                }
            }
            ''')  
            assert executed == {
                "data": {
                "video": {
                    "url": "www.example.com",
                    "title": "title",
                    "thumbnail": "",                        
                    "videoDescription": "",
                    "comments": ""
                    }
                }
            }

        else:
            raise Exception("Mutation of createVideo failed!")

  '''
  
  mutation y{
            createHighlight(input:{
                highlightName: "highlightName"
                url: "www.example.com"
              	startTime: "12.30"
              	endTime: "14.53"
              	
            }){
                ok
                highlight{
                    highlightName
                  	startTime
                  	endTime
                  	comments
                }
            }  
        }'''


