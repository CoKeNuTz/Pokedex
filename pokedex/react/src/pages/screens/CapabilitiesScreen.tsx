import { Ability, Move } from "@/Pokemoninfo"

type CapabilitiesProps = {
    moves: Array<Move>
    ability: Ability
}

export function Capabilities({ability, moves}: CapabilitiesProps) {
    return <div className={'px-1 text-xl'}>
        <div className={'flex flex-row justify-between capitalize'}>ABILITY: {ability.name}</div>
        <div className={'pb-4 text-base'}>{ability.description}</div>
        <div className={'flex flex-col justify-between'}>
            {moves.map((m) => <div className={'pb-4'} key={m.name}>
                <div className={'capitalize'}>MOVE: {m.name}</div>
                <div className={'text-base'}>{m.description}</div>
                <div>{m.power?<>Power: {m.power}</>:<>(passive move)</>}</div>
            </div>)}
        </div>
    </div>
}