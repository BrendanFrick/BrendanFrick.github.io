var async = require('async');
var authenticationSuccess = function() { console.log("Successful authentication"); };
var authenticationFailure = function() { console.log("Failed authentication"); };


var success = function(successMsg) {
  asyncOutput(successMsg);
};

var error = function(errorMsg) {
  asyncOutput(errorMsg);
};

Trello.get('/member/me/boards', success, error);
