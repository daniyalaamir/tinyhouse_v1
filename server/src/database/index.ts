import { MongoClient } from 'mongodb';

const user = 'testuser_001';
const userPassword = 'TaNpCye9sZ59g5F7';
const cluster = 'cluster0.w6dvl';

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/<dbname>?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  });
  const db = client.db('main');
  return {
    listings: db.collection('test_listings')
  }
}
