// const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");

// dotenv.config();

// // Create transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD, // Gmail App Password
//   },
// });

// // Verify transporter connection
// transporter.verify((error, success) => {
//   if (error) {
//     console.log("❌ Email transporter error:", error);
//   } else {
//     console.log("✅ Email server is ready");
//   }
// });

// // ---------------- BOOKING EMAIL ----------------
// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//   try {
//     const mailOptions = {
//       from: `"Eventora" <${process.env.EMAIL_USER}>`,
//       to: userEmail,
//       subject: `Booking Confirmed: ${eventTitle}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px;">
//           <h2>Hi ${userName} 👋</h2>

//           <p>
//             Your booking for 
//             <strong>${eventTitle}</strong> 
//             has been successfully confirmed.
//           </p>

//           <p>Thank you for choosing Eventora 🎉</p>
//         </div>
//       `,
//     };

//     const info = await transporter.sendMail(mailOptions);

//     console.log("✅ Booking email sent:", info.response);
//   } catch (error) {
//     console.log("❌ Error sending booking email:", error.message);
//   }
// };

// // ---------------- OTP EMAIL ----------------
// const sendOTPEmail = async (userEmail, otp, type) => {
//   try {
//     const title =
//       type === "account_verification"
//         ? "Verify your Eventora Account"
//         : "Event Booking Verification";

//     const message =
//       type === "account_verification"
//         ? "Use the OTP below to verify your Eventora account."
//         : "Use the OTP below to verify your booking.";

//     const mailOptions = {
//       from: `"Eventora" <${process.env.EMAIL_USER}>`,
//       to: userEmail,
//       subject: title,
//       html: `
//         <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
          
//           <h2>${title}</h2>

//           <p>${message}</p>

//           <div 
//             style="
//               margin: 20px auto;
//               padding: 15px 25px;
//               font-size: 28px;
//               font-weight: bold;
//               background-color: #f4f4f4;
//               width: fit-content;
//               letter-spacing: 6px;
//               border-radius: 8px;
//             "
//           >
//             ${otp}
//           </div>

//           <p style="font-size: 12px; color: gray;">
//             OTP expires in 5 minutes.
//           </p>

//         </div>
//       `,
//     };

//     const info = await transporter.sendMail(mailOptions);

//     console.log("✅ OTP email sent:", info.response);
//   } catch (error) {
//     console.log("❌ Error sending OTP email:", error.message);
//   }
// };

// module.exports = {
//   sendBookingEmail,
//   sendOTPEmail,
// };


const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

// Create transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true only for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Gmail App Password
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email server is ready");
  }
});

// ---------------- BOOKING EMAIL ----------------
const sendBookingEmail = async (userEmail, userName, eventTitle) => {
  try {
    const mailOptions = {
      from: `"Eventora" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: `Booking Confirmed: ${eventTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          <h2>Hi ${userName} 👋</h2>

          <p>
            Your booking for 
            <strong>${eventTitle}</strong>
            has been successfully confirmed.
          </p>

          <p>Thank you for choosing Eventora 🎉</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Booking email sent:", info.response);

  } catch (error) {
    console.log("❌ Booking email error:", error);
  }
};

// ---------------- OTP EMAIL ----------------
const sendOTPEmail = async (userEmail, otp, type) => {
  try {
    const title =
      type === "account_verification"
        ? "Verify your Eventora Account"
        : "Event Booking Verification";

    const message =
      type === "account_verification"
        ? "Use the OTP below to verify your Eventora account."
        : "Use the OTP below to verify your booking.";

    const mailOptions = {
      from: `"Eventora" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: title,
      html: `
      <div style="font-family: Arial, sans-serif; text-align:center; padding:20px;">
        
        <h2>${title}</h2>

        <p>${message}</p>

        <div
          style="
            margin:20px auto;
            padding:15px 25px;
            font-size:28px;
            font-weight:bold;
            background:#f4f4f4;
            width:fit-content;
            letter-spacing:6px;
            border-radius:8px;
          "
        >
          ${otp}
        </div>

        <p style="font-size:12px;color:gray">
          OTP expires in 5 minutes.
        </p>

      </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ OTP email sent:", info.response);

  } catch (error) {
    console.log("❌ OTP email error:", error);
  }
};

module.exports = {
  sendBookingEmail,
  sendOTPEmail,
};