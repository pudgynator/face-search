

export function Hero() {
    return (
        <section 
            className="bg-hero p-10 pt-12 border-b border-line"
            style={{
                backgroundImage: "radial-gradient(#232830 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
        >
            <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center mb-3">
                <p className="font-mono text-sm font-bold uppercase text-ink tracking-widest">
                    search by face
                </p>
                <h1 className="text-ink text-4xl leading-[1] font-bold tracking-tight text-balance text-foreground md:text-[56px]">
                    Find every photo of {" "}
                    <span className="text-accent">one person</span>
                </h1>
                <p className="text-muted font-semibold max-w-[580px] text-lg leading-relaxed text-pretty text-muted">
                    Upload one photo of a face and Face Search shows the photos in your 
                    collection where the same person appears.
                </p>
            </div>
        </section>
    )
}