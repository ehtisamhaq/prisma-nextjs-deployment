import app from "./app";
import { prisma } from "./lib/prisma";

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
