// https://reactrouter.com/en/main/hooks/use-navigate
import { useNavigate } from 'react-router'
import banner from '../assets/banner.png'

export default function Home() {
    //  Hook que permite trocar de página programaticamente e sem a necessidade de nenhum componente, 
    //  ou seja, utilizando apenas a url como parâmetro. Para isso o atribuímos a função navigate (poderia ser outro nome).
    const navigate = useNavigate()
    
    return (
        <div className="content-product">
            <header>
                <div className="user">
                    <span>Usuário</span>
                </div>
            </header>

            <section className="banner">
                <img src={banner} alt="Banner" />
                <div className="text-intro">
                    <p> </p>
                    {/* No click no botão chamados a função passando o caminho desejado, direcionando o usuário para a página de produtos*/}
                    {/* Obs.: Ele é utilizado quando precisamos realizar a navegação com base em eventos ou alguma lógica específica. */}
                    <button className="more-info" onClick={() => navigate('/products')}>Veja os produtos</button>
                </div>
            </section>
        </div >
    )
}
