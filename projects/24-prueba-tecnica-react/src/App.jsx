import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  // no puedes usar React Query, SWR, axios, apollo, fact = hecho
  // EN EL data, se acceso al .fact, effect tenga 1 sola responsabilidad

  const handleClik = async () => {
    refreshFact()  
  }

  // devuelve el fetch una promesa
  return (
    <main>
      <h2>App de Gatitos</h2>
      <button onClick={handleClik}>Get New Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl} `} alt={`Image extracting using the first three words for ${fact}`} />}
    </main>
  )
}
