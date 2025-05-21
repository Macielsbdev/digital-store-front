import { Outlet } from "react-router";
import HeaderAuth from "../components/HeaderAuth";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return ( 
        <>
        <HeaderAuth />
        <div className="bg-gradient-to-b from-[#B5B6F2] to-[#EFEFFF] pt-[60px] px-[30px] pb-[80px] xl:pt-[120px] xl:px-[100px] xl:pb-[160px]"></div>
        <Outlet />
        <Footer />
        </>
     );
}
 
export default AuthLayout;