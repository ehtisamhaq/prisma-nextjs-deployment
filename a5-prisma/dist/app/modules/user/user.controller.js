import { prisma } from "../../../lib/prisma.js";
const getUsers = async (req, res) => {
    try {
        const data = await prisma.user.findMany();
        res.status(200).send({ message: "User Retrieves", data });
    }
    catch (error) {
        console.log(error);
    }
};
export const userController = {
    getUsers,
};
//# sourceMappingURL=user.controller.js.map