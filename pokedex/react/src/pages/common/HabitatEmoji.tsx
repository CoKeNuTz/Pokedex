import { Habitat } from "@/Pokemoninfo"

type HabitatProps = {
    habitat: Habitat
}

export function Habitat({habitat}: HabitatProps) {
    function habitatEmoji(color: string) {
        switch(color) {
            case 'cave':
                return ' ⛺'
            case 'forest':
                return ' 🌲'
            case 'grassland':
                return ' 🍃'
            case 'mountain':
                return ' 🏔️'    
            case 'rare':
                return ' 🌈'
            case 'rough-terrain':
                return ' 🪨'
            case 'sea':
                return ' 🌊'
            case 'urban':
                return ' 🏢'
            case 'waters-edge':
                return ' 🏝️'
            }
    }
    return <div>{habitatEmoji(habitat)}</div> 
}
