import app from "./app"
import productsRouter from "./routes/products.routes"

app.use("/products", productsRouter)

app.listen(3036, () => console.log("Server is runing at port 3036"))