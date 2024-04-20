import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  let source = ''
  // no puedes usar React Query, SWR, axios, apollo, fact = hecho
  // EN EL data, se acceso al .fact, effect tenga 1 sola responsabilidad
  // para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching fact')
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
      .catch((err) => {
        console.log('Error ', err)
        // tanto si hay error en la respuesta
        // como si hay error en la peticion
      })
  }, [])

  // para recuperar la pagina cada vez que tengamos una cita  nueva
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log('3 primeras palabras ', threeFirstWords)
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    console.log('url image ', CAT_ENDPOINT_IMAGE_URL)
    fetch(CAT_ENDPOINT_IMAGE_URL)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        source = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
        setImageUrl(url)
        console.log('Source ', source)
      })
  }, [fact])

  // devuelve el fetch una promesa
  return (
    <main>
      <h2>App de Gatitos</h2>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl} `} alt={`Image extracting using the first three words for ${fact}`} />}
    </main>
  )
}
