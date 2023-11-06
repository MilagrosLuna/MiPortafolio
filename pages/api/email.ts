import type { NextApiRequest, NextApiResponse } from "next";
import emailjs from "emailjs-com";

type EmailRequestData = {
  name: string;
  email: string;
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log(req);
    const { name, email, message } = req.body as EmailRequestData;
    const params = {
      name: name,
      email: email,
      message: message,
    };
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE!,
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE!,
      params,
      process.env.NEXT_PUBLIC_EMAIL_JS_USER
    );
  }

}
