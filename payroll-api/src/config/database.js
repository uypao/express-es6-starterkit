import mongoose from 'mongoose';
import colors from 'colors';
import config from './config';
const env = process.env.NODE_ENV;

export default function connect() {
  mongoose.connect(config.getHostURI(env));

  mongoose.connection.on('error', (err) => {
    console.log(colors.red('Mongoose connection error: ' + err));
  });

  mongoose.connection.on('connected', () => {
    console.log(colors.green('==============================='));
    console.log(colors.green('Mongoose connection successful!'));
    console.log(colors.green('==============================='));
  });
}
