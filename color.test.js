const request = require('supertest')
const app = require('./color')
const {server} = require('./color')
describe('Color', () => {
	it('should test color is red', async () => {
	  const res = await request(app).get('/')
	  expect(res.statusCode).toEqual(200)
	  expect(res.body.color).toEqual('red')
	})
  })
  
  afterAll(async () => {
	await app.server.close()
  })
  