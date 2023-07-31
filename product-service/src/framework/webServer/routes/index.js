import express from "express";
import productRouter from "../routes/product/productRoutes.js";

const routes = (app, express) => {
  app.use('/api/v1/product', productRouter(express));
};

export default routes;
