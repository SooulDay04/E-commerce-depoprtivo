import { useState } from 'react';

// Controlador actualizado para manejar visibilidad de contraseña
const RegistroController = () => {
  // Estado principal: true = Iniciar Sesión | false = Registro
  const [isLoginView, setIsLoginView] = useState(true);

  // Estados de los inputs
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // --- NUEVO ESTADO: Maneja si se muestra la contraseña o no ---
  const [showPassword, setShowPassword] = useState(false); 

  // Estado para mensajes de error
  const [error, setError] = useState('');

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    // Limpiamos todo al cambiar de vista, incluyendo la visibilidad de contraseña
    setError('');
    setPassword('');
    setNombre('');
    setShowPassword(false); // Resetear visibilidad
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLoginView) {
      if (!email || !password) {
        setError('Por favor, ingresa email y contraseña.');
        return;
      }
      // Aquí enviarías los datos a tu API
      console.log('Login:', { email, password });
      alert('Simulando Inicio de Sesión...');
    } else {
      if (!nombre || !email || !password) {
        setError('Todos los campos son obligatorios.');
        return;
      }
      // Aquí enviarías los datos a tu API para registrar
      console.log('Registro:', { nombre, email, password });
      alert('Simulando Registro de usuario...');
      setIsLoginView(true); // Regresar al login tras registro
    }
  };

  // Exponemos las nuevas funciones y estados
  return {
    isLoginView,
    toggleView,
    formData: { nombre, email, password },
    showPassword, // Exponer estado de visibilidad
    setShowPassword, // Exponer función para cambiar visibilidad
    setters: { setNombre, setEmail, setPassword },
    error,
    handleSubmit,
  };
};

export default RegistroController;