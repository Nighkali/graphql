import { Resolver, Query, Context } from '@nighkali/graphql';

@Resolver()
export class CustomContextResolver {
  @Query(() => String)
  fooFromContext(@Context() ctx: Record<string, unknown>) {
    return ctx.foo;
  }
}
