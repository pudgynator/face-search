
export type Photo = {
    id: number;
    filename: string;
}

export function PhotoCard({ photo }: {photo: Photo}) {
    return (
        <figure className="flex flex-col gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                src={`/api/photos/${photo.id}/image`} 
                alt={photo.filename} 
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm bg-card object-cover"
            />
            <figcaption className="truncate font-mono text-xs text-muted">
                {photo.filename}
            </figcaption>
        </figure>
    )
}