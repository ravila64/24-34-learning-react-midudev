import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/{threeFirstWord}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {

  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  // no puedes usar React Query, SWR, axios, apollo
  // fact = hecho

  // EN EL data, se acceso al .fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log('3 primeras palabras ', threeFirstWords)
        fetch(CAT_ENDPOINT_IMAGE_URL)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
            console.log(response)
          })
      })
  }, [])

  // devuelve el fetch una promesa
  return (
    <main>
      <h2>App de Gatitos</h2>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracting using the first three words for ${fact}`} />}
    </main>
  )
}
