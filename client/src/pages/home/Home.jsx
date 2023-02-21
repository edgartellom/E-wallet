import PhoneHome from "../../commons/phoneHome/PhoneHome";
import Carrusel from "../../commons/carrusel/Carrusel";

const Home = () => {
  return (
    <>
      <section className="py-5">
        <div>
          <Carrusel />
          <div>
            <PhoneHome />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
