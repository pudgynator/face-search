import FaceIcon from "@/components/FaceIcon";

export function Header() {
    return (
        <div className="flex justify-between items-center text-zinc-100 px-8 py-3 border-b border-zinc-700">
            <div className="flex gap-2 items-center">
                <FaceIcon className="h-6 w-6 text-[#F5B841]"/>
                <p className="font-bold">
                    Face Search
                </p>
            </div>
            <button 
                type="button" 
                className="bg-transparent cursor-pointer border border-zinc-700 rounded-lg font-bold text-sm py-2 px-4 hover:bg-zinc-800"
            >
                + Add photos to collection
            </button>
        </div>
    )
}