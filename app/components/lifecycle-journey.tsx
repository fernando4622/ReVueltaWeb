const lifecycleSteps = [
  {
    number: "01",
    eyebrow: "En el establecimiento",
    title: "Pide",
    description:
      "Recibes tus alimentos o bebida en un contenedor ReVuelta en un establecimiento participante.",
    placement: "top-0 left-0",
  },
  {
    number: "02",
    eyebrow: "Identidad del contenedor",
    title: "Escanea",
    description: "El contenedor puede identificarse mediante un código QR único.",
    placement: "top-[12%] left-[55%]",
  },
  {
    number: "03",
    eyebrow: "En tus manos",
    title: "Usa",
    description: "Lo usas con normalidad mientras disfrutas tu pedido.",
    placement: "top-[38%] right-0",
  },
  {
    number: "04",
    eyebrow: "De vuelta a la red",
    title: "Devuelve",
    description:
      "Lo entregas en un punto participante, de acuerdo con las reglas del sistema.",
    placement: "top-[47%] left-[8%]",
  },
  {
    number: "05",
    eyebrow: "Preparación",
    title: "Inspecciona y sanitiza",
    description:
      "El contenedor devuelto entra a un proceso de inspección y sanitización.",
    placement: "bottom-[9%] left-[22%]",
  },
  {
    number: "06",
    eyebrow: "De nuevo disponible",
    title: "Otro ciclo",
    description: "Regresa al inventario y puede circular nuevamente.",
    placement: "right-0 -bottom-8",
  },
] as const;

const lifecyclePath =
  "M28 28C230 20 520 70 688 136c232 89 352 164 152 234-240 100-480-10-716 81-184 74-94 199 168 246 208 38 358 23 548 81";

type LifecycleStepProps = (typeof lifecycleSteps)[number];

function JourneyPath() {
  return (
    <svg
      className="absolute inset-0 h-full w-full overflow-visible max-xl:hidden"
      viewBox="0 0 1200 900"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <marker
          id="lifecycle-arrow"
          markerHeight="8"
          markerWidth="8"
          orient="auto"
          refX="7"
          refY="4"
        >
          <path d="M0 0 8 4 0 8Z" fill="var(--color-lime)" />
        </marker>
      </defs>
      <path
        d={lifecyclePath}
        fill="none"
        stroke="rgba(251, 250, 244, 0.22)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="animate-lifecycle [stroke-dasharray:0.14_0.86] motion-reduce:animate-none"
        d={lifecyclePath}
        fill="none"
        markerEnd="url(#lifecycle-arrow)"
        pathLength="1"
        stroke="var(--color-lime)"
        strokeLinecap="round"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function LifecycleStep({
  number,
  eyebrow,
  title,
  description,
  placement,
}: LifecycleStepProps) {
  return (
    <li
      className={`${placement} absolute z-[2] grid w-[min(36%,420px)] grid-cols-[3.5rem_minmax(0,1fr)] items-start gap-5 max-xl:relative max-xl:top-auto max-xl:right-auto max-xl:bottom-auto max-xl:left-auto max-xl:w-full max-xl:max-w-none max-xl:gap-6 max-xl:py-8 max-sm:grid-cols-[3rem_minmax(0,1fr)] max-sm:gap-4`}
    >
      <span className="relative z-[2] grid size-14 place-items-center rounded-full border border-lime bg-ink-deep text-[0.66rem] font-extrabold text-lime shadow-[0_0_0_8px_var(--color-ink-deep)] max-sm:size-12 max-sm:shadow-[0_0_0_6px_var(--color-ink-deep)]">
        {number}
      </span>
      <div className="pt-1">
        <p className="m-0 text-[0.62rem] font-extrabold tracking-[0.13em] text-lime uppercase">
          {eyebrow}
        </p>
        <h3 className="mt-2 text-[clamp(2rem,3.2vw,3.6rem)] leading-none font-[760] tracking-[-0.055em] text-paper-bright max-xl:text-[clamp(2rem,7vw,3.2rem)]">
          {title}
        </h3>
        <p className="mt-4 max-w-[340px] text-sm leading-[1.65] text-paper-bright/68 max-sm:text-[0.92rem]">
          {description}
        </p>
      </div>
    </li>
  );
}

export function LifecycleJourney() {
  return (
    <section
      className="overflow-hidden bg-ink-deep px-[6vw] py-[clamp(6rem,11vw,11rem)] text-paper max-sm:px-5 max-sm:py-[5.5rem]"
      id="how-it-works"
      aria-labelledby="lifecycle-title"
    >
      <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(300px,0.7fr)] items-end gap-[clamp(3rem,8vw,9rem)] max-lg:grid-cols-1">
        <div>
          <p className="mb-6 flex items-center gap-3 text-[0.72rem] font-extrabold tracking-[0.15em] text-lime uppercase">
            <span className="size-2 rounded-full bg-lime shadow-[0_0_0_5px_rgba(184,223,66,0.2)]" aria-hidden="true" />
            03 / Cómo funciona
          </p>
          <h2
            className="m-0 max-w-[900px] text-[clamp(3.3rem,6.5vw,7.6rem)] leading-[0.9] font-[780] tracking-[-0.075em] text-paper-bright max-sm:text-[clamp(3rem,14vw,4.3rem)]"
            id="lifecycle-title"
          >
            Del pedido<br />
            <em className="font-serif font-normal tracking-[-0.055em] text-lime-soft">a otra vuelta.</em>
          </h2>
        </div>
        <p className="mb-2 max-w-[460px] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.7] text-paper-bright/70">
          La propuesta conecta cada momento para que el contenedor no termine después de un
          solo uso: vuelve al sistema, se prepara y puede circular otra vez.
        </p>
      </div>

      <div className="relative mx-auto mt-[clamp(5rem,10vw,9rem)] min-h-[900px] max-w-[1200px] max-xl:min-h-0">
        <JourneyPath />

        <ol className="absolute inset-0 m-0 list-none p-0 before:hidden max-xl:relative max-xl:inset-auto max-xl:grid max-xl:before:absolute max-xl:before:top-7 max-xl:before:bottom-7 max-xl:before:left-7 max-xl:before:block max-xl:before:w-px max-xl:before:bg-paper-bright/25 max-sm:before:left-6">
          {lifecycleSteps.map((step) => (
            <LifecycleStep {...step} key={step.number} />
          ))}
        </ol>
      </div>
    </section>
  );
}
