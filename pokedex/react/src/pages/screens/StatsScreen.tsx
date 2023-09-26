import { Stats } from "@/Pokemoninfo"
import StatBar from "../common/StatBar"

type StatsProps = {
    stats: Stats
}

export default function Stats({ stats }: StatsProps) {
    return <div>
        <div className={'flex justify-between m-2 mx-6 grid grid-row-6 gap-0.5'}>
            <StatBar label={'HP:'} stat={stats.hp} />
            <StatBar label={'Attack:'} stat={stats.attack} />
            <StatBar label={'Defense:'} stat={stats.defense} />
            <StatBar label={'SplAtk:'} stat={stats.specialattack} />
            <StatBar label={'SplDef:'} stat={stats.specialdefense} />
            <StatBar label={'Speed:'} stat={stats.speed} />
        </div>
    </div>
}