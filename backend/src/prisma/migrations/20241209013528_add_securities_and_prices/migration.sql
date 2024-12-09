-- CreateTable
CREATE TABLE "prices" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "close" DOUBLE PRECISION NOT NULL,
    "volume" INTEGER NOT NULL,
    "security_id" INTEGER NOT NULL,

    CONSTRAINT "prices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "securities" (
    "id" SERIAL NOT NULL,
    "ticker" TEXT NOT NULL,
    "security_name" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "trend" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "securities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "prices_security_id_date_key" ON "prices"("security_id", "date");

-- CreateIndex
CREATE UNIQUE INDEX "securities_ticker_key" ON "securities"("ticker");

-- AddForeignKey
ALTER TABLE "prices" ADD CONSTRAINT "prices_security_id_fkey" FOREIGN KEY ("security_id") REFERENCES "securities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
