import './App.css';
import Coordonnees from './components/Coordonnnees';

//import de composants
import Delphine from './components/Delphine';
import Title from './components/Title';
import Liens from './components/Liens';

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
          </article>
          <article className="col-6">
            <Liens />
          </article>
        </section>
        
      </main>

      
      
      
    </div>
  );
}

export default App;
