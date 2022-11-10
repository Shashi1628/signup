const express = require("express");
const app = express();
const port = 4000;
app.use(express.json())//for reading json request
app.get("/", (req, res) => {
res.send("Hello World!");
});


var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});


con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});


app.post("/sampleapi", (req, res) => {
res.send("Sample Express Route!");
});

const otpGenerator = require('otp-generator')
const nodemailer = require('nodemailer')
app.post('/otp', (req, res)=>{
    let email = req.body.email
    let otp = otpGenerator.generate(6, 
        {
            upperCaseAlphabets:false,
            specialChars:false
        })
        let sql = "update crm.tblusers set txtOTP = '"+ otp +"' where txtEmail = '"+ email +"';"
        con.query(sql, function(err, result){
            if (err) throw err
            res.send(result)
        })
        let transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "madhavamvs1@gmail.com",
                pass: "osrwdxwbyfivqivz",
            }
        })
        let mailOptions = {
            from: "madhavamvs1@gmail.com", 
            to:'madhavamvs3@gmail.com', 
            subject: "verify your otp", 
            text: "your otp is"+ otp,  
        }
        transport.sendMail(mailOptions, function(error, response){
          if(error){
             res.send("Email could not sent due to error: "+error);
             console.log('Error');
           }else{
             res.send("Email has been sent successfully");
             console.log('mail sent');
          } 
        })
})


app.post("/addition", (req, res) => {
let a = req.body.numone;
let b = req.body.numtwo;
let sum = a + b;
res.send("Result=" + sum);
});




app.listen(port, () => {
console.log(`Example app listening on port http://localhost:${port}`);
});

















// const otpGenerator = require('otp-generator')
// const express = require('express');
// const app = express();
// const port = 5000;

// app.use(express.json());

// const cors=require("cors");
// app.use(cors());

// var nodemailer = require("nodemailer");
// var mysql = require("mysql");

// var con = mysql.createConnection({
// //   host: "127.0.0.1",
// //   port:"3306",
// //   user: "root",
// //   password: "password",
// //   database: "users",
// host: "localhost",
// user: "root",
// password: "password",
// });
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });



// app.post('/otpgenerator', (req, res) => {
//     let email = req.body.email
//     let otp=otpGenerator.generate(6,{
//     upperCaseAlphabets:false,
//     specialChars:false,
// });
// let sql ="update tblusers set txtotp='"+otp+"' where  where txtemail= '"+ email +"';"
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("value inserted");
//     res.send(result)
// });


// var transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "shashidharvadla12@gmail.com",
//       pass: "ivuolvwdlxhgmyos"
//     },
//   });



//   var mailOptions = {
//     from: "shashidharvadla1@gmail.com",
//     to: "shashidharvadla12@gmail.com",
//     subject: "otp verify",
//     text: "otp:"+otp,
//   };
// //   email=req.body.email;

//   transporter.sendMail(mailOptions, (error, info) =>{
//     if (error) {
//         res.send("Email could not sent due to error: "+error);
//      return console.log(error);
//     } 
//     console.log("message sent:%s",info.messageId);
//     console.log("preview url:%s",nodemailer.getTestMessageUrl(info));
//     res.send(otp);
//   });
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port http://localhost:${port}`);
//     });

const express = require("express");
const app = express();
const port = 5006;
app.use(express.json())//for reading json request
app.get("/", (req, res) => {
res.send("Hello World!");
});

var cors = require('cors');
app.use(cors());
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});


con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});


app.post("/sampleapi", (req, res) => {
res.send("Sample Express Route!");
});

const otpGenerator = require('otp-generator')
const nodemailer = require('nodemailer')
// app.post('/verifyotp', (req, res)=>{
//     let email = req.body.email
//     let otp = otpGenerator.generate(6, 
//         {
//             upperCaseAlphabets:false,
//             specialChars:false
//         })
//         let sql = "update users.tblusers set txtotp = '"+ otp +"' where txtemail = '"+ email +"';"
//         con.query(sql, function(err, result){
//             if (err) throw err
//             res.send(result)
//         })
//         let transport = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: "shashidharvadla12@gmail.com",
//                 pass: "ivuolvwdlxhgmyos",
//             }
//         })
//         let mailOptions = {
//             from: "shashidharvadla12@gmail.com", 
//             to:'shashidharvadla1@gmail.com', 
//             subject: "verify your otp", 
//             text: "otp code is   "+ otp,  
//         }
//         transport.sendMail(mailOptions, function(error, response){
//           if(error){
//              res.send("Email could not sent due to error: "+error);
//              console.log('Error');
//            }else{
//              res.send("Email has been sent successfully");
//              console.log('mail sent');
//           } 
//         })
// })
// app.post('/verifyotp1', (req, res)=>{
//   let firstname=req.body.firstname
//   let lastname= req.body.lastname
//   let email= req.body.email
//   let password= req.body.password
//   let repassword= req.body.repassword
//   let otp = otpGenerator.generate(6, 
//       {
//           upperCaseAlphabets:false,
//           specialChars:false
//       })
//   let sqlemail="select id from users.tblusers where txtemail='"+ email +"';"
//   let sql = "update users.tblusers set txtotp = '"+ otp +"' where txtemail = '"+ email +"';"
//       con.query(sqlemail, function(err, result1){
//           if (err) throw err;
//           console.log("fetching  Details");
//       if(result1==""){
//         con.query(sql, function(err, result){
//           if (err) throw err
//           res.send(result)
//         })
        
//       let transport = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//               user: "shashidharvadla12@gmail.com",
//               pass: "ivuolvwdlxhgmyos",
//           }
//       })
//       let mailOptions = {
//           from: "shashidharvadla12@gmail.com", 
//           to:'shashidharvadla1@gmail.com', 
//           subject: "verify your otp", 
//           text: "otp code is   "+ otp,  
//       }
//       transport.sendMail(mailOptions, function(error, response){
//         if(error){
//            res.send("Email could not sent due to error: "+error);
//            console.log('Error');
//          }else{
//            res.send("Email has been sent successfully");
//            console.log('mail sent');
//         } 
//       })
//     }
    
//     else{
// res.send("Email exists")
//     }
//   })
// })














// app.post('/verifyotp2', (req, res)=>{
//   let firstname=req.body.firstname
//   let lastname= req.body.lastname
//   let email= req.body.email
//   let password= req.body.password
//   let repassword= req.body.repassword
//   let otp = otpGenerator.generate(6, 
//       {
//           upperCaseAlphabets:false,
//           specialChars:false
//       })
//   let sqlemail="select id from users.tblusers where txtemail='"+ email +"';"
//   let sqlinsert="INSERT INTO users.tblusers (txtfirstname,txtlastname,txtemail,txtpassword,txtrepassword)VALUES ('"+ firstname +"','"+ lastname +"','"+ email +"','"+ password +"','"+ repassword +"');"
//   let sql = "update users.tblusers set txtotp = '"+ otp +"' where txtemail = '"+ email +"';"
//       con.query(sqlemail, function(err, result1){
//           if (err) throw err;
//           console.log("fetching  Details");

      
//         if(result1!=""){
//           res.send("email exist")
//         }
//         else if(password!==repassword){
//           res.send("password should match")
//         }
//         else{
//           con.query(sqlinsert, function(err, result2){
//             if (err) throw err;
//             console.log("inserting Details");
//           })
           
//         con.query(sql, function(err, result){
//           if (err) throw err;
//           res.send(result)
//         })
        
//       let transport = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//               user: "shashidharvadla12@gmail.com",
//               pass: "ivuolvwdlxhgmyos",
//           }
//       })
//       let mailOptions = {
//           from: "shashidharvadla12@gmail.com", 
//           to:'shashidharvadla1@gmail.com', 
//           subject: "verify your otp", 
//           text: "otp code is   "+ otp,  
//       }
//       transport.sendMail(mailOptions, function(error, response){
//         if(error){
//            res.send("Email could not sent due to error: "+error);
//            console.log('Error');
//          }else{
//            res.send("Email has been sent successfully");
//            console.log('mail sent');
//         } 
//       })
//     }
    
// //     else{
// // res.send("Email exists")
// //     }
//   })
// })




app.post('/verifyotp5', (req, res)=>{
  let firstname=req.body.firstname
  let lastname= req.body.lastname
  var email= req.body.email
  let password= req.body.password
  let repassword= req.body.repassword
// var k=""+ email +"";  
  let otp = otpGenerator.generate(6, 
      {
          upperCaseAlphabets:false,
          specialChars:false
      })
  let sqlemail="select id from users.tblusers where txtemail='"+ email +"';"
  let sqlinsert="INSERT INTO users.tblusers (txtfirstname,txtlastname,txtemail,txtpassword,txtrepassword,txtotp)VALUES ('"+ firstname +"','"+ lastname +"','"+ email +"','"+ password +"','"+ repassword +"','"+ otp +"');"
  
        con.query(sqlemail, function(err, result1){
        if (err) {
          console.log(err);
          // res.sendStatus(500);
          return;
      }
          console.log("fetching  Details");

      
        if(result1!=""){
          // const response = {
          //   statusCode: 200,
          //   headers: {
          //     "Access-Control-Allow-Origin": "*",
          //     "Access-Control-Allow-Credendials": true,
          //   }, body: JSON.stringify("email exist"),
          // };
          // res.send(response);
          res.send("email exist");
          return;
        }
        else{
          con.query(sqlinsert, function(err, result2){
            if (err) {
              console.log(err);
              // res.sendStatus(500);
              return;
          }
            console.log("inserting Details");
            // const response = {
            //   statusCode: 200,
            //   headers: {
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Allow-Credendials": true,
            //   }, body: JSON.stringify("detailshas been added"),
            // };
            // res.send(response);
            res.send("inserted");
            return;
          });
        
      let transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
              user: "shashidharvadla12@gmail.com",
              pass: "ivuolvwdlxhgmyos",
          }
      })
      console.log("go");
      let mailOptions = {
          from: "shashidharvadla12@gmail.com", 
          // to:"shashidharvadla1@gmail.cohm",
          to:{email},
          subject: "verify your otp", 
          text: "otp code is   "+ otp,  
      }
      transport.sendMail(mailOptions, function(error, response){
        if(error){
           res.send("Email could not sent due to error: "+error);
           console.log('Error');
         }else{
           res.send("Email has been sent successfully and otp sent ");
           console.log('mail sent');
        } 
      })
    }
    console.log("otp sent");
//     else{
// res.send("Email exists")
//     }
  
  })
  
})


















// app.post('/verify9966', (req, res)=>{
//   let otp=req.body.otp

 
//   let sqlotp="select * from users.tblusers where txtotp='"+ otp +"';"

//       con.query(sqlotp, function(err, result){
//         if (err) {
//           console.log(err);
//           res.sendStatus(500);
//           return;
//       }
//           console.log("fetching  Details");

      
//         if(result==""){

//           res.send("incorrect otp");

//           return;
//         }
//         else{
         
  
//             res.send("otp is correct");
//             return;
        
        
   
 
  
//     }
    
//   })
// })



// app.post('/verify9848', (req, res)=>{
//   let otp=req.body.otp
//  let email=req.body.otp
 
//   let sqlupdate="update users.tblusers set txtotp = '"+ otp +"' where txtemail = '"+ email +"'"
//       con.query(sqlupdate, function(err, result){
//         if (err) {
//           console.log(err);
//           res.sendStatus(500);
//           return;
//       }
//           console.log("fetching  Details");

      
//         if(result==""){

//           res.send("incorrect otp");
          
//           return;
//         }
//         else{
         
  
//             res.send("otp is correct");
//             return;
        
        
   
 
  
//     }
    
//   })
// })






























// app.post('/verifyotp3', (req, res)=>{
//   let firstname=req.body.firstname
//   let lastname= req.body.lastname
//   let email= req.body.email
//   let password= req.body.password
//   let repassword= req.body.repassword
//   let otp = otpGenerator.generate(6, 
//       {
//           upperCaseAlphabets:false,
//           specialChars:false
//       })
//   let sqlemail="select id from users.tblusers where txtemail='"+ email +"';"
//   let sqlinsert="INSERT INTO users.tblusers (txtfirstname,txtlastname,txtemail,txtpassword,txtrepassword)VALUES ('"+ firstname +"','"+ lastname +"','"+ email +"','"+ password +"','"+ repassword +"');"
//   let sql = "update users.tblusers set txtotp = '"+ otp +"' where txtemail = '"+ email +"';"
//       con.query(sqlemail, function(err, result1){
//           if (err) throw err;
//           console.log("fetching  Details");

      
//         if(result1!=""){
//           const response = {
//             statusCode: 200,
//             headers: {
//               "Access-Control-Allow-Origin": "*",
//               "Access-Control-Allow-Credendials": true,
//             },
//           };
//           res.send("email exist")
//         }
//         else if(password!==repassword){
//           const response = {
//             statusCode: 200,
//             headers: {
//               "Access-Control-Allow-Origin": "*",
//               "Access-Control-Allow-Credendials": true,
//             },
//           };
//           res.send("password should match")
//         }
//         else{
//           con.query(sqlinsert, function(err, result2){
//             if (err) throw err;
//             console.log("inserting Details");
//           })
           
//         con.query(sql, function(err, result){
//           if (err) throw err;
//           res.send(result)
//         })
//         const response = {
//           statusCode: 200,
//           headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Credendials": true,
//           },
//         };
        
//       let transport = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//               user: "shashidharvadla12@gmail.com",
//               pass: "ivuolvwdlxhgmyos",
//           }
//       })
//       let mailOptions = {
//           from: "shashidharvadla12@gmail.com", 
//           to:'shashidharvadla1@gmail.com', 
//           subject: "verify your otp", 
//           text: "otp code is   "+ otp,  
//       }
//       transport.sendMail(mailOptions, function(error, response){
//         if(error){
//            res.send("Email could not sent due to error: "+error);
//            console.log('Error');
//          }else{
//            res.send("Email has been sent successfully");
//            console.log('mail sent');
//         } 
//       })
//     }
    
// //     else{
// // res.send("Email exists")
// //     }
//   })
// })





// app.post("/addition", (req, res) => {
// let firstname = req.body.firstname;
// let lastname = req.body.lastname;
// let sql =
//     " "
//   let result = await new Promise((resolve, reject) => {
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("login Details");
//       if (result != "") {
//         const token = jwt.sign(
//           { email: email, password: password },
//           "secretkey"
//         );
//         // resolve({ body: JSON.stringify(token) });
//         const response = {
//           statusCode: 200,
//           headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Credendials": true,
//           },
//           body: JSON.stringify(result) + JSON.stringify(token),
//           // ,body: JSON.stringify(token)
//         };

//         resolve(response);
//         // const token = jwt.sign({ email: email, password: password }, "secretkey");
//         // resolve({ body: JSON.stringify(token) });
//         // resolve(response,token);
//         // console.log("Login Success:" + JSON.stringify(result));
//       } else {
//         reject({ body: "Login details incorrect!" });
//         return;
//       }
//     });
//   });
//   return result;
// };
// res.send("Result=" + sum);
// });


// app.post("/otpverify", (req, res) => {
//     let  = req.body.numone;
//     let b = req.body.numtwo;
//     let sum = a + b;
//     res.send("Result=" + sum);
//     });



app.listen(port, () => {
console.log(`Example app listening on port http://localhost:${port}`);
});