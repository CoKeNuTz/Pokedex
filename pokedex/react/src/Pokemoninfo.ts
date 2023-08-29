export type Ability = { name: string, description: string }
export type Type = "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow"
export type Color = "black" | "blue" | "brown" | "gray" | "green" | "pink" | "purple" | "red" | "white" | "yellow"
export type Habitat = "cave" | "forest" | "grassland" | "mountain" | "rare" | "rough-terrain" | "sea" | "urban" | "waters-edge"
export type EvolutionChain = { id: number, index: number, parent: number }
export type Move = { name: string, description: string, power: number, types: Array<Type> }
export type Stats = { hp: number, attack: number, defense: number, specialattack: number, specialdefense: number, speed: number }


export type PokemonInfo = {
    characteristics: {
        name: string;
        id: number;
        sprite: string;
        isLegendary: boolean;
        description: string;
        height: number;
        weight: number;
        genus: string;
        color: Color;
        habitat: Habitat;
    }
    evolutionchain: Array<EvolutionChain>;
    capabilities: {
        moves: Array<Move>;
        ability: Ability;
    }
    stats: Stats;
    types: {
        main: Array<Type>;
        weaknesses: Array<Type>;
        resistances: Array<Type>
    }
}