import mongoose from "mongoose";


const Connection=async()=>{
    
try{
   await mongoose.connect(process.env.MONGODB_URI,{
      dbName:process.env.DB_NAME,
      user:process.env.DB_USER,
      pass:process.env.DB_PASS

   }
      )
   console.log('Database connected successfully')

}
catch(error){
   console.log(error)
}
}
export default Connection