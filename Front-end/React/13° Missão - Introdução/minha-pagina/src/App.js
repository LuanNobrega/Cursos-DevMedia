import './App.css';

function App() { //Criar uma função
  return ( //Uso de tags HTML no retorno da função
    <div className='principal'> 
      <div>
        <header>
          <section className='topo'>
            <p>React JS</p>
          </section>
        </header>
        <main>
          <section className='secao1'>
            <h1>React JS</h1>
            <p>Biblioteca JavaScript para criar SPAs</p>
            <a href='https://reactjs.org/' target='_blank'>Site Oficial</a>
          </section>
          <section className='secao2'>
            <h1>Requisitos</h1>
            <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>
          </section>
          <article className='cards'>
            <div className='divcards'>
              <h2>HTML</h2>
              <p>Aprender a estruturar os elementos da página com HTML</p>
            </div>
            <div className='divcards'>
              <h2>CSS</h2>
              <p>Aprender a estilizar os elementos da página com CSS</p>
            </div>
            <div className='divcards'>
              <h2>JavaScript</h2>
              <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
            </div>
          </article>
        </main>
        <footer>
          <p>Curso de introdução de React JS</p>
        </footer>
      </div>
    </div>
  )
}

export default App; //Sintaxe usada para exportar uma função
