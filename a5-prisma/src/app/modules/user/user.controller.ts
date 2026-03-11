import { auth } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";
import { Request, Response } from "express";

const getUsers = async (req: Request, res: Response) => {
  try {
    const data = await prisma.user.findMany();
    res.status(200).send({ message: "User Retrieves", data });
  } catch (error) {
    console.log(error);
  }
};

export const userController = {
  getUsers,
};
