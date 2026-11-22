

export function Hero() {
    return (
        <section className="flex flex-col bg-zinc-800 justify-center items-center p-8 border-b border-zinc-700">
            <p className="uppercase text-zinc-100 font-semibold mb-4">search by face</p>
            <div className="flex flex-col text-center max-w-[450px] gap-2">
                <h1 className="text-zinc-100 text-5xl font-bold">
                    Find every photo of 
                    <span className="text-[#F5B841]"> one person</span>
                </h1>
                <p className="text-zinc-300 font-semibold">
                    Upload one photo of a face and Face Search shows the photos in your collection where the same person appears.
                </p>
            </div>
        </section>
    )
}