import { ApolloServer } from '@apollo/server';
import { INestApplication } from '@nestjs/common';
import { GraphQLModule } from '@nighkali/graphql';
import { Test } from '@nestjs/testing';
import { gql } from 'graphql-tag';
import { ApolloFederationDriver } from '../../lib';
import { ApplicationModule } from '../code-first-federation/app.module';
import { expectSingleResult } from '../utils/assertion-utils';

describe('Code-first - Federation', () => {
  let app: INestApplication;
  let apolloClient: ApolloServer;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [ApplicationModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
    const graphqlModule =
      app.get<GraphQLModule<ApolloFederationDriver>>(GraphQLModule);
    apolloClient = graphqlModule.graphQlAdapter?.instance;
  });

  it(`should return query result`, async () => {
    const response = await apolloClient.executeOperation({
      query: gql`
        {
          _service {
            sdl
          }
        }
      `,
    });
    expectSingleResult(response).toMatchSnapshot();
  });

  it('should return the search result', async () => {
    const response = await apolloClient.executeOperation({
      query: gql`
        {
          search {
            ... on Post {
              title
            }
            ... on User {
              id
            }
            __typename
          }
        }
      `,
    });
    expectSingleResult(response).toEqual({
      search: [
        {
          id: '1',
          __typename: 'User',
        },
        {
          title: 'lorem ipsum',
          __typename: 'Post',
        },
      ],
    });
  });

  it(`should return query result`, async () => {
    const response = await apolloClient.executeOperation({
      query: gql`
        {
          recipe {
            id
            title
            ... on Recipe {
              description
            }
          }
        }
      `,
    });
    expectSingleResult(response).toEqual({
      recipe: {
        id: '1',
        title: 'Recipe',
        description: 'Interface description',
      },
    });
  });

  afterEach(async () => {
    await app.close();
  });
});
