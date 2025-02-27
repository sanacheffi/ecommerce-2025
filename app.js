const express=require('express') 
const mongoose=require('mongoose') 
const dotenv=require('dotenv')
const cors=require('cors')
const app=express()
const CategorieRouter =require("./routes/categorie.route")
const scategorieRouter =require("./routes/scategorie.route")
const articleRouter =require("./routes/article.route")
const chatbotRouter=require("./routes/chatbot.route")
app.use(express.json())
app.use(cors())
dotenv.config()

app.get('/',(req,res) =>{
    res.send("binevenue dans notre site")
})

mongoose.connect(process.env.DATABASECLOUD)
.then(()=>{console.log("connexion a la base de donnees est reussie")})
.catch((error)=>{console.log("imposible de connecte a la base de donnee",error)
    process.exit()
})

app.use('/api/categories', CategorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles', articleRouter);
app.use("/api/chat",chatbotRouter);
app.listen(process.env.PORT,function(){
    console.log(`serveur is listen on port ${process.env.PORT}`)
})
module.exports = app;