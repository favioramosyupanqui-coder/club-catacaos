export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-pulse space-y-4 text-center">
        <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto"></div>
        <div className="h-6 w-48 bg-slate-200 rounded mx-auto"></div>
        <div className="text-slate-400 font-medium">Cargando detalles...</div>
      </div>
    </div>
  );
}