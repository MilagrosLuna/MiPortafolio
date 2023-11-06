import Container from "./container";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import MessageForm from "./messageForm";

export default function Footer() {
  return (
    <div className="bg-black text-white text-sm border- border-theme-light-blue">
      <Container>
        <div className="flex flex-col md:flex-row xl:mx-8 py-6">
          <div className=" md:w-1/3">
            <div className="bg-black text-white p-6 rounded">
              <h3 className="text-lato text-2xl font-light mb-4">
                Información
              </h3>
              <a
                href="https://wa.me/5491159734781"
                className="flex items-center mb-2"
              >
                <FaPhoneAlt />
                <p className="ml-2">Celular: 1159734781</p>
              </a>
              <div className="w-full flex items-start">
                <div className="flex items-center">
                  <FaCompass />
                  <p className="ml-2">Ubicacion: </p>
                </div>
                <div className="ml-1 w-1/2">
                  <p>Buenos Aires, Argentina.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 ">
            <MessageForm />
          </div>
        </div>
      </Container>
      <div className="text-center py-4">
        <p>
          &copy; 2023 <b>Milagros Luna</b>. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
