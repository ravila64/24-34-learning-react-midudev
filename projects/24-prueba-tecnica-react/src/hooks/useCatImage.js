import { useState, useEffect } from 'react';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

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
        const { _id } = response
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
} // {imageUrl ; 'https:// ...' }
//    imageUrl ='https://cataas.com/cat/says/hello'
