import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/{firstWord}?fontSize=50&fontColor=red&json=true`

export function App() {

    const [fact, setFact] = useState()
    // no puedes usar React Query, SWR, axios, apollo
    // fact = hecho

    // EN EL data, se acceso al .fact
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)  // data.fact
                //const firstWord = fact.split(' ')[0]  // primer palabra
                const threeFirstWords = fact.split.slice(0, 2).join(' ')
                const firstWord = fact.split(' ', 3)
                console.log('primera palabra ', firstWord)
                console.log('3 primeras palabras ', threeFirstWords)
            })
    }, [])

    // can be, se puede escribir asi:
    // useEffect(() => {
    //     async function getRandomfact() {
    //         const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    //         const json = await res.json()
    //         setFact(json.fact)
    //     }
    //     getRandomfact()
    // }, [])

    // devuelve el fetch una promesa
    return (
        <main>
            <h2>App de Gatitos</h2>
            {fact && <p>{fact}</p>}
        </main>
    )
}
