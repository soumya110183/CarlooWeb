import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "Info@algorethics.ai,steve@algorethics.ai", 
      subject: "New Subscriber",
      text: `New subscription request:\nEmail: ${email}`,
    });

    return new Response(
      JSON.stringify({ message: "Subscribed successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Error subscribing" }),
      { status: 500 }
    );
  }
}
