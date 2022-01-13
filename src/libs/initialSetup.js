import Role from '../models/Role'
import localType from '../models/subCategories/localType';
import saleType from '../models/subCategories/saleType';

export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount()

        if(count > 0) return;

        const values = await Promise.all([
            new Role({name: 'user'}).save(),
            new Role({name: 'moderator'}).save(),
            new Role({name: 'admin'}).save()
        ])
        
        console.log(values);
    } catch (error) {
        console.error(error);
    }
    
}

export const createLocalTypes = async () => {
    try {
        const count = await localType.estimatedDocumentCount()

        if(count > 0) return;

        const values = await Promise.all([
            new localType({name: 'Habitacion'}).save(),
            new localType({name: 'Casa'}).save(),
            new localType({name: 'Townhouse'}).save(),
            new localType({name: 'Apartamento'}).save(),
            new localType({name: 'Hotel'}).save(),
            new localType({name: 'Oficina'}).save(),
            new localType({name: 'Local'}).save(),
            new localType({name: 'Casa de playa'}).save(),
            new localType({name: 'Edificio'}).save(),
        ])
        
        console.log(values);
    } catch (error) {
        console.error(error);
    }
    
}

export const createSaleTypes = async () => {
    try {
        const count = await saleType.estimatedDocumentCount()

        if(count > 0) return;

        const values = await Promise.all([
            new saleType({name: 'Alquilar por dia'}).save(),
            new saleType({name: 'Alquilar por mes'}).save(),
            new saleType({name: 'Vender'}).save(),
        ])
        
        console.log(values);
    } catch (error) {
        console.error(error);
    }
    
}