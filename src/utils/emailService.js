import emailjs from '@emailjs/browser';

/**
 * 🔁 Convert internal consultationType to readable plan name
 */
const getPlanLabel = (type) => {
  switch (type) {
    case 'general': return 'General Diet Consultation';
    case 'monthly': return 'Monthly Diet Plan';
    case 'quarterly': return '3-Month Comprehensive Plan';
    default: return 'Custom Plan';
  }
};

// ✅ Load environment variables
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateConfirm = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRM_ID;
const templateFailure = import.meta.env.VITE_EMAILJS_TEMPLATE_FAILURE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * ✅ Send confirmation email after successful payment
 * @param {Object} formData - Form input values
 * @param {String} orderId - Razorpay payment ID
 * @param {Number} amount - Paid amount in paise (e.g. 20000 = ₹200)
 */
export const sendEmailConfirmation = async (formData, orderId, amount) => {
  try {
    const result = await emailjs.send(
      serviceId,
      templateConfirm,
      {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phoneNumber,
        city: formData.city,
        consultation_type: formData.consultationType,
        plan_type: getPlanLabel(formData.consultationType),
        amount: (amount / 100).toFixed(2),   // ₹200.00 format
        payment_status: 'Success',
        order_id: orderId
      },
      publicKey
    );
    console.log('✅ Confirmation email sent:', result.text);
  } catch (error) {
    console.error('❌ Failed to send confirmation email:', error?.text || error.message);
  }
};

/**
 * ❌ Send failure/cancellation email if payment was dismissed
 * @param {Object} formData - Form input values
 */
export const sendEmailFailure = async (formData) => {
  try {
    const result = await emailjs.send(
      serviceId,
      templateFailure,
      {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phoneNumber,
        city: formData.city,
        consultation_type: formData.consultationType,
        plan_type: getPlanLabel(formData.consultationType),
        payment_status: 'Cancelled',
        message: 'We noticed your payment was not completed. If you faced any issue, feel free to reply or try again.'
      },
      publicKey
    );
    console.log('❗ Failed payment email sent:', result.text);
  } catch (error) {
    console.error('❌ Error sending failed payment email:', error?.text || error.message);
  }
};
