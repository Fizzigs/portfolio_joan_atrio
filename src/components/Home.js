import './Home.css';
import React from 'react';
import { Toaster, toast } from 'sonner'
import backgroundImage from '../assets/images/foto_personal.jpeg'; // Ajusta la ruta según tu estructura de carpetas
import project1Image from '../assets/images/match.png'; // Ajusta la ruta según tu estructura de carpetas
import project2Image from '../assets/images/gamer_heaven.png'; // Ajusta la ruta según tu estructura de carpetas

const Home = () => {
  const handleCopyEmail = () => {
    const email = 'atriopozojoan@gmail.com'; // Reemplaza con tu correo
    navigator.clipboard.writeText(email).then(() => {
      toast.success('¡Correo copiado al portapapeles!');
    }, () => {
      toast.error('Error al copiar el correo');
    });
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-text">Joan Atrio</h1>
          <h2 className="hero-subtext">Full Stack Developer</h2>
          <div className="social-icons">
            <a href="https://github.com/Fizzigs" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"> </i>
            </a>
            <a href="https://www.linkedin.com/in/joan-atrio-pozo/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <button className="email-copy-button" onClick={handleCopyEmail}>
              <i className="fas fa-envelope"></i>
            </button>
            <a href="https://drive.google.com/file/d/1EBUiKlL3nUTN8n6u0JU6eJ86FvuGwwro/view" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-file"></i> 
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img className="hero-image" src={backgroundImage} alt="Hero Artwork" />
        </div>
      </section>


      {/* About Me Section */}
      <section id="about" className="about-section">
        <h2>Sobre mí</h2>
        <p>
            Soy un desarrollador <span class="highlight">Full Stack</span> con experiencia en diversas tecnologías. 
            Me apasiona crear <span class="highlight">proyectos</span> que resuelvan <span class="highlight">problemas del mundo real</span>.
          </p>
          <p>
            Mi enfoque está en el desarrollo tanto del <span class="highlight">frontend</span> como del <span class="highlight">backend</span>, lo que me permite crear aplicaciones completas y funcionales. Disfruto trabajando con diferentes tecnologías para construir productos innovadores.
          </p>
          <p>
            En mi tiempo libre, me gusta explorar nuevas tecnologías y mejorar mis habilidades en programación. También disfruto mucho de <span class="highlight">mejorar diseños</span> y el aprendizaje continuo.
          </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2 className="experience-title">Experiencia</h2>
        <div className="experience-item">
          <div className="experience-timeline">
            <div className="timeline-circle"></div>
            <div className="timeline-line"></div>
          </div>
          <div className="experience-content">
            <div className="experience-header">
              <h3 className="experience-role">Técnico Informático</h3>
              <span className="experience-company">UPC Schools</span>
            </div>
            <span className="experience-date">Septiembre 2022 - Marzo 2023 (6 meses)</span>
            <p className="experience-description">
              Trabaja en la resolución de tickets e incidencias en vivo, en el mantenimiento de software y hardware de los equipos informáticos de la infraestructura.
            </p>
            <p className="experience-description">
              También en la gestión de los materiales de los almacenes y implementación de instalaciones de sistemas operativos en los equipos.
            </p>
          </div>
        </div>
        {/* Add more experience items similarly */}
      </section>


      <section id="projects" className="projects-section">
        <h2 className="projects-title">Proyectos</h2>
        <div className="project-cards">
          <div className="project-card" data-techs="flutter firebase">
            <h3>Proyecto Match</h3>
            <img src={project1Image} alt="Proyecto Match" className="project-image" />
            <p>App sobre restaurante con algoritmo para mostrar los productos en base a los gustos de cada usuario, con gestión de usuarios relacionada con base de datos, compras, carrito, reservas y perfil.</p>
            <div className="technologies">
              <i className="fab fa-flutter"></i>
              <i className="fas fa-fire"></i>
            </div>
            <a href="https://github.com/Fizzigs/proyecto_match" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github github-icon"></i> 
            </a>
          </div>

          <div className="project-card" data-techs="js react html css firebase">
            <h3>Proyecto GamerHeaven</h3>
            <img src={project2Image} alt="Proyecto GamerHeaven" className="project-image" />
            <p>Página web sobre información de videojuegos con filtros, con gestión de usuarios relacionada con base de datos, información basada en una API.</p>
            <div className="technologies">
              <i className="fab fa-js"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fas fa-fire"></i>
            </div>
            <a href="https://github.com/Fizzigs/proyecto_paginaweb_videojuegos" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github github-icon"></i>
            </a>
          </div>
        </div>
      </section>


      {/* Technologies Section */}

      <section id="technologies" className="technologies-section">
        <h2 className="technologies-title">Tecnologías</h2>
        <div className="technologies-list">
          <div className="technology-item">
            <i className="fab fa-js"></i>
            <span className="tech-name">JavaScript</span>
          </div>
          <div className="technology-item">
            <i className="fab fa-react"></i>
            <span className="tech-name">React</span>
          </div>
          <div className="technology-item">
            <i className="fab fa-html5"></i>
            <span className="tech-name">HTML5</span>
          </div>
          <div className="technology-item">
            <i className="fab fa-css3-alt"></i>
            <span className="tech-name">CSS3</span>
          </div>
          <div className="technology-item">
            <i className="fab fa-flutter"></i>
            <span className="tech-name">Flutter</span>
          </div>
          
          <div className="technology-item">
            <i className="fas fa-fire"></i>
            <span className="tech-name">Firebase</span>
          </div>
          <div className="technology-item">
            <i className="fas fa-database"></i>
            <span className="tech-name">MySql</span>
          </div>

          <div className="technology-item">
          <i className="fab fa-github"></i>
          <span className="tech-name">Github</span>
          </div>
        </div>
      </section>


      {/* Formation Section */}
        <section id="formation" className="formation-section">
          <h2 className="formation-title">Formación</h2>
          <div className="formation-item">
            <div className="formation-timeline">
              <div className="timeline-circle"></div>
              <div className="timeline-line"></div>
            </div>
            <div className="formation-content">
              <div className="formation-header">
                <h3 className="formation-name">Desarrollo de aplicaciones multiplataforma</h3>
                <span className="formation-company">Prat Educació</span>
              </div>
              <span className="formation-date">2023 - 2024 (2 años)</span>
              <p className="formation-description">
                Curso enfocado en el desarrollo de aplicaciones multiplataforma, abarcando tecnologías modernas y prácticas para la creación de soluciones software eficientes.
              </p>
            </div>
          </div>
          <div className="formation-item">
            <div className="formation-timeline">
              <div className="timeline-circle"></div>
              <div className="timeline-line"></div>
            </div>
            <div className="formation-content">
              <div className="formation-header">
                <h3 className="formation-name">Sistemas microinformáticos y redes</h3>
                <span className="formation-company">Salesians de Sarria</span>
              </div>
              <span className="formation-date">2021 - 2022 (2 años)</span>
              <p className="formation-description">
                Formación en administración de sistemas microinformáticos y redes, con énfasis en mantenimiento de hardware y software, así como gestión de redes.
              </p>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <p>© 2024 Joan Atrio. All Rights Reserved.</p>
      </footer>
      <Toaster />

    </div>
  );
};

export default Home;
