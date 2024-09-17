import { useEffect, useState } from 'react'
import style from './App.module.css'
import respostas from '../palavras.json'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [resposta, setResposta] = useState('');
  
  useEffect(() => {
    fetch('../palavras.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(response.data)
      setResposta(data)
    })
  })
  
  return (
    <>
      <header>
        <h1>Faça uma pergunta para a bola mágica</h1>
      </header>

      <main>
        <img className={style.bola} src="./bola-8.png" alt="bola" onClick={() => {}}/>
        <div>
          <h1>Resposta: {resposta}</h1>
        </div>
      </main>
    </>
  )
}

export default App
