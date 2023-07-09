import prisma from "../../../services/prisma/prismaClient";

class FindProductUseCase {
  async execute(id: number) {

    const product = await prisma.product.findUniqueOrThrow({
      where: { id }
    })

    return product

  }
}

export default FindProductUseCase