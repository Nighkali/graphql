import { Query, Resolver } from '@nighkali/graphql';

@Resolver()
export class CatsResolver {
  @Query((returns) => String)
  getAnimalName(): string {
    return 'cat';
  }
}
