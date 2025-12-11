import { configDotenv } from 'dotenv';
import { App } from './app';

configDotenv();

const app = new App();

app.serve();
