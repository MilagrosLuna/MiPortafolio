export default function AboutMe() {
  return (
<div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h1 className="text-center text-lg font-semibold leading-8 text-gray-900 sm:text-5xl">
          Sobre Mi
        </h1>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-800 sm:text-xl sm:leading-9">
            <p>
              Mi nombre es Milagros Luna, y soy estudiante de programación.
              Actualmente, estoy en la recta final de mi carrera técnica
              universitaria en programación en la UTN (Universidad Tecnológica
              Nacional), lo que me acerca cada vez más a mi meta de graduarme
              como profesional en este campo.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="/img/logo.png"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Milagros Luna</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600">Junior Developer</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
