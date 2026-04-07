import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
const logo = "/CicloD2.png"

interface LoadingScreenProps {
  onFinish: () => void
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Fase 1
  const logoLargeRef  = useRef<HTMLImageElement>(null)
  const spinnerRef    = useRef<HTMLDivElement>(null)

  // Fase 2
  const phase2Ref     = useRef<HTMLDivElement>(null)
  const logoSmallRef  = useRef<HTMLImageElement>(null)
  const nameRef       = useRef<HTMLSpanElement>(null)

  // Fase 3 / 4
  const logoExitRef   = useRef<HTMLImageElement>(null)
  const nameFinalRef  = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // ── Estado inicial: todo invisible ──────────────────────────────
    gsap.set([logoLargeRef.current, spinnerRef.current], { opacity: 0, y: 30 })
    gsap.set(phase2Ref.current,   { opacity: 0 })
    gsap.set(logoExitRef.current, { opacity: 0 })
    gsap.set(nameFinalRef.current,{ opacity: 0 })
    gsap.set(nameRef.current,     { width: 0 })

    // ── FASE 1: Logo grande + spinner entran ────────────────────────
    tl.to(logoLargeRef.current, {
      opacity: 1, y: 0,
      duration: 0.9, ease: 'power3.out'
    })
    tl.to(spinnerRef.current, {
      opacity: 1, y: 0,
      duration: 0.6, ease: 'power3.out'
    }, '-=0.4')

    // ── Pausa en fase 1 ─────────────────────────────────────────────
    tl.to({}, { duration: 1.4 })

    // ── TRANSICIÓN 1→2: logo grande y spinner salen hacia arriba ────
    tl.to([logoLargeRef.current, spinnerRef.current], {
      opacity: 0, y: -40,
      duration: 0.6, ease: 'power3.in',
      stagger: 0.08
    })

    // ── FASE 2: logo pequeño + nombre aparecen desde abajo ──────────
    tl.to(phase2Ref.current, {
      opacity: 1,
      duration: 0.5, ease: 'power2.out'
    }, '-=0.1')

    // Typewriter del nombre
    tl.to(nameRef.current, {
      width: '9ch',
      duration: 1.1, ease: 'steps(9)'
    }, '-=0.1')

    // ── Pausa en fase 2 ─────────────────────────────────────────────
    tl.to({}, { duration: 0.8 })

    // ── TRANSICIÓN 2→3: fase 2 sale, fase 3 entra ───────────────────
    tl.to(phase2Ref.current, {
      opacity: 0, y: -20,
      duration: 0.5, ease: 'power3.in'
    })

    // Logo y nombre de fase 3 aparecen
    tl.to(logoExitRef.current, {
      opacity: 1,
      duration: 0.4, ease: 'power2.out'
    }, '-=0.1')
    tl.to(nameFinalRef.current, {
      opacity: 1,
      duration: 0.4, ease: 'power2.out'
    }, '<')

    // ── Pausa antes de la animación de fase 3 ───────────────────────
    tl.to({}, { duration: 0.5 })

    // ── FASE 3: logo sube y desaparece, nombre se centra ────────────
    tl.to(logoExitRef.current, {
      y: -80, opacity: 0, scale: 0.5,
      duration: 0.7, ease: 'power3.in'
    })
    tl.to(nameFinalRef.current, {
      x: () => {
        const el = nameFinalRef.current!
        const rect = el.getBoundingClientRect()
        const centerX = window.innerWidth / 2
        const elCenterX = rect.left + rect.width / 2
        return centerX - elCenterX
      },
      duration: 0.75, ease: 'power3.out'
    }, '-=0.4')

    // ── Pausa en fase 4 ─────────────────────────────────────────────
    tl.to({}, { duration: 1.2 })

    // ── Salida final ────────────────────────────────────────────────
    tl.to(nameFinalRef.current, {
      opacity: 0, y: -20,
      duration: 0.6, ease: 'power3.in',
      onComplete: onFinish
    })

    return () => { tl.kill() }
  }, [onFinish])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-white flex items-center justify-center overflow-hidden z-50"
    >
      {/* ── FASE 1 ── */}
      <div className="absolute flex flex-col items-center gap-8">
        <img
          ref={logoLargeRef}
          src={logo}
          alt="Ciclo Dev"
          className="w-44 h-44 object-contain"
        />
        <div
          ref={spinnerRef}
          className="w-7 h-7 border-[2px] border-gray-200 border-t-gray-900 rounded-full animate-spin"
        />
      </div>

      {/* ── FASE 2 ── */}
      <div
        ref={phase2Ref}
        className="absolute flex flex-row items-center gap-5"
      >
        <img
          ref={logoSmallRef}
          src={logo}
          alt="Ciclo Dev"
          className="w-16 h-16 object-contain"
        />
        <span
          ref={nameRef}
          className="text-3xl font-black tracking-widest text-gray-900 overflow-hidden whitespace-nowrap border-r-[3px] border-gray-900 animate-blink"
          style={{ width: 0 }}
        >
          Ciclo Dev
        </span>
      </div>

      {/* ── FASE 3 / 4 ── */}
      <div className="absolute flex flex-row items-center gap-5">
        <img
          ref={logoExitRef}
          src={logo}
          alt="Ciclo Dev"
          className="w-16 h-16 object-contain"
        />
        <span
          ref={nameFinalRef}
          className="text-3xl font-black tracking-widest text-gray-900 border-r-[3px] border-gray-900 animate-blink whitespace-nowrap"
        >
          Ciclo Dev
        </span>
      </div>
    </div>
  )
}