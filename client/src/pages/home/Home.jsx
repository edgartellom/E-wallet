import { PhoneHome, Carrusel } from "../../components";

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
