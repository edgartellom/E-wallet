import Phones_home from "../../commons/Phone_home/Phone_home";
import Products_List from "../../components/Products_List/Products_List";
import Banner from "./Banner";
import Carrusel from "../../commons/Carrusel/Carrusel";

const HomePage = () => {
  return (
    <>
  
      <section className="py-5">
        <div>
         <Carrusel/>
         <div>
         </div>
         <div>
          <Phones_home/>
         </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
