const { expect } = require('chai');

describe('Task 1: Fetch API Testing', function() {
  it('should fetch posts, have correct length and type', function(done) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        expect(data).to.be.an('array');
        
        expect(data).to.have.lengthOf(100);
        if (data.length > 0) {
            expect(data[0]).to.be.an('object');
            expect(data[0]).to.have.property('id').that.is.a('number');
            expect(data[0]).to.have.property('title').that.is.a('string');
        }
        
        done();
      })
      .catch(error => {
        done(error);
      });
  });
});
