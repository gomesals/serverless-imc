'use strict'

const BMI = require('./bmi')

exports.getBMI = (req, res) => {
  if (!req.query.weight) return res.status(400).text('Missing parameter')
  if (!req.query.height) return res.status(400).text('Missing parameter')
  res.json(BMI.result(req.query.height, req.query.weight))
}
