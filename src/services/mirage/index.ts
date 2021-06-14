import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        name() {
          return faker.name.findName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(20);
        },
      }),
    },
    seeds(server) {
      server.createList("user", 20);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;
      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;
        const total = schema.all("user").length;

        const pageStar = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStar + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStar,
          pageEnd
        );

        return new Response(
          200,
          {
            "x-total-count": String(total),
          },
          { users }
        );
      });
      this.get("/users/:id");
      this.post("/users");
      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
