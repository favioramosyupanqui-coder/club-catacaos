import SearchAndFilter from '@/components/SearchAndFilter';
import BusinessList from '@/components/BusinessList';
import { supabase } from '@/lib/supabase'; // <--- ESTA ES LA LÍNEA QUE TE FALTA

export default async function Home({ searchParams }: { searchParams: Promise<{ q?: string, categoria?: string }> }) {
  const { q, categoria } = await searchParams;

  // Iniciamos la consulta
  let query = supabase
    .from('organizations')
    .select('*')
    .eq('distrito_operativo', 'Catacaos'); // Asegúrate de que el nombre de columna sea correcto

  // Filtros dinámicos
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