import {
  Gauge,
  Zap,
} from "lucide-react";

const PerformanceCard = ({ performance }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">

          <Gauge
            size={24}
            className="text-amber-600"
          />

        </div>

        <div>

          <h3 className="text-xl font-bold text-slate-900">
            Performance
          </h3>

          <p className="text-sm text-slate-500">
            Website loading performance
          </p>

        </div>

      </div>

      {/* Load Time */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            Total Load Time
          </p>

          <h2 className="mt-1 text-4xl font-bold text-slate-900">
            {performance.loadTime}
            <span className="ml-2 text-lg font-medium text-slate-500">
              ms
            </span>
          </h2>

        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">

          <Zap size={15} className="mr-1 inline" />

          {performance.rating}

        </span>

      </div>

      {/* Meter */}

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-xs text-slate-500">

          <span>Slow</span>

          <span>Average</span>

          <span>Fast</span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-green-500 transition-all duration-700"
            style={{
              width: `${performance.score}%`,
            }}
          />

        </div>

      </div>

      {/* Footer */}

      <p className="mt-5 text-sm text-slate-500">
        Page loaded faster than{" "}
        <span className="font-semibold text-slate-900">
          {performance.score}%
        </span>{" "}
        of tested websites.
      </p>

    </div>
  );
};

export default PerformanceCard;