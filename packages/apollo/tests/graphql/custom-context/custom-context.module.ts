import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nighkali/graphql';
import { ApolloDriverConfig } from '../../../lib';
import { ApolloDriver } from '../../../lib/drivers';
import { CustomContextResolver } from './custom-context.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      context: (request) => ({
        foo: 'bar',
        request,
      }),
    }),
  ],
  providers: [CustomContextResolver],
})
export class CustomContextModule {}
