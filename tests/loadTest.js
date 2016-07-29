/* eslint-disable no-var, vars-on-top, prefer-arrow-callback, no-unused-vars */
/* globals meteorDown */
// All this disabling is because this code is run by meteor-down

/*
  To run:
  which meteor-down || npm install -g meteor-down
  meteor-down tests/load/simple_app.js
*/

// if-wrapping keeps this file from crashing non meteor-down tests
if (typeof meteorDown !== 'undefined') {
  meteorDown.init(function (Meteor) {
    Meteor.call('dispatchAction', { type: 'RESET', payload: {} }, function (error, result) {
      Meteor.kill() // allow the next client to come
    })
  })

  meteorDown.run({
    concurrency: 10,
    url: 'http://localhost:7730',
  })
}
