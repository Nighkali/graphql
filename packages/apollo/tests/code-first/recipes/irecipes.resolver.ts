import { Args, ResolveField, Resolver } from '@nighkali/graphql';
import { IRecipe } from './models/recipe';

@Resolver((of) => IRecipe)
export class IRecipesResolver {
  @ResolveField('interfaceResolver', () => Boolean)
  interfaceResolver(
    @Args('arg', { type: () => Number, nullable: true }) arg: number,
  ) {
    return true;
  }
}
