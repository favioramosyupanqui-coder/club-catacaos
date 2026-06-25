'use client'
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí llamaremos a la API que creamos hace un momento
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) alert("¡Bienvenido al Club!");
    else alert("Credenciales incorrectas");
  };

  return (
    <form onSubmit={handleLogin} className="p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Ingreso a ClubCatacaos</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 border mb-2" />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} className="block w-full p-2 border mb-4" />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Entrar</button>
    </form>
  );
}