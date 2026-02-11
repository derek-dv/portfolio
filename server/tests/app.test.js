import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import request from 'supertest';

// Define a Mock Email Client Class
class MockEmailClient {
  constructor(connectionString) {
    this.connectionString = connectionString;
    console.log('MockEmailClient initialized with', connectionString);
  }
  async beginSend(message) {
    console.log('MockEmailClient beginSend called');
    return {
      pollUntilDone: async () => ({ status: 'Succeeded' }),
    };
  }
}

describe('POST /api/contact', () => {
  let createApp;
  let app;

  beforeEach(async () => {
    vi.resetModules();
    process.env.COMMUNICATION_SERVICES_CONNECTION_STRING = 'endpoint=https://example.communication.azure.com/;accesskey=fakekey';
    process.env.SENDER_EMAIL_ADDRESS = 'sender@example.com';

    // Import the factory
    const mod = await import('../app');
    createApp = mod.default;

    // Create app with MockEmailClient
    app = createApp(MockEmailClient);
  });

  afterEach(() => {
    vi.clearAllMocks();
    delete process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
    delete process.env.SENDER_EMAIL_ADDRESS;
  });

  it('should return 400 if fields are missing', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({ name: 'Test' });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'All fields are required' });
  });

  it('should return 200 and send email if fields are valid', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({
        name: 'Test Name',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'Test Message'
      });

    if (response.status !== 200) {
       console.log('Response body:', response.body);
    }

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: 'Email sent successfully!' });
  });
});
