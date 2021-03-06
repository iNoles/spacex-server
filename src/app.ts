import {createApp} from './server';

async function main() {
  const app = await createApp();
  const port = process.env.PORT || 4000;
  const host = process.env.HOST || '::';
  app.listen(port, host, (err) => {
    if (err) throw err;
    console.log(`server listening on ${port}`);
  });
}

if (require.main === module) {
  main();
}
