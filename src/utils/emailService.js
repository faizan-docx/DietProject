import emailjs from '@emailjs/browser';

// ✅ Send confirmation email after successful payment
export const sendEmailConfirmation = async (formData) => {
  try {
    const result = await emailjs.send(
      'service_6lng57k',              // Service ID
      'template_uicv0nm',             // Confirmation template ID
      {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phoneNumber,
        city: formData.city,
        plan: formData.consultationType,
        paymentStatus: 'Success',
        message: 'Your payment was successful. You will soon receive your plan!'
      },
      'LWZn9UcUqKY8bAEWu'             // Public key
    );
    console.log('✅ Confirmation email sent:', result.text);
  } catch (error) {
    console.error('❌ Failed to send confirmation email:', error.text);
  }
};
