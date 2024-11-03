import axios from 'axios';

export const PLAYHT_API_URL = 'https://api.play.ht/api/v2';
export const USER_ID = '3I0uk4sKefXqOKsu6Yb9DDIfGrg1';
export const API_KEY = 'f64bd73af7fa48d4a831e752a6affc74';

// Create axios instance with proper headers
export const api = axios.create({
  baseURL: PLAYHT_API_URL,
  timeout: 30000,
  headers: {
    'AUTHORIZATION': API_KEY,
    'X-USER-ID': USER_ID,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});