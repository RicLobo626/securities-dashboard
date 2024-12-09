import { prisma } from "@/lib/prisma.ts";
import securities from "./data.json";

const seed = async () => {
  for (const { prices, ...security } of securities) {
    const transformedPrices = prices.map((p) => ({
      close: parseFloat(p.close),
      volume: parseInt(p.volume),
      date: new Date(p.date).toISOString(),
    }));

    await prisma.security.create({
      data: {
        ...security,
        prices: {
          createMany: {
            data: transformedPrices,
          },
        },
      },
    });
  }
};

try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.log(e);
  await prisma.$disconnect();
  process.exit(1);
}
