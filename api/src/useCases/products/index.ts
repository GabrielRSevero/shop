import CreateProductsContoller from "./create/CreateProductsController"
import DeleteProductController from "./delete/DeleteProductController"
import FindProductController from "./find/FindProductController"
import ListProductsController from "./list/ListProductsController"

const create = new CreateProductsContoller()

const list = new ListProductsController()

const find = new FindProductController()

const del = new DeleteProductController()

export { list, find, create, del }