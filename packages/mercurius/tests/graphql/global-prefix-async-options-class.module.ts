import { Module } from '@nestjs/common';
import { GqlOptionsFactory, GraphQLModule } from '@nighkali/graphql';
import { join } from 'path';
import { MercuriusDriverConfig } from '../../lib';
import { MercuriusDriver } from '../../lib/drivers';
import { CatsModule } from './cats/cats.module';

class ConfigService implements GqlOptionsFactory {
  createGqlOptions(): MercuriusDriverConfig {
    return {
      typePaths: [join(__dirname, '**', '*.graphql')],
      useGlobalPrefix: true,
    };
  }
}

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRootAsync<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      useClass: ConfigService,
    }),
  ],
})
export class GlobalPrefixAsyncOptionsClassModule {}
