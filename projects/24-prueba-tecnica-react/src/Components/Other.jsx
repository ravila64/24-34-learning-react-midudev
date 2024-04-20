import { useCatImage } from '../hooks/useCatImage'

export function Other() {
	const { imageUrl } = useCatImage({ fact: 'cat' })
	return (
		<>
			{imageUrl && <img src={imageUrl} />}
		</>
	)
}
