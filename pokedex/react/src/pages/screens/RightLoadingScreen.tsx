type RightLoadingScreenProps = {}

export default function RightLoading({ }: RightLoadingScreenProps) {
    return <div className="flex flex-col m-3 animate-pulse">
        <div className="flex flex-row">
            <div className="rounded-full bg-gray-400 mr-3 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
                <div className="h-2 bg-gray-400 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-gray-400 rounded col-span-2"></div>
                        <div className="h-2 bg-gray-400 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-gray-400 rounded"></div>
                </div>
            </div>
        </div>
        <div className="flex flex-row mt-6">
            <div className="rounded-full bg-gray-400 mr-3 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
                <div className="h-2 bg-gray-400 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-gray-400 rounded col-span-2"></div>
                        <div className="h-2 bg-gray-400 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-gray-400 rounded"></div>
                </div>
            </div>
        </div>
    </div>
}