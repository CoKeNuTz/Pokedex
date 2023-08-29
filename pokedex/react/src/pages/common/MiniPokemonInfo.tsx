import Image from "next/image"

type MiniPokemonInfoProps = {
    sprite: string
    id: number
    name: string
    parentName?: string
}

export function MiniPokemonInfo({ sprite, id, name, parentName }: MiniPokemonInfoProps) {

    return <div className={'flex flex-row'}>
        <div className={'flex justify-center'}><Image src={sprite} alt={'sprite'} height={90} width={90}></Image></div>
        <div className={'flex w-2/3 pl-2 pt-4 justify-between'}>
            <div>
                <div className={'text-xl'}>#{id}</div>
                <div className={'text-xl capitalize'}>{name}</div>
            </div>
            {parentName && <div className={'flex flex-col align-self-end mb-6 capitalize'}>
                <div className={'ml-auto'}>Evolves from: </div>
                <div className={'ml-auto pt-1'}>{parentName}</div>
            </div>}
        </div>
    </div>
}