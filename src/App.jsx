import { useEffect, useState } from 'react'
import style from './App.module.css'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [resposta, setResposta] = useState(undefined);
  const [listReposta, setListaResposta] = useState([])
  
  useEffect(() => {
    fetch('./palavras.json')
    .then((response) => response.json())
    .then((data) => {
      setListaResposta(data.palavras)
    })
  }, [])
  
  useEffect(() => {
    if (!resposta)
      return

    const timeout = setTimeout(() => {
      setResposta(undefined)
    }, 2000)

    return () => clearInterval(timeout)
  }, [resposta])

  const handleBallClick = () => {
    if (listReposta.length == 0)
      return

    const p = listReposta[getRandomInt(0, listReposta.length)]

    setResposta(p)
  }

  return (
    <>
      <header>
        <h1>Faça uma pergunta para a bola mágica</h1>
      </header>

      <main>
        <img className={style.bola} src="./bola-8.png" alt="bola" onClick={handleBallClick}/>
          <div className={style.resposta} style={{opacity: resposta ? "100%" : 0}}>
            <h1>{resposta}</h1>
          </div>
      </main>
    </>
  )
}

export default App
