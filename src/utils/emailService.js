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

// ❌ Send cancellation email if user closes payment popup or fails
export const sendEmailCancellation = async (formData) => {
  try {
    const result = await emailjs.send(
      'service_6lng57k',              // Same service ID
      'template_268hepk',             // Cancellation template ID
      {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phoneNumber,
        city: formData.city,
        plan: formData.consultationType,
        paymentStatus: 'Cancelled',
        message: 'Your payment was cancelled or declined.'
      },
      'LWZn9UcUqKY8bAEWu'             // Public key
    );
    console.log('❌ Cancellation email sent:', result.text);
  } catch (error) {
    console.error('🚫 Failed to send cancellation email:', error.text);
  }
};
