import { Color } from "@/Pokemoninfo"

type ColorProps = {
    color: Color
}

export function Color({color}: ColorProps) {
    function colorPill(color: string) {
        switch(color) {
            case 'black':
                return 'flex ml-2 w-4 h-4 mt-1.5 rounded-full bg-black'
            case 'blue':
                return 'flex ml-2 w-4 h-4 mt-1.5 rounded-full bg-blue-700'
            case 'brown':
                return 'flex ml-2 w-4 h-4 mt-1.5 rounded-full bg-amber-900'
            case 'gray':
                return 'flex ml-2 w-4 h-4 mt-1.5 rounded-full bg-gray-500'    
            case 'green':
                return 'flex ml-2 w-4 h-4 mt-1.5 rounded-full bg-green-600'
            case 'pink':
                return 'flex ml-2 w-4 h-4 mt-1.5 rounded-full bg-pink-500'
            case 'purple':
                return 'flex ml-2 w-4 h-4 mt-1.5 rounded-full bg-purple-900'
            case 'yellow':
                return 'flex ml-2 w-4 h-4 mt-1.5 rounded-full bg-yellow-400'
            case 'red':
                return 'flex ml-2 w-4 h-4 mt-1.5 rounded-full bg-red-600'    
            case 'white':
                return 'flex ml-2 w-4 h-4 mt-1.5 outline outline-1 rounded-full bg-white'
            }
    }
    return <div className={colorPill(color)}></div>
}
