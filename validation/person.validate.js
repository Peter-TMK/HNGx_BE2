const Joi = require("joi");

const PersonSchema = Joi.object({
  name: Joi.string().required(),
});

const PersonUpdateSchema = Joi.object({
  name: Joi.string(),
});

async function personValidationMiddleWare(req, res, next) {
  const personPayload = req.body;

  try {
    await PersonSchema.validateAsync(personPayload);
    next();
  } catch (error) {
    res.status(400).json({
      message: error.details[0].message,
      status: 400,
    });
  }
}

async function personUpdateValidationMiddleware(req, res, next) {
  const personUpdatePayLoad = req.body;

  try {
    await PersonUpdateSchema.validateAsync(personUpdatePayLoad);
    next();
  } catch (error) {
    res.status(400).json({
      message: error.details[0].message,
      status: 400,
    });
  }
}

module.exports = {
  personValidationMiddleWare,
  personUpdateValidationMiddleware,
};
