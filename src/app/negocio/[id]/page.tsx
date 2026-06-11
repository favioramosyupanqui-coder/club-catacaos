import { supabase } from "@/lib/supabase"; // <--- ESTA LÍNEA ES LA QUE FALTA
import BusinessDetails from "@/components/BusinessDetails";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Ahora que importamos 'supabase', este código funcionará:
  const { data: negocio } = await supabase
    .from('organizations')
    .select('*')
    .eq('id', id)
    .single();

  const { data: beneficios } = await supabase
    .from('beneficios')
    .select('*')
    .eq('organization_id', id);

  return (
    <BusinessDetails 
      organization={negocio} 
      beneficios={beneficios || []} 
    />
  );
}