import { NextFunction, Request, Response } from "express";
export declare const checkAuth: (...authRoles: string[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.d.ts.map