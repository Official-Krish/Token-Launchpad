export default function TokenLaunchpad() {
    return <div className="bg-black min-h-screen">
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-white text-center text-3xl">Token Launchpad</h1>
            <div className="my-4">
                <div className="mb-4">
                    <input type="text" placeholder="Token Name" className="w-full h-10"/>
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="Token Symbol" className="w-full h-10"/>
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="Image URL" className="w-full h-10"/>
                </div>
                <div>
                    <input type="number" placeholder="Initaial Supply" className="w-full h-10"/>
                </div>
            </div>
            <button className="bg-white text-black">Launch Token</button>
        </div>
    </div>
}