import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn("size-8", className)}>
      {/* node network */}
      <path d="M5 8 L13 4 M5 8 L5 22 M5 22 L13 28 M13 4 L13 28" className="stroke-foreground/35" strokeWidth="1.2" />
      <circle cx="5" cy="8" r="2" className="fill-foreground" />
      <circle cx="13" cy="4" r="2" className="fill-foreground" />
      <circle cx="5" cy="22" r="2" className="fill-foreground" />
      <circle cx="13" cy="28" r="2" className="fill-foreground" />
      {/* electronic triangle (diode) */}
      <path d="M13 9 L27 16 L13 23 Z" className="fill-primary" />
      <path d="M28.5 9 L28.5 23" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)} aria-label="Inparts, inicio">
      <LogoMark />
      <span className="text-xl font-semibold tracking-tight">
        <span className="text-foreground">In</span>
        <span className="text-primary">Parts</span>
      </span>
    </Link>
  );
}
