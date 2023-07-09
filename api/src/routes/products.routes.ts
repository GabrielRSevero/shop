import { Router } from "express";
import { create, del, find, list } from "../useCases/products";

const productsRouter = Router()

productsRouter.get('/', list.handle)

productsRouter.post('/', create.handle)

productsRouter.get('/:id', find.handle)

productsRouter.delete('/:id', del.handle)

export default productsRouter