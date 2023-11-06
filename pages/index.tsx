import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/inicio.module.css";
import Head from "next/head";
import Layout from "@/components/layout";
import Skills from "@/components/skills";
import AboutMe from "@/components/aboutMe";
import Details from "@/components/Details";
import Proyects from "@/components/proyects";
export default function Home() {
  console.log(process.env);
  return (
    <>
      <Head>
        <title>Milagros Luna</title>
        <meta name="description" content="Inicio" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Milagros Luna" />
        <meta
          name="keywords"
          content="Milagros Luna, Dieño web, responsive, programacion, hosting,dominio, pagina web, developer,designer,programador,diseñador"
        />
        <meta httpEquiv="Content-Language" content="es" />
      </Head>
      <Layout>
        <div className=" w-full">
          <AboutMe />
          <Details />
          <Skills />
          <Proyects />
        </div>
      </Layout>
    </>
  );
}
