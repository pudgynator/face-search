import { Suspense } from "react";
import { pool } from "@/lib/db";
import { PhotoCard, type Photo } from "@/components/PhotoCard";

export async function Gallery() {
    const { rows: photos } = await pool.query<Photo>(
         "SELECT id, filename FROM images ORDER BY created_at DESC"
    )
    return(
        <section className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between mb-5">
                <h2 className="text-ink text-3xl font-bold tracking-tight">
                    All photos
                </h2>
                <p className="text-sm text-muted">
                    {photos.length} {photos.length === 1 ? "photo" : "photos"}
                </p>
            </div>
            { photos.length === 0 ? (
                <p className="mt-5 text-muted">No photos yet. Add some to the collection.</p>
                ) : (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                    {photos.map((photo) => (
                        <PhotoCard key={photo.id} photo={photo} />
                    ))}
                </div>
                )
            }

        </section>
    )
}