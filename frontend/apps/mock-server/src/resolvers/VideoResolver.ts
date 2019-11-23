import {
    Resolver,
    Mutation,
    Arg,
    Int,
    Query,
    InputType,
    Field
  } from "type-graphql";
  import { Video } from "../entity/Video";
  
  @InputType()
  class VideoInput {
    @Field()
    title: string;
  
    @Field()
    url: string;
  }
  
  @InputType()
  class VideoUpdateInput {
    @Field(() => String, { nullable: true })
    title?: string;
  
    @Field(() => String, { nullable: true })
    url?: string;
  }
  
  @Resolver()
  export class VideoResolver {
    @Mutation(() => Video)
    async createMovie(@Arg("options", () => VideoInput) options: VideoInput) {
      const movie = await Video.create(options).save();
      return movie;
    }
  
    @Mutation(() => Boolean)
    async updateMovie(
      @Arg("id", () => Int) id: number,
      @Arg("input", () => VideoUpdateInput) input: VideoUpdateInput
    ) {
      await Video.update({ id }, input);
      return true;
    }
  
    @Mutation(() => Boolean)
    async deleteMovie(@Arg("id", () => Int) id: number) {
      await Video.delete({ id });
      return true;
    }
  
    @Query(() => [Video])
    getVideo(
        @Arg("url", () => String) url: string
    ) {
      return Video.find({ url });
    }
  }