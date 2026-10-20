type CDOProps = {
  onBack: () => void;
};

const CDO = ({ onBack }: CDOProps) => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 font-sans text-slate-900 sm:px-6">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-8">
        <button
          type="button"
          onClick={onBack}
          className="mb-5 inline-flex items-center gap-2 rounded-lg px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
        >
          <span aria-hidden="true">←</span>
          Back
        </button>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
          <iframe
            title="Route from Cagayan de Oro to Santo Rosario Parish, Salawagan"
            src="https://www.google.com/maps?output=embed&saddr=Cagayan+de+Oro+City&daddr=Santo+Rosario+Parish,+Salawagan,+Quezon,+Bukidnon,+Philippines"
            className="h-[min(70vw,420px)] w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>

        <p className="mt-3 text-base leading-relaxed sm:text-lg">
          Upon reaching Manuto Bridge, follow the flaglets along the route.
        </p>

        <section className="mt-5 rounded-xl bg-slate-50 p-4 sm:p-5">
          <h2 className="text-lg font-bold sm:text-xl">For commuters:</h2>
          <p className="mt-3 text-base leading-relaxed sm:text-lg">
            From Laguindingan Airport, take a van to Agora Bus Terminal. From
            there, board a Rural Transit bus bound for Davao City. Ask the
            driver to drop you off at the Salawagan, Quezon, Bukidnon bus stop.
          </p>
        </section>
      </article>
    </main>
  );
};

export default CDO;
