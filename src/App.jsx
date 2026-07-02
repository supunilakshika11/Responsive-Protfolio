import './App.css';

const skills = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'];
const projects = [
  {
    title: 'Task Tracker',
    subtitle: 'React',
    description: 'Responsive task tracker app with clean UI and quick controls.',
    image: 'https://picsum.photos/seed/tasktracker/640/360',
  },
  {
    title: 'Shopping Cart',
    subtitle: 'React',
    description: 'Interactive e-commerce cart layout with product cards.',
    image: 'https://picsum.photos/seed/shoppingcart/640/360',
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Bootstrap',
    description: 'Professional portfolio page designed with Bootstrap components.',
    image: 'https://picsum.photos/seed/portfolio/640/360',
  },
];

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#hero">
            Supuni
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section id="hero" className="hero-section bg-light py-5">
          <div className="container">
            <div className="row align-items-center gy-4">
              <div className="col-lg-5 text-center text-lg-start">
                <img
                  src="/profile.svg"
                  alt="Profile"
                  className="img-fluid rounded-circle border border-4 border-primary shadow profile-img"
                />
              </div>
              <div className="col-lg-7">
                <p className="text-uppercase text-primary mb-2 fw-semibold">
                  Software Quality Assurance Trainee
                </p>
                <h1 className="display-5 fw-bold mb-3">Supuni Lakshika</h1>
                <p className="lead text-secondary mb-4">
                  I build responsive portfolio pages with Bootstrap. I enjoy
                  learning UI design, web development, and testing best practices.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-2">
                  <a href="#contact" className="btn btn-primary btn-lg">
                    Download CV
                  </a>
                  <a href="#contact" className="btn btn-outline-secondary btn-lg">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <h2 className="section-title mb-3">About Me</h2>
                    <p className="text-muted fs-5">
                      I am an undergraduate student with an interest in Software
                      Quality Assurance and Web Development. I enjoy learning
                      React, Bootstrap, JavaScript and Testing methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Skills</h2>
              <p className="text-muted">
                Core tools and technologies I use for web development.
              </p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {skills.map((skill) => (
                <div className="col" key={skill}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body text-center">
                      <h5 className="card-title mb-3">{skill}</h5>
                      <p className="card-text text-secondary">
                        Building smart, responsive interfaces with {skill}.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Projects</h2>
              <p className="text-muted">
                Example projects built using React and Bootstrap.
              </p>
            </div>
            <div className="row g-4">
              {projects.map((project) => (
                <div className="col-12 col-md-6 col-lg-4" key={project.title}>
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="text-primary mb-2">{project.subtitle}</p>
                      <p className="card-text text-secondary flex-grow-1">
                        {project.description}
                      </p>
                      <a href="#contact" className="btn btn-outline-primary mt-3">
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <h2 className="section-title mb-4">Contact</h2>
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label" htmlFor="fullName">
                            Full Name
                          </label>
                          <input type="text" id="fullName" className="form-control" placeholder="Enter your name" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <input type="email" id="email" className="form-control" placeholder="you@example.com" />
                        </div>
                        <div className="col-12">
                          <label className="form-label" htmlFor="subject">
                            Subject
                          </label>
                          <input type="text" id="subject" className="form-control" placeholder="Project inquiry" />
                        </div>
                        <div className="col-12">
                          <label className="form-label" htmlFor="message">
                            Message
                          </label>
                          <textarea id="message" className="form-control" rows="5" placeholder="Write your message here"></textarea>
                        </div>
                        <div className="col-12 text-center">
                          <button type="submit" className="btn btn-primary btn-lg px-5">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-white py-4 bg-dark">
        <div className="container text-center">
          <p className="mb-1">Copyright © 2026</p>
          <p className="mb-1">Supuni Lakshika</p>
          <p className="mb-0">All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
