/*
1. Quando eu tenho algo repetitivo
Quando eu notar que há algo repetitivo atrapalhando a visualização do componente
devo separar. EXCEÇÃO: Nem tudo que se repete simplesmente uma vez precisa
necessariamente ser separado em um componente.
2. Quando eu consigo isolar algo do seu contexto (sem prejudicar o comportamento original)
Para mim o melhor momento de se separar um componente é quando olhamos para o 
código e percebemos que uma váriavel, uma função, um hook que está declarado
dentro do componente porém está totalmente associado com uma parte da interface
exemplo: current year
É fácil perceber váriaveis que são usadas em apenas uma parte da aplicação (uma vez)
neste caso se cria um footer.tsx para separar
*/
import { useState } from "react"
import { Footer } from "./footer"

export function App() {
  const [todos, setTodo] = useState<string[]>([])
  {
    /*
      Associar ao footer.tsx devido ao desacoplamento 
      const currentYear = new Date().getFullYear()
    */
  }
  return (
    <div>
      <header>
        <h1>
          My new revolutionary to-do-list
          <button Onclick={() => {}}>Add new todo</button>
        </h1>
      </header>
      <main>
        <h2>Advantages</h2>

        <section>
          <div>
            <h3>Blazing fast</h3>
            <p>This to-do-list app is insanely fast.</p>
          </div>

          <div>
            <h3>No CSS</h3>
            <p>Clean and flat design with no CSS</p>
          </div>
        </section>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        {
          /*
            desacoplado em footer.tsx
            <footer>Copyright &copy; Rocketsesat {currentYear}</footer>
            Após a desacoplação o componente é chamado como Footer
          */
        }
      </main>
      <Footer />
    </div>
  )
}
