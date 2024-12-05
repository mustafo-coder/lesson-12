import { useEffect, useState } from 'react'
import { Navbar, Products } from './components'
import { getProducts } from './service/api'

const App = () => {
  const [products, setProducts] = useState([])
  const [user, setUser] = useState(null)

  const ls = localStorage.getItem('user')
  if(ls){
    setUser(ls)
  }

  useEffect(() => {
    const getPrd = async () => {
      const data = await getProducts()
      setProducts(data);
    } 
    getPrd()    
  }, [])

  return (
    <div>
      <Navbar user={user}/>
      <Products products={products}/>
    </div>
  )
}

export default App