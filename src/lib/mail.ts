
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: 465, // Using 465 (SSL) as verified
    secure: true,
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export const sendOtpEmail = async (email: string, token: string) => {
    await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Otoraporu Giriş Kodunuz",
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Giriş Kodunuz</h2>
                <p>Otoraporu hesabınıza giriş yapmak için aşağıdaki kodu kullanın:</p>
                <div style="background-color: #f4f4f5; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0;">
                    <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #ea580c;">${token}</span>
                </div>
                <p>Bu kod 15 dakika süreyle geçerlidir.</p>
                <p style="color: #71717a; font-size: 12px; margin-top: 30px;">Bu kodu siz talep etmediyseniz bu maili dikkate almayınız.</p>
            </div>
        `,
    });
};
