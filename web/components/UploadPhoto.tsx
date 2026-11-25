import UploadIcon from "@/components/UploadIcon";

export function UploadPhoto() {
    return (
        <aside className="flex flex-col w-full shrink-0 gap-5 md:w-[300px]">
            <p className="tracking-wider uppercase font-semibold text-muted text-xs tracking-tight">
                find a person
            </p>
            <div className="flex flex-col items-center gap-4 p-8 rounded-lg text-center bg-panel border border-dashed border-line-strong">
                <UploadIcon className="h-11 w-11 text-accent"/>
                <p className="font-semibold text-ink text-lg leading-none">Drop a photo or a face here</p>
                <p className="text-sm text-muted">JPG, PNG, or WebP</p>
                <button type="button" className="w-full text-lg bg-accent text-panel font-bold text-sm rounded-lg py-2 px-4 cursor-pointer">
                    Choose a photo
                </button>
            </div>
        </aside>
    )
}