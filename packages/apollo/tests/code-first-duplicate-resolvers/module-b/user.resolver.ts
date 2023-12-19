import { Args, Mutation, Resolver } from '@nighkali/graphql';

@Resolver()
export class UserResolver {
  @Mutation(() => String, { name: 'moduleBLogin' })
  login(@Args('username') username: string) {
    return username;
  }
}
