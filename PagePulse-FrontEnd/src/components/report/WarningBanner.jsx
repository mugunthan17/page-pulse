import {
  AlertTriangle,
  Info,
  TriangleAlert,
  ShieldAlert,
} from "lucide-react";

const getWarningMeta = (type = "") => {
  switch (type) {
    case "client_rendered":
      return {
        icon: <Info className="h-5 w-5 text-blue-600" />,
        badge: "bg-blue-100 text-blue-700",
        title: "Client Rendered",
      };

    case "security":
      return {
        icon: <ShieldAlert className="h-5 w-5 text-red-600" />,
        badge: "bg-red-100 text-red-700",
        title: "Security",
      };

    case "performance":
      return {
        icon: <TriangleAlert className="h-5 w-5 text-orange-600" />,
        badge: "bg-orange-100 text-orange-700",
        title: "Performance",
      };

    default:
      return {
        icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
        badge: "bg-amber-100 text-amber-700",
        title: "Warning",
      };
  }
};

const WarningBanner = ({ warnings }) => {
  if (!warnings || warnings.length === 0) return null;

  return (
    <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
      <div className="mb-5 flex items-center gap-2">
        <AlertTriangle className="h-6 w-6 text-amber-600" />
        <h3 className="text-lg font-semibold text-amber-800">
          Audit Warnings
        </h3>
      </div>

      <div className="space-y-4">
        {warnings.map((warning, index) => {
          if (typeof warning === "string") {
            return (
              <div
                key={index}
                className="rounded-xl border border-amber-200 bg-white p-4"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-600" />

                  <div>
                    <span className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                      Warning
                    </span>

                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {warning}
                    </p>
                  </div>
                </div>
              </div>
            );
          }

          const meta = getWarningMeta(warning.type);

          return (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                {meta.icon}

                <div className="flex-1">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${meta.badge}`}
                  >
                    {meta.title}
                  </span>

                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {warning.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WarningBanner;