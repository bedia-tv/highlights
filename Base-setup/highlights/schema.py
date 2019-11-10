import graphene
from graphene_django.types import DjangoObjectType, ObjectType
from .models import Video, Highlights
from .scraper import Extractor

a = Extractor("https://www.youtube.com/watch?v=Xh-BgZuOngI")
# TODO: Use all of the fields
# TODO:

class HighlightsType(DjangoObjectType):
    class Meta:
        model = Highlights


'''
# Create a Query type
class Query(ObjectType):
    video = graphene.Field(VideoType, id=graphene.String())
    Highlight = graphene.Field(HighlightsType, id=graphene.Int())
    videos = graphene.List(VideoType)
    Highlights = graphene.List(HighlightsType)

    def resolve_video(self, info, **kwargs)

        id = kwargs.get('id')

        if id is not None:
            return Video.objects.get(pk=id)

        return None

    def resolve_hilight(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Highlights.objects.get(pk=id)

        return None

    def resolve_videos(self, info, **kwargs): url in kwargs
        return Video.objects.all()

    def resolve_hilights(self, info, **kwargs):
        return Highlights.objects.all()


# Create Input Object Types
class VideoInput(graphene.InputObjectType):
    id = graphene.ID()
    url = graphene.String()
    title = graphene.String()
    tags = graphene.String()
    thumbnail = graphene.String()
    comments = graphene.String()


class HighlightsInput(graphene.InputObjectType):
    id = graphene.ID()
    tags = graphene.String()
    comments = graphene.String()
    startTime = graphene.String()
    endTime = graphene.String()
    videoID = graphene.String()


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
            tags=input.tags,
            thumbnail=input.thumbnail,
            comments=input.comments
        )
        video_instance.save()
        return CreateVideo(ok=ok, video=video_instance)


class UpdateVideo(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        input = VideoInput(required=True)

    ok = graphene.Boolean()
    video = graphene.Field(VideoType)

    @staticmethod
    def mutate(root, info, id, input=None):
        ok = False
        video_instance = Video.objects.get(pk=id)
        if video_instance:
            ok = True
            video_instance.title = input.title
            video_instance.url = input.url
            video_instance.tags = input.tags
            video_instance.thumbnail = input.thumbnail
            video_instance.comments = input.comments
            video_instance.save()
            return UpdateVideo(ok=ok, video=video_instance)
        return UpdateVideo(ok=ok, video=None)


# Create mutations for movies
class CreateHilights(graphene.Mutation):
    class Arguments:
        input = HighlightsInput(required=True)

    ok = graphene.Boolean()
    Highlights = graphene.Field(HighlightsType)

    @staticmethod
    def mutate(root, info, input=None):
        # actors = []
        # for movie in input.actors:
        #  actor = Actor.objects.get(pk=actor_input.id)
        #  if actor is None:
        #    return CreateMovie(ok=False, movie=None)
        #  actors.append(actor)
        ok = True
        highlights_instance = Highlights(
            tags=input.tags,
            comments=input.comments,
            startTime=input.startTime,
            endTime=input.endTime,
            # videoID = search how to insert foreign key
        )
        highlights_instance.save()
        return CreateHilights(ok=ok, highlights=highlights_instance)


class UpdateHighLights(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        input = HighlightsInput(required=True)

    ok = graphene.Boolean()
    Highlights = graphene.Field(HighlightsType)

    @staticmethod
    def mutate(root, info, id, input=None):
        ok = False
        highlights_instance = Highlights.objects.get(pk=id)
        if highlights_instance:
            ok = True
            highlights_instance.tags = input.tags
            highlights_instance.comments = input.comments
            highlights_instance.startTime = input.startTime
            highlights_instance.endTime = input.endTime
            highlights_instance.videoID = input.videoID
            highlights_instance.save()
            return UpdateHighLights(ok=ok, highlights=highlights_instance)
        return UpdateHighLights(ok=ok, highlights=None)

'''
class VideoType(DjangoObjectType):
    class Meta:
        model = Video


class videoInput(graphene.InputObjectType):
    id = graphene.ID()
    url = graphene.String()
    title = graphene.String()
    tags = graphene.String()
    thumbnail = graphene.String()
    comments = graphene.String()


class Query(ObjectType):
    video = graphene.Field(VideoType, url=graphene.String())
    # Highlight = graphene.Field(HighlightsType, id=graphene.Int())
    #videos = graphene.List(VideoType, title=graphene.String())

    # Highlights = graphene.List(HighlightsType)

    def resolve_video(self, info, **kwargs):
        url = kwargs.get("url")

        if url is not None:
            raw_data = Extractor(url)
            title = raw_data['Title']
            URL = kwargs.get('url')
            tags = raw_data['Tags']
            thumbnail = raw_data['Thumbnail']
            if tags is not None:
                p, created = Video.objects.get_or_create(title=title,url=URL,tags=tags,thumbnail=thumbnail)
                return p
            p, created = Video.objects.get_or_create(title=title, url=URL, thumbnail=thumbnail)
            return p

        return None




schema = graphene.Schema(query=Query)

#schema = graphene.Schema(query=Query, mutation=Mutation)
