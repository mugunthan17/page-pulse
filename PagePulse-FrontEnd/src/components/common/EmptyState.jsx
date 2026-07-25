import { Globe } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="mt-12 rounded-3xl border-2 border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">

        <Globe
          size={46}
          className="text-blue-600"
        />

      </div>

      <h2 className="mt-8 text-3xl font-bold text-slate-900">

        Analyze Any Website

      </h2>

      <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-500">

        Enter a website URL above and click
        <span className="font-semibold text-slate-700">
          {" "}Analyze Website{" "}
        </span>
        to generate a complete SEO, performance,
        accessibility and content report.

      </p>

      <div className="mt-10 inline-flex rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-slate-600">

        Waiting for analysis...

      </div>

    </div>
  );
};

export default EmptyState;