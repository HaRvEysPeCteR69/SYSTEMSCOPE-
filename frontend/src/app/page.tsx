
"use client";

import { useState } from "react";

const components = [
  { id: "gateway", name: "API Gateway", type: "Gateway", icon: "⇄", x: "8%", y: "36%", color: "blue" },
  { id: "auth", name: "Auth Service", type: "Service", icon: "◈", x: "36%", y: "14%", color: "violet" },
  { id: "orders", name: "Order Service", type: "Service", icon: "◈", x: "36%", y: "53%", color: "violet" },
  { id: "queue", name: "Message Queue", type: "Queue", icon: "≋", x: "65%", y: "14%", color: "amber" },
  { id: "database", name: "PostgreSQL", type: "Database", icon: "▤", x: "65%", y: "66%", color: "emerald" },
];

const navItems = [
  { icon: "▦", label: "Architecture" },
  { icon: "◷", label: "Simulations" },
  { icon: "⌁", label: "Experiments" },
  { icon: "◉", label: "Incidents" },
];

const colorStyles: Record<string, string> = {
  blue: "border-sky-500/40 bg-sky-500/10 text-sky-300",
  violet: "border-violet-500/40 bg-violet-500/10 text-violet-300",
  amber: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  emerald: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
};

export default function Home() {
  const [activeNav, setActiveNav] = useState("Architecture");
  const [selected, setSelected] = useState("orders");
  const [traffic, setTraffic] = useState(500);
  const [showLabels, setShowLabels] = useState(true);

  const selectedNode = components.find((node) => node.id === selected);

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-200">
      <div className="flex min-h-screen">
        <aside className="hidden w-[220px] shrink-0 flex-col border-r border-white/[0.07] bg-[#0c111c] md:flex">
          <div className="flex h-[72px] items-center gap-3 border-b border-white/[0.07] px-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-400 text-lg font-black text-slate-950">
              S
            </div>
            <div>
              <div className="text-sm font-bold tracking-wide text-white">SystemScope</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Systems intelligence</div>
            </div>
          </div>

          <div className="px-3 pt-6">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
              Workspace
            </p>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveNav(item.label)}
                className={`mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                  activeNav === item.label
                    ? "border border-sky-400/15 bg-sky-400/10 text-sky-300"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span className="w-5 text-center text-base">{item.icon}</span>
                {item.label}
                {item.label === "Architecture" && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-sky-400" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 px-3">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
              Project
            </p>
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-slate-300">E-commerce platform</span>
              </div>
              <p className="mt-2 text-[11px] leading-5 text-slate-500">
                Sample architecture · 5 components
              </p>
            </div>
          </div>

          <div className="mt-auto border-t border-white/[0.07] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-800 text-xs font-semibold text-slate-300">
                SS
              </div>
              <div>
                <p className="text-xs font-medium text-slate-200">Local workspace</p>
                <p className="mt-1 text-[10px] text-slate-500">Development environment</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex min-h-[72px] flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-3 md:px-7">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                Projects <span>/</span> <span className="text-slate-300">E-commerce platform</span>
              </div>
              <h1 className="mt-1 text-lg font-semibold tracking-tight text-white">
                {activeNav === "Architecture" ? "System architecture" : activeNav}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-3 py-1.5 text-[11px] text-amber-300 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Engine not connected
              </span>
              <button
                onClick={() => {
                  setSelected("gateway");
                  setActiveNav("Architecture");
                }}
                className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:border-sky-400/40 hover:text-white"
              >
                Inspect gateway
              </button>
            </div>
          </header>

          <div className="grid flex-1 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0 p-4 md:p-6">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold text-white">Architecture canvas</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Select a component to inspect its configuration
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-sky-400" /> Entry point
                  <span className="ml-2 h-2 w-2 rounded-full bg-violet-400" /> Services
                  <span className="ml-2 h-2 w-2 rounded-full bg-emerald-400" /> Storage
                </div>
              </div>

              <div className="relative min-h-[440px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c121e] md:min-h-[560px]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #53647e 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />

                <div className="absolute left-4 top-4 z-10 rounded-lg border border-white/[0.08] bg-[#111827]/90 px-3 py-2">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                    Topology
                  </p>
                  <p className="mt-1 text-xs text-slate-300">5 nodes · 5 sample links</p>
                </div>

                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 800 560"
                  preserveAspectRatio="none"
                  aria-label="Illustrative component connections"
                >
                  <defs>
                    <marker
                      id="arrow"
                      markerWidth="7"
                      markerHeight="7"
                      refX="6"
                      refY="3"
                      orient="auto"
                    >
                      <path d="M0,0 L6,3 L0,6 Z" fill="#64748b" />
                    </marker>
                  </defs>
                  <g
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="1.5"
                    strokeDasharray="5 5"
                    markerEnd="url(#arrow)"
                  >
                    <path d="M180 280 C220 280 220 130 290 130" />
                    <path d="M180 280 C225 280 230 340 290 340" />
                    <path d="M440 130 C490 130 500 130 540 130" />
                    <path d="M440 340 C490 340 500 405 540 405" />
                    <path d="M180 280 C350 450 420 450 540 405" />
                  </g>
                </svg>

                {components.map((node) => (
                  <button
                    key={node.id}
                    onClick={() => setSelected(node.id)}
                    style={{ left: node.x, top: node.y }}
                    className={`absolute z-10 w-[130px] -translate-y-1/2 rounded-xl border p-3 text-left transition sm:w-[155px] ${
                      selected === node.id
                        ? "border-sky-400/70 bg-[#17263a] shadow-[0_0_24px_rgba(56,189,248,0.10)] ring-1 ring-sky-400/20"
                        : "border-white/10 bg-[#111a29] hover:border-white/25"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-base ${colorStyles[node.color]}`}
                      >
                        {node.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-semibold text-slate-100 sm:text-xs">
                          {node.name}
                        </p>
                        <p className="mt-1 text-[10px] text-slate-500">{node.type}</p>
                      </div>
                    </div>
                    {showLabels && (
                      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-slate-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                        Not simulated
                      </div>
                    )}
                  </button>
                ))}

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/[0.07] bg-[#111827]/90 px-3 py-2">
                  <span className="text-[10px] text-slate-500">
                    Illustrative topology · Connections are not yet editable
                  </span>
                  <button
                    onClick={() => setShowLabels(!showLabels)}
                    className="text-[10px] text-sky-300 hover:text-sky-200"
                  >
                    {showLabels ? "Hide node labels" : "Show node labels"}
                  </button>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {[
                  { label: "Components", value: "05", note: "Illustrative nodes" },
                  { label: "Connections", value: "05", note: "Illustrative links" },
                  { label: "Simulation runs", value: "—", note: "Engine not connected" },
                  { label: "Incidents", value: "—", note: "No simulation data" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/[0.07] bg-[#0c121e] p-4"
                  >
                    <p className="text-[11px] text-slate-500">{metric.label}</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-100">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-600">{metric.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="border-t border-white/[0.07] bg-[#0c111c] p-5 xl:border-l xl:border-t-0">
              <div className="mb-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Configuration
                </p>
                <h2 className="mt-2 text-sm font-semibold text-white">Simulation setup</h2>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Configure the planned workload. These controls do not run a simulation yet.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-300">
                    Incoming traffic
                  </label>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-semibold text-white">{traffic}</span>
                    <span className="text-[11px] text-slate-500">requests / sec</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="100"
                    value={traffic}
                    onChange={(event) => setTraffic(Number(event.target.value))}
                    className="mt-3 w-full accent-sky-400"
                  />
                  <div className="mt-1 flex justify-between text-[10px] text-slate-600">
                    <span>100 req/s</span>
                    <span>2,000 req/s</span>
                  </div>
                </div>

                <div className="border-t border-white/[0.07] pt-5">
                  <label className="mb-2 block text-xs font-medium text-slate-300">
                    Selected component
                  </label>
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-lg border text-lg ${colorStyles[selectedNode?.color ?? "blue"]}`}
                      >
                        {selectedNode?.icon}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">
                          {selectedNode?.name}
                        </p>
                        <p className="mt-1 text-[10px] text-slate-500">
                          {selectedNode?.type}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-3">
                      <span className="text-[11px] text-slate-500">Component ID</span>
                      <code className="text-[10px] text-sky-300">{selectedNode?.id}</code>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/[0.07] pt-5">
                  <p className="mb-3 text-xs font-medium text-slate-300">
                    Planned experiments
                  </p>
                  {[
                    ["Service outage", "Inject component failure"],
                    ["Latency spike", "Increase response time"],
                    ["Capacity limit", "Constrain throughput"],
                  ].map(([title, description]) => (
                    <div
                      key={title}
                      className="mb-2 rounded-lg border border-white/[0.07] p-3"
                    >
                      <p className="text-xs font-medium text-slate-300">{title}</p>
                      <p className="mt-1 text-[10px] text-slate-500">{description}</p>
                      <p className="mt-2 text-[9px] uppercase tracking-wider text-slate-600">
                        Available in a later milestone
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-3">
                  <p className="text-xs font-medium text-amber-300">Simulation engine offline</p>
                  <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    The Python engine will calculate actual latency, throughput, queue buildup
                    and failures once connected.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.07] px-5 py-3 text-[10px] text-slate-600">
            <span>SystemScope · Local development</span>
            <span>Architecture workspace · Preview build</span>
          </footer>
        </section>
      </div>
    </main>
  );
}
