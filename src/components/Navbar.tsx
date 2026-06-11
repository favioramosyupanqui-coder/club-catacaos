import Link from 'next/link'; // Importa Link

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-10 border-b bg-white sticky top-0 z-50">
      {/* Envuelve el texto en el componente Link */}
      <Link href="/" className="font-bold text-2xl text-indigo-700 tracking-tight">
        Club Catacaos
      </Link>
      
      <div className="space-x-6 flex items-center">
        <a href="https://confiaf.com/login.php" className="text-slate-600">Iniciar Sesión</a>
        <a href="https://confiaf.com/organization_create.php?ref=45e63436-85fb-4112-bcc0-4988ecd4c9a8" className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl">Registrar Negocio</a>
      </div>
    </nav>
  );
}