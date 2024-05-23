async function Products() {
  const response = await fetch('https://fakestoreapi.com/products')

  const products = await response.json()

  const productInfo = products.map((product) => product.title)

  console.log(productInfo)
  return productInfo
}

export default Products
