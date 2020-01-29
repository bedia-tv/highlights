import graphene
from graphene import String
from graphene_django.types import DjangoObjectType
from graphene.types import ObjectType

from .scraper import Extractor
from .models import Video, Highlights

from graphene_django.converter import convert_django_field
from taggit.managers import TaggableManager


# convert TaggableManager to string representation
@convert_django_field.register(TaggableManager)
def convert_field_to_string(field, registry=None):
    return String(description=field.help_text, required=not field.null)


class VideoType(DjangoObjectType):
    class Meta:
        model = Video


class HighlightType(DjangoObjectType):
    class Meta:
        model = Highlights


# Create a Query type
class Query(ObjectType):
    video = graphene.Field(VideoType, url=graphene.String())
    highlight = graphene.Field(HighlightType, highlight_id=graphene.Int())
    videos = graphene.List(VideoType)
    highlights = graphene.List(HighlightType)

    def resolve_video(self, info, **kwargs):
        url = kwargs.get("url")
        entry = Video.objects.filter(url=url)
        print((entry))

        if len(entry) < 1:
            raw_data = Extractor(url)
            title = raw_data['Title']
            URL = kwargs.get('url')
            tags = raw_data['Tags']
            thumbnail = raw_data['Thumbnail']
            

            p = Video(
                title=title, url=URL, tags=tags, thumbnail=thumbnail)

            # video_instance = Video(
            #     url=url,
            #     title=title,
            #     exists=True,
            #     thumbnail=thumbnail,
            #     tags = tags
            #     )

            # video_instance.save()
            
            return p
            

        return entry[0]

    def resolve_highlight(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Highlights.objects.get(pk=id)

        return None

    def resolve_videos(self, info, **kwargs):
        string = kwargs.get("url", '')
        return Video.objects.all()

    def resolve_highlights(self, info, **kwargs):
        return Highlights.objects.all()


# Create Input Object Types
class VideoInput(graphene.InputObjectType):
    url = graphene.String()
    title = graphene.String()
    thumbnail = graphene.String()


class HighlightInput(graphene.InputObjectType):
    url = graphene.String()
    tags = graphene.String()
    comments = graphene.String()
    startTime = graphene.String()
    endTime = graphene.String()
    highlight_name = graphene.String()


class CreateVideo(graphene.Mutation):
    class Arguments:
        input = VideoInput(required=True)

    ok = graphene.Boolean()
    video = graphene.Field(VideoType)

    @staticmethod
    def mutate(root, info, input=None):
        ok = True
        video_instance = Video(
            url=input.url,
            title=input.title,
            exists=True,
            # thumbnail=input.thumbnail
        )
        video_instance.save()
        return CreateVideo(ok=ok, video=video_instance)

'''
class UpdateVideo(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        input = VideoInput(required=True)

    ok = graphene.Boolean()
    video = graphene.Field(VideoType)

    @staticmethod
    def mutate(root, info, id, input=None):
        ok = False
        video_instance = Video.objects.get(input.url)

        if video_instance:
            ok = True
            video_instance.title = input.title
            video_instance.thumbnail = input.thumbnail
            video_instance.save()
            return UpdateVideo(ok=ok, video=video_instance)
        return UpdateVideo(ok=ok, video=None)

'''
# Create mutations for movies
class CreateHighlight(graphene.Mutation):
    class Arguments:
        input = HighlightInput(required=True)

    ok = graphene.Boolean()
    highlight = graphene.Field(HighlightType)

    @staticmethod
    def mutate(root, info, input=None):
        url = input.url
        ok = True
        tags = input.tags
        comments = input.comments
        startTime = input.startTime
        endTime = input.endTime
        highlight_name = input.highlight_name
        entry = Video.objects.filter(url=url)

        if len(entry) == 1:
            videoID = entry[0]
        else:
            #TODO: create a video instance here
            return False
        highlight_instance = Highlights(
            tags=tags,
            comments=comments,
            startTime=startTime,
            endTime=endTime,
            highlight_name = highlight_name,
            videoID = videoID
        )
        highlight_instance.save()
        return CreateHighlight(ok=ok, highlight=highlight_instance)


class UpdateHighlight(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        input = HighlightInput(required=True)

    ok = graphene.Boolean()
    Highlight = graphene.Field(HighlightType)

    #tags, title, comments

    @staticmethod
    def mutate(root, info, id, input=None):
        ok = False
        highlight_instance = Highlights.objects.get(pk=id)
        if highlight_instance:
            ok = True
            highlight_instance.tags = input.tags
            highlight_instance.comments = input.comments
            highlight_instance.startTime = input.startTime
            highlight_instance.endTime = input.endTime
            highlight_instance.videoID = input.videoID
            highlight_instance.save()
            return UpdateHighlight(ok=ok, highlights=highlight_instance)
        return UpdateHighlight(ok=ok, highlight=None)


class Mutation(graphene.ObjectType):
    create_video = CreateVideo.Field()
    #update_video = UpdateVideo.Field()
    create_highlight = CreateHighlight.Field()
    update_highlight = UpdateHighlight.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)


#check url, start time and end time