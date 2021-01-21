import { MongoClient } from 'mongodb';
import { Database } from '../lib/types';

const user = 'testuser_001';
const userPassword = '...............';
const cluster = 'cluster0.w6dvl';

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/<dbname>?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  });
  const db = client.db('main');
  return {
    listings: db.collection('test_listings')
  }
}
