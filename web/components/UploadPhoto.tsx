import UploadIcon from "@/components/UploadIcon";

export function UploadPhoto() {
    return (
        <>
            <div className="flex flex-col gap-4 p-6">
                <p className="uppercase font-bold text-muted text-sm">
                    find a person
                </p>
                <div className="flex flex-col items-center gap-2 px-8 py-5 rounded-lg text-center bg-panel border border-line-strong">
                    <UploadIcon className="h-11 w-11 text-accent" />
                    <p className="font-semibold text-ink">Drop a photo or a face here</p>
                    <p>JPG, PNG, or WebP</p>
                    <button className="bg-accent text-black font-bold text-sm rounded-lg py-2 px-4 cursor-pointer">
                        Choose a photo
                    </button>
                </div>
            </div>
        </>
    )
}