import { Resend } from "resend";
import { EmailTemplate } from "../../components/emailTemplate/email-template";
import ReactDOMServer from "react-dom/server"; // Assurez-vous d'avoir react-dom installé

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const {
      name,
      email,
      telephone,
      status,
      codePostal,
      travaux,
      surface,
      typeDeChauffage,
      type,
      ageDuBien,
      etapeDuProjet,
      partnerEmails,
      newDate,
    } = req.body;

    const emailContent = ReactDOMServer.renderToString(
      EmailTemplate({
        name,
        email,
        telephone,
        status,
        codePostal,
        travaux,
        surface,
        typeDeChauffage,
        type,
        ageDuBien,
        etapeDuProjet,
        date: newDate,
      })
    );

    const data = await resend.emails.send({
      from: "Maprimerenov-info <onboarding@resend.dev>",
      to: partnerEmails || ["casteranicolas.contact@gmail.com"],
      subject: "Nouveau propsect Maprimerenov-info",
      html: emailContent,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message, stack: error.stack });
    res.status(400).json(error);
  }
};
