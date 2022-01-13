import {Schema, model} from 'mongoose'

const localTypeSchema = new Schema({
    name: String
}, {
    versionKey: false
})

export default model('localType', localTypeSchema)