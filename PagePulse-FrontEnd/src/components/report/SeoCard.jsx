import {
  Search,
  CheckCircle2,
  FileText,
  BadgeCheck,
} from "lucide-react";

const SeoCard = ({ seo }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">

          <Search className="text-blue-600" size={24} />

        </div>

        <div>

          <h3 className="text-xl font-bold text-slate-900">
            SEO Analysis
          </h3>

          <p className="text-sm text-slate-500">
            Search engine optimization overview
          </p>

        </div>

      </div>

      {/* Title */}

      <div className="mb-5 rounded-xl border border-slate-100 bg-slate-50 p-4">

        <div className="mb-2 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <FileText size={18} className="text-slate-500" />

            <span className="font-medium text-slate-700">
              Page Title
            </span>

          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {seo.seoScore}
          </span>

        </div>

        <p className="line-clamp-2 text-sm leading-6 text-slate-600">
          {seo.title}
        </p>

      </div>

      {/* Meta Description */}

      <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

        <div className="mb-2 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <BadgeCheck
              size={18}
              className="text-slate-500"
            />

            <span className="font-medium text-slate-700">
              Meta Description
            </span>

          </div>

          <span className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">

            <CheckCircle2 size={14} />

            {seo.metaStatus}

          </span>

        </div>

        <p className="text-sm leading-6 text-slate-600">
          {seo.metaDescription}
        </p>

      </div>

    </div>
  );
};

export default SeoCard;