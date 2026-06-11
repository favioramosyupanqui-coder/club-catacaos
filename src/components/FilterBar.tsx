"use client";
import { useRouter } from 'next/navigation';

export default function FilterBar() {
  const router = useRouter();

  return (
    <div className="flex gap-4 my-8 justify-center">
      <button onClick={() => router.push('/?distrito=Catacaos')} className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold">
        Catacaos
      </button>
      <button onClick={() => router.push('/?distrito=Piura')} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold hover:bg-slate-50">
        Piura
      </button>
    </div>
  );
}