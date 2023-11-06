import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    
    // Configura el transporte de correo con tu proveedor de correo electrónico
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Puedes utilizar otro proveedor o configurar SMTP
      auth: {
        user: process.env.EMAIL_USER, // Tu dirección de correo electrónico
        pass: process.env.EMAIL_PASSWORD, // Tu contraseña
      },
    });
    
    // Configura el mensaje de correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER, // Tu dirección de correo electrónico
      to: process.env.RECIPIENT_EMAIL, // La dirección de correo electrónico de destino
      subject: "Mensaje de contacto",
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Mensaje enviado con éxito" });
    } catch (error) {
      return res.status(500).json({ error: "Error al enviar el mensaje" });
    }
  } else {
    return res.status(405).end(); // Método no permitido
  }
}
