const linearPoint = require('../linearPoint');

var assert = require('assert');
     describe('Tests for linearPoint function', () => {

        describe('Test Case 1 for linearPoint',() => {
           it('should return 6 as the value', () => {
             assert.equal(linearPoint(2, 1, 4), 6);
           });
        });

       describe('Test Case 2 for linearPoint', () => {
         it('should return 4 as the value', () => {
            assert.equal(linearPoint(2, 0, 4), 4);
         });
      });

       describe('Test Case 3 for linearPoint', () => {
          it('should return 2 as the value', () => {
              assert.equal(linearPoint(2, -1, 4), 2);
             });
        });
   });
