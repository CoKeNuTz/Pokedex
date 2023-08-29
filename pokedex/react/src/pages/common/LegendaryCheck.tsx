type LegendaryProps = {
    legendary: boolean
}

export function Legendary({ legendary }: LegendaryProps) {

    return legendary ?
        <div className={'bg-purple-800 h-6 w-6 outline outline-1 outline-white rounded-full drop-shadow-md'}></div>
        : <div className={'bg-red-600 h-6 w-6 rounded-full drop-shadow-md'}></div>
}