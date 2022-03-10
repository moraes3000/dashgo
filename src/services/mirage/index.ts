import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs'
import faker from 'faker'

type User = {
  name: string;
  avatar: string;
  email: string;
  create_at: string;
}
export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({})
    },
    // forma de criar dados fictícios 
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1} `
          return `${faker.name.firstName()} User ${i + 1} `

        },
        email() {
          return faker.internet.email().toLocaleLowerCase()
        },
        create_at() {
          return faker.date.recent(10)
        },
        avatar() {
          // console.log(faker.image.imageUrl())
          return faker.image.imageUrl()
        }
      }
      )
    },
    // numero de usuários para ser criado
    seeds(server) {
      server.createList('user', 200)
    },

    //roda e função de crud
    routes() {
      //nome da roda para acessar
      this.namespace = 'api';
      //tempo de carregamento
      this.timing = 750;

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams

        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user'))
          .users.slice(pageStart, pageEnd)

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        )
      });
      this.get('/users/:id');
      this.post('/users');

      //zerando o nome pq pode usar a pasta api do next para outra coisa
      this.namespace = '';
      this.passthrough();

    }
  })

  return server;
}