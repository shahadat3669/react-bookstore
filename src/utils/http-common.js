import axios from 'axios';

const APP_ID = 'W5LfgWo3kf5aN3SR6dnd';

export default axios.create({
  baseURL: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}`,
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
});
