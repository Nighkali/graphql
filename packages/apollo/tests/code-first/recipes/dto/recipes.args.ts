import { ArgsType, Field, Int } from '@nighkali/graphql';
import { Max, Min } from 'class-validator';
@ArgsType()
export class RecipesArgs {
  @Field((type) => Int, {
    description: 'number of items to skip',
    nullable: true,
  })
  @Min(0)
  skip: number = 0;

  @Field((type) => Int, { nullable: true })
  @Min(1)
  @Max(50)
  take: number = 25;
}
