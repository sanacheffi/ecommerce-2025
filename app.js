const express=require('express') 
const mongoose=require('mongoose') 
const dotenv=require('dotenv')
const cors=require('cors')
const app=express()
const CategorieRouter =require("./routes/categorie.route")
const scategorieRouter =require("./routes/scategorie.route")
const articleRouter =require("./routes/article.route")
const chatbotRouter=require("./routes/chatbot.route")
const userRouter =require("./routes/user.route")
const chatbotRequeteRouter = require("./routes/chatbot-requete.route")
const paymentRouter =require("./routes/payment.route");
const path = require('path'); // Ajout de l'importation de path
app.use(express.json())
app.use(cors())
dotenv.config()

// app.get('/',(req,res) =>{
//     res.send("binevenue dans notre site")
// })

mongoose.connect(process.env.DATABASECLOUD)
.then(()=>{console.log("connexion a la base de donnees est reussie")})
.catch((error)=>{console.log("imposible de connecte a la base de donnee",error)
    process.exit()
})

app.use('/api/categories', CategorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles', articleRouter);
app.use("/api/chat",chatbotRouter);
app.use('/api/users', userRouter);
app.use('/api/chatbot', chatbotRequeteRouter);
app.use('/api/payment', paymentRouter);

//dist reactjs
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', (req, res) => { res.sendFile(path.join(__dirname,
'./client/build/index.html')); });

app.listen(process.env.PORT,function(){
    console.log(`serveur is listen on port ${process.env.PORT}`)
})
module.exports = app;