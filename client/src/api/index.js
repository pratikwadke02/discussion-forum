import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);

export const addQuestion = (formData) => API.post('/question/add_question', formData);
export const getQuestions = () => API.get('/question/get_questions');

export const addAnswer = (formData) => API.post('/answer/add_answer', formData);
