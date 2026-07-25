import {
  Search,
  CheckCircle2,
  AlertTriangle,
  FileText,
  BadgeCheck,
} from "lucide-react";

const GRADE_STYLES = {
  A: "bg-green-100 text-green-700",
  B: "bg-green-100 text-green-700",
  C: "bg-amber-100 text-amber-700",
  D: "bg-orange-100 text-orange-700",
  F: "bg-red-100 text-red-700",
};

const SeoCard = ({ seo }) => {
  const gradeClass = GRADE_STYLES[seo.seoScore] || "bg-slate-100 text-slate-700";
  const metaPresent = seo.metaStatus === "Present";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
          <Search className="text-blue-600" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">SEO Analysis</h3>
          <p className="text-sm text-slate-500">Search engine optimization overview</p>
        </div>
      </div>

      {/* Title */}
      <div className="mb-5 rounded-xl border border-slate-100 bg-slate-50 p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-slate-500" />
            <span className="font-medium text-slate-700">Page Title</span>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${gradeClass}`}>
            {seo.seoScore}
          </span>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-slate-600">{seo.title}</p>
      </div>

      {/* Meta Description */}
      <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BadgeCheck size={18} className="text-slate-500" />
            <span className="font-medium text-slate-700">Meta Description</span>
          </div>
          <span
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
              metaPresent
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {metaPresent ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
            {seo.metaStatus}
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-600">{seo.metaDescription}</p>
      </div>

    </div>
  );
};

export default SeoCard;