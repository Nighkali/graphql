import { Args, Query, Resolver } from '@nighkali/graphql';
import { Direction } from '../enums/direction.enum';

@Resolver()
export class DirectionsResolver {
  @Query((returns) => Direction)
  move(
    @Args({ name: 'direction', type: () => Direction })
    direction: Direction,
  ): Direction {
    return direction;
  }
}
