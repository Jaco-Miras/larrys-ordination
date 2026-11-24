import { useEffect, useState } from "react";

const ORDINATION_TARGET_MS = new Date("2026-11-28T09:00:00+08:00").getTime();
const ORDINATION_END_MS = new Date("2026-11-28T13:00:00+08:00").getTime();

type CountdownState = {
  status: "upcoming" | "live" | "past";
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getCountdownState = (nowMs: number): CountdownState => {
  const diff = ORDINATION_TARGET_MS - nowMs;

  if (diff <= 0) {
    return {
      status: nowMs < ORDINATION_END_MS ? "live" : "past",
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    status: "upcoming",
    days,
    hours,
    minutes,
    seconds,
  };
};

const padTwo = (value: number) => String(value).padStart(2, "0");

const OrdinationCountdown = () => {
  const [countdown, setCountdown] = useState<CountdownState>(() =>
    getCountdownState(Date.now()),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownState(Date.now()));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  if (countdown.status === "live") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mt-5 inline-flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-emerald-50/90 px-4 py-3 text-sm font-semibold text-emerald-800"
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
        </span>
        <span>The Ordination Mass is now underway!</span>
      </div>
    );
  }

  if (countdown.status === "past") {
    return (
      <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-amber-200/80 bg-amber-50/80 px-4 py-2.5 text-xs font-semibold text-amber-900 sm:text-sm">
        <span>Ordination celebrated on November 28, 2026</span>
      </div>
    );
  }

  const units = [
    { label: countdown.days === 1 ? "Day" : "Days", value: String(countdown.days) },
    { label: "Hours", value: padTwo(countdown.hours) },
    { label: "Mins", value: padTwo(countdown.minutes) },
    { label: "Secs", value: padTwo(countdown.seconds) },
  ];

  return (
    <div
      aria-label="Countdown to the Rite of Ordination"
      className="mt-5 rounded-2xl border border-amber-200/70 bg-linear-to-r from-amber-50/70 via-white to-sky-50/60 p-3.5 shadow-2xs sm:p-4"
    >
      <div className="mb-2.5 flex items-center justify-center gap-2 text-[11px] font-semibold tracking-wider text-amber-800 uppercase md:justify-start">
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-amber-500" />
        </span>
        <span>Countdown to Ordination</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-white/95 px-2 py-2.5 shadow-2xs"
          >
            <span className="text-xl leading-none font-bold tracking-tight text-slate-900 tabular-nums sm:text-2xl">
              {unit.value}
            </span>
            <span className="mt-1 text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdinationCountdown;
