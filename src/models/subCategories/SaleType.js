import {Schema, model} from 'mongoose'

const saleTypeSchema = new Schema({
    name: String
}, {
    versionKey: false
})

export default model('saleType', saleTypeSchema)