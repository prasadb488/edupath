// src/services/emailService.ts
import emailjs from "@emailjs/browser";


const sendConfirmationEmail = (formData: {
  name: string;
  email: string;
  title: string;
}) => {
    console.log("Loading env variables");
    console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
    console.log("API Key:", import.meta.env.VITE_EMAILJS_API_KEY);

  emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,     
      import.meta.env.VITE_TEMPLATE_ID,    
      {
        name: formData.name,
        email: formData.email,
        title: formData.title,
      },
      import.meta.env.VITE_EMAILJS_API_KEY    
    )
    .then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        alert("Confirmation email sent to " + formData.email);
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("Email sending failed. Please try again.");
      }
    );
};

export default sendConfirmationEmail;