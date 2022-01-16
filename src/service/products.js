import api from './Api'
const productsDataProvider = {
    getproducts() {
        return api.get('/products')
    },
    getSingleProduct(params) {
        return api.query(`/products/${params}` )
    },
    addProduct(params = {}) {
        return api.post('/products',{params})
    },
    updateProduct(params={},id){
        return api.put(`/products/${id}`,{params})
    }
}

export default productsDataProvider