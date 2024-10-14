import React from 'react';
import '../styles/Home.css';
import '../images/hero-bg.jpg'; // Import de l'image


function Home() {
  return (
    <div className='Home'>
       
      <section className="presentation">
        <div class="overlay"></div>
        <div class="container text-center text-white">
          
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur Web full stack</h2>
            <a href="about.html" class="btn btn-primary">En savoir plus</a>
        </div>
    </section>

    <section className="infos">
      <div className='bloc1'>
        <div class="apropos">
          <h3>À propos</h3>
          <hr /> 
          <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation <b>d'intégrateur-développeur web</b> au CEF.
            Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <b>développement web.</b>
          <br /><br />
          Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <b>développeur web full stack.</b>
          <br /><br />
          J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
          </p>  
        </div>
        <div class="competences">
    
          <h3>Mes compétences</h3>
            <div>HTML5 90%</div>
              <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="00" aria-valuemax="100">
                <div class="progress-bar bg-success"></div>
              </div>
              <br />

              <div>CSS3 80%</div>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-info">
                    </div>
                </div>
                <br />

              <div>JAVASCRIPT 70%</div>
                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-warning">
                  </div>
                </div>
                <br />

              <div>PHP 60%</div>
                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-success"></div>
              </div>
              <br />

              <div>REACT 50%</div>
                <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-primary"></div>
              </div>
            </div>
      </div>
      
        
    </section>

    </div> 
  );
}

export default Home;