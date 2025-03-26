-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "inserted_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "json" JSONB NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);
