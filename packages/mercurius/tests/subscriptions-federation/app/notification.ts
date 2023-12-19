import { Field, ObjectType } from '@nighkali/graphql';

@ObjectType()
export class Notification {
  @Field({
    nullable: false,
  })
  id: string;

  @Field({
    nullable: false,
  })
  recipient: string;

  @Field({
    nullable: false,
  })
  message: string;
}
