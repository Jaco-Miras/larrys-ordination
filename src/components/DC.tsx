import { useState } from "react";
import { dcText, guestTypes } from "../dynamic-text/dc";

type DCProps = {
  onBack: () => void;
};

const DC = ({ onBack }: DCProps) => {
  const [selectedGuestType, setSelectedGuestType] = useState<
    (typeof guestTypes)[number]["name"] | null
  >(null);
  const [isMapZoomed, setIsMapZoomed] = useState(false);
  const selectedMap = guestTypes.find(
    (guestType) => guestType.name === selectedGuestType,
  );

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 font-sans text-slate-900 sm:px-6">
      <article className="mx-auto max-w-6xl rounded-2xl bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-8">
        <button
          type="button"
          onClick={onBack}
          className="mb-5 inline-flex items-center gap-2 rounded-lg px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
        >
          <span aria-hidden="true">←</span>
          {dcText.back}
        </button>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
          <iframe
            title={dcText.routeTitle}
            src="https://www.google.com/maps?output=embed&saddr=Davao+City&daddr=Santo+Rosario+Parish,+Salawagan,+Quezon,+Bukidnon,+Philippines"
            className="h-[min(120vw,740px)] w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-base leading-relaxed sm:text-lg">
          {dcText.routeDavaoDirections}
        </p>
        <section className="mt-5 rounded-xl bg-slate-50 p-4 sm:p-5">
          <h2 className="text-lg font-bold sm:text-xl">
            {dcText.commuterHeading}
          </h2>
          <p className="mt-3 text-base leading-relaxed sm:text-lg">
            {dcText.commuterDavaoDirections}
          </p>
        </section>

        <fieldset className="mt-5 rounded-xl border border-slate-200 p-4 sm:p-5">
          <legend className="px-1 text-lg font-bold sm:text-xl">
            {dcText.categoryLegend}
          </legend>
          <div className="mt-2 grid gap-3 sm:grid-cols-3">
            {guestTypes.map((guestType) => (
              <label
                key={guestType.name}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
                  selectedGuestType === guestType.name
                    ? "border-sky-500 bg-sky-50 text-sky-900"
                    : "border-slate-200 bg-white hover:border-sky-300"
                }`}
              >
                <input
                  type="radio"
                  name="guestType"
                  value={guestType.name}
                  checked={selectedGuestType === guestType.name}
                  onChange={() => setSelectedGuestType(guestType.name)}
                  className="size-4 accent-sky-600"
                />
                <span className="font-medium">{guestType.name}</span>
              </label>
            ))}
          </div>
        </fieldset>
        {selectedMap && (
          <section
            aria-live="polite"
            className="mt-5 rounded-xl border border-slate-200 p-4 sm:p-5"
          >
            <h2 className="mb-3 text-lg font-bold sm:text-xl">
              {selectedMap.mapTitle}
            </h2>
            <button
              type="button"
              onClick={() => setIsMapZoomed(true)}
              aria-label={`Zoom in on ${selectedMap.name} map`}
              className="block w-full cursor-zoom-in rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              <img
                src={selectedMap.image}
                alt={selectedMap.mapAlt}
                className="h-auto max-h-[70vh] w-full rounded-lg bg-slate-100 object-contain"
              />
              <span className="mt-2 block text-sm text-slate-500">
                {dcText.mapZoomHint}
              </span>
            </button>
          </section>
        )}
        {isMapZoomed && selectedMap && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Enlarged ${selectedMap.name} map`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setIsMapZoomed(false)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setIsMapZoomed(false);
            }}
          >
            <div
              className="relative flex max-h-full max-w-full items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                autoFocus
                onClick={() => setIsMapZoomed(false)}
                aria-label={dcText.closeMap}
                className="absolute -top-3 -right-3 z-10 flex size-10 items-center justify-center rounded-full bg-white text-2xl text-slate-900 shadow-lg hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                ×
              </button>
              <img
                src={selectedMap.image}
                alt={selectedMap.mapAlt}
                className="max-h-[calc(100vh-2rem)] max-w-full rounded-lg object-contain"
              />
            </div>
          </div>
        )}
      </article>
    </main>
  );
};

export default DC;
