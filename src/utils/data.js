export const getData=async ()=> {
  const response = await fetch('https://fakestoreapi.com/products')
  return response.json()
}