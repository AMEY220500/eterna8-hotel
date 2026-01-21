const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    // Parse form data
    const data = JSON.parse(event.body);
    const { name, email, phone, checkIn, checkOut, guests, roomType, message } =
      data;

    // Create email transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Set in Netlify dashboard
        pass: process.env.EMAIL_PASS, // Set in Netlify dashboard (App Password)
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "ameyv.chavan22@gmail.com",
      subject: `🏨 New Booking Inquiry - ETERNA 8 Hotel`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px;">New Booking Inquiry</h2>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">Guest Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>

          <div style="background-color: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">Booking Details</h3>
            <p><strong>Check-in Date:</strong> ${checkIn}</p>
            <p><strong>Check-out Date:</strong> ${checkOut}</p>
            <p><strong>Number of Guests:</strong> ${guests}</p>
            <p><strong>Room Type:</strong> ${roomType.charAt(0).toUpperCase() + roomType.slice(1)}</p>
          </div>

          ${
            message
              ? `
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">Special Requests</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This inquiry was submitted through the ETERNA 8 Hotel website contact form.</p>
            <p>Please respond to the guest at: <a href="mailto:${email}">${email}</a></p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Form submitted successfully! We will contact you soon.",
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: "Failed to submit form. Please try again or call us directly.",
      }),
    };
  }
};
