import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    
    const { applicant, directors, shareholders } = body;

  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    
    const emailText = `
📌 New RAK DAO Application

👤 Applicant:
- Full Name: ${applicant.full_name}
- Email: ${applicant.email}
- Phone: ${applicant.phone}
- Nationality: ${applicant.nationality}

👔 Directors:
${directors.map((d, i) => `  ${i + 1}. ${d.name} | Passport: ${d.passport} | Nationality: ${d.nationality}`).join("\n")}

${shareholders.map((s, i) => `  ${i + 1}. ${s.name} | Type: ${s.type} | %: ${s.percent} | UBO: ${s.ubo}`).join("\n")}

`;

   
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "Info@algorethics.ai,steve@algorethics.ai",
      subject: `🚀 New RAK DAO Application from ${applicant.full_name}`,
      text: emailText,
    });

    return new Response(JSON.stringify({ message: "Application submitted successfully" }), { status: 200 });
  } catch (error) {
    console.error("RAK DAO API Error:", error);
    return new Response(JSON.stringify({ message: "Error submitting application" }), { status: 500 });
  }
}
