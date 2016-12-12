const expect = require('expect');
const {generateMessage} = require('./message');

describe('gennerateMessage', () => {
  it('should generate correct messa object', () => {
    let from = 'Developer';
    let text = 'Test should pass.';

    let message = generateMessage(from, text);

    expect(message).toInclude({from, text})
    expect(message.createdAt).toBeA('number');
  })
})