import { Request, Response } from "express";
import FindProductUseCase from "./FindProductUseCase";

class FindProductController {
  async handle(request: Request, response: Response) {

    const { id } = request.params

    const useCase = new FindProductUseCase

    const product = await useCase.execute(Number(id))

    return response.json(product)

  }
}

export default FindProductController