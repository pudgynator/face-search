import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { UploadPhoto } from "@/components/UploadPhoto";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
        <Header/>
        <main>
            <Hero />
            <div className="flex flex-col gap-8 p-8 md:flex-row">
                <UploadPhoto />
                <Suspense fallback={<p className="flex-1 text-muted">Loading photos…</p>}>
                    <Gallery />
                </Suspense>
            </div>
        </main>
    </div>
  );
}
