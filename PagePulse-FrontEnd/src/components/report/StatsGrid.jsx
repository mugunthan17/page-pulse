import {
  CheckCircle2,
  Clock3,
  FileText,
  HardDrive,
  BookOpen,
} from "lucide-react";

import MetricCard from "./MetricCard";

const getStatusBadge = (status) => {
  if (status >= 200 && status < 300) {
    return { label: "Success", color: "bg-green-100 text-green-700" };
  }

  if (status >= 300 && status < 400) {
    return { label: "Redirect", color: "bg-blue-100 text-blue-700" };
  }

  if (status >= 400 && status < 500) {
    return { label: "Client Error", color: "bg-amber-100 text-amber-700" };
  }

  if (status >= 500) {
    return { label: "Server Error", color: "bg-red-100 text-red-700" };
  }

  return { label: "Unknown", color: "bg-slate-100 text-slate-700" };
};

const StatsGrid = ({ summary }) => {
  const statusBadge = getStatusBadge(summary.status);

  return (
    <div
      className="
        grid
        gap-6
        [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]
      "
    >
      <MetricCard
        icon={<CheckCircle2 size={28} />}
        iconBg="bg-green-100"
        iconColor="text-green-600"
        title="HTTP Status"
        value={summary.status}
        badge={statusBadge.label}
        badgeColor={statusBadge.color}
        subtitle={
          statusBadge.label === "Success"
            ? "Request completed successfully"
            : "Review the response status for issues"
        }
      />

      <MetricCard
        icon={<Clock3 size={28} />}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
        title="Response Time"
        value={summary.responseTime}
        unit="ms"
        subtitle="Server response latency"
      />

      <MetricCard
        icon={<FileText size={28} />}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
        title="Content Type"
        value={summary.contentType}
        subtitle="Detected document type"
      />

      <MetricCard
        icon={<HardDrive size={28} />}
        iconBg="bg-orange-100"
        iconColor="text-orange-600"
        title="Page Size"
        value={summary.pageSize}
        subtitle="Approximate download size"
      />

      <MetricCard
        icon={<BookOpen size={28} />}
        iconBg="bg-cyan-100"
        iconColor="text-cyan-600"
        title="Word Count"
        value={summary.wordCount}
        subtitle="Approximate visible words"
      />
    </div>
  );
};

export default StatsGrid;
