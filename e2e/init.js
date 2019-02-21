const detox = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/jest/adapter');

jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await detox.init(config);
});

beforeEach(async () => {
  await adapter.beforeEach();
});

it('test 1', async () => {
  const flatlist = element(by.id('screen-1-flatlist'))
  
  await flatlist.scroll(300, 'down');
})

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});