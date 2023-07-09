import { Request, Response } from "express";
import DeleteProductUseCase from "./DeleteProductUseCase";

class DeleteProductController {
  async handle(request: Request, response: Response) {

    const { id } = request.params
    
    const useCase = new DeleteProductUseCase

    try {
      useCase.execute(Number(id))

      return response.json(`Registro de id: ${id} deletado com sucesso`)
    } catch (error) {
      return response.json(error)
    }
  } 
}

export default DeleteProductController