import graphene
import highlights.schema
# from onlineshop_project.scheme import schema


class Query(highlights.schema.Query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass


class Mutation(highlights.schema.Mutations, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
