import { Args, Mutation, Resolver } from '@nighkali/graphql';

@Resolver()
export class UserResolver {
  @Mutation(() => String, { name: 'moduleALogin' })
  login(@Args('code') code: string) {
    return code;
  }
}
