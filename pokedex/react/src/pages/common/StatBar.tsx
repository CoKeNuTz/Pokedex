type StatBarProps = {
    stat: number
    label: string
}

export default function StatBar({ stat, label }: StatBarProps) {
    return <div className={'flex flex-row'}>
        <div className={'w-[25%]'}>{label}</div>
        <div className={'w-[65%]'}>
            <div className={'flex flex-row h-4 w-48 bg-gray-200 rounded-full overflow-hidden'}>
                <div style={{ width: `${((stat / 255) * 100)}%` }} className={'bg-blue-500'}></div>
            </div>
        </div>
    </div>
}