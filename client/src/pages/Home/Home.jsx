import Products_List from "../../components/Products_List/Products_List";
import Banner from "./Banner";
import Carrusel from "../../commons/Carrusel/Carrusel";

const HomePage = () => {
  return (
    <>
      <section className="py-5">
        <div>
          <Carrusel />
        </div>
      </section>
    </>
  );
};

export default HomePage;
