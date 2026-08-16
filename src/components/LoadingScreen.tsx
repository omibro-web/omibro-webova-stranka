/**
 * Intro curtain.
 *
 * Deliberately a server component with no JS: the dismissal runs on a CSS
 * animation with `forwards` fill, so the page is never gated behind hydration.
 * `pointer-events-none` keeps it from swallowing clicks while it fades.
 */
export default function LoadingScreen() {
  return (
    <div
      aria-hidden="true"
      className="curtain pointer-events-none fixed inset-0 z-[100] bg-brand-darker flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 grid-texture opacity-40" />
      <div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.13] blur-3xl"
        style={{ background: 'radial-gradient(circle, #FC9301 0%, transparent 68%)' }}
      />

      <img
        src="/LOGO-TRANSPARENT SVG.svg"
        alt=""
        className="curtain-mark relative z-10 w-[min(64vw,380px)] h-auto"
      />

      <div className="relative z-10 mt-12 h-px w-[min(46vw,220px)] overflow-hidden bg-white/12">
        <div className="curtain-bar h-full bg-brand-orange" />
      </div>
    </div>
  );
}
