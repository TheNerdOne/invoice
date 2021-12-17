import api from './Api'
const productsDataProvider = {
    getproducts() {
        return api.get('/products')
    },
    getSingleProduct(params = {}) {
        return api.query('/products', { params })
    }
}

export default productsDataProvider