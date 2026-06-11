"use client";
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchAndFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) params.set('q', term);
    else params.delete('q');
    router.push(`/?${params.toString()}`);
  };

  const categories = ["Gastronomía", "Salud", "Educación", "Servicios"];

  return (
    <div className="space-y-6 mb-10">
      <input 
        type="text" 
        placeholder="Buscar negocios..."
        className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map(cat => (
          // Asegúrate de que las clases tengan buen contraste
          <button 
            key={cat}
            onClick={() => router.push(`/?categoria=${cat}`)}
            // Cambié bg-white por un fondo más oscuro y texto más oscuro
            className="px-4 py-2 bg-white border border-slate-300 rounded-full text-sm font-semibold text-slate-800 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}