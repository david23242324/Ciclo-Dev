import { useState } from 'react'
const logo = "/CicloD2.png"

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser]                 = useState('')
  const [password, setPassword]         = useState('')

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">

      {/* ── NAVBAR ── */}
      <nav className="w-full flex items-center justify-between px-8 py-4 z-10">
        {/* Logo + Links */}
        <div className="flex items-center gap-8">
          <img src={logo} alt="Ciclo Dev" className="w-9 h-9 object-contain" />
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Pages</a>
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Category</a>
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Info</a>
          </div>
        </div>

        {/* Botones */}
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-all">
            Login
          </button>
          <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-100 transition-all">
            Register
          </button>
        </div>
      </nav>

      {/* ── CONTENIDO PRINCIPAL ── */}
      <div className="flex flex-1 w-full">

        {/* Mitad izquierda — Imagen */}
        <div className="hidden md:block w-1/2 h-full">
          <img
            src="/Akuma2.png"
            alt="Ciclo Dev"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Mitad derecha — Formulario */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-12 gap-6">

          <h1 className="text-3xl font-black tracking-[0.3em] text-gray-900 mb-2">
            CICLO DEV
          </h1>

          {/* Input Usuario */}
          <div
            className="w-full max-w-sm flex items-center justify-between px-5 py-4 rounded-full bg-gray-100"
            style={{ boxShadow: 'inset 3px 3px 8px rgba(0,0,0,0.12), inset -2px -2px 6px rgba(255,255,255,0.8)' }}
          >
            <input
              type="text"
              placeholder="User..."
              value={user}
              onChange={e => setUser(e.target.value)}
              className="bg-transparent outline-none text-gray-500 placeholder-gray-400 text-sm w-full"
            />
            <img src={logo} alt="icon" className="w-7 h-7 object-contain opacity-60 ml-3 flex-shrink-0" />
          </div>

          {/* Input Password */}
          <div
            className="w-full max-w-sm flex items-center justify-between px-5 py-4 rounded-full bg-gray-100"
            style={{ boxShadow: 'inset 3px 3px 8px rgba(0,0,0,0.12), inset -2px -2px 6px rgba(255,255,255,0.8)' }}
          >
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password..."
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="bg-transparent outline-none text-gray-500 placeholder-gray-400 text-sm w-full"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="ml-3 flex-shrink-0 text-gray-500 hover:text-gray-800 transition-colors"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.97 9.97 0 012.425-4.025M9.88 9.88A3 3 0 0114.12 14.12M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>

          {/* Forgot password */}
          <div className="w-full max-w-sm flex justify-start">
            <button className="text-sm text-gray-400 hover:text-gray-700 transition-colors flex items-center gap-2">
              Forgot your password? <span>→</span>
            </button>
          </div>

          {/* Botón Get into */}
          <button className="w-full max-w-sm py-4 rounded-full border border-gray-300 text-gray-800 font-semibold tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
            Get into
          </button>

          {/* Separador */}
          <div className="w-full max-w-sm flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs text-gray-400 tracking-widest whitespace-nowrap">Get into With</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Botones sociales */}
          <div className="flex gap-5">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-500 transition-all" style={{ boxShadow: '2px 2px 6px rgba(0,0,0,0.08)' }}>
              <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-indigo-400 transition-all" style={{ boxShadow: '2px 2px 6px rgba(0,0,0,0.08)' }}>
              <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-800 transition-all" style={{ boxShadow: '2px 2px 6px rgba(0,0,0,0.08)' }}>
              <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}