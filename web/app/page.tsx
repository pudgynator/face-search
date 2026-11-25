import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { UploadPhoto } from "@/components/UploadPhoto";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
        <Header/>
        <main >
          <Hero />
            <div className="flex gap-4">
                <UploadPhoto />
                <Gallery />
            </div>
        </main>
    </div>
  );
}
