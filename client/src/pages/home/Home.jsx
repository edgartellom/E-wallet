import PhoneHome from "../../commons/phoneHome/PhoneHome";
import Carrusel from "../../commons/carrusel/Carrusel";
import Notification from "../../components/samples/notifications.sample";


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