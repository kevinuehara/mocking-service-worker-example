// src/mocks/handlers.js
import { rest } from "msw";
import { faker } from "@faker-js/faker";

export const handlers = [
  rest.get("/users", (_, res, ctx) => {
    const mockUsers = new Array(3).fill(null).map(() => ({
      id: faker.number.int(),
      userName: faker.internet.userName(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    }));

    return res(ctx.status(200), ctx.json(mockUsers));
  }),
];
