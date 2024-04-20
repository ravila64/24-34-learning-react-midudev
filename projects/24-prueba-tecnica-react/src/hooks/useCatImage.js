import { useState, useEffect } from 'react';

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // para recuperar la pagina cada vez que tengamos una cita  nueva
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log('3 primeras palabras ', threeFirstWords)
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    console.log('url image ', CAT_ENDPOINT_IMAGE_URL)
    fetch(CAT_ENDPOINT_IMAGE_URL)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl }
} // {imageUrl ; 'https:// ...' }
