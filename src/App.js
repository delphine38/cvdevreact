import './App.css';
import Coordonnees from './components/Coordonnnees';

//import de composants
import Delphine from './components/Delphine';
import Title from './components/Title';
import Liens from './components/Liens';
import Experiences from './components/Experiences';
import Competences from './components/Competences';

function App() {
  return (
    <div className="container">
      <header>
        <section className='blue row m-5'>
          <article className="col-4 text-center">
            <Delphine />
          </article>
          <article className="col-6 text-center">
            <Title />
          </article>
        </section>
      </header>

      <main>
        <section className='row m-5'>
        
          <article className="col-4">
            <Coordonnees />
            <Experiences />
          </article>
          <article className="col-6">
            <Liens />
            <Competences />
          </article>
        </section>
        
      </main>

      
      
      
    </div>
  );
}

export default App;
