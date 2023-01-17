import { DataSource } from 'typeorm';
import { Message } from '../entities/message';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Message],
  synchronize: true,
  logging: false,
});

// TODO enable when db connection works
export const initDataSource = new Promise((res) => setTimeout(res, 20));
// export const initDataSource = AppDataSource.initialize();
