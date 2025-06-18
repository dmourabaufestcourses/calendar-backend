const { response } = require("express");

const getEventsController = async (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "getEvents",
  });
};

const createEventController = async (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "createEvent",
  });
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
