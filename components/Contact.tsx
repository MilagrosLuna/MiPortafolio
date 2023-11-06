import Image from "next/image";
import Link from "next/link";
export default function Contacto() {
  var linkCV =
    "https://drive.google.com/file/d/1KJhFnKP0khDP-AjYkTDWJBho2ibS_cTE/view?usp=sharing";
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Link href="https://github.com/MilagrosLuna" target="_blank">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/img/git.png"
              alt="github"
              width={60}
              height={60}
              quality={100}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/milagroslunam/"
            target="_blank"
          >
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/img/Ln.png"
              alt="linkedin"
              width={60}
              height={60}
              quality={100}
            />
          </Link>
          <Link
            href={linkCV}
            target="_blank"
            download
            className="text-center text-lg font-semibold leading-8 text-gray-900 sm:text-2xl block"
          >
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/img/cv.png"
              alt="cv"
              width={60}
              height={60}
              quality={100}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
