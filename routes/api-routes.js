const db = require('../models');
const express = require('express');
const router = express.Router();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

router.get('/api/workouts', async function(req, res){
  let result = await db.Workout.find({});
  res.json(result);
});

router.get('/api/workouts/range', async function(req, res){
  let result = await db.Workout.find({}).sort({day: -1}).limit(7).exec();
  res.json(result);
});

router.post('/api/workouts', async function(req, res) {
  let result = await db.Workout.create({ exercise: [ req.body ] });
  res.json(result);
});

router.put('/api/workouts/:id', async function(req, res) {
  let workout = await db.Workout.findById(req.params.id);
  workout.exercises.push(req.body);
  let result = await workout.save();
  res.json(result);
});

module.exports = router;