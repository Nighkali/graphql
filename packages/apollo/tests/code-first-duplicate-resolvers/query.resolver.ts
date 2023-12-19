import { Args, Mutation, Query, Resolver } from '@nighkali/graphql';

@Resolver()
export class QueryResolver {
  @Query(() => Boolean, { name: '_' })
  test() {
    return true;
  }
}
