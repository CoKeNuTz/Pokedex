import { Type } from "@/Pokemoninfo"
import TypePill from "../common/TypePill"

type TypesProps = {
    types: Array<Type>
    weaknesses: Array<Type>
    resistances: Array<Type>
}

export default function Types({ types, weaknesses, resistances }: TypesProps) {
    return <>
        <div className={'flex flex-row justify-between px-2 my-4 text-xl'}><div className={'pr-12'}>Types:</div>{types.map((t) => <TypePill type={t} key={`main${t}`} />)}</div>
        <div className={'flex flex-row justify-between px-2 my-4 text-xl'}><div>Weaknessess:</div >{weaknesses.map((t) => <TypePill type={t} key={`main${t}`} />)}</div>
        <div className={'flex flex-row justify-between px-2 my-4 text-xl'}><div>Resistances:</div>{resistances.map((t) => <TypePill type={t} key={`main${t}`} />)}</div>
    </>
}