const send = require("../services/nodemail")

/* --------- GMAIL --------------
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST_GMAIL,
  port: process.env.MAIL_PORT_GMAIL,
  secure: false,
  auth: {
      user: process.env.MAIL_USER_GMAIL,
      pass: process.env.MAIL_PASS_GMAIL
  },
  tls: {
      rejectUnauthorized: false,
  }
})
*/

const html = `
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=Mukta:wght@300;400;600&family=MuseoModerno:ital,wght@0,100..900;1,100..900&family=Honk&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
   <style>
    body {
      font: 400 1rem "Mukta", sans-serif;
    }
    h1 {
      font-family: "MuseoModerno", sans-serif;
    }
    h2 {
      font-family: "Ballet", cursive;
    }
    span {
      font-family: "Honk", system-ui;
      font-variation-settings:"MORF" 15,"SHLN" 50;
    }
    div .button:hover {
    transform: scale(1.1);
    }
    .social i:hover{
    color: #6D4925;
    transform: rotate(360deg);
    }
   </style>

</head>

<body style="background: #222; padding: 50px; margin: 0; box-sizing: border-box; color: #EAD9C7;">
    <div class="app" style="display: flex; flex-direction: column; align-items: center; width: 100%; height: auto;"> 

        <header>
          <h1 style="font-optical-sizing: auto; font-weight: 300; font-style: normal; font-size: 30px; letter-spacing: 2px; text-transform: uppercase; color:#EAD9C7; padding-bottom: 50px;">Classic Design</h1>
        </header>
    
          <main>
                <h2 style=" font-size: 50px;font-weight: 400; font-style: normal; display: flex; justify-content: center; align-items: center;">Digital Marketing</h2>
                <span style="font-optical-sizing: auto; font-weight: 400; font-style: normal; font-size: 30px; display: flex; justify-content: center; align-items: center;">AND</span>
                <h2 style="font-size: 50px; font-weight: 400; font-style: normal; display: flex; justify-content: center; align-items: center;">Web Design</h2>
        
                <p style="font-size: 18px; padding: 50px 0; display: flex; justify-content: center; align-items: center;">
                 A name that combines classics with modernity. Guarantee of quality in our services and excellence in aspects such as:
                 Communication from beginning to end of each project, connecting us not only as customers but as partners. 
                 We carry out graphic work so that your business is boosted on social networks, shaping your creativity.
                </p>

                <div>
                  <a class="button" href="#" style="display: flex; justify-content: center; align-items: center; text-decoration: none; width: 50%; padding: 10px 0; margin-left: 25%; margin-bottom: 40px; border-radius: 3px; color:#af8a65; font-size: 16px; font-weight: 600; text-align: center; text-transform: uppercase; letter-spacing: 0.3px; background: transparent; border: 1px solid #6D4925; transition: 0.5s; transform: skew(-10deg);">Visit us</a>
                </div>
         </main>

      <footer>
        <div class="social" style="display: flex; justify-content: center; align-items: center;">
          <a href="https://t.me/ClassicoDesign_bot" target="_blank"><i class="fa-brands fa-telegram" style="color: #af8a65; font-size: 25px; margin: 10px; margin-bottom: 20px; transition: 0.5s;"></i></a>
          <a href="https://www.google.com/" target="_blank"><i class="fa-brands fa-google" style="color: #af8a65; font-size: 25px; margin: 10px; margin-bottom: 20px; transition: 0.5s;"></i></a>
          <a href="https://wa.me/351924376890?text=Hello!+I+have+a+project+to+present+to+you+:D" target="_blank"><i class="fa-brands fa-whatsapp" style="color: #af8a65; font-size: 25px; margin: 10px; margin-bottom: 20px; transition: 0.5s;"></i></a>
          <a href="contact.html"><i class="fa-solid fa-envelope" style="color: #af8a65; font-size: 25px; margin: 10px; margin-bottom: 20px; transition: 0.5s;"></i></a>
         </div>
      </footer>
      
    </div>   
</body>
</html>
` 

const sendMail = async (req, res) => {
  const { to, subject, body} = req.body

  send(to, subject, html)

  return res.json("E-mail enviado com sucesso !")
}
/*   -----GMAIL--------
const sendMail = async () => {
  const mailSent = await transporter.sendMail({
    name: "Athos Chaves",
    from: "athos.chaves94@gmail.com",
    subject: "Assunto do e-mail",
    text: "Texto do E-mail",
    to: ["athos.chaves94@gmail.com","a.thos_chaves@hotmail.com"],
    html
   })
    
    return console.log("E-mail enviado com sucesso!")
}
*/

module.exports = {
    sendMail 
} 
