import { Logger, UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Query,
  Resolver,
  Subscription,
} from '@nighkali/graphql';
import { PubSub } from 'mercurius';
import { AuthGuard } from './auth.guard';
import { Notification } from './notification';

@Resolver(() => Notification)
export class NotificationResolver {
  private readonly logger = new Logger(NotificationResolver.name);

  @Query(() => Notification)
  getNotification() {
    return {
      message: 'Hello!',
    };
  }

  @UseGuards(AuthGuard)
  @Subscription(() => Notification, {
    filter(payload, variables, context) {
      return (
        context.user === payload.newNotification.recipient &&
        payload.newNotification.id === variables.id
      );
    },
  })
  newNotification(
    @Args('id', {
      nullable: false,
    })
    id: string,
    @Context('pubsub') pubSub: PubSub,
  ) {
    this.logger.log('User subscribed to newNotification');
    return pubSub.subscribe('newNotification');
  }
}
