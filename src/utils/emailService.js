import emailjs from '@emailjs/browser';

const serviceId = "service_6lng57k";
const templateConfirm = "template_c6u46tl";
const templateFailure = "template_3jezidp";
const publicKey = "LWZn9UcUqKY8bAEWu";

// Confirmation
export const sendEmailConfirmation = async () => {
  try {
    const result = await emailjs.send(
      serviceId,
      templateConfirm,
      {}, // No variables sent
      publicKey
    );
    console.log('✅ Confirmation email sent:', result.text);
  } catch (error) {
    console.error('❌ Failed to send confirmation email:', error?.text || error.message);
  }
};

// Failure
export const sendEmailFailure = async () => {
  try {
    const result = await emailjs.send(
      serviceId,
      templateFailure,
      {}, // No variables sent
      publicKey
    );
    console.log('⚠️ Failure email sent:', result.text);
  } catch (error) {
    console.error('❌ Failed to send failure email:', error?.text || error.message);
  }
};
