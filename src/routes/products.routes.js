import { Router } from "express";
import * as productsCtrl from '../controllers/products.controller'
import  {authJwt}  from "../midlewares";

const router = Router()

router.get('/', productsCtrl.getProducts)

router.post('/', [authJwt.verifyToken, authJwt.isSeller || authJwt.isAdmin], productsCtrl.createProduct)

router.get('/:productid', productsCtrl.getProductById)

router.put('/:productid', [authJwt.verifyToken, authJwt.isSeller || authJwt.isAdmin], productsCtrl.updateProductById)

router.delete('/:productid', [authJwt.verifyToken, authJwt.isSeller || authJwt.isAdmin], productsCtrl.deleteProductById)

export default router