import { Request, Response } from "express";
import mongodb from "../../clients/mongodb";
import bcrypt from 'bcryptjs';

export async function registerController(req: Request, res: Response) {
  try {
    const { name, email, password, ...rest } = req.body;
    const hashPassword = bcrypt.hashSync(password);

    if (!email) {
      res.status(400).send({ code: '400', error: 'Email no enviado' });
      return;
    }
    
    if (!password) {
      res.status(400).send({ code: '400', error: 'Contraseña no enviada' });
      return;
    }

    const db = await mongodb();

    const [ emailResult ] = await db.collection('users').find({ email }).toArray();
    if (emailResult != null) {
      res.status(400).send({ code: '400', error: 'El email ya existe' });
      return;
    }
    
    const user = {
      name,
      email,
      hashPassword,
      ...rest
    };
    
    const result = await db.collection('users').insertOne(user);
    
    res.status(200).send({ code: '200', result });
  } catch(error) {
    res.status(500).send(error);
  }
}