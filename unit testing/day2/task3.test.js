const { expect } = require('chai');

describe('Task 3: Async/Await testing two requests', function() {
  it('should fetch the first post correctly using async/await', async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    expect(data).to.be.an('object');
    expect(data.id).to.equal(1);
    expect(data).to.have.property('title');
  });

  it('should fetch the second post correctly using async/await', async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    expect(data).to.be.an('object');
    expect(data.id).to.equal(2);
    expect(data).to.have.property('title');
  });
});
