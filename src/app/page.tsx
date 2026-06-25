import SearchAndFilter from '@/components/SearchAndFilter';
import BusinessList from '@/components/BusinessList';
import { supabase } from '@/lib/supabase';

export default async function Home({ searchParams }: { searchParams: Promise<{ q?: string, categoria?: string }> }) {
  const { q, categoria } = await searchParams;

  // Iniciamos la consulta filtrando solo los negocios autorizados
  let query = supabase
    .from('organizations')
    .select('*')
    .eq('distrito_operativo', 'Catacaos')
    .eq('visibilidad_estado', 'publico') // Solo los autorizados en el Admin
    .eq('active', true);               // Solo los que tienen el switch activo

  // Filtros dinámicos adicionales
  if (q) query = query.ilike('name', `%${q}%`);
  if (categoria) query = query.eq('categoria', categoria);

  const { data: businesses, error } = await query;

  if (error) {
    console.error("Error al obtener negocios:", error);
  }

  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-black text-center mb-8">Club Catacaos</h1>
      <SearchAndFilter />
      <BusinessList businesses={businesses || []} />
    </main>
  );
}