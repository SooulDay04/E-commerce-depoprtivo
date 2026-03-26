import RegistroController from './RegistroController';
import { Link } from 'react-router-dom';

function RegistroView() {
  const { 
    isLoginView, 
    toggleView, 
    formData, 
    setters, 
    error, 
    handleSubmit,
    showPassword,
    setShowPassword
  } = RegistroController();

  const inputClass = "w-full bg-[#333333] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-sportixNeon transition-colors font-sans";
  const labelClass = "block text-white text-xs font-bold tracking-wider mb-2 uppercase";

  const imgLogin = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=80";
  const imgRegistro = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop";

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] w-full">
      
      <div 
        className={`w-full md:w-1/2 flex items-center p-12 md:p-24 relative overflow-hidden transition-all duration-500
          ${isLoginView ? 'order-1' : 'order-2 md:order-2'}
        `}
      >
        <img 
          src={isLoginView ? imgLogin : imgRegistro}
          alt="Sportix Background"
          className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"
        />

        <div className="absolute inset-0 bg-black/60 z-1"></div>

        <div className="relative z-10 w-full flex flex-col justify-center h-full">
          {isLoginView ? (
            <h2 className="text-8xl md:text-9xl font-bebas leading-[0.85] tracking-tight text-white uppercase animate-slide-right">
              SUPERA TUS<br />
              <span className="text-sportixNeon">LÍMITES</span>
            </h2>
          ) : (
            <h2 className="text-8xl md:text-9xl font-bebas leading-[0.85] tracking-tight text-white uppercase animate-slide-left">
              EL FUTURO<br />
              <span className="text-sportixNeon">ERES TÚ</span>
            </h2>
          )}
        </div>
      </div>

      {/* ================= SECCIÓN DEL FORMULARIO ================= */}
      <div 
        className={`w-full md:w-1/2 bg-[#0a0a0a] flex flex-col justify-center p-8 md:p-24 transition-all duration-500
          ${isLoginView ? 'order-2' : 'order-1 md:order-1'}
        `}
      >
        <div className="max-w-md w-full mx-auto flex flex-col items-start relative z-10">
          
          <h1 className="text-5xl font-bebas text-white tracking-widest mb-10 uppercase">
            {isLoginView ? 'INICIA SESIÓN' : 'REGÍSTRATE'}
          </h1>

          {error && (
            <div className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded mb-6 text-sm w-full font-sans">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            
            {/* Campo NOMBRE COMPLETO (Solo Registro) */}
            {!isLoginView && (
              <div className="animate-slide-left">
                <label htmlFor="nombre" className={labelClass}>NOMBRE COMPLETO</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="JUAN PÉREZ"
                  value={formData.nombre}
                  onChange={(e) => setters.setNombre(e.target.value.toUpperCase())}
                  className={`${inputClass} uppercase`}
                />
              </div>
            )}

            {/* Campo EMAIL (Ambos) */}
            <div>
              <label htmlFor="email" className={labelClass}>EMAIL</label>
              <input
                id="email"
                type="email"
                placeholder="TU@EMAIL.COM"
                value={formData.email}
                onChange={(e) => setters.setEmail(e.target.value.toUpperCase())}
                className={`${inputClass} uppercase`}
              />
            </div>

            {/* Campo CONTRASEÑA (Ambos) */}
            <div>
              <label htmlFor="password" className={labelClass}>CONTRASEÑA</label>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'} 
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setters.setPassword(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Checkbox funcional para Mostrar Contraseña */}
            {isLoginView && (
              <div className="flex items-center gap-3 pt-2 animate-slide-right">
                <label htmlFor="show-password-checkbox" className="flex items-center cursor-pointer gap-3 text-gray-400 hover:text-white transition-colors">
                    <input
                        type="checkbox"
                        id="show-password-checkbox"
                        checked={showPassword}
                        onChange={(e) => setShowPassword(e.target.checked)} 
                        className="w-5 h-5 bg-transparent border border-gray-600 rounded appearance-none checked:bg-sportixNeon checked:border-sportixNeon cursor-pointer transition-colors"
                    />
                    <span className="text-xs font-bebas tracking-wider uppercase pt-0.5">MOSTRAR CONTRASEÑA</span>
                </label>
              </div>
            )}

            <div className="pt-6 flex justify-start w-full">
              <button
                type="submit"
                className="bg-sportixNeon text-black font-bebas text-2xl py-2.5 px-10 rounded-md tracking-wider hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 uppercase"
              >
                {isLoginView ? 'ENTRA' : 'REGÍSTRATE'} 
                <span className="text-xl">→</span>
              </button>
            </div>
          </form>

          {/* Texto inferior de redirección */}
          <div className="mt-12 border-t border-neutral-800 pt-6 w-full text-left">
            <p className="text-gray-500 font-sans text-sm">
                {isLoginView ? '¿No tienes cuenta?' : '¿Ya eres miembro?'}
                <button
                type="button"
                onClick={toggleView}
                className="text-sportixNeon ml-2 hover:underline focus:outline-none font-medium uppercase"
                >
                {isLoginView ? 'Crea una cuenta gratis' : 'Inicia Sesión'}
                </button>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default RegistroView;