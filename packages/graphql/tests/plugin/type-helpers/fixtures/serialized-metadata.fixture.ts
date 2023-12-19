export const SERIALIZED_METADATA = {
  '@nighkali/graphql': {
    models: [
      [
        import('./base-type.fixture'),
        {
          BaseType: {
            meta: {
              type: () => String,
            },
          },
        },
      ],
      [
        import('./create-user-dto.fixture'),
        {
          CreateUserDto: {
            active: {
              type: () => Boolean,
            },
          },
        },
      ],
    ],
  },
}