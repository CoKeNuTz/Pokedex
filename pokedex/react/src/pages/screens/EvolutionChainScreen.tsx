import { EvolutionChain, PokemonInfo } from "@/Pokemoninfo"
import { useEffect, useState } from "react"
import { MiniPokemonInfo } from "../common/MiniPokemonInfo"

type EvolutionChainProps = {
    chain: Array<EvolutionChain>
    setLoading: Function
}

export function EvolutionChain({ chain, setLoading }: EvolutionChainProps) {
    const [evolution, setEvolution] = useState<Array<{ index: number, pokemon: PokemonInfo, parent: number }>>([])

    useEffect(() => {
        setLoading(true)
        const evs: Array<{ index: number, pokemon: PokemonInfo, parent: number }> = []
        Promise.all(chain.map((c) => {
            return fetch(`http://localhost:5000/pokemon?id=${c.id}`)
                .then((response) => response.json())
                .then((json) => {
                    evs.push({ pokemon: json, index: c.index, parent: c.parent })
                })
        }))
            .then(() => {
                setEvolution(evs)
                setLoading(false)
            })
    }, [chain, setLoading])
    return <div className={'flex flex-col'}>
        {evolution.sort((a, b) => {
            if (b.index < a.index) { return 1 }
            return -1
        }).map((e) => <div key={`${e.pokemon.characteristics.id}${e.parent}`}>
            <MiniPokemonInfo sprite={e.pokemon.characteristics.sprite} id={e.pokemon.characteristics.id} name={e.pokemon.characteristics.name} parentName={evolution.filter((a) => a.pokemon.characteristics.id == e.parent).at(0)?.pokemon.characteristics.name} /></div>)}
    </div>
}