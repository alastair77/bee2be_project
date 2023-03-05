import React from "react";
import { SSRProvider } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import img_bridge from "../public/bridge.jpg";
import img_mark from "../public/marketing.jpg";
import img_obs from "../public/observatorio.jpg";
import img_outs from "../public/outsourcing.jpg";
import img_subv from "../public/subvenciones.jpg";
import img_diagram from "../public/diagram.png";
import Container from "../components/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from "next/head";
import styles from "../styles/Home.module.css";

// Voir https://nextjs.org/docs/messages/css-global !!!!!****************
// **********************************************************************
const Index = () => {
  return (
    <SSRProvider>
      <Container>
        <Head>
          <title>BEE2BE - HOME</title>
        </Head>
        {/* <h1>Hello Home</h1> */}
      </Container>
      {/* <Image src={img_home}/> */}
      <div className={styles.container}>
        <div className={styles.text_home}>
          <h3 className={styles.text_outsourcing}>
            Outsourcing de servicios integrales
          </h3>
          <h4>
            Especializados en la digitalización industrial para la potenciación
            y generación de negocio entornos B2B.
          </h4>
        </div>
      </div>
      <div className={styles.services_bar}>
        <Link href="/outsourcing" className="ml-5">
          <h4 className={styles.service}>Outsourcing</h4>
        </Link>
        <Link href="/observatorio" className="ml-5 service">
          <h4 className={styles.service}>Observatorio</h4>
        </Link>
        <Link href="/marketing" className="ml-5 service">
          <h4 className={styles.service}>Marketing 360</h4>
        </Link>
        <Link href="/subvenciones" className="ml-5 service">
          <h4 className={styles.service}>Subvenciones</h4>
        </Link>
      </div>
      <div className={styles.section1}>
        <div className={styles.section1_1}>
          <h2>Es el momento de transformar tus proyectos y procesos</h2>
          <h4>
            Somos un puente que conecta estratégicamente al sector industrial
            con soluciones y servicios de digitalización.
          </h4>
          <h4>
            <strong>
              En Bee2be Tech, somos parte activa del ecosistema tecnológico.
            </strong>
          </h4>
        </div>
        <div className={styles.section1_2}>
          <Image src={img_bridge} />
        </div>
      </div>
      <div className={styles.section_nav}>
        <div className={styles.section_nav_row}>
          <div className={styles.section_nav_bloc}>
            <div className={styles.section_nav_text}>
              <h4 className={styles.titre_section_nav}>
                Outsourcing Comercial en Tecnología Digital
              </h4>
              <p>
                Contamos con un equipo técnico comercial especializado en
                soluciones tipo MES/MOM, SCADAS, PLCS, GMAO, etc. para entornos
                industriales.
              </p>
            </div>
            <Image
              src={img_outs}
              className={styles.image_nav}
              alt={"outsourcin"}
            />
          </div>
          <div className={styles.section_nav_bloc}>
            <div className={styles.section_nav_text}>
              <h4 className={styles.titre_section_nav}>
                Observatorio y análisis de la información
              </h4>
              <p>
                Buscamos, identificamos, investigamos, analizamos y comparamos
                información tanto de oportunidades como de competidores
                (benchmarking).
              </p>
            </div>
            <Image
              src={img_obs}
              className={styles.image_nav}
              alt={"observatorio"}
            />
          </div>
        </div>
        <div className={styles.section_nav_row}>
          <div className={styles.section_nav_bloc}>
            <div className={styles.section_nav_text}>
              <h4 className={styles.titre_section_nav}>
                Búsqueda y tramitación de subvenciones
              </h4>
              <p>
                Buscamos activamente los instrumentos públicos y privados para
                reforzar el proceso de transformación digital y aprovechar el
                potencial de las ayudas disponibles para el sector industrial.
              </p>
            </div>
            <Image
              src={img_subv}
              className={styles.image_nav}
              alt={"subvenciones"}
            />
          </div>
          <div className={styles.section_nav_bloc}>
            <div className={styles.section_nav_text}>
              <h4 className={styles.titre_section_nav}>Marketing 360</h4>
              <p>
                Enfocados en integrar las nuevas tecnologías, con los sistemas
                de información de la empresa (catálogos, news, mantenimiento de
                blogs, posicionamiento SEO, email marketing, diseños stand,
                etc.).
              </p>
            </div>
            <Image
              src={img_mark}
              className={styles.image_nav}
              alt={"marketing"}
            />
          </div>
        </div>
      </div>
      <p className={styles.div_message}>
        No sólo hablamos de tecnología, en BEE2BE TECH también hablamos de
        personas, pues sabemos que el verdadero éxito de la estrategia de
        implementación digital viene acompañada con la gestión del cambio de la
        cultura de empresa y la integración de sus empleados en el proceso
        (industria 5.0).
      </p>
      <Image
        src={img_diagram}
        className={styles.image_diagram}
        alt={"diagrama"}
      />
      <div className={styles.text_work_together}>
        <h3>Trabajemos juntos en tu nuevo proyecto</h3>
        <p>
          Nos gustan las empresas con grandes ideas que comprenden que el futuro
          está en la digitalización y la responsabilidad medioambiental. Si
          piensas como nosotros, hablemos para crecer juntos.
        </p>
        <p><a href="" className={styles.text_contactanos}>Contacta con nosotros</a></p>
        
      </div>
      
    </SSRProvider>
  );
};

export default Index;
