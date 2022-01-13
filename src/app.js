import express from 'express';
import morgan from 'morgan';
// import {createRoles, createLocalTypes, createSaleTypes} from './libs/initialSetup';
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import cors from 'cors'


const app = express();
// createRoles();
// createLocalTypes();
// createSaleTypes();
// se puede ahorrar el initial setup si trabajo directamente con el atlas de mongodb
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
app.get('/', (req, res) => {
    res.json('welcome')
})

app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)

export default app;