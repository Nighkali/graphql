import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nighkali/graphql';
import { ApolloGatewayDriver } from '../../../lib/drivers';
import { supergraphSdl } from './supergraph-sdl';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloGatewayDriver,
      gateway: {
        includeStacktraceInErrorResponses: false,
        supergraphSdl,
      },
    }),
  ],
})
export class AppModule {}
