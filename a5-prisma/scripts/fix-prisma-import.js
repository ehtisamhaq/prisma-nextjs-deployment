import fs from "fs";
import path from "path";

const prismaFile = path.join("dist", "lib", "prisma.js");
let content = fs.readFileSync(prismaFile, "utf8");
content = content.replace('../generated/client', '../generated/client.js');
fs.writeFileSync(prismaFile, content);
console.log('Fixed Prisma import in dist/lib/prisma.js');