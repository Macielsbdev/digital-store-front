import { BrowserRouter } from "react-router";

const Paths = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path= "/" element={<Home />} />
            <Route path= "/produtos" element={<Produtos />} />
        </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;