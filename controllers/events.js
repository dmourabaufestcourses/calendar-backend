const { response } = require("express");
const Evento = require("../models/Evento");

const getEventsController = async (req, res = response) => {

  const eventos = await Evento.find().populate("user", "name");



  res.status(200).json({
    ok: true,
    eventos
  });
};

const createEventController = async (req, res = response) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;

    const respEvent = await evento.save();

    res.status(201).json({
      ok: true,
      respEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Ups, something went wrong.",
    });
  }
};

const uptateEventController = async (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "updateEvent",
  });
};

const deleteEventController = async (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "deleteEvent",
  });
};

module.exports = {
  getEventsController,
  createEventController,
  uptateEventController,
  deleteEventController,
};
