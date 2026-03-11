import { NextFunction, Request, Response } from "express";

export const checkAuth =
  (...authRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //Session Token Verification
      const sessionToken =
        req.cookies["__Secure-session_token"] || req.cookies["session_token"];
      if (!sessionToken) {
        throw new Error("Unauthorized access! No session token provided.");
      }

      // ======================= VERIFY COOKIE =======================

      // ======================= VERIFY USER ACCESS AND OTHERS =======================

      // ======================= VERIFY USER ROLE  =======================

      next();
    } catch (error: any) {
      next(error);
    }
  };
