import { Router } from 'express';
const DTRController = new Router();

DTRController.get('/', (req, res) => {
  res.send('dtr get');
});

DTRController.post('/', (req, res) => {
  res.send('dtr post');
});

DTRController.put('/', (req, res) => {
  res.send('dtr put');
});

DTRController.delete('/', (req, res) => {
  res.send('dtr delete');
});

export default DTRController;
