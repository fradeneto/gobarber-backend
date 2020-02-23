import { Router } from 'express';
import CadastroController from './controllers/CadastroController';

const routes = Router();

routes.post('/cadastro', CadastroController.store);

routes.get('/', (req, res) => {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);

  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  let year = date_ob.getFullYear();

  // current hours
  let hours = date_ob.getHours();

  // current minutes
  let minutes = date_ob.getMinutes();

  // current seconds
  let seconds = date_ob.getSeconds();

  // prints date & time in YYYY-MM-DD HH:MM:SS format
  const dt = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

  return res.status(200).json({ message: dt })
});

export default routes;