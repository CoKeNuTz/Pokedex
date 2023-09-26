import { Type } from "@/Pokemoninfo"

type TypePillProps = {
    type: Type
}

export default function TypePill({ type }: TypePillProps) {
    function pillColor(type: string) {
        switch (type) {
            case 'normal':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-amber-600'
            case 'fighting':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-rose-700 text-white'
            case 'flying':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-violet-500'
            case 'poison':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-purple-800 text-white'
            case 'ground':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-amber-700'
            case 'rock':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-amber-950 text-white'
            case 'bug':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-lime-600'
            case 'ghost':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-purple-950 text-white'
            case 'steel':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-zinc-400'
            case 'fire':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-orange-600'
            case 'water':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-blue-500'
            case 'grass':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-green-500'
            case 'electric':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-yellow-300'
            case 'psychic':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-rose-400'
            case 'ice':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-blue-300'
            case 'dragon':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-indigo-800 text-white'
            case 'dark':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-black text-white'
            case 'fairy':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-pink-400'
            case 'unknown':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-gray-600 text-white'
            case 'shadow':
                return 'flex justify-center outline outline-black w-20 outline-2 rounded-md mx-2 uppercase bg-zinc-900 text-white'

        }
    }
    return <div className={pillColor(type)}>{type}</div>
}
