const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const data = [];

async function main() {
  console.log(`Start seeding ...`);
  for (const d of data) {
    const user = await prisma.SomeModal.create({
      data: d,
    });
    console.log(`Created data with id: ${data.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
