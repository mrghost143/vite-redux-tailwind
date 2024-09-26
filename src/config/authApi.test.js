// src/authApi.test.js

import authApi from './authApi'; // Adjust the path as necessary
import AxiosMockAdapter from 'axios-mock-adapter';

describe('authApi', () => {
  let mock;

  beforeEach(() => {
    // Create an instance of AxiosMockAdapter
    mock = new AxiosMockAdapter(authApi);
  });

  afterEach(() => {
    // Restore the default behavior of Axios
    mock.restore();
    localStorage.removeItem('token'); // Clean up token after each test
  });

  test('should add Authorization header when token is present', async () => {
    localStorage.setItem('token', 'mockToken'); // Set a mock token

    mock.onGet('/test').reply(200, { success: true });

    const response = await authApi.get('/test');
    
    expect(response.config.headers.Authorization).toBe('Bearer mockToken');
    expect(response.data.success).toBe(true);
  });

  test('should not add Authorization header when token is absent', async () => {
    mock.onGet('/test').reply(200, { success: true });

    const response = await authApi.get('/test');

    expect(response.config.headers.Authorization).toBeUndefined();
    expect(response.data.success).toBe(true);
  });

  test('should handle response errors correctly', async () => {
    mock.onGet('/error').reply(400, { message: 'Bad Request' });

    try {
      await authApi.get('/error');
    } catch (error) {
      expect(error.response.data.message).toBe('Bad Request');
    }
  });

  test('should handle request errors correctly', async () => {
    mock.onGet('/timeout').timeout();

    try {
      await authApi.get('/timeout');
    } catch (error) {
      expect(error.message).toBe('Network Error');
    }
  });
});
