'use strict';

var score = require('./score.model');

exports.register = function(socket) {
  score.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  score.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
};

function onSave(socket, doc, cb) {
  socket.emit('score:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('score:remove', doc);
}
