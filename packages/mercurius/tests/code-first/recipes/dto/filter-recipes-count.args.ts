import { ArgsType, Field } from '@nighkali/graphql';
@ArgsType()
export class FilterRecipesCountArgs {
  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  status?: string;
}
