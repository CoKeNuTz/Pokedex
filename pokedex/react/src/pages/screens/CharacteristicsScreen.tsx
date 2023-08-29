import { PokemonInfo } from "@/Pokemoninfo"
import { TypePill } from "../common/TypePill"
import { Color } from "../common/ColorPill"
import { Habitat } from "../common/HabitatEmoji"

type PokemonCharacteristicsProps = {
    pokemonInfo: PokemonInfo
}

export function Characteristics({ pokemonInfo: { characteristics, types } }: PokemonCharacteristicsProps) {
    return <>
        <div className={'flex flex-row justify-between px-1 text-xl'}>{characteristics.description}</div>
        <div className={'flex flex-row justify-between px-8 text-xl'}>Height: {characteristics.height / 10} m</div>
        <div className={'flex flex-row justify-between px-8 text-xl'}>Weight: {characteristics.weight / 10} kg</div>
        <div className={'flex flex-row px-8 text-xl'}>
            <div>Color: {characteristics.color}</div>
            <div><Color color={characteristics.color} /></div>
        </div>
        <div className={'flex flex-row px-8 text-xl'}>
            <div>Habitat: {characteristics.habitat}</div>
            <div><Habitat habitat={characteristics.habitat} /></div>
        </div>
        <div className={'flex flex-row mt-1 mb-2 px-8 text-xl'}>Types: <>{types.main.map((t) => <TypePill type={t} key={`main${t}`}/>)}</></div>
    </>
}