import { useState } from "react";
import {
  ordinationSongTabs,
  type SongTabId,
} from "../dynamic-text/ordinationSongs";

type OrdinationSongsViewerProps = {
  pdfUrl: string;
};

type FontSize = "sm" | "md" | "lg";

const FONT_SIZE_CLASS: Record<FontSize, string> = {
  sm: "text-sm leading-relaxed",
  md: "text-[15px] leading-relaxed sm:text-base",
  lg: "text-base leading-relaxed sm:text-lg",
};

const OrdinationSongsViewer = ({ pdfUrl }: OrdinationSongsViewerProps) => {
  const [activeTabId, setActiveTabId] = useState<SongTabId>("entrance");
  const [selectedMoreSongId, setSelectedMoreSongId] = useState<string>(
    "responsorial-psalm",
  );
  const [fontSize, setFontSize] = useState<FontSize>("md");

  const activeTab =
    ordinationSongTabs.find((tab) => tab.id === activeTabId) ??
    ordinationSongTabs[0];

  const visibleSongs =
    activeTab.id === "more"
      ? activeTab.songs.filter((song) => song.id === selectedMoreSongId)
      : activeTab.songs;

  return (
    <div className="relative mt-8 border-t border-slate-200/80 pt-7">
      {/* Section Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-100 to-orange-100 text-amber-700 ring-1 ring-amber-200/70"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M15.988 3.012A2.25 2.25 0 0 1 18 5.25v6.5A2.25 2.25 0 0 1 15.75 14H13.5V7A2.5 2.5 0 0 0 11 4.5H8.128a2.252 2.252 0 0 1 1.884-1.488A2.25 2.25 0 0 1 12.25 1h1.5a2.25 2.25 0 0 1 2.238 2.012ZM11.5 3.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v.25h-3v-.25Z" />
              <path
                fillRule="evenodd"
                d="M14.77 5.22a.75.75 0 0 1 .23.53v7.5a2.75 2.75 0 1 1-1.5-2.45V7.756l-6 1.2v5.794a2.75 2.75 0 1 1-1.5-2.45V6.75a.75.75 0 0 1 .603-.735l7.5-1.5a.75.75 0 0 1 .667.205Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div>
            <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              Mass Songs &amp; Hymns
            </h3>
            <p className="text-xs text-slate-500 sm:text-sm">
              View lyrics for the Entrance Hymn, Introductory Rite, Our Father,
              and more.
            </p>
          </div>
        </div>

        {/* Reading Text Size Control */}
        <div
          role="group"
          aria-label="Lyrics text size"
          className="inline-flex w-fit items-center gap-1 self-start rounded-xl border border-slate-200/90 bg-slate-50/90 p-1 sm:self-auto"
        >
          {(
            [
              { id: "sm", label: "A", title: "Small text", cls: "text-xs" },
              { id: "md", label: "A", title: "Medium text", cls: "text-sm" },
              { id: "lg", label: "A", title: "Large text", cls: "text-base" },
            ] as const
          ).map((opt) => (
            <button
              key={opt.id}
              type="button"
              title={opt.title}
              aria-label={opt.title}
              aria-pressed={fontSize === opt.id}
              onClick={() => setFontSize(opt.id)}
              className={`flex size-7 items-center justify-center rounded-lg font-semibold transition ${opt.cls} ${
                fontSize === opt.id
                  ? "bg-white text-slate-900 shadow-xs ring-1 ring-slate-200/80"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div
        role="tablist"
        aria-label="Mass song sections"
        className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4"
      >
        {ordinationSongTabs.map((tab) => {
          const isActive = tab.id === activeTab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`song-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`song-panel-${tab.id}`}
              onClick={() => setActiveTabId(tab.id)}
              className={`group flex flex-col rounded-2xl border px-3.5 py-3 text-left transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${
                isActive
                  ? "border-slate-900 bg-slate-900 text-white shadow-md shadow-slate-900/15"
                  : "border-slate-200/90 bg-white/90 text-slate-700 hover:border-amber-300 hover:bg-amber-50/40"
              }`}
            >
              <div className="flex w-full items-center justify-between gap-1.5">
                <span className="text-sm font-semibold">{tab.label}</span>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    isActive
                      ? "bg-white/15 text-amber-200"
                      : "bg-slate-100 text-slate-500 group-hover:bg-amber-100/70 group-hover:text-amber-800"
                  }`}
                >
                  {tab.pageLabel}
                </span>
              </div>
              <span
                className={`mt-1 line-clamp-1 text-xs ${
                  isActive ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {tab.shortDesc}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sub-pills when viewing More Mass Songs */}
      {activeTab.id === "more" && (
        <div
          aria-label="Select another Mass song"
          className="mt-3 flex flex-wrap gap-2"
        >
          {activeTab.songs.map((song) => {
            const isSelected = song.id === selectedMoreSongId;
            return (
              <button
                key={song.id}
                type="button"
                onClick={() => setSelectedMoreSongId(song.id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  isSelected
                    ? "border-amber-500 bg-amber-50 text-amber-900 shadow-2xs"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {song.title}
                <span className="ml-1.5 text-[10px] opacity-70">
                  p. {song.page}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Lyrics Display Panel */}
      <div
        role="tabpanel"
        id={`song-panel-${activeTab.id}`}
        aria-labelledby={`song-tab-${activeTab.id}`}
        className="mt-4 max-h-[460px] space-y-6 overflow-y-auto rounded-2xl border border-slate-200/80 bg-linear-to-b from-slate-50/80 to-white p-5 sm:p-6"
      >
        {visibleSongs.map((song, songIdx) => (
          <article
            key={song.id}
            className={
              songIdx > 0 ? "border-t border-slate-200/80 pt-6" : undefined
            }
          >
            <header className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                  {song.title}
                </h4>
                {song.subtitle && (
                  <p className="mt-0.5 text-xs font-medium text-slate-500 sm:text-sm">
                    {song.subtitle}
                  </p>
                )}
              </div>

              <a
                href={`${pdfUrl}#page=${song.page}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
              >
                <span>Page {song.page} in PDF</span>
                <span aria-hidden="true">↗</span>
              </a>
            </header>

            <div className={`mt-4 space-y-4 ${FONT_SIZE_CLASS[fontSize]}`}>
              {song.blocks.map((block, idx) => (
                <div
                  key={`${song.id}-block-${idx}`}
                  className={
                    block.isRefrain
                      ? "rounded-xl border-l-3 border-amber-400 bg-amber-50/55 px-4 py-3 text-slate-900"
                      : "px-1 text-slate-700"
                  }
                >
                  {block.label && (
                    <p
                      className={`mb-1 text-[11px] font-bold tracking-wider uppercase ${
                        block.isRefrain ? "text-amber-700" : "text-slate-400"
                      }`}
                    >
                      {block.label}
                    </p>
                  )}
                  <div className={block.isRefrain ? "font-medium" : undefined}>
                    {block.lines.map((line, lineIdx) => (
                      <p key={`${song.id}-block-${idx}-line-${lineIdx}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default OrdinationSongsViewer;
