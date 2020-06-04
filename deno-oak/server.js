import { Application } from 'https://deno.land/x/oak/mod.ts'

const app = new Application();
const PORT = 3000;

app.use((ctx) => {
  ctx.response.body = 'Hello World!';
});

app.listen({ PORT });

console.log(`localhost: ${PORT}`);
