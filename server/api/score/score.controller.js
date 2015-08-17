/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /scores              ->  index
 * POST    /scores              ->  create
 * GET     /scores/:id          ->  show
 * PUT     /scores/:id          ->  update
 * DELETE  /scores/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Score = require('./score.model');

// Get list of scores
exports.index = function(req, res) {
  Score.find(function (err, scores) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(scores);
  });
};

// Get a single score
exports.show = function(req, res) {
  Score.findById(req.params.id, function (err, score) {
    if(err) { return handleError(res, err); }
    if(!score) { return res.status(404).send('Not Found'); }
    return res.json(score);
  });
};

// Creates a new score in the DB.
exports.create = function(req, res) {
  Score.create(req.body, function(err, score) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(score);
  });
};

// Updates an existing score in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Score.findById(req.params.id, function (err, score) {
    if (err) { return handleError(res, err); }
    if(!score) { return res.status(404).send('Not Found'); }
    var updated = _.merge(score, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(score);
    });
  });
};

// Deletes a score from the DB.
exports.destroy = function(req, res) {
  Score.findById(req.params.id, function (err, score) {
    if(err) { return handleError(res, err); }
    if(!score) { return res.status(404).send('Not Found'); }
    score.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
