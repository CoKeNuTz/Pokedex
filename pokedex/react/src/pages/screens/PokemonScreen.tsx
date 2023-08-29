import { PokemonInfo } from "@/Pokemoninfo"
import Image from "next/image"
import { HabitatBG } from "../common/HabitatBG"

type PokemonProps = {
    pokemonInfo: PokemonInfo
}

export function Pokemon({ pokemonInfo: { characteristics } }: PokemonProps) {
    return <div className={'relative'}>
        <div className={'absolute w-full h-full mt-6'}><HabitatBG habitat={characteristics.habitat} /></div>
        <div className={'absolute w-full h-full'}>
            <div className={'bg-white/50 flex flex-row justify-between p-2 mx-5 text-xl'}>
                <div className={'text-2xl'}>#{characteristics.id}</div>
                <div>{characteristics.genus}</div>
            </div>
            <div className={'flex justify-center'}><Image src={characteristics.sprite} alt={'sprite'} height={175} width={175}></Image></div>
            <div className={'px-8 text-2xl bg-white/50 capitalize'}>{characteristics.name}</div>
        </div>
    </div>
}