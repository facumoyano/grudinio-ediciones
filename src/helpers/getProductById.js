import data from '../data'

const getProductById = (id) => {
    return data.find(producto => producto.id === id)
}

export default getProductById