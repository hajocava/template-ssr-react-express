import express from 'express';
import { router } from './renderer';

const PORT = process.env.SERVER_PORT || 8080
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('*', router);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
