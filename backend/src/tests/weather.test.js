const request = require('supertest');
const { expect } = require('chai');
const app = require('../server');

describe('Weather API', () => {
  describe('GET /api/weather/:city', () => {
    it('should return weather data for a city', async () => {
      const res = await request(app).get('/api/weather/London');
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('city', 'London');
      expect(res.body).to.have.property('current');
      expect(res.body).to.have.property('forecast').with.lengthOf(5);
    });

    it('should handle missing city param (though route requires it)', async () => {
      const res = await request(app).get('/api/weather/');
      expect(res.status).to.equal(404); // Route not found
    });
  });

  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).to.equal(200);
      expect(res.body.status).to.equal('OK');
    });
  });
});
