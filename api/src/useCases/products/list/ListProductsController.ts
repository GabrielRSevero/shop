import { Request, Response } from "express";
import ListProductsUseCase from "./ListProductsUseCase";

class ListProductsController {
  async handle(request: Request, response: Response) {

    const useCase = new ListProductsUseCase

    const products = await useCase.execute()

    return response.json(products)

  }
}

export default ListProductsController