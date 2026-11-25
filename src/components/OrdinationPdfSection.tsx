import { useEffect, useRef, useState } from "react";
import OrdinationCountdown from "./OrdinationCountdown";
import OrdinationSongsViewer from "./OrdinationSongsViewer";

const PDF_URL = "/rite-of-ordination-larry-duerme.pdf";
const PDF_FILENAME = "Rite-of-Ordination-Rev-Larry-Gulay-Duerme-SSC.pdf";

const OrdinationPdfSection = () => {
  const [downloaded, setDownloaded] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleDownloadClick = () => {
    setDownloaded(true);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setDownloaded(false);
    }, 2500);
  };

  return (
    <section
      aria-labelledby="ordination-booklet-heading"
      className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/85 px-6 py-8 shadow-xl shadow-slate-200/60 backdrop-blur-md sm:px-10 sm:py-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-sky-100/60 blur-3xl"
      />

      <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[220px_1fr] md:gap-10">
        {/* Stylized Booklet Cover Card */}
        <div
          aria-hidden="true"
          className="relative mx-auto w-48 shrink-0 md:w-full"
        >
          {/* Layered pages depth effect */}
          <div className="absolute inset-0 translate-x-2 translate-y-2 rotate-3 rounded-2xl border border-amber-200/70 bg-amber-50/70" />
          <div className="absolute inset-0 -translate-x-1.5 translate-y-1.5 -rotate-2 rounded-2xl border border-sky-200/70 bg-sky-50/70" />

          {/* Front cover */}
          <div className="relative flex aspect-3/4 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-linear-to-b from-white via-amber-50/30 to-orange-50/40 p-5 text-center shadow-md shadow-slate-200/70">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-rose-600 ring-1 ring-rose-200/80">
                PDF
              </span>
              <span className="text-[11px] font-medium text-slate-400">
                40 pp.
              </span>
            </div>

            <div className="my-auto flex flex-col items-center py-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="mb-3 size-7 text-amber-600/80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18M7 8.5h10"
                />
              </svg>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-amber-700/80 uppercase">
                Presbyteral Ordination
              </p>
              <p className="mt-1.5 text-base leading-snug font-bold text-slate-900">
                Rite of Ordination
              </p>
              <div className="my-2.5 h-px w-10 bg-amber-300/80" />
              <p className="text-xs font-medium text-slate-600">
                Rev. Larry Gulay Duerme, SSC
              </p>
            </div>

            <p className="text-[10px] leading-tight font-medium text-slate-400">
              Nov 28, 2026 · 9:00 AM
              <span className="mt-0.5 block">Sto. Rosario Parish</span>
            </p>
          </div>
        </div>

        {/* Booklet Details & Download Action */}
        <div className="flex flex-col text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/90 px-3.5 py-1 text-xs font-semibold tracking-wide text-amber-800 uppercase">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-amber-500"
              />
              Ordination Missalette
            </span>
          </div>

          <h2
            id="ordination-booklet-heading"
            className="mt-3 text-2xl leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Rite of Ordination Booklet
          </h2>

          <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
            Download the official liturgical guide to follow along during the
            Mass—complete with the Order of Procession, readings, hymns, and
            ordination rites for{" "}
            <span className="font-semibold text-slate-800">
              Rev. Larry Gulay Duerme, SSC
            </span>
            .
          </p>

          {/* Metadata Pills */}
          <dl className="mt-5 flex flex-wrap items-center justify-center gap-2.5 text-xs font-medium text-slate-600 md:justify-start">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50/90 px-3 py-1.5">
              <dt className="sr-only">Date and Time</dt>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-3.5 text-amber-600"
              >
                <path
                  fillRule="evenodd"
                  d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <dd>Sat, Nov 28, 2026 · 9:00 AM</dd>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50/90 px-3 py-1.5">
              <dt className="sr-only">Document Format</dt>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-3.5 text-sky-600"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <dd>PDF · 40 Pages · 518 KB</dd>
            </div>
          </dl>

          {/* Live Countdown Timer */}
          <OrdinationCountdown />

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:justify-start">
            <a
              href={PDF_URL}
              download={PDF_FILENAME}
              onClick={handleDownloadClick}
              className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
            >
              {downloaded ? (
                <>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4 text-emerald-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Download Started</span>
                </>
              ) : (
                <>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4 transition duration-200 group-hover:translate-y-0.5"
                  >
                    <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                    <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                  </svg>
                  <span>Download PDF</span>
                </>
              )}
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Ordaining Prelate: Most Rev. Noel P. Pedregosa, D.D. · Sto. Rosario
            Parish, Brgy. Salawagan, Quezon, Bukidnon
          </p>
        </div>
      </div>

      <OrdinationSongsViewer />
    </section>
  );
};

export default OrdinationPdfSection;
