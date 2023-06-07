describe("checkBrackets", function() {
  // Test - right
  it('Test1', function() {
      assert.equal(checkBrackets('NaN'), '-1');
  });

  it('Test2', function() {
      assert.equal(checkBrackets('Undefined'), '-1');
  });

  it ('Test3', function() {
      assert.equal(checkBrackets('1)()(())2(()'), '2');
  });

  it ('Test4', function() {
      assert.equal(checkBrackets('((()))(('), '2');
  });

  it ('Test5', function() {
      assert.equal(checkBrackets('((()))(('), '2');
  });

  it ('Test6', function() {
      assert.equal(checkBrackets('((())(('), '3');
  });

  it ('Test7', function() {
      assert.equal(checkBrackets('((()))((((('), '5');
  });

  it ('Test8', function() {
      assert.equal(checkBrackets('((()))('), '1');
  });

  it ('Test9', function() {
      assert.equal(checkBrackets('((()))(((('), '4');
  });

  it ('Test10', function() {
      assert.equal(checkBrackets('((()))((('), '3');
  });

  // Test - wrong
  it ('Test11', function() {
      assert.equal(checkBrackets('((()))((('), '-1');
  });

  it ('Test12', function() {
      assert.equal(checkBrackets('((()))(((('), '-1');
  });

  it ('Test13', function() {
      assert.equal(checkBrackets('((()))(((('), '0');
  });

  it ('Test14', function() {
      assert.equal(checkBrackets('((()))((('), '1');
  });

  it ('Test15', function() {
      assert.equal(checkBrackets('((())))(('), '7');
  });
});