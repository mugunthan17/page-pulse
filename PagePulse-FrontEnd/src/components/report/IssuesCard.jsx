import { ListChecks, AlertTriangle, AlertCircle, Info } from "lucide-react";

const SEVERITY_STYLES = {
  high: { icon: AlertCircle, badge: "bg-red-100 text-red-700", iconColor: "text-red-500" },
  medium: { icon: AlertTriangle, badge: "bg-amber-100 text-amber-700", iconColor: "text-amber-500" },
  low: { icon: Info, badge: "bg-blue-100 text-blue-700", iconColor: "text-blue-500" },
};

const IssuesCard = ({ score, grade, issues }) => {
  if (!issues || issues.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
            <ListChecks className="text-slate-600" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Audit Issues</h3>
            <p className="text-sm text-slate-500">
              {issues.length} item{issues.length === 1 ? "" : "s"} found during this audit
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-3xl font-bold text-slate-900">
            {score}
            <span className="text-base font-medium text-slate-400">/100</span>
          </p>
          <p className="text-sm font-semibold text-slate-500">Grade {grade}</p>
        </div>
      </div>

      <div className="space-y-3">
        {issues.map((issue, index) => {
          const style = SEVERITY_STYLES[issue.severity] || SEVERITY_STYLES.low;
          const Icon = style.icon;

          return (
            <div
              key={`${issue.category}-${index}`}
              className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
            >
              <Icon className={`mt-0.5 ${style.iconColor}`} size={20} />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-slate-800">{issue.message}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${style.badge}`}>
                    {issue.severity}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-500">{issue.category}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default IssuesCard;