import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  // 1. Verificar si el usuario existe en la tabla central 'users'
  const { data: existingUser } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single();

  let userId = existingUser?.id;

  // 2. Si no existe, crear usuario central
  if (!userId) {
    const { data: newUser, error } = await supabase
      .from('users')
      .insert([{ email, password }]) // En producción, usa Auth de Supabase o hashea el pass
      .select('id')
      .single();
    
    if (error) return NextResponse.json({ error: 'Error al crear usuario' }, { status: 400 });
    userId = newUser.id;
  }

  // 3. Crear el perfil específico en 'catacaos_members'
  const { error: profileError } = await supabase
    .from('catacaos_members')
    .insert([{ user_id: userId, name }]);

  return NextResponse.json({ success: true, userId });
}