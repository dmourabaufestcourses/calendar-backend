const { response } = require("express");
const Evento = require("../models/Evento");

const getEventsController = async (req, res = response) => {
  const eventos = await Evento.find().populate("user", "name");

  res.status(200).json({
    ok: true,
    eventos,
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
  const eventoId = req.params.id;

  try {
    const evento = await Evento.findById(eventoId);
    const uid = req.uid;

    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: "Event not found.",
      });
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "Has not permissions.",
      });
    }

    const newEvento = {
      ...req.body,
      user: uid,
    };

    const updatedEvent = await Evento.findByIdAndUpdate(eventoId, newEvento, {
      new: true,
    });

    res.json({
      ok: true,
      evento: updatedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Ups something went wrong.",
    });
  }
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
