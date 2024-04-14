import * as Joi from 'joi';

export default Joi.object({
  PORT: Joi.number().required().max(9999),
  API_KEY: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),

  MONGO_CONNECTION: Joi.string().required(),
  MONGO_HOST: Joi.string().required(),
  MONGO_PORT: Joi.number().required().max(99_999),
  MONGO_USERNAME: Joi.string().required(),
  MONGO_PASSWORD: Joi.string().required(),
  MONGO_DATABASE: Joi.string().required(),
});
