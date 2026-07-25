import { Activity } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-3 sm:px-6">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
            <Activity className="h-5 w-5" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-lg font-extrabold leading-none tracking-tight text-slate-900">
              PAGE <span className="text-blue-600">PULSE</span>
            </h1>

            <p className="hidden sm:block mt-1 text-xs font-medium leading-none text-slate-500">
              Website Health Analyzer
            </p>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Navbar;