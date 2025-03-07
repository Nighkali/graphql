import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nighkali/graphql';
import { ApolloServerPluginInlineTraceDisabled } from '@apollo/server/plugin/disabled';
import { join } from 'path';
import { ApolloDriverConfig } from '../../../lib';
import { ApolloFederationDriver } from '../../../lib/drivers';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: [join(__dirname, '**/*.graphql')],
      plugins: [ApolloServerPluginInlineTraceDisabled()],
    }),
    UsersModule,
  ],
})
export class AppModule {}
