import express from "express"
import morgan from "morgan"
import cors from "cors"
const expressConfig = (app) =>{

    app.use(morgan('dev'));
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(cors())
    
}
export default expressConfig