import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

import {
  faCode,
  faPaintBrush,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Balqees Sabir | Portfolio</title>
          <meta name="balqeessabir" content="web developer portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav>
          <h1 className="logo">BS</h1>
          <ul className="nav_list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#experiences">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <h4>(+249) 900 55 3618</h4>
        </nav>
        <main className={styles.main}>
          <div className="row">
            <h1>Hi, this is </h1>
            <h1 className="name">Balqees Sabir</h1>
          </div>
          <p>A front-end Developer and a UI/UX Designer</p>
        </main>
        <div className={styles.about} id="about">
          <div className={styles.about_box}>
            <p>
              Front-end Software Developer with 2 years of experience in Web,
              and Mobile Development using javascript and libraries like React,
              and React Native. Loooking for a challenging software development
              environment where my technical expertise and academic skills will
              grow and expand.
            </p>
          </div>
          <div className={styles.avatar}>
            <Image
              src="/balqees.jpg"
              alt="Balqees"
              width={150}
              height={150}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.services} id="services">
          <h1 className="title">My Services</h1>
          <div className={styles.service_box}>
            <div className={styles.icon_box}>
              <FontAwesomeIcon icon={faCode} className={styles.icon} />
            </div>
            <div className={styles.text}>
              <h3>Front-end Development</h3>
              <p>
                I develop websites and mobile application user interface, i’m
                pationate about creating creative and responsive applications,
                mainly using tools like React and React native or HTML, CSS and
                bootstrap.
              </p>
            </div>
          </div>
          <div className={classNames(styles.service_box, styles.margin_left)}>
            <div className={styles.icon_box}>
              <FontAwesomeIcon icon={faPaintBrush} className={styles.icon} />
            </div>
            <div className={styles.text}>
              <h3>UI / UX Design</h3>
              <p>
                I design user interfaces and user Experiences, for booth mobile
                and web apps, using tools like Figma, Photoshop and AI.
              </p>
            </div>
          </div>
          <div className={styles.service_box}>
            <div className={styles.icon_box}>
              <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
            </div>
            <div className={styles.text}>
              <h3>Back-end development</h3>
              <p>
                I create API’s using languages like java script and python and
                frameworks like django and node js in addition to creating
                databases with SQL.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.experiences} id="experiences">
          <h1 className="title">My Experience</h1>
          <div
            className={styles.experience_box}
            style={{ borderLeft: "solid 0.5px #487787" }}
          >
            <h3>Techworks batch 2 participant</h3>
            <p>
              The program aimed at develpeing personal and technical skills and
              contunied for two months and which we’ve learned programming
              languages like python and c and data analytics using mySQL in
              addition to creative thinking and project management. it consisted
              of two parts. In the first part, we’ve learned how to learn, work,
              and communicate using digital devices and in the second part, how
              to practice project-based training using computer science and
              industry-demanded skills in which we developed My mentor platform.
            </p>
          </div>
          <div
            className={styles.experience_box}
            style={{ borderRight: "solid 0.5px #487787" }}
          >
            <h3>Full time Developer at Eptikar IT Solutions </h3>
            <p>
              I’ve been working at EIT since 2020, with them i’ve learned almost
              everythin from UI / UX design to back-end development and working
              with customers, giving presentations and qunducting quality
              assurance for the products and projects we worked on. During these
              two years, i developed websites, web applications and mobile
              applications as well as designing the company profile and website.
            </p>
          </div>
          <div
            className={styles.experience_box}
            style={{ borderLeft: "solid 0.5px #487787" }}
          >
            <h3>
              Full time Content Creator and member of the marketing team at Tana
              Water Tanks
            </h3>
            <p>
              I’ve worked for Tana water tanks and PGM company as a content
              creator and i was responsible for the company’s facebook page,
              i’ve created content and media for the company and also desined
              the company’s profile and some of thier street panners and
              brochures
            </p>
          </div>
          <div
            className={styles.experience_box}
            style={{ borderRight: "solid 0.5px #487787" }}
          >
            <h3>Intren at Telekom Applied Business SDN BHD Malaysia </h3>
            <p>
              As a web developer, helped at maintaining the company website
              which was created using Laravel, and performing tasks and
              assignments assigned to me like debugging and implementing the
              company’s website new design .
            </p>
          </div>
        </div>
        <div className={styles.projects} id="projects">
          <h1 className="title">Projects</h1>
          <div className={styles.project_box}>
            <div className="overlay">
              <a
                href="https://meqeen.com/"
                target={_blank}
                rel="noopener noreferrer"
              >
                <Image
                  src="/meqeen_1.png"
                  alt="MEQEEN"
                  width={400}
                  height={250}
                />
              </a>
            </div>
            <div className="overlay">
              <Image
                src="/eit_1.png"
                alt="EIT website"
                width={400}
                height={250}
              />
            </div>
            <div className="overlay">
              <a
                href="https://nimir.center/index.html"
                target={_blank}
                rel="noopener noreferrer"
              >
                <Image
                  src="/mncec.png"
                  alt="Mutasim nimir center"
                  width={400}
                  height={250}
                />
              </a>
            </div>
          </div>
          <div className={styles.project_box}>
            <div className="overlay">
              <a
                target={_blank}
                href="https://admin.agalista.com/"
                rel="noopener noreferrer"
              >
                <Image
                  src="/agalista_1.png"
                  alt="Agalista admin"
                  width={400}
                  height={250}
                  className={styles.project_image}
                />
              </a>
            </div>
            <div className="overlay">
              <a
                target={_blank}
                href="https://admin.agalista.com/"
                rel="noopener noreferrer"
              >
                <Image
                  src="/agalista_2.png"
                  alt="Agalista Admin"
                  width={400}
                  height={250}
                  className={styles.project_image}
                />
              </a>
            </div>
            <div className="overlay">
              <a href="https://eccs.sd/" rel="noopener noreferrer">
                <Image
                  src="/eccs_3.png"
                  alt="ECCS"
                  width={400}
                  height={250}
                  className={styles.project_image}
                />
              </a>
            </div>
          </div>
          <div className={styles.project_box}>
            <div className="overlay">
              <a
                href="https://eccs.sd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/eccs_1.png"
                  alt="ECCS"
                  width={400}
                  height={250}
                  className={styles.project_image}
                />
              </a>
            </div>
            <div className="overlay">
              <Image
                src="/mymentor.png"
                alt="MyMentor"
                width={400}
                height={250}
                className={styles.project_image}
              />
            </div>
            <div className="overlay">
              <Image
                src="/damancash.png"
                alt="Daman cash"
                width={400}
                height={250}
                className={styles.project_image}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div
          style={{
            display: "flex",
            alignItems: "space around",
            flexDirection: "column",
          }}
        >
          <h1 className="logo">BS</h1>
          <p>© 2022 Balqees Sabir All rights reserved.</p>
        </div>
        <div className="socials">
          <div className={styles.social_icon}>
            <a
              href="https://www.linkedin.com/in/balqees-sabir-8119bb162/"
              target={_blank}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div>
          <h3>balqeesabers@gmail.com</h3>
          <h3>(+249) 900 55 3618</h3>
        </div>
      </div>
    </>
  );
}
