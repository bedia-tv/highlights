import graphene
from graphene import String
from graphene_django.types import DjangoObjectType
from graphene.types import ObjectType
from graphene_django.forms.mutation import DjangoFormMutation, DjangoModelFormMutation

from .scraper import Extractor
from .models import Video, Highlights
from .forms import VideoForm

from graphene_django.converter import convert_django_field
from taggit.managers import TaggableManager

# convert TaggableManager to string representation
@convert_django_field.register(TaggableManager)
def convert_field_to_String(field, registry=None):
    return String(description=field.help_text, required=not field.null)

# Video type for query
class VideoType(DjangoObjectType):
    tag_list = graphene.List(graphene.String)
    class Meta:
        model = Video
        exclude = ('tags',)

    def resolve_tag_list(self, parent):
        return self.get_tags


# Highlight type for query
class HighlightType(DjangoObjectType):
    tag_list = graphene.List(graphene.String)
    class Meta:
        model = Highlights
        exclude = ('tags',)

    def resolve_tag_list(self, parent):
        return self.get_tags

# Define GraphQL query with the preiously defined types
class Query(ObjectType):
    video = graphene.Field(VideoType, url=graphene.String())
    highlight = graphene.Field(HighlightType, id=graphene.String())
    videos = graphene.List(VideoType)
    highlights = graphene.List(HighlightType)

    def resolve_video(self, info, **kwargs):
        url = kwargs.get("url")
        raw_data = Extractor(url)
        title = raw_data['Title']
        URL = kwargs.get('url')
        tags = raw_data['Tags']
        thumbnail = raw_data['Thumbnail']

        return Video(
            title=title, url=URL, tags=tags, thumbnail=thumbnail
        )

    def resolve_highlight(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            return Highlights.objects.get(pk=id)

        return None

    def resolve_videos(self, info, **kwargs):
        return Video.objects.all()

    def resolve_highlights(self, info, **kwargs):
        return Highlights.objects.all()


# Create Input Object Types
class VideoInput(graphene.InputObjectType):
    url = graphene.String()
    title = graphene.String()
    thumbnail = graphene.String()
    tags = graphene.List(graphene.String)


class HighlightInput(graphene.InputObjectType):
    url = graphene.String()
    video_title = graphene.String()
    tags = graphene.List(graphene.String)
    comments = graphene.String()
    startTime = graphene.Float()
    endTime = graphene.Float()
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
            thumbnail=input.thumbnail,
            tags=input.tags,
        )
        video_instance.save()
        return CreateVideo(ok=ok, video=video_instance)


# Create mutations for highlights
class CreateHighlight(graphene.Mutation):
    class Arguments:
        input = HighlightInput(required=True)

    ok = graphene.Boolean()
    highlight = graphene.Field(HighlightType)

    @staticmethod
    def mutate(root, info, input=None):
        url = input.url
        ok = True
        video_title = input.video_title
        tags = input.tags
        comments = input.comments
        startTime = input.startTime
        endTime = input.endTime
        highlight_name = input.highlight_name
        videoID = Video(
            url=url,
            title=video_title,
            tags=tags,
        )
        videoID.save()
        highlight_instance = Highlights(
            comments=comments,
            startTime=startTime,
            endTime=endTime,
            highlight_name=highlight_name,
            video_title=video_title,
            videoID=videoID,
            tags=tags
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
            highlight_instance.video_title = input.video_title
            highlight_instance.save()
            return UpdateHighlight(ok=ok, highlights=highlight_instance)
        return UpdateHighlight(ok=ok, highlight=None)


class Mutation(graphene.ObjectType):
    create_video = CreateVideo.Field()
    create_highlight = CreateHighlight.Field()
    update_highlight = UpdateHighlight.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
