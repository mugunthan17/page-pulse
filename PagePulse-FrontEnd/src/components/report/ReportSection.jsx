import ReportHeader from "./ReportHeader";
import StatsGrid from "./StatsGrid";
import SeoCard from "./SeoCard";
import ImagesCard from "./ImagesCard";
import PerformanceCard from "./PerformanceCard";
import HeadingCard from "./HeadingCard";
import ContentOverviewCard from "./ContentOverviewCard";
import SecurityCard from "./SecurityCard";
import IssuesCard from "./IssuesCard";
import SuccessBanner from "./SuccessBanner";

const ReportSection = ({ report }) => {
  return (
    <section className="mt-10 rounded-3xl border border-slate-200 bg-white shadow-lg">

      <ReportHeader report={report} />

      <div className="space-y-6 p-6">

        <StatsGrid summary={report.summary} />

        <div className="grid gap-6 lg:grid-cols-3">
          <SeoCard seo={report.seo} />
          <ImagesCard images={report.images} />
          <PerformanceCard performance={report.performance} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <HeadingCard seo={report.seo} />
          <ContentOverviewCard content={report.content} />
        </div>

        <SecurityCard security={report.security} />

        <IssuesCard
          score={report.analysis.score}
          grade={report.analysis.grade}
          issues={report.analysis.issues}
        />

        <SuccessBanner analysis={report.analysis} />

      </div>
    </section>
  );
};

export default ReportSection;