import { Router } from 'express';
const EmployeeController = new Router();

EmployeeController.get('/', (req, res) => {
  res.send('employee get');
});

EmployeeController.post('/', (req, res) => {
  res.send('employee post');
});

EmployeeController.put('/', (req, res) => {
  res.send('employee put');
});

EmployeeController.delete('/', (req, res) => {
  res.send('employee delete');
});

export default EmployeeController;
