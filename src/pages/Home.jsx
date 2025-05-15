import Banner from "../components/Banner";
import Destaques from "../components/Destaques";
import Produtos from "../components/Produtos";
import Oferta from '../components/Oferta';

const Home = () => {
    return (
        <>

            <main>
                <Banner />
                <Destaques />
                <Produtos />
                <Oferta />
            </main>

        </>
    );
}

export default Home;