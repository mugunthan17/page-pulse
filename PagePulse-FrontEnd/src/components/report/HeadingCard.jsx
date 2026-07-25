import {
  Heading1,
  CircleCheck,
  Info,
} from "lucide-react";

const HeadingCard = ({ seo }) => {
  const isGood = seo.h1Count >= 1 && seo.h1Count <= 2;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">

          <Heading1
            size={24}
            className="text-indigo-600"
          />

        </div>

        <div>

          <h3 className="text-xl font-bold text-slate-900">
            Headings
          </h3>

          <p className="text-sm text-slate-500">
            Heading structure analysis
          </p>

        </div>

      </div>

      {/* H1 Count */}

      <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              H1 Count
            </p>

            <h2 className="mt-2 text-5xl font-bold text-slate-900">
              {seo.h1Count}
            </h2>

          </div>

          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold ${
              isGood
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {isGood ? "Good" : "Needs Attention"}
          </span>

        </div>

      </div>

      {/* Recommendation */}

      <div className="mt-6 flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">

        {isGood ? (
          <CircleCheck
            size={22}
            className="mt-0.5 text-blue-600"
          />
        ) : (
          <Info
            size={22}
            className="mt-0.5 text-orange-500"
          />
        )}

        <div>

          <p className="font-semibold text-slate-800">

            {isGood
              ? "Heading structure looks good."
              : "Heading structure needs improvement."}

          </p>

          <p className="mt-1 text-sm text-slate-600">

            {isGood
              ? "Having 1–2 H1 headings is considered ideal for SEO."
              : "Use one primary H1 heading to improve semantic structure."}

          </p>

        </div>

      </div>

    </div>
  );
};

export default HeadingCard;