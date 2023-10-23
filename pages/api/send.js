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
      })
    );

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["casteranicolas.contact@gmail.com"],
      subject: "Nouveau propsect 🔥🔥🔥",
      html: emailContent, // Utilisez le contenu HTML généré
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
