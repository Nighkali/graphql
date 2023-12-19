import { Field, ID, ObjectType } from '@nighkali/graphql';
@ObjectType()
export class Ingredient {
  @Field((type) => ID)
  id: string;

  @Field({
    defaultValue: 'default',
    deprecationReason: 'is deprecated',
    description: 'ingredient name',
    nullable: true,
  })
  name: string;

  constructor(ingredient: Partial<Ingredient>) {
    Object.assign(this, ingredient);
  }
}
