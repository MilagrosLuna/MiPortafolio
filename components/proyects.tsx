import Image from "next/image";
export default function Proyects() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "App basica para consultar el clima, realizada para practicar uso de API.",
      imageSrc: "/proyects/climas.jpeg",
      githubLink: "https://github.com/MilagrosLuna/ClimaApp",
    },
    {
      title: "Proyecto 2",
      description: "Apps desarolladas en react native. Uso de linterna, camara, vibración, sonidos y firebase, tanto juegos como adminstración de usuarios",
      imageSrc: "/proyects/native.png",
      githubLink: "https://github.com/MilagrosLuna/PracticaProfesional",
    },
    {
      title: "Proyecto 3",
      description: "Sala de juegos online, hecha en angular con uso de firebase, contiene un chat en tiempo real y 4 juegos",
      imageSrc: "/proyects/juegos.jpg",
      githubLink: "https://github.com/MilagrosLuna/Juegos",
    }, {
        title: "Proyecto 3",
        description: "Clinica online, permite la administracion de usuarios, gestion de turnos y especialistas. Se encuentra en progreso...",
        imageSrc: "/proyects/clinica.jpg",
        githubLink: "https://github.com/MilagrosLuna/ClinicaOnline",
      },
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 sm:text-4xl">
        Mis Proyectos
      </h2>
      <h3 className="text-center text-lg font-semibold leading-8 text-gray-700 sm:text-1xl">Los deploy se encuentran en los repositorios</h3>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-4 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden transition transform hover:shadow-lg"
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
