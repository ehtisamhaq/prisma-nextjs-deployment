import app from "./app.js";
import { prisma } from "./lib/prisma.js";
const bootstrap = async () => {
  try {
    await prisma.$connect();
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
bootstrap();
//# sourceMappingURL=server.js.map
