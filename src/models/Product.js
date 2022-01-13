import { Schema, model } from "mongoose";
// import saleType from './subCategories/saleType'
// import localType from './subCategories/localType'
// import User from './User'

const productSchema = new Schema({
    username_id: {
        ref: 'User',
        type: Schema.Types.ObjectId
    },
    name: String,
    definition: String,
    location: String,
    state: String,
    saleType: {
        ref: 'SaleType',
        type: Schema.Types.ObjectId  
    }, //alquiler, venta, ambos
    localType: {
        ref: 'LocalType',
        type: Schema.Types.ObjectId
    }, //estudio, casa, apartamento, oficina, habitacion, hotel
    mts: Number,
    salePrice: Number,
    rentalPrice: Number,
    imgURL: String,
    description: 
        {
            bedrooms: Number,
            bathroom: Number,
            parking: Number,
            gas: Boolean,
            water: Boolean,
            internet: Boolean    
        },

},{
    timestamps: true,
    versionKey: false,
})

export default model('Product', productSchema)