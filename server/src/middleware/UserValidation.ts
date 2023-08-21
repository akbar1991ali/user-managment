import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const userSchema = Joi.object({
  firstName: Joi.string().max(100).required().regex(/^[A-Za-z ]{1,100}$/).messages(
    {
      'any.required': 'First Name is Required',
      'any.max': 'Accepts max 100 character',
      'string.pattern.base': 'First name should contain only alphabetical characters and spaces',
    }),
  lastName:Joi.string().max(100).required().regex(/^[A-Za-z ]{1,100}$/).messages(
    {
      'any.required': 'Last Name is Required',
      'any.max': 'Accepts max 100 character',
      'string.pattern.base': 'last name should contain only alphabetical characters and spaces',
    }),
  email: Joi.string().email().required(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});

const UserValidation = (schema: Joi.Schema) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export default UserValidation(userSchema);
