describe('Unit Testing Tasks Portfolio', function() {

    // ==================== Problem 1 ====================
    describe('Problem 1: capitalizeText', function() {
        it('should return a string when passed a string', function() {
            expect(capitalizeText("hello")).to.be.a('string');
        });

        it('should capitalize the string correctly', function() {
            expect(capitalizeText("farida")).to.equal("FARIDA");
        });

        it('should throw TypeError when passed a number', function() {
            expect(() => capitalizeText(12)).to.throw(TypeError, "parameter should be string");
        });

        it('should accept exactly one parameter (check function length)', function() {
            expect(capitalizeText.length).to.equal(1);
        });
    });

    // ==================== Problem 2 ====================
    describe('Problem 2: createArray', function() {
        it('should return an array (using expect)', function() {
            expect(createArray(3)).to.be.an('array');
        });

        it('should return array of length 3 and include 1 when passed 3', function() {
            const res = createArray(3);
            expect(res).to.have.lengthOf(3);
            expect(res).to.include(1);
        });

        it('should delay the testing process 5 seconds', function(done) {
            this.timeout(6000);
            setTimeout(() => {
                expect(createArray(3)).to.deep.equal([0, 1, 2]);
                done(); 
            }, 5000);
        });

        it('should showcase different syntax styles (expect/should/assert)', function() {
            const arr = createArray(3);
            
            expect(arr).to.deep.equal([0, 1, 2]);
            
            arr.should.be.an('array');
            arr.should.deep.equal([0, 1, 2]);
            
            assert.isArray(arr);
            assert.deepEqual(arr, [0, 1, 2]);
        });

        it('make pending test case for createArray'); 
    });

    // ==================== Problem 3 ====================
    describe('Problem 3: Object Equality', function() {
        let obj = {id: 1};
        let obj1 = {x: obj};
        let obj2 = {x: obj};

        it('should check equality using expect, should, and assert', function() {

            expect(obj1).to.deep.equal(obj2);
            obj1.should.deep.equal(obj2);
            assert.deepEqual(obj1, obj2);
        });
    });

    // ==================== Problem 4 ====================
    describe('Problem 4: CheckPositivity', function() {
        it('should test x = 5, x = -5, and x = 0 using all styles', function() {
            expect(CheckPositivity(5)).to.be.true;
            CheckPositivity(5).should.be.true;
            assert.isTrue(CheckPositivity(5));

            expect(CheckPositivity(-5)).to.be.false;
            CheckPositivity(-5).should.be.false;
            assert.isFalse(CheckPositivity(-5));

            expect(CheckPositivity(0)).to.be.false;
            CheckPositivity(0).should.be.false;
            assert.isFalse(CheckPositivity(0));
        });
    });

    // ==================== Problem 5 ====================
    describe('Problem 5: Mult Function constraints using assert', function() {
        it('should make sure inputs and outputs are above zero using assert', function() {
            let x = 5;
            assert.isAbove(x, 0, "x must be greater than 0");
            let result = Mult(x);
            assert.isAbove(result, 0, "returned value must be above zero");
        });
    });

    // ==================== Problem 6 ====================
    describe('Problem 6: Nested Object Inclusion using assert', function() {
        let obj3 = { a: { b: [{ x: 1 }] } };

        it('should check that a.b[0] includes or deeply equals {x: 1} using assert', function() {
            let target = obj3.a.b[0]; 
            
            assert.deepEqual(target, { x: 1 }, "a.b[0] does not match {x: 1}");
        });
    });
});