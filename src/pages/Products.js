import { createContext, useEffect, useState } from "react"
import Item from "../components/Item"
import banner from '../assets/banner.png'
// import axios from 'axios'
// Estamos lendo os dados utilizados deste json
import products from '../products.json'

export const MyContext = createContext()

export default function Products() {
  const [productList, setProductList] = useState([])
  const [qtdPedidos, setQtdPedidos] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setProductList(products.beauty)
  }, [])

  return (
    <div className="content-product">
      <header>
        <div className="user">
          <div>Usuário: <span>{count}</span> qtd pedidos </div>
        </div>
      </header>

      <section className="banner">
        <img src={banner} alt="Banner" />
      </section>

      <section className="main-products">
        {/* Aqui mapeamos o array productList para renderizar cada item da lista. 
        Assim, cada item do array é representado por uma variável que denominamos de 'p' (pode ser outro nome, como produto, item, etc) e um index.
        Utilizamos o index para atribuir uma chave única para cada elemento da lista.
        No componente Item iremos recebemos cada produto via props */}
        
        <MyContext.Provider value={setCount}>
          {productList.map((p, index) => (
            <Item key={index} product={p}/>
            // <Item key={index} infos={{ 'product': p, 'quantidade_pedidos': qtdPedidos, setQtdPedidos }} />
            // <Item key={index} infos={{'product': p, setQtdPedidos }} />
          ))}
        </MyContext.Provider>
      </section>
      <footer></footer>
    </div>
  )
}
