import Phones_home from "../../commons/Phone_home/Phone_home";
import Carrusel from "../../components/Carrucel/Carrucel";
import Products_List from "../../components/Products_List/Products_List";
import Banner from "./Banner";

const HomePage = () => {
  return (
    <>
  
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
         <Carrusel/>
         <Phones_home/>
        </div>
      </section>
    </>
  );
};

export default HomePage;
