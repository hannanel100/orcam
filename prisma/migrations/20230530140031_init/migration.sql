-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "identityId" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "ipAddress" TEXT,
    "lastAccessTime" TIMESTAMP(3),
    "country" TEXT,
    "customVersion" TEXT,
    "acceptedEula" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sfAccountId" TEXT,
    "consent" TEXT,
    "rootAccountId" TEXT NOT NULL,
    "role" TEXT,
    "needConsent" BOOLEAN,
    "loginToken" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("hash")
);

-- CreateTable
CREATE TABLE "UserDetail" (
    "hash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserDetail_pkey" PRIMARY KEY ("hash")
);

-- AddForeignKey
ALTER TABLE "UserDetail" ADD CONSTRAINT "UserDetail_hash_fkey" FOREIGN KEY ("hash") REFERENCES "User"("hash") ON DELETE RESTRICT ON UPDATE CASCADE;
