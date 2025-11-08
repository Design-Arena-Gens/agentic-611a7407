export default function HomePage() {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Hello from <span className="text-cyan-400">agentic-611a7407</span>
        </h1>
        <p className="mt-4 text-slate-300">
          Next.js 14 + Tailwind CSS. Deployed on Vercel.
        </p>
        <div className="mt-8 inline-flex gap-3">
          <a className="px-4 py-2 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition" href="/api/health">
            Health Check API
          </a>
          <a className="px-4 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition" href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            Next.js Docs
          </a>
        </div>
      </div>
    </main>
  );
}
