import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 font-sans">
        <Header/>
        <Hero/>
    </div>
  );
}
