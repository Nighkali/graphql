import { Module } from '@nestjs/common';
import { DynamicModule } from '@nestjs/common/interfaces';
import { GraphQLModule } from '@nighkali/graphql';
import { GqlModuleOptions } from '@nighkali/graphql/interfaces/gql-module-options.interface';
import { ApolloDriverConfig } from '../../../lib';
import { ApolloDriver } from '../../../lib/drivers';
import { NotificationModule } from './notification.module';

export type AppModuleConfig = {
  context?: GqlModuleOptions['context'];
  subscriptions?: ApolloDriverConfig['subscriptions'];
};

@Module({})
export class AppModule {
  static forRoot(options?: AppModuleConfig): DynamicModule {
    return {
      module: AppModule,
      imports: [
        NotificationModule,
        GraphQLModule.forRoot({
          driver: ApolloDriver,
          includeStacktraceInErrorResponses: false,
          context: options?.context,
          autoSchemaFile: true,
          subscriptions: options?.subscriptions,
        }),
      ],
    };
  }
}
