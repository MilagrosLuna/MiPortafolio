// const styles = {
//   container: {
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//   },
// };
import Image from "next/image";
export default function Skills() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 sm:text-4xl">
          Mis habilidades
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/img/angular.png"
            alt="Angular"
            width={48}
            height={48}
            quality={100}
            layout="responsive" 
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/img/ts.png"
            alt="Typescript"
            width={48}
            height={48}
            quality={100}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/img/react.png"
            alt="React"
            width={48}
            height={48}
            quality={100}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/img/fire.png"
            alt="Firebase"
            width={48}
            height={48}
            quality={100}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/img/css.png"
            alt="Css"
            width={48}
            height={48}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
