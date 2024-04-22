import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Other } from './Components/Other'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  // no puedes usar React Query, SWR, axios, apollo, fact = hecho
  // EN EL data, se acceso al .fact, effect tenga 1 sola responsabilidad

  const handleClick = async () => {
    refreshFact()
  }
  const link = `${CAT_PREFIX_IMAGE_URL}${imageUrl}`
  console.log(link)
  // devuelve el fetch una promesa
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
      <Other />
    </main>
  )
}
