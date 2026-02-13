
import { prisma } from "@/lib/db";
import crypto from "crypto";

export const generateVerificationToken = async (email: string) => {
    // Generate a 6-digit code
    const token = crypto.randomInt(100000, 999999).toString();
    const expires = new Date(new Date().getTime() + 15 * 60 * 1000); // 15 minutes

    const existingToken = await prisma.verificationToken.findFirst({
        where: { identifier: email },
    });

    if (existingToken) {
        await prisma.verificationToken.delete({
            where: {
                identifier_token: {
                    identifier: email,
                    token: existingToken.token,
                },
            },
        });
    }

    const verificationToken = await prisma.verificationToken.create({
        data: {
            identifier: email,
            token,
            expires,
        },
    });

    return verificationToken;
};
