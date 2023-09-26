import { PokemonInfo } from "@/Pokemoninfo"
import { useEffect, useState } from "react"
import AllPokemon from "./screens/AllPokemonScreen"
import Characteristics from "./screens/CharacteristicsScreen"
import Capabilities from "./screens/CapabilitiesScreen"
import Pokemon from "./screens/PokemonScreen"
import Stats from "./screens/StatsScreen"
import Types from "./screens/TypesScreen"
import EvolutionChain from "./screens/EvolutionChainScreen"
import Legendary from "./common/LegendaryCheck"
import LeftLoading from "./screens/LeftLoadingScreen"
import RightLoading from "./screens/RightLoadingScreen"

export function Pokedex() {
	const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>()
	const [allPokemon, setAllPokemon] = useState<Array<{ name: string, id: string }>>([])
	const [showAllPokemon, setShowAllPokemon] = useState(true)								//left
	const [showPokemon, setShowPokemon] = useState(false)									//left
	const [showCharacteristics, setShowCharacteristics] = useState(false)					//right
	const [showCapabilities, setShowCapabilities] = useState(false)							//right
	const [showStats, setShowStats] = useState(false)										//right
	const [showTypes, setShowTypes] = useState(false)										//right
	const [showEvolutionChain, setShowEvolutionChain] = useState(false)						//right
	const [pokemonId, setPokemonId] = useState(1)
	const [leftloading, setLeftLoading] = useState(false)									//left
	const [rightloading, setRightLoading] = useState(false)									//right

	useEffect(() => {
		setLeftLoading(true)
		setRightLoading(true)
		fetch(`http://localhost:5000/all-pokemon`)
			.then((response) => response.json())
			.then((json) => {
				setAllPokemon(json)
				setLeftLoading(false)
				setRightLoading(false)
			})
	}, [])
	useEffect(() => {
		setLeftLoading(true)
		setRightLoading(true)
		fetch(`http://localhost:5000/pokemon?id=${pokemonId}`)
			.then((response) => response.json())
			.then((json) => {
				setPokemonInfo(json)
				setLeftLoading(false)
				setRightLoading(false)
			})
	}, [pokemonId])

	function onPokemonClick(id: number) {
		setPokemonId(id)
		setShowAllPokemon(false)
		setShowPokemon(true)
		setShowCharacteristics(true)
	}

	function roundBlueButton() {
		if (showPokemon) {
			setShowPokemon(false)
			setShowCharacteristics(false)
			setShowCapabilities(false)
			setShowEvolutionChain(false)
			setShowStats(false)
			setShowTypes(false)
			setShowAllPokemon(true)
		} else {
			setShowAllPokemon(false)
			setShowPokemon(true)
			setShowCharacteristics(true)
		}
	}

	function moveButton() {
		if (showAllPokemon) {
			setShowCapabilities(false)
		} else if (showCapabilities) {
			setShowCapabilities(false)
			setShowPokemon(true)
			setShowCharacteristics(true)
		} else {
			setShowPokemon(true)
			setShowCharacteristics(false)
			setShowEvolutionChain(false)
			setShowStats(false)
			setShowTypes(false)
			setShowCapabilities(true)
		}
	}

	function evolutionChainButton() {
		if (showAllPokemon) {
			setShowEvolutionChain(false)
		} else if (showEvolutionChain) {
			setShowEvolutionChain(false)
			setShowPokemon(true)
			setShowCharacteristics(true)
		} else {
			setShowPokemon(true)
			setShowCharacteristics(false)
			setShowCapabilities(false)
			setShowStats(false)
			setShowTypes(false)
			setShowEvolutionChain(true)
		}
	}

	function statsButton() {
		if (showAllPokemon) {
			setShowStats(false)
		} else if (showStats) {
			setShowStats(false)
			setShowPokemon(true)
			setShowCharacteristics(true)
		} else {
			setShowPokemon(true)
			setShowCharacteristics(false)
			setShowEvolutionChain(false)
			setShowCapabilities(false)
			setShowTypes(false)
			setShowStats(true)
		}
	}

	function typesButton() {
		if (showAllPokemon) {
			setShowTypes(false)
		} else if (showTypes) {
			setShowTypes(false)
			setShowPokemon(true)
			setShowCharacteristics(true)
		} else {
			setShowPokemon(true)
			setShowCharacteristics(false)
			setShowEvolutionChain(false)
			setShowStats(false)
			setShowCapabilities(false)
			setShowTypes(true)
		}
	}

	function rightIsLoading(isLoading: boolean) {
		setRightLoading(isLoading)
	}

	return <>
		<div className={'flex flex-row'}>
			<div className={'bg-red-600 m-1 h-128 w-96 outline outline-3 rounded-lg'}>
				<div className={'bg-red-600 outline outline-4 outline-offset-3 p-2 h-16 w-5/6 rounded-md rounded-br-[100px] overflow-visible drop-shadow-lg'}>
					<div className={'flex flex-row'}>
						<div className={'bg-blue-950 ring-4 ring-white rounded-full h-11 w-11 drop-shadow-md'}>
							<div className={'animate-pulse h-full w-full bg-gradient-to-br from-blue-500 via-white to-blue-500 rounded-full	'}></div>
						</div>
						<div className={'ring ring-black ring-1 bg-gradient-to-br from-gray-500 via-white to-gray-500 rounded-full m-3 ml-10 h-4 w-4 drop-shadow-md'}></div>
						<div className={'ring ring-black ring-1 bg-gradient-to-br from-gray-500 via-white to-gray-500 rounded-full m-3 ml-10 h-4 w-4 drop-shadow-md'}></div>
						<div className={'ring ring-black ring-1 bg-gradient-to-br from-gray-500 via-white to-gray-500 rounded-full m-3 ml-10 h-4 w-4 drop-shadow-md'}></div>
					</div>
				</div>
				<div className={'bg-gray-400 outline outline-2 p-4 mx-8 my-5 h-3/4 rounded-md rounded-bl-[100px]'}>
					<div className={'bg-white h-3/4 rounded-lg border-2 border-black overflow-y-scroll'}>
						{leftloading && <LeftLoading />}
						{!leftloading && <>
							{showAllPokemon && <AllPokemon allPokemon={allPokemon} onClick={onPokemonClick} />}
							{showPokemon && pokemonInfo && <Pokemon pokemonInfo={pokemonInfo} />}
						</>}
					</div>
					<div className={'flex flex-row justify-between my-4 mx-8'}>
						<div className={'h-6 w-6'}>{showPokemon && pokemonInfo && <Legendary legendary={pokemonInfo.characteristics.isLegendary} />}</div>
						<div onClick={roundBlueButton} className={'transform hover:scale-125 duration-300 bg-blue-500 rounded-full h-16 w-16'}>
							<div className={'hover:animate-spin duration-500 outline outline-2 outline-blue-800 rounded-full h-16 w-16 border-dashed border-blue-800 border-4'}></div>
						</div>
					</div>
				</div>
			</div>
			<div className={'bg-red-600 m-1 h-128 w-96 outline outline-3 rounded-lg'}>
				<div className={'relative pl-16'}>
					<div className={'absolute -top-1 bg-[#888484] h-16 w-5/6 ml-1 border-2 border-[#888484] border-l-black border-b-black rounded-bl-[100px]'}></div>
				</div>
				<div className={'bg-gray-400 outline outline-2 outline-offset-3 p-4 m-6 mt-28 rounded-lg h-52 drop-shadow-md'}>
					<div className={'bg-white rounded-lg h-full drop-shadow-md border-2 border-black overflow-y-scroll'}>
						{rightloading && <RightLoading />}
						{!rightloading && <>
							{showCharacteristics && pokemonInfo && <Characteristics pokemonInfo={pokemonInfo} />}
							{showCapabilities && pokemonInfo && <Capabilities moves={pokemonInfo.capabilities.moves} ability={pokemonInfo.capabilities.ability} />}
							{showStats && pokemonInfo && <Stats stats={pokemonInfo.stats} />}
							{showTypes && pokemonInfo && <Types types={pokemonInfo.types.main} weaknesses={pokemonInfo.types.weaknesses} resistances={pokemonInfo.types.resistances} />}
							{showEvolutionChain && pokemonInfo && <EvolutionChain chain={pokemonInfo.evolutionchain} setLoading={rightIsLoading} />}
						</>}
					</div>
				</div>
				<div className={'grid grid-cols-2 gap-2 mt-10'}>
					<div className={'flex justify-end'}>
						<button onClick={moveButton} className={'bg-blue-800 hover:bg-blue-950 active:outline-white outline outline-black outline-2 outline-offset-3 h-10 w-40 rounded-sm rounded-tl-[15px] text-white drop-shadow-lg text-xl'}>MOVES</button>
					</div>
					<div>
						<button onClick={evolutionChainButton} className={'bg-blue-800 hover:bg-blue-950 active:outline-white outline outline-black outline-2 outline-offset-3 h-10 w-40 rounded-sm rounded-tr-[15px] text-white drop-shadow-lg text-xl'}>EVOLUTION CHAIN</button>
					</div>
					<div className={'flex justify-end'}>
						<button onClick={typesButton} className={'bg-blue-800 hover:bg-blue-950 active:outline-white outline outline-black outline-2 outline-offset-3 h-10 w-40 rounded-sm ml-auto rounded-bl-[15px] text-white drop-shadow-lg text-xl'}>TYPES</button>
					</div>
					<div>
						<button onClick={statsButton} className={'bg-blue-800 hover:bg-blue-950 active:outline-white outline outline-black outline-2 outline-offset-3 h-10 w-40 rounded-sm rounded-br-[15px] text-white drop-shadow-lg text-xl'}>STATS</button>
					</div>
				</div>
			</div>
		</div>
	</>


}

