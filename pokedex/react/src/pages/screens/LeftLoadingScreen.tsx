type LeftLoadingScreenProps = {}

export function LeftLoading({ }: LeftLoadingScreenProps) {
    return <>
        <div className={'animate-pulse flex flex-col p-4'}>
            <div className={'grid grid-cols-3 gap-4'}>
                <div className={'h-2 bg-gray-400 rounded col-span-1'}></div>
                <div className={'h-2 bg-gray-400 rounded col-span-2'}></div>
            </div>
            <div className={'m-auto rounded-full bg-gray-400 my-8 h-24 w-24'}></div>
            <div className={'flex-1 space-y-6 py-1'}>
                <div className={'h-2 bg-gray-400 rounded'}></div>
                <div className={'space-y-3'}>
                    <div className={'h-2 bg-gray-400 rounded'}></div>
                </div>
            </div>
        </div>
    </>
}