import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  username(i) {
    return `User ${i}`;
  },
  email: 'evan@evan.com,',

  avatar() {
    return faker.internet.avatar();
  }
});
