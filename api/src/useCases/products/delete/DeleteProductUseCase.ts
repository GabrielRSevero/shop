import prisma from "../../../services/prisma/prismaClient";

class DeleteProductUseCase {
  async execute(id: number) {

    await prisma.product.delete({
      where: { id }
    })

  }
}

export default DeleteProductUseCase