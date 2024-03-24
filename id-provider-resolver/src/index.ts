import express from 'express';
import bodyparser from 'body-parser';


const app: express.Express = express();
app.use(bodyparser.json());

const port = 33000;

// app.get('/', (_req, res) => {
//   res.send('Hello World!')
// });
app.post('/v1/idProviders', async (req: express.Request, res: express.Response) => {
  //console.log(req.body);   
  res.send({
    IDProvider: 'GitHub',
    kc_idp_hint: 'github',
  });   
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

