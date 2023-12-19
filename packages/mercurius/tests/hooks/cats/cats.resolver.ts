import { Query, Resolver } from '@nighkali/graphql';

@Resolver()
export class CatsResolver {
  @Query((returns) => String)
  public getAnimalName(): string {
    return 'cat';
  }
}
