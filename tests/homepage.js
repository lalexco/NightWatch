module.exports = {
    tags: ['google'],
    'Demo test Google' : function (client) {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'rembrandt van rijn')
        .waitForElementVisible('input[name=btnK]', 4000)
        .click('input[name=btnK]')
        .end()
    }
  }