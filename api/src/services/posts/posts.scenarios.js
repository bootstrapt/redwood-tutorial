export const standard = defineScenario({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        user: {
          create: {
            name: 'John Doe',
            email: 'john@example.com',
            hashedPassword: 'dummyHashedPassword123',
            salt: 'dummysalt',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        user: {
          connect: {
            email: 'john@example.com',
          },
        },
      },
    },
  },
})
