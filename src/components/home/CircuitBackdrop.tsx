const TRACES = [
  "M0 120 H180 L220 160 H420 L460 120 H620",
  "M1200 80 H1000 L960 120 H780 L740 80 H600",
  "M0 420 H140 L190 370 H360",
  "M1200 460 H1060 L1010 410 H840 L800 450 H700",
  "M300 0 V60 L340 100 V200",
  "M900 560 V480 L860 440 V360",
];
const NODES = [
  [180, 120], [420, 160], [620, 120], [1000, 80], [780, 120], [600, 80],
  [140, 420], [360, 370], [1060, 460], [840, 410], [340, 200], [860, 360],
];

/** Decorative, lightweight SVG circuit with travelling light pulses. */
export function CircuitBackdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 560"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 size-full mask-fade-b"
    >
      {TRACES.map((d) => (
        <path key={d} d={d} fill="none" className="stroke-foreground/10" strokeWidth="1.2" />
      ))}
      {TRACES.map((d, i) => (
        <path
          key={`p-${d}`}
          d={d}
          fill="none"
          className="animate-circuit stroke-primary"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="24 376"
          style={{ animationDelay: `${i * -1.4}s`, opacity: 0.7 }}
        />
      ))}
      {NODES.map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="3.5" className="fill-background stroke-foreground/25" strokeWidth="1" />
          <circle cx={x} cy={y} r="1.8" className="animate-node fill-primary" style={{ animationDelay: `${i * 0.35}s` }} />
        </g>
      ))}
    </svg>
  );
}
