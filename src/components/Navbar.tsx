import Link from 'next/link';
import Image from 'next/image'; // Importamos Image para mejor rendimiento

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-10 border-b bg-white sticky top-0 z-50">
      
      <Link href="/" className="flex items-center gap-3 font-bold text-2xl text-indigo-700 tracking-tight">
        {/* Aquí insertamos el logo */}
        <Image 
          src="logo-catacaos.png" 
          alt="Logo Club Catacaos" 
          width={40} 
          height={40} 
          className="object-contain"
        />
        Club Catacaos
      </Link>
      
      <div className="space-x-6 flex items-center">
        <a href="https://confiaf.com/login.php" className="text-slate-600">Iniciar Sesión</a>
        <a href="https://confiaf.com/organization_create.php?ref=45e63436-85fb-4112-bcc0-4988ecd4c9a8" className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl">Registrar Negocio</a>
      </div>
    </nav>
  );
}