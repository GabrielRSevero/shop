import prisma from "../../../services/prisma/prismaClient";

class CreateProductsUseCase {
  async execute(name: string, price: number) {

    const product = await prisma.product.create({
      data: {
        name, price
      }
    })

    return product

  }
}

export default CreateProductsUseCase