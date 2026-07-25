import { CalendarDays, Download, CheckCircle2 } from "lucide-react";

const ReportHeader = ({ report }) => {
  const completed = report?.analysis?.completed ?? true;
  const completedAt = report?.analysis?.completedAt || "Processing";
  const badgeClass = completed
    ? "bg-green-100 text-green-700"
    : "bg-amber-100 text-amber-700";

  const handleExport = () => {
    if (!report) return;

    const dataStr = JSON.stringify(report, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pagepulse-report.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-6 border-b border-slate-200 p-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-3xl font-bold text-slate-900">Website Report</h2>

          <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${badgeClass}`}>
            <CheckCircle2 size={16} />
            {completed ? "Completed" : "Pending"}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays size={16} />
          Analysis completed on {completedAt}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleExport}
          className="flex h-12 sm:h-14 shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-base font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99] cursor-pointer group"
        >
          <Download
            size={18}
            className="transition-transform group-hover:-translate-y-0.5"
          />
          <span>Export JSON</span>
        </button>
      </div>
    </div>
  );
};

export default ReportHeader;
