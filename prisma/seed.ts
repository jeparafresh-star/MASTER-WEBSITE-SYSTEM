import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const existing = await prisma.site.findFirst();

  if (existing) {
    await prisma.site.update({
      where: { id: existing.id },
      data: {
        name: "MASTER WEBSITE",
        tagline: "Ubah ide menjadi website digital yang nyata.",
        description:
          "Master Website System — fondasi reusable untuk membangun website profesional yang dapat dikendalikan melalui Dashboard.",
        email: "nusaaistudio@gmail.com",
        phone: "0852 8088 7510",
      },
    });

    console.log("Site data updated.");
  } else {
    await prisma.site.create({
      data: {
        name: "MASTER WEBSITE",
        tagline: "Ubah ide menjadi website digital yang nyata.",
        description:
          "Master Website System — fondasi reusable untuk membangun website profesional yang dapat dikendalikan melalui Dashboard.",
        email: "nusaaistudio@gmail.com",
        phone: "0852 8088 7510",
      },
    });

    console.log("Site data created.");
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });