import { Request, Response } from "express";
import CreateProductsUseCase from "./CreateProductsUseCase";

class CreateProductsContoller {
  async handle(request: Request, response: Response) {

    const { name, price } = request.body

    const useCase = new CreateProductsUseCase

    const product = await useCase.execute(name, price)

    return response.json(product)

  }
}

export  default CreateProductsContoller