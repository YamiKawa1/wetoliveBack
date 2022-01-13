import Product from '../models/Product'
import LocalTypes from '../models/subCategories/LocalType'
import SaleTypes from '../models/subCategories/SaleType'

const directions = [
    'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg'
]

export const createProduct = async (req, res) =>{
    const {
        // user,
        name,
        definition,
        location, 
        saleType,
        localType,
        mts,
        salePrice,
        rentalPrice,
        state,  
        imgURL,
        description
    } = req.body;

    console.log('saleType',saleType);
    const saleTypeFund = await SaleTypes.findById(saleType, 'name')
    console.log('saleTypeFund',saleTypeFund.name);
    if (!saleTypeFund) {
        return res.json({message: 'Tipo de venta equivocado'})
    }

    console.log('localType',localType);
    const LocalTypeFund = await LocalTypes.findById( localType, 'name')
    console.log('saleTypeFund',LocalTypeFund.name);
    if (!LocalTypeFund) {
        return res.json({message: 'Tipo de local equivocado'})
    }

    
    const newProduct = new Product({
        name: name,
        definition: definition,
        location: location, 
        state: state, 
        saleType: saleType,
        localType: localType,
        mts: mts,
        salePrice: salePrice,
        rentalPrice: rentalPrice, 
        imgURL: imgURL,
        description: description,
    })



    const savedProduct = await newProduct.save()
    res.status(201).json(savedProduct)
}
    

export const getProducts = async (req, res) =>{
    const products = await Product.find();
    res.json(products)
}

export const getProductById = async (req, res) =>{
    const product = await Product.findById(req.params.productid)
    res.json(product)
}

export const updateProductById = async (req, res) =>{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productid, req.body, {
        new: true
    })
    res.status(204).json(updatedProduct)
}

export const deleteProductById = async (req, res) =>{
    const deletedProduct = await Product.findByIdAndDelete(req.params.productid)
    res.status(200).json(deletedProduct)
}