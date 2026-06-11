"use client";
import React from 'react';

interface BusinessDetailsProps {
  organization: any;
  beneficios: any[];
}

export default function BusinessDetails({ organization, beneficios }: BusinessDetailsProps) {
  if (!organization) return <div className="p-10 text-center">Cargando información...</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Cabecera del Negocio */}
      <div className="flex items-center gap-6 mb-8">
        
        {/* Lógica de imagen con fallback para errores 403 */}
        {organization.logo_url ? (
          <img 
            src={organization.logo_url} 
            alt={organization.name} 
            className="w-20 h-20 rounded-2xl object-cover shadow-md bg-slate-200"
            onError={(e) => {
               // Si la imagen falla (403), ocultamos el <img> y mostramos el div de fallback
               e.currentTarget.style.display = 'none';
               const fallback = e.currentTarget.parentElement?.querySelector('.fallback-initial');
               if (fallback) fallback.classList.remove('hidden');
            }}
          />
        ) : null}

        {/* El fallback que aparece solo si la imagen falta o falla (clase hidden por defecto si hay logo) */}
        <div className={`w-20 h-20 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-2xl shadow-sm border border-indigo-200 fallback-initial ${organization.logo_url ? 'hidden' : ''}`}>
          {organization.name?.charAt(0).toUpperCase() || 'N'}
        </div>

        <div>
          <h1 className="text-4xl font-extrabold text-slate-900">{organization.name}</h1>
          <p className="text-indigo-600 font-medium">{organization.categoria}</p>
        </div>
      </div>

      {/* Descripción */}
      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Sobre nosotros</h2>
        <p className="text-slate-600 leading-relaxed">
          {organization.descripcion_negocio || "Sin descripción disponible por el momento."}
        </p>
      </section>

      {/* Lista de Beneficios */}
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Beneficios para ti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {beneficios && beneficios.length > 0 ? (
          beneficios.map((b) => (
            <div key={b.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900">{b.titulo}</h3>
              <p className="text-sm text-slate-500 mb-4">{b.subtitulo}</p>
              
              <div className="space-y-2 mb-6">
                {b.servicios_incluye && (
                  <p className="text-sm text-slate-700"><strong>Incluye:</strong> {b.servicios_incluye}</p>
                )}
                {b.condiciones && (
                  <p className="text-xs text-slate-400 italic">Condiciones: {b.condiciones}</p>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-lg font-black text-indigo-600">
                  {b.precio_descuento ? `S/ ${b.precio_descuento}` : 'Gratis'}
                </span>
                {b.precio_normal && (
                  <span className="text-sm line-through text-slate-400">S/ {b.precio_normal}</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-500 italic">No hay beneficios activos en este momento.</p>
        )}
      </div>
    </div>
  );
}