import EmployeeController from '../api/controller/employee_controller';
import DTRController from '../api/controller/dtr_controller';

export default function registerRoutes(app) {
  app.use('/employee', EmployeeController);
  app.use('/dtr', DTRController);
}
