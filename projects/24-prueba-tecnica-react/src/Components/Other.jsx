import { useCatImage } from '../hooks/useCatImage'

export function Other () {
  const { imageUrl } = useCatImage({ fact: 'tabby' })
  return (
    <>
      {imageUrl && <img src={imageUrl} alt={`Image not found in ${imageUrl}`} />}
    </>
  )
}
