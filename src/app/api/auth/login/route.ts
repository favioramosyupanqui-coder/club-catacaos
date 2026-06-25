import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Validar credenciales en la tabla central 'users'
  const { data: user, error } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .eq('password', password) // Nuevamente, usa autenticación real de Supabase
    .single();

  if (error || !user) return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });

  // Crear cookie de sesión para este dominio
  cookies().set('club_session', user.id, { httpOnly: true, secure: true });

  return NextResponse.json({ success: true });
}