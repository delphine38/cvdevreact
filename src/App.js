import './App.css';
import Coordonnees from './components/Coordonnnees';

//import de composants
import Delphine from './components/Delphine';
import Title from './components/Title';
import Liens from './components/Liens';
import Experiences from './components/Experiences';
import Competences from './components/Competences';
import Langages from './components/Langages';
import Formations from './components/Formations';
import Savoiretre from './components/Savoiretre';
import CentreInteret from './components/CentreInteret';

function App() {
  return (
    <div className="container">
      <header>
        <section className='blue row m-5'>
          <article className="col-lg-4 text-center">
            <Delphine />
          </article>
          <article className="col-lg-6 text-center">
            <Title />
          </article>
        </section>
      </header>

      <main>
        <section className='row m-5'>
          <article className="col-lg-6">
            <Coordonnees />
          </article>

          <article className="col-lg-6">
            <Liens />
          </article>
        </section>


        <section className='row m-5'>
          <article className="col-lg-6">
            <Experiences />
          </article>

          <article className="col-lg-6">
            <Competences />
          </article>
        </section>

        <section className='row m-5'>
          <article className="col-lg-6">
            <Formations />
          </article>

          <article className="col-lg-6">
            <Langages />
            <Savoiretre />
            <CentreInteret />

          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
