import FaceIcon from "@/components/FaceIcon";

export function Header() {
    return (
        <div className="flex justify-between items-center  text-ink px-8 py-3 border-b border-line">
            <div className="flex gap-2 items-center">
                <FaceIcon className="h-6 w-6 text-accent"/>
                <p className="font-bold">
                    Face Search
                </p>
            </div>
            <button 
                type="button" 
                className="h-11 bg-transparent cursor-pointer border border-line-strong rounded-lg font-bold text-sm py-2 px-4 hover:bg-line"
            >
                + Add photos to collection
            </button>
        </div>
    )
}