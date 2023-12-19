import { Query, Resolver } from '@nighkali/graphql';

@Resolver()
export class DogsResolver {
  @Query((returns) => String)
  getAnimalName(): string {
    return 'dog';
  }
}
