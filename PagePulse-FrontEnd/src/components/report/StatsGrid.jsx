import {
  CheckCircle2,
  Clock3,
  FileText,
  HardDrive,
  BookOpen,
} from "lucide-react";

import MetricCard from "./MetricCard";

const StatsGrid = ({ summary }) => {
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
        badge="Success"
        badgeColor="bg-green-100 text-green-700"
        subtitle="Request completed successfully"
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