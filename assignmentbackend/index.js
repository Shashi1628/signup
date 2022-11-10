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








// app.post('/verifyotp5', (req, res)=>{
//   let firstname=req.body.firstname
//   let lastname= req.body.lastname
//   var email= req.body.email
//   let password= req.body.password
//   let repassword= req.body.repassword
// // var k=""+ email +"";  
//   let otp = otpGenerator.generate(6, 
//       {
//           upperCaseAlphabets:false,
//           specialChars:false
//       })
//   let sqlemail="select id from users.tblusers where txtemail='"+ email +"';"
//   let sqlinsert="INSERT INTO users.tblusers (txtfirstname,txtlastname,txtemail,txtpassword,txtrepassword,txtotp)VALUES ('"+ firstname +"','"+ lastname +"','"+ email +"','"+ password +"','"+ repassword +"','"+ otp +"');"
  
//         con.query(sqlemail, function(err, result1){
//         if (err) {
//           console.log(err);
//           res.sendStatus(500);
//           return;
//       }
//           console.log("fetching  Details");

      
//         if(result1!=""){
   
//           res.send("email exist");
//           return;
//         }
//         else{
//           con.query(sqlinsert, function(err, result2){
//             if (err) {
//               console.log(err);
//               res.sendStatus(500);
//               return;
//           }
//             console.log("inserting Details");
  
//             res.send("inserted");
//             return;
//           });
        
//       let transport = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//               user: "shashidharvadla12@gmail.com",
//               pass: "ivuolvwdlxhgmyos",
//           }
//       })
     
//       let mailOptions = {
//           from: "shashidharvadla12@gmail.com", 
//           to:""+email,
//           // to:{email},
//           subject: "verify your otp", 
//           text: "otp code is   "+ otp,  
//       }
//       transport.sendMail(mailOptions, function(error, response){
//         if(error){
//            res.send("Email could not sent due to error: "+error);
//            console.log('Error');
//          }else{
//            res.send("Email has been sent successfully and otp sent ");
//            console.log('mail sent');
//         } 
//       })
//     }
   
  
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
  let sqlinsert="INSERT INTO users.tblusers (txtfirstname,txtlastname,txtemail,txtpassword,txtrepassword,txtotp,setflag)VALUES ('"+ firstname +"','"+ lastname +"','"+ email +"','"+ password +"','"+ repassword +"','"+ otp +"','0');"
  
        con.query(sqlemail, function(err, result1){
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
      }
          console.log("fetching  Details");

      
        if(result1!=""){
   
          res.send("email exist");
          return;
        }
        else{
          con.query(sqlinsert, function(err, result2){
            if (err) {
              console.log(err);
              res.sendStatus(500);
              return;
          }
            console.log("inserting Details");
  
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
     
      let mailOptions = {
          from: "shashidharvadla12@gmail.com", 
          to:""+email,
          // to:{email},
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

app.post('/verify9966', (req, res)=>{
  let otp=req.body.otp

 
  let sqlotp="select * from users.tblusers where txtotp='"+ otp +"';"
  let sqlupdate="update users.tblusers set setflag= '1' where txtotp='"+ otp +"';"
  // let sqlotp="select * from users.tblusers where txtotp='"+ otp +"'and txtemail='"+email+"';"
      con.query(sqlotp, function(err, result){
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
      }
          console.log("fetching  Details");

      
        if(result==""){
          console.log("1");
          res.send("incorrect otp");
          console.log("2");
          return;
        }
        else{
          con.query(sqlupdate, function(err, result2){
            if (err) {
              console.log(err);
              res.sendStatus(500);
              return;
          }
        })
        console.log("update");
            res.send("otp is correct");
            console.log("otp ok");
            return;
        
        
   
 
  
    }
    
  })
})







app.post('/login', (req, res)=>{
  let email=req.body.email
  let password=req.body.password
 
  let sql="select * from users.tblusers where txtemail='"+ email +"' and txtpassword='"+password+"';"
      con.query(sql, function(err, result){
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
      }
          console.log("fetching  Details");

      
        if(result!=""){
          res.send("login ok");
          return;
        }
        else{
            res.send("error");
          
            return;
        
        
   
 
  
    }
    
  })
})




app.post('/resend', (req, res)=>{
  let email=req.body.email

  let otp = otpGenerator.generate(6, 
      {
          upperCaseAlphabets:false,
          specialChars:false
      })
  let sqlupdate="update users.tblusers set txtotp = '"+ otp +"' where txtemail = '"+ email +"'"
   con.query(sqlupdate, function(err, result1){
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
      }
          console.log("updating Details");

        
      let transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
              user: "shashidharvadla12@gmail.com",
              pass: "ivuolvwdlxhgmyos",
          }
      })
     
      let mailOptions = {
          from: "shashidharvadla12@gmail.com", 
          to:""+email,
          // to:{email},
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
   
   )
  
})



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











app.listen(port, () => {
console.log(`Example app listening on port http://localhost:${port}`);
});