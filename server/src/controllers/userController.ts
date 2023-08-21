import { Request, Response } from 'express';
import User from '../models/Users';
import Joi from 'joi';

// Validation schema for creating a user
const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
});

export const createUser = async (req: Request, res: Response) => {
  try {
    // Validate user data against the schema
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
