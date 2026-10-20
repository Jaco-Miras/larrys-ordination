type FirstPageProps = {
  onDavaoClick: () => void;
  onCDOClick: () => void;
};

const FirstPage = ({ onDavaoClick, onCDOClick }: FirstPageProps) => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-orange-50 px-5 py-12 font-sans text-slate-900">
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />

      <section className="relative w-full max-w-4xl rounded-3xl border border-white/80 bg-white/80 px-6 py-12 shadow-xl shadow-slate-200/60 backdrop-blur-sm sm:px-12 sm:py-16">
        <h1 className="text-center text-4xl leading-tight font-bold tracking-tight text-slate-900 sm:text-5xl">
          Where are you traveling from?
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base leading-relaxed text-slate-500 sm:text-lg">
          Choose your departure city to get your trip started.
        </p>

        <div
          aria-label="Choose your departure city"
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-7"
        >
          <button
            type="button"
            onClick={onDavaoClick}
            className="group flex min-h-40 items-center gap-5 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
          >
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-3xl transition group-hover:bg-orange-200">
              🏝️
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xl font-bold text-slate-800 sm:text-2xl">
                Davao City
              </span>
              <span className="mt-1 block text-sm text-slate-500">
                Start your trip from Davao
              </span>
            </span>
            <span
              aria-hidden="true"
              className="text-2xl text-orange-400 transition group-hover:translate-x-1"
            >
              →
            </span>
          </button>

          <button
            type="button"
            onClick={onCDOClick}
            className="group flex min-h-40 items-center gap-5 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-3xl transition group-hover:bg-blue-200">
              🌆
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xl font-bold text-slate-800 sm:text-2xl">
                Cagayan de Oro
              </span>
              <span className="mt-1 block text-sm text-slate-500">
                Start your trip from CDO
              </span>
            </span>
            <span
              aria-hidden="true"
              className="text-2xl text-blue-400 transition group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default FirstPage;
