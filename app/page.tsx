import Link from "next/link";

import { LifecycleJourney } from "./components/lifecycle-journey";
import { SiteHeader } from "./components/site-header";

const sectionLabelClass =
  "mb-6 flex items-center gap-3 text-[0.72rem] font-extrabold tracking-[0.15em] uppercase";

function ArrowIcon() {
  return (
    <svg
      className="w-5 fill-none stroke-lime [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.7]"
      aria-hidden="true"
      viewBox="0 0 20 20"
    >
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function ContainerVisual() {
  const cycleLabelClass =
    "absolute z-[3] rounded-full border border-line bg-paper-bright px-3 py-2 text-[0.66rem] font-extrabold tracking-[0.08em] text-ink uppercase";

  return (
    <div
      className="relative grid aspect-square w-[min(39vw,570px)] place-items-center max-[1120px]:w-[min(42vw,500px)] max-[900px]:w-[min(76vw,570px)] max-[520px]:w-full"
      aria-label="Un contenedor reutilizable recorriendo un ciclo continuo"
    >
      <div className="orbit orbit-outer" aria-hidden="true" />
      <div className="orbit orbit-inner" aria-hidden="true" />
      <span className="orbit-arrow orbit-arrow-top" aria-hidden="true">→</span>
      <span className="orbit-arrow orbit-arrow-bottom" aria-hidden="true">→</span>

      <span className={`${cycleLabelClass} top-[2%] left-[30%]`}>Toma</span>
      <span className={`${cycleLabelClass} top-[37%] -right-[3%] max-[520px]:right-0`}>Usa</span>
      <span className={`${cycleLabelClass} right-[28%] bottom-[1%]`}>Devuelve</span>
      <span className={`${cycleLabelClass} top-1/2 -left-[3%] max-[520px]:left-0`}>Reutiliza</span>

      <svg
        className="container-drawing"
        viewBox="0 0 280 280"
        role="img"
        aria-label="Ilustración de un contenedor reutilizable de ReVuelta"
      >
        <defs>
          <linearGradient id="container-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f9f7ec" />
            <stop offset="1" stopColor="#dce7c5" />
          </linearGradient>
        </defs>
        <ellipse cx="140" cy="227" rx="76" ry="17" fill="#173f32" opacity=".13" />
        <path d="M72 90h136l-12 119c-1 13-12 23-25 23h-62c-13 0-24-10-25-23L72 90Z" fill="url(#container-body)" stroke="#123c30" strokeWidth="5" />
        <path d="M62 74c0-9 8-17 17-17h122c9 0 17 8 17 17v17H62V74Z" fill="#b8df42" stroke="#123c30" strokeWidth="5" />
        <path d="M79 57h122M88 42h104" fill="none" stroke="#123c30" strokeLinecap="round" strokeWidth="5" />
        <circle cx="140" cy="151" r="34" fill="#123c30" />
        <path d="M122 152c7-13 19-19 36-15" fill="none" stroke="#b8df42" strokeLinecap="round" strokeWidth="5" />
        <path d="m153 127 7 10-11 5" fill="none" stroke="#b8df42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
        <path d="M158 150c-7 13-19 19-36 15" fill="none" stroke="#b8df42" strokeLinecap="round" strokeWidth="5" />
        <path d="m127 175-7-10 11-5" fill="none" stroke="#b8df42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
      </svg>

      <div
        className="absolute right-[19%] bottom-1/4 z-[4] grid rotate-[7deg] grid-cols-[repeat(3,4px)] gap-[3px] rounded-sm bg-paper-bright p-2 shadow-[0_8px_24px_rgba(11,43,35,0.16)]"
        aria-hidden="true"
      >
        <span className="h-[18px] w-1 bg-ink" />
        <span className="h-[18px] w-1 bg-ink" />
        <span className="h-[18px] w-1 bg-ink" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          className="hero-dots relative grid min-h-[calc(100svh-76px)] grid-cols-[minmax(0,1fr)_minmax(350px,0.85fr)] items-center gap-[clamp(2rem,5vw,7rem)] overflow-hidden px-[6vw] pt-[clamp(4.5rem,8vw,8rem)] pb-24 max-[1120px]:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] max-[1120px]:pr-[4vw] max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:px-[6vw] max-[900px]:py-16 max-[520px]:px-5 max-[520px]:pt-16 max-[520px]:pb-14"
          aria-labelledby="hero-title"
        >
          <div className="relative z-[2] max-w-[900px] max-[900px]:max-w-[720px]">
            <p className={`${sectionLabelClass} text-ink`}>
              <span className="size-2 rounded-full bg-lime shadow-[0_0_0_5px_rgba(184,223,66,0.24)]" aria-hidden="true" />
              Un sistema compartido para reutilizar
            </p>
            <h1
              className="m-0 text-[clamp(3.7rem,7vw,8.3rem)] leading-[0.86] font-[780] tracking-[-0.075em] text-ink-deep max-[520px]:text-[clamp(3.15rem,15vw,4.2rem)]"
              id="hero-title"
            >
              Un contenedor.<br />
              <em className="font-serif font-normal tracking-[-0.055em] text-ink">Muchos ciclos.</em>
            </h1>
            <p className="mt-[clamp(2rem,4vw,3.5rem)] max-w-[620px] text-[clamp(1rem,1.25vw,1.18rem)] leading-[1.65] max-[520px]:text-[0.96rem]">
              ReVuelta propone una red compartida de contenedores reutilizables que pueden
              tomarse, usarse, devolverse, sanitizarse y ponerse de nuevo en circulación.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 max-[520px]:grid max-[520px]:grid-cols-1">
              <Link
                className="inline-flex min-h-[54px] items-center justify-center gap-10 rounded-full border border-ink bg-ink px-6 text-sm font-bold text-paper-bright transition-transform hover:-translate-y-0.5 hover:bg-ink-deep max-[520px]:w-full max-[520px]:justify-between"
                href="#how-it-works"
              >
                Descubre cómo funciona <ArrowIcon />
              </Link>
              <button
                className="inline-flex min-h-[54px] cursor-not-allowed items-center justify-center rounded-full border border-ink bg-transparent px-6 text-sm font-bold max-[520px]:w-full"
                type="button"
                aria-label="Pregunta a ReVuelta, próximamente"
                title="Próximamente"
                disabled
              >
                Pregunta a ReVuelta
              </button>
            </div>
          </div>

          <div className="relative grid min-h-[570px] place-items-center max-[900px]:min-h-[min(78vw,600px)] max-[520px]:mt-4 max-[520px]:min-h-[105vw]">
            <p className="absolute top-[4%] right-[8%] z-[4] m-0 font-serif text-sm italic max-[520px]:top-0 max-[520px]:right-2">Diseñado para volver</p>
            <ContainerVisual />
            <p className="absolute bottom-[7%] left-1/2 z-[4] m-0 -translate-x-1/2 whitespace-nowrap font-serif text-sm italic max-[520px]:bottom-[1%]">No se posee. Se comparte.</p>
          </div>

          <Link
            className="absolute bottom-6 left-[6vw] flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.08em] uppercase max-[900px]:hidden"
            href="#problem"
            aria-label="Continuar a la sección del problema"
          >
            <span>Sigue explorando</span>
            <span className="grid size-7 place-items-center rounded-full border border-line" aria-hidden="true">↓</span>
          </Link>
        </section>

        <section
          className="grid grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] gap-[clamp(4rem,9vw,10rem)] bg-ink-deep px-[6vw] py-[clamp(6rem,11vw,11rem)] text-paper max-[900px]:grid-cols-1 max-[520px]:px-5 max-[520px]:py-[5.5rem]"
          id="problem"
          aria-labelledby="problem-title"
        >
          <div>
            <p className={`${sectionLabelClass} text-lime`}>01 / El problema</p>
            <h2
              className="m-0 text-[clamp(3rem,5.8vw,7rem)] leading-[0.98] font-[780] tracking-[-0.075em] text-paper-bright max-[520px]:text-[clamp(2.8rem,14vw,4.2rem)]"
              id="problem-title"
            >
              Lo usamos durante minutos.<br />
              <em className="font-serif font-normal tracking-[-0.055em] text-lime-soft">Permanece durante años.</em>
            </h2>
          </div>

          <div className="flex flex-col justify-center pt-12 max-[900px]:pt-0">
            <div className="grid grid-cols-[auto_1fr_auto_1fr_auto] items-center max-[520px]:grid-cols-1 max-[520px]:justify-items-start" aria-hidden="true">
              <span className="grid justify-items-center gap-2.5 max-[520px]:grid-cols-[auto_1fr] max-[520px]:items-center max-[520px]:gap-3">
                <i className="grid size-10 place-items-center rounded-full border border-paper-bright/30 text-[0.65rem] not-italic text-lime">01</i>
                <b className="text-[0.68rem] font-semibold whitespace-nowrap">Fabricado</b>
              </span>
              <span className="line-track"><i /></span>
              <span className="grid justify-items-center gap-2.5 max-[520px]:grid-cols-[auto_1fr] max-[520px]:items-center max-[520px]:gap-3">
                <i className="grid size-10 place-items-center rounded-full border border-paper-bright/30 text-[0.65rem] not-italic text-lime">02</i>
                <b className="text-[0.68rem] font-semibold whitespace-nowrap">Usado una vez</b>
              </span>
              <span className="line-track line-track-broken"><i /></span>
              <span className="grid justify-items-center gap-2.5 opacity-40 max-[520px]:grid-cols-[auto_1fr] max-[520px]:items-center max-[520px]:gap-3">
                <i className="grid size-10 place-items-center rounded-full border border-paper-bright/30 text-[0.65rem] not-italic text-lime">03</i>
                <b className="text-[0.68rem] font-semibold whitespace-nowrap">Desechado</b>
              </span>
            </div>
            <p className="mt-14 max-w-[520px] text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.7] text-paper-bright/75 max-[520px]:mt-10 max-[520px]:text-[0.96rem]">
              La comida y las bebidas para llevar suelen depender de envases diseñados para
              un solo uso breve. El momento útil termina, pero el material permanece.
            </p>
            <p className="mt-8 font-serif text-base italic text-paper-bright">¿Y si el trayecto continuara?</p>
          </div>
        </section>

        <section
          className="grid grid-cols-[minmax(320px,0.82fr)_minmax(430px,1.18fr)] items-center gap-[clamp(4rem,8vw,10rem)] bg-paper-bright px-[6vw] py-[clamp(6rem,11vw,11rem)] max-[900px]:grid-cols-1 max-[520px]:px-5 max-[520px]:py-[5.5rem]"
          id="circular-idea"
          aria-labelledby="circular-title"
        >
          <div className="max-[900px]:max-w-[700px]">
            <p className={`${sectionLabelClass} text-ink`}>02 / Una idea circular</p>
            <h2
              className="m-0 text-[clamp(3rem,5.4vw,6.5rem)] leading-[0.98] font-[780] tracking-[-0.075em] text-ink-deep max-[520px]:text-[clamp(2.8rem,14vw,4.2rem)]"
              id="circular-title"
            >
              ¿Y si el contenedor<br />
              <em className="font-serif font-normal tracking-[-0.055em] text-ink">no se convirtiera en residuo?</em>
            </h2>
            <p className="mt-10 max-w-[480px] text-[1.05rem] leading-[1.7] text-[#4e5a52] max-[520px]:text-[0.96rem]">
              ReVuelta cambia la lógica de la propiedad individual por un sistema de contenedores
              compartidos: recíbelo, úsalo, devuélvelo y mantén el ciclo en movimiento.
            </p>
          </div>
          <div className="border-y border-ink py-[clamp(2.5rem,5vw,5rem)]">
            <p className="m-0 text-[0.68rem] font-extrabold tracking-[0.14em] text-ink uppercase">
              Tu parte es simple
            </p>
            <p className="mt-7 font-serif text-[clamp(2.7rem,4.5vw,5.4rem)] leading-[0.98] italic tracking-[-0.045em] text-ink-deep">
              Recíbelo.<br />
              Úsalo. <span className="text-ink">Devuélvelo.</span>
            </p>
            <div className="mt-[clamp(2.5rem,5vw,4.5rem)] grid grid-cols-[2.75rem_1fr] gap-5 border-t border-line pt-7 max-[520px]:grid-cols-1 max-[520px]:gap-4">
              <span className="grid size-11 place-items-center rounded-full bg-lime text-xl text-ink" aria-hidden="true">↓</span>
              <div>
                <p className="m-0 text-[0.68rem] font-extrabold tracking-[0.12em] text-ink uppercase">
                  Después de la devolución
                </p>
                <p className="mt-3 max-w-[560px] text-[1.05rem] leading-[1.65] text-[#4e5a52] max-[520px]:text-[0.96rem]">
                  La propuesta continúa con inspección, sanitización y reutilización antes de
                  poner el contenedor nuevamente en circulación.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LifecycleJourney />

        <section
          className="flex min-h-[150px] items-center justify-between border-t border-line px-[6vw] py-8 text-ink max-[520px]:min-h-[120px] max-[520px]:px-5 max-[520px]:py-6"
          aria-label="El sistema ReVuelta continúa"
        >
          <p className="m-0 font-serif text-[clamp(1.4rem,3vw,2.8rem)] italic">Un contenedor es solo el principio.</p>
          <span className="text-[clamp(2.5rem,5vw,5rem)]" aria-hidden="true">↻</span>
        </section>
      </main>
    </>
  );
}
