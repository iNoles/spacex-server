import {createApp} from './server';

async function main() {
  const app = await createApp();
  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
}

if (require.main === module) {
  main();
}
