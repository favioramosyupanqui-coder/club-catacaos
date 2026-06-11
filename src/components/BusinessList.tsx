"use client";
import Link from 'next/link';

interface Organization {
  id: string;
  name: string;
  categoria: string;
  logo_url?: string;
}

export default function BusinessList({ businesses = [] }: { businesses?: any[] }) {
  // Verificamos si realmente hay datos antes de mapear
  if (!businesses || businesses.length === 0) {
    return <p className="p-6 text-slate-500 text-center">No hay negocios disponibles en este momento.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {businesses.map((biz) => (
        <div key={biz.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all">
         {/* Lógica de imagen a prueba de errores 403 */}
          {biz.logo_url && !biz.logo_url.includes('fbcdn.net') ? (
            <img 
              src={biz.logo_url} 
              alt={biz.name} 
              className="w-20 h-20 rounded-2xl object-cover shadow-md bg-slate-200"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.parentElement?.querySelector('.fallback-div');
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
          ) : null}

          {/* Fallback que aparece si NO hay URL o si la URL es de Facebook (bloqueada) */}
          <div className={`fallback-div w-20 h-20 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-2xl shadow-sm border border-indigo-200 ${(biz.logo_url && !biz.logo_url.includes('fbcdn.net')) ? 'hidden' : ''}`}>
            {biz.name?.charAt(0).toUpperCase() || 'N'}
          </div>
          
          <h3 className="text-xl font-bold text-slate-900">{biz.name}</h3>
          <p className="text-indigo-600 font-medium text-sm mb-4">{biz.categoria}</p>
          
          <Link href={`/negocio/${biz.id}`} className="text-indigo-700 font-bold hover:underline">
            Ver beneficios →
          </Link>
        </div>
      ))}
    </div>
  );
}