const nm = require("nodemailer");
// const userSchema = require("../model/userSchema");
// const employeeSchema = require("../model/employeeSchema");
// const serviceSchema = require("../model/serviceSchema");
const qrcode = require("qrcode");
const genBookedMail = async (user, admin, body, response) => {
    console.log(user,admin,body,response)
    let transporter = nm.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "bookmycoiffeur@gmail.com",
      pass: "wfnkzavlldanytst",
    },
  });
  // var otp2=optFunction()
  var string = "";
  var service = 1;

  const generateQRCode = async (text) => {
    try {
      const qrCodeImage = await qrcode.toDataURL(text);
      return qrCodeImage;
    } catch (error) {
      console.error("Error generating QR code:", error);
      return null;
    }
  };

  console.log("qwrtuuuuiioo", response);
  // const servic
  // const qrCodeDataURL = await generateQRCode(response);
  // console.log(qrCodeDataURL)
//   qrcode.toDataURL(response, (err, qrDataURL) => {
//     if(err)
//     {
//         throw err;
//     }
    const mailOptions = {
      from: "modiperin@gmail.com",
      to: user.email,
      bcc: [
        "vinitchokshi1809@gmail.com",
        "modiperin@gmail.com",
        "virenmehta711@gmail.com",
      ],
      subject: "Appointment Confirmation",
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2">
        Your appointment is booked successfully on Health Management System<br><br><hr>
        Your appointment data is as follows<br>
        Doctor name: ${admin.brandName}<br>
        Patient name:${user.name}<br>
        Date:${new Date(body.startTime)}<br>
        total Duration:${body.totalTime}<br>
        </div>
        `,
        // <img src="${response}" alt="QR Code">
        // attachments: [{
        //     filename: 'qrcode.png',
        //     content: response.split(';base64,').pop(),
        //     encoding: 'base64'
        // }]
      // attachments: [{
      //     filename: 'qrcode.png',
      //     content: qrCodeDataURL.split(',')[1], // Extracting the base64 content from the data URL
      //     cid: 'qrcode' // Content ID for the image element in the HTML
      //   }]
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
      }
      else
      {
        console.log('Email sent: ' + data.response);
      }
      
    });
//   });
};

module.exports = genBookedMail;

// const d=new Date()
// d.getDate(to.startTime)

// Employee name:${employee.employeeName}
// Your appointment is booked successfully on bookmycoiffeur
// Your appointment data is as follows
// Store name: ${admin.brandName}
// Employee name:${employee.employeeName}
// Date:${to.date}
// store contact number:${admin.contactNumber}
// store mail:${admin.email}
// Time:${d.getDate(to.startTime)}
// total Duration:${to.totalTime}
// total payment:${to.totalPrice}
// payment Type:${to.patmentType}
// // selected services:${to.}

// to display all docs where age >25 and less than 50
