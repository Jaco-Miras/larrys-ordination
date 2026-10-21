import { useState } from "react";

type DCProps = {
  onBack: () => void;
};

const guestTypes = [
  {
    name: "Clergy",
    image: "/clergy-map.png",
  },
  {
    name: "Non Parishioner Guests",
    image: "/non-parishioner-map.png",
  },
  {
    name: "Sto. Rosario Parishioners",
    image: "/parishioner-map.png",
  },
] as const;

const DC = ({ onBack }: DCProps) => {
  const [selectedGuestType, setSelectedGuestType] =
    useState<(typeof guestTypes)[number]["name"] | null>(null);
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
          Back
        </button>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
          <iframe
            title="Route from Davao City to Santo Rosario Parish, Salawagan"
            src="https://www.google.com/maps?output=embed&saddr=Davao+City&daddr=Santo+Rosario+Parish,+Salawagan,+Quezon,+Bukidnon,+Philippines"
            className="h-[min(70vw,420px)] w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-base leading-relaxed sm:text-lg">
          Upon reaching Santa Rita Bridge, look for the flaglets that will guide
          you along the route.
        </p>
        <section className="mt-5 rounded-xl bg-slate-50 p-4 sm:p-5">
          <h2 className="text-lg font-bold sm:text-xl">For commuters:</h2>
          <p className="mt-3 text-base leading-relaxed sm:text-lg">
            From Davao International Airport, take a taxi to Ecoland Bus
            Terminal. From there, board a Rural Transit bus bound for Cagayan de
            Oro City. Ask the driver to drop you off at the Salawagan, Quezon,
            Bukidnon bus stop.
          </p>
        </section>

        <fieldset className="mt-5 rounded-xl border border-slate-200 p-4 sm:p-5">
          <legend className="px-1 text-lg font-bold sm:text-xl">
            Select your category
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
              {selectedMap.name} parking and entrance map
            </h2>
            <img
              src={selectedMap.image}
              alt={`${selectedMap.name} parking and entrance map`}
              className="h-auto max-h-[70vh] w-full rounded-lg bg-slate-100 object-contain"
            />
          </section>
        )}
      </article>
    </main>
  );
};

export default DC;
