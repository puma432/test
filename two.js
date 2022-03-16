// 2. Паттерн async/await представляет собой простое ожидание промиса, получение значения и продолжение функции.

const fetchProducts = () => Promise.resolve({data: [1,2,3]})

const getProducts = () => {
  fetchProducts().then(data => {
    console.log('data', data)
  })
}

getProducts()
const getProducts = async () => {
  console.log('data', await fetchProducts())
}
console.log(getProducts())