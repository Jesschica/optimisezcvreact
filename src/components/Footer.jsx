import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header-Footer.css';


function Footer() {
  return (
    <footer className=" bg-footer p-4 text-center">
      <div className="row">
        <div className="col-md-3">
          <h5>John DOE</h5>
          <p>40 Rue Laure Diebold<br />
          690009 Lyon, France<br />
          Téléphone: 06 20 30 40 50</p>
          <div>
            <Link to="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" class="text-dark mr-2"><i class="fab fa-github"></i></Link>
            <Link to="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" class="text-dark mr-2"><i class="fab fa-twitter"></i></Link>
            <Link to="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" class="text-dark"><i class="fab fa-linkedin"></i></Link>
          </div>
        </div>
        <div className="col-md-3">
          <h5>Liens Utiles</h5>
          <ul class="list-unstyled">
            <li>
              <Link className="ft-link" to="/Realisations">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
              </svg>Accueil</Link>
            </li>
            <li>
              <Link className="ft-link" to="about.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
              </svg>À propos</Link>
            </li>
            <li>
              <Link className="ft-link" to="services.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
              </svg>Services</Link>
            </li>
            <li>
              <Link className="ft-link" to="contact.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
              </svg>Me contacter</Link>
            </li>
            <li>
              <Link className="ft-link" to="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>Mentions légales</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
        <h5>Mes dernières Réalisations</h5>
          <ul class="list-unstyled">
            <li>
              <Link className="ft-link" to="portfolio.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>Fresh food
              </Link>
            </li>
            <li>
              <Link className="ft-link" to="portfolio.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>Restaurant Akira
              </Link>
            </li>
            <li>
              <Link className="ft-link" to="portfolio.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>Espace bien-être
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
        <h5>Mes derniers articles</h5>
          <ul class="list-unstyled">
            <li>
              <Link className="ft-link" to="blog.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>Coder son site en HTML/CSS
              </Link>
            </li>
            <li>
              <Link className="ft-link" to="blog.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>Vendre ses produits sur le web
              </Link>
            </li>
            <li>
              <Link className="ft-link" to="blog.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>Se positionner sur Google
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright mt-3">© Designed by john Doe.</div>
    </footer>
  );
}

export default Footer;