type AllPokemonProps = {
    allPokemon: Array<{name: string, id: string}>
    onClick: Function
}

export function AllPokemon({allPokemon, onClick}: AllPokemonProps) {
    return <>{allPokemon.map((p) => <div className={'flex flex-row justify-between mx-4 text-2xl border-b border-black'} onClick={() => {onClick(p.id)}} key={`${p.id}${p.name}`}>
            <div className={'capitalize'}>{p.name}</div><div>#{p.id}</div>
        </div>)}</>
}