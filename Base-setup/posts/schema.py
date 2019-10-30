import graphene
from graphene_django.types import DjangoObjectType
from .models import Video, Hilights


class VideoType(DjangoObjectType):
    class Meta:
        model = Video

class HilightsType(DjangoObjectType):
    class Meta:
        model = Hilights

class VideoInput(graphene.inputObjectType):
    url = graphene.String(required = True)
    title = graphene.String(required = True)
    tags = graphene.String(required = False)
    thumbnail = graphene.String(required = True)
    comments = graphene.String(required = False)

class CreateVideo(graphene.Mutation):
    class Arguments:
        video_data = VideoInput(required=True)

    ok = graphene.Boolean()
    video = graphene.Field

class HilightsInput(graphene.inputObjectType):
    url = graphene.String(required = True)
    title = graphene.String(required = True)
    tags = graphene.String(required = False)
    thumbnail = graphene.String(required = True)
    comments = graphene.String(required = False)
    startTime = graphene.String(required = True)
    endTime = graphene.String(required = True)
    videoID = graphene.String(required = True)


class CreateHilights(graphene.Mutation):
    class Arguments:
        hilights_data = HilightsInput(required = True)

    ok = graphene.Boolean()
    hilights = graphene.Field


class Query(graphene.ObjectType):
    pass

class Mutation(graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)