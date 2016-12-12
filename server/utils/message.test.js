const expect = require('expect');
const {
  generateLocationMessage,
  generateMessage,
} = require('./message');

describe('gennerateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Developer';
    let text = 'Test should pass.';

    let message = generateMessage(from, text);

    expect(message).toInclude({from, text})
    expect(message.createdAt).toBeA('number');
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location message', () => {
    let from = 'Developer';
    let latitude = -15.989131;
    let longitude = -48.044884;
    let url = 'https://www.google.com/maps?q=-15.989131,-48.044884';

    let location = generateLocationMessage(from, latitude, longitude);

    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({from, url});
  });
});