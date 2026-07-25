import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const SuccessBanner = ({ analysis }) => {
  const score = analysis?.score ?? 0;
  const isHealthy = score >= 70;

  return (
    <div className={`overflow-hidden rounded-2xl border p-6 shadow-sm ${isHealthy ? "border-green-200 bg-gradient-to-r from-green-50 via-emerald-50 to-green-100" : "border-amber-200 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100"}`}>
      <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <div className={`flex h-14 w-14 items-center justify-center rounded-full ${isHealthy ? "bg-green-500" : "bg-amber-500"}`}>
            <CheckCircle2
              className="text-white"
              size={30}
            />
          </div>

          <div>
            <h3 className={`text-2xl font-bold ${isHealthy ? "text-green-800" : "text-amber-800"}`}>
              {isHealthy
                ? "Great! This page looks healthy."
                : "This page needs a bit more attention."}
            </h3>

            <p className={`mt-2 max-w-2xl ${isHealthy ? "text-green-700" : "text-amber-700"}`}>
              {isHealthy
                ? "Your webpage follows most SEO, accessibility, and performance best practices. Keep monitoring your pages regularly for consistent quality."
                : "The audit found a few issues that can improve SEO, accessibility, and performance. Review the details above to strengthen the page."}
            </p>
          </div>
        </div>

        <div className={`rounded-xl p-4 backdrop-blur ${isHealthy ? "bg-white/60" : "bg-white/50"}`}>
          <Sparkles
            size={42}
            className={isHealthy ? "text-green-600" : "text-amber-600"}
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessBanner;