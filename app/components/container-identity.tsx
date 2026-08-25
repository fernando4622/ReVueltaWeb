const qrPattern = [
  "1111100011111",
  "1000100010001",
  "1010101010101",
  "1010100010101",
  "1000101010001",
  "1111100011111",
  "0000001000000",
  "1011010110101",
  "0010111011001",
  "1111100101110",
  "1000101110011",
  "1010100011010",
  "1111101100111",
] as const;

const exampleEvents = [
  { time: "08:14", label: "Entregado" },
  { time: "11:42", label: "Devuelto" },
  { time: "12:03", label: "Recibido" },
  { time: "13:20", label: "Sanitizado" },
  { time: "14:05", label: "Disponible" },
] as const;

function IllustrativeQr() {
  return (
    <div
      className="grid aspect-square w-28 grid-cols-[repeat(13,minmax(0,1fr))] gap-[2px] bg-paper-bright p-3 shadow-[0_14px_32px_rgba(11,43,35,0.18)] max-sm:w-24 max-sm:gap-px max-sm:p-2.5"
      role="img"
      aria-label="Representación ilustrativa de un código QR"
    >
      {qrPattern.flatMap((row, rowIndex) =>
        [...row].map((cell, columnIndex) => (
          <span
            className={cell === "1" ? "bg-ink" : "bg-transparent"}
            key={`${rowIndex}-${columnIndex}`}
          />
        )),
      )}
    </div>
  );
}

function PhysicalContainer() {
  return (
    <figure className="relative grid min-h-[680px] place-items-center overflow-hidden bg-lime-soft p-10 max-lg:min-h-[580px] max-sm:min-h-[500px] max-sm:p-6">
      <span className="absolute top-7 left-7 text-[0.64rem] font-extrabold tracking-[0.14em] text-ink uppercase max-sm:top-5 max-sm:left-5">
        Objeto físico
      </span>
      <span className="absolute top-7 right-7 font-serif text-sm italic text-ink/75 max-sm:top-5 max-sm:right-5">
        Identidad vinculada
      </span>

      <div className="relative mt-2 -rotate-3">
        <div className="absolute -right-8 -bottom-4 left-5 h-8 rounded-[50%] bg-ink/12 blur-sm" aria-hidden="true" />
        <div className="absolute -top-9 left-1/2 h-5 w-36 -translate-x-1/2 rounded-full border-4 border-ink bg-paper-bright max-sm:w-28" aria-hidden="true" />
        <div className="absolute -top-4 -right-5 -left-5 z-[2] h-16 rounded-t-[2rem] border-[5px] border-ink bg-lime max-sm:h-14" aria-hidden="true" />
        <div className="grid h-[340px] w-[250px] place-items-center rounded-t-xl rounded-b-[3.25rem] border-[5px] border-ink bg-paper-bright pt-8 max-sm:h-[290px] max-sm:w-[210px]">
          <IllustrativeQr />
        </div>
      </div>

      <figcaption className="absolute right-7 bottom-7 left-7 flex items-end justify-between gap-6 border-t border-ink/25 pt-5 text-ink max-sm:right-5 max-sm:bottom-5 max-sm:left-5">
        <span>
          <small className="block text-[0.58rem] font-extrabold tracking-[0.13em] uppercase">ID ilustrativo</small>
          <strong className="mt-1 block text-xl tracking-[-0.03em] whitespace-nowrap">RV-02184</strong>
        </span>
        <span className="max-w-48 text-right text-xs leading-[1.5] text-ink/70">
          El código representa el vínculo entre el contenedor y su registro.
        </span>
      </figcaption>
    </figure>
  );
}

function LifecycleRecord() {
  return (
    <div className="flex min-h-[680px] flex-col bg-paper-bright p-[clamp(2rem,5vw,5rem)] max-lg:min-h-0 max-sm:p-6">
      <div className="flex items-start justify-between gap-6 border-b border-line pb-7 max-sm:grid">
        <div>
          <p className="m-0 text-[0.62rem] font-extrabold tracking-[0.13em] text-ink uppercase">
            Registro de ejemplo
          </p>
          <p className="mt-2 text-[clamp(2rem,4vw,4.2rem)] leading-none font-[780] tracking-[-0.06em] text-ink-deep">
            RV-02184
          </p>
        </div>
        <div className="text-right max-sm:text-left">
          <p className="m-0 text-[0.58rem] font-extrabold tracking-[0.12em] text-ink uppercase">
            Estado ilustrativo
          </p>
          <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-ink px-3 py-2 text-xs font-bold text-ink">
            <span className="size-2 rounded-full bg-lime" aria-hidden="true" />
            Disponible
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 text-[0.62rem] font-extrabold tracking-[0.12em] text-ink uppercase">
        <span>Historial del ciclo</span>
        <span className="font-serif text-sm font-normal tracking-normal italic normal-case">Ejemplo conceptual</span>
      </div>

      <ol
        className="relative mt-7 grid flex-1 content-center gap-0 before:absolute before:top-5 before:bottom-5 before:left-[4.6rem] before:w-px before:bg-line max-sm:before:left-[3.85rem]"
        aria-label="Historial ilustrativo del contenedor RV-02184"
      >
        {exampleEvents.map((event, index) => (
          <li
            className="relative grid grid-cols-[4.1rem_1.25rem_1fr] items-center gap-4 py-3 max-sm:grid-cols-[3.35rem_1rem_1fr] max-sm:gap-3"
            key={`${event.time}-${event.label}`}
          >
            <time className="font-mono text-xs text-ink/65">{event.time}</time>
            <span
              className={`relative z-[2] grid aspect-square w-5 place-items-center rounded-full border bg-paper-bright max-sm:w-4 ${
                index === exampleEvents.length - 1 ? "border-lime" : "border-ink/30"
              }`}
              aria-hidden="true"
            >
              <span className={`size-1.5 rounded-full ${index === exampleEvents.length - 1 ? "bg-lime" : "bg-ink/35"}`} />
            </span>
            <strong className={`text-lg ${index === exampleEvents.length - 1 ? "text-ink-deep" : "font-semibold text-ink/65"}`}>
              {event.label}
            </strong>
          </li>
        ))}
      </ol>

      <p className="mt-8 border-t border-line pt-7 text-sm leading-[1.65] text-ink/70">
        Horarios, identificador y estado se muestran únicamente para explicar el concepto; no
        corresponden a datos operativos reales.
      </p>
    </div>
  );
}

export function ContainerIdentity() {
  return (
    <section
      className="bg-paper px-[6vw] py-[clamp(6rem,11vw,11rem)] text-ink max-sm:px-5 max-sm:py-[5.5rem]"
      id="container-identity"
      aria-labelledby="identity-title"
    >
      <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(300px,0.7fr)] items-end gap-[clamp(3rem,8vw,9rem)] max-lg:grid-cols-1">
        <div>
          <p className="mb-6 flex items-center gap-3 text-[0.72rem] font-extrabold tracking-[0.15em] uppercase">
            <span className="size-2 rounded-full bg-lime shadow-[0_0_0_5px_rgba(184,223,66,0.24)]" aria-hidden="true" />
            04 / Identidad digital
          </p>
          <h2
            className="m-0 max-w-[900px] text-[clamp(3.3rem,6.2vw,7.3rem)] leading-[0.9] font-[780] tracking-[-0.075em] text-ink-deep max-sm:text-[clamp(3rem,14vw,4.3rem)]"
            id="identity-title"
          >
            Cada contenedor<br />
            <em className="font-serif font-normal tracking-[-0.055em] text-ink">tiene una historia.</em>
          </h2>
        </div>
        <p className="mb-2 max-w-[480px] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.7] text-ink/70">
          ReVuelta no propone solamente un contenedor reutilizable. Una identidad digital podría
          distinguir cada pieza y relacionarla con los momentos de su circulación.
        </p>
      </div>

      <div className="mt-[clamp(4rem,8vw,8rem)] grid grid-cols-[minmax(360px,0.85fr)_minmax(480px,1.15fr)] border border-line max-lg:grid-cols-1">
        <PhysicalContainer />
        <LifecycleRecord />
      </div>
    </section>
  );
}
