// import { Resend } from "resend";
// import { EmailTemplate } from "../../components/emailTemplate/email-template";
// import ReactDOMServer from "react-dom/server"; // Assurez-vous d'avoir react-dom installé

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       telephone,
//       status,
//       codePostal,
//       travaux,
//       surface,
//       typeDeChauffage,
//       type,
//       ageDuBien,
//       etapeDuProjet,
//       entrepriseEmail,
//       newDate,
//     } = req.body;

//     const emailContent = ReactDOMServer.renderToString(
//       EmailTemplate({
//         name,
//         email,
//         telephone,
//         status,
//         codePostal,
//         travaux,
//         surface,
//         typeDeChauffage,
//         type,
//         ageDuBien,
//         etapeDuProjet,
//         date: newDate,
//       })
//     );

//     console.log(entrepriseEmail);

//     const data = await resend.emails.send({
//       from: "Maprimerenov-info <onboarding@resend.dev>",
//       to: entrepriseEmail,
//       subject: "Nouveau propsect Maprimerenov-info",
//       html: emailContent,
//     });

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(400).json({ message: error.message, stack: error.stack });
//   }
// };

// Dans votre fichier api/send.js :

import { EmailTemplate } from "../../components/emailTemplate/email-template";
import ReactDOMServer from "react-dom/server"; // Assurez-vous d'avoir react-dom installé
import sgMail from "@sendgrid/mail";

// Configurez SendGrid avec votre clé API
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
      entrepriseEmail,
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

    console.log(entrepriseEmail);

    const msg = {
      to: entrepriseEmail,
      from: "contact@maprimerenov-info.org",
      subject: "Nouveau propsect Maprimerenov-info",
      html: emailContent,
    };

    // Ici, nous ajoutons le bloc try...catch autour de l'appel SendGrid
    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Email envoyé avec succès" });
    } catch (error) {
      console.error("Erreur SendGrid:", error.response.body);
      res.status(400).json({
        message: "Erreur lors de l'envoi de l'email.",
        details: error.response.body,
      });
      return;
    }
  } catch (error) {
    // Cette partie gère d'autres erreurs non liées à SendGrid
    res.status(400).json({ message: error.message, stack: error.stack });
  }
};
