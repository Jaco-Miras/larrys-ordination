const LIVE_CHANNELS = [
  {
    name: "DXDB Radyo Bandilyo",
    subtitle: "Watch on Facebook Live",
    url: "https://www.facebook.com/DXDBRadyoBandilyo",
    badgeClass: "bg-blue-100 text-blue-600 group-hover:bg-blue-200/80",
    cardClass:
      "border-blue-200/80 from-blue-50/70 to-white hover:border-blue-400 hover:shadow-blue-100 focus-visible:outline-blue-500",
    arrowClass: "text-blue-500",
  },
  {
    name: "Sto. Rosario Parish Youth Apostolate",
    subtitle: "Watch on Facebook Live",
    url: "https://www.facebook.com/profile.php?id=100077562375748",
    badgeClass: "bg-blue-100 text-blue-600 group-hover:bg-blue-200/80",
    cardClass:
      "border-blue-200/80 from-blue-50/70 to-white hover:border-blue-400 hover:shadow-blue-100 focus-visible:outline-blue-500",
    arrowClass: "text-blue-500",
  },
] as const;

const LiveStreamSection = () => {
  return (
    <section
      aria-labelledby="watch-live-heading"
      className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/85 px-6 py-8 shadow-xl shadow-slate-200/60 backdrop-blur-md sm:px-10 sm:py-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-rose-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-blue-100/60 blur-3xl"
      />

      <div className="relative">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-rose-50/90 px-3.5 py-1 text-xs font-semibold tracking-wide text-rose-700 uppercase">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-rose-500" />
            </span>
            Live Broadcast
          </span>

          <h2
            id="watch-live-heading"
            className="mt-3 text-2xl leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Watch the Ordination Live
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Unable to join us in person? Follow the celebration live on Facebook
            through our official broadcast partners.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {LIVE_CHANNELS.map((channel) => (
            <a
              key={channel.url}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 rounded-2xl border bg-linear-to-br p-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 ${channel.cardClass}`}
            >
              <span
                aria-hidden="true"
                className={`flex size-14 shrink-0 items-center justify-center rounded-2xl transition ${channel.badgeClass}`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03H7.898v-2.909h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.909h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939Z" />
                </svg>
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-base leading-snug font-bold text-slate-900 sm:text-lg">
                  {channel.name}
                </span>
                <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 sm:text-sm">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-rose-500"
                  />
                  {channel.subtitle}
                </span>
              </span>

              <span
                aria-hidden="true"
                className={`shrink-0 text-xl font-semibold transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${channel.arrowClass}`}
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStreamSection;
