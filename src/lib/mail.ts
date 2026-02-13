
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: 465, // Using 465 (SSL) as verified
    secure: true,
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    // TLS certificate validation enabled (default: true)
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

export const sendPasswordResetEmail = async (email: string, resetUrl: string) => {
    await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Otoraporu Şifre Sıfırlama",
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1c1917;">Şifre Sıfırlama Talebi</h2>
                <p style="color: #57534e;">Otoraporu hesabınız için şifre sıfırlama talebinde bulundunuz. Aşağıdaki bağlantıya tıklayarak yeni şifrenizi belirleyebilirsiniz:</p>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="${resetUrl}" style="display: inline-block; padding: 12px 32px; background-color: #ea580c; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px;">Şifremi Sıfırla</a>
                </div>
                <p style="color: #78716c; font-size: 13px;">Bu bağlantı 1 saat süreyle geçerlidir.</p>
                <p style="color: #a8a29e; font-size: 12px; margin-top: 30px;">Bu talebi siz yapmadıysanız bu e-postayı dikkate almayınız. Şifreniz değişmeyecektir.</p>
            </div>
        `,
    });
};

