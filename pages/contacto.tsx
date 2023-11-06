import Head from "next/head";
import Layout from "@/components/layout";
import Contacto from "@/components/Contact";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto</title>
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
        <Contacto></Contacto>
      </Layout>
    </>
  );
}
