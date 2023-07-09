import prisma from "../../../services/prisma/prismaClient";

class ListProductsUseCase {
  async execute() {

    const products = await prisma.product.findMany()

    return products

  }
}

export default ListProductsUseCase