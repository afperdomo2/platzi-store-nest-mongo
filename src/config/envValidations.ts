import * as Joi from 'joi';

export default Joi.object({
  PORT: Joi.number().required().max(9999),
  API_KEY: Joi.number().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required().max(9999),
  DB_NAME: Joi.string().required(),
});
