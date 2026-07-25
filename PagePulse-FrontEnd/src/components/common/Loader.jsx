import {
  Loader2,
  Globe,
  FileText,
  Image,
  Search,
  CheckCircle2,
} from "lucide-react";

const Loader = () => {
  const steps = [
    {
      icon: <Globe size={20} />,
      title: "Connecting to website",
      description: "Establishing secure connection...",
    },
    {
      icon: <FileText size={20} />,
      title: "Fetching HTML",
      description: "Downloading webpage source...",
    },
    {
      icon: <Search size={20} />,
      title: "Extracting SEO metadata",
      description: "Finding title, meta tags and headings...",
    },
    {
      icon: <Image size={20} />,
      title: "Analyzing images",
      description: "Checking ALT attributes and accessibility...",
    },
    {
      icon: <CheckCircle2 size={20} />,
      title: "Generating report",
      description: "Preparing your audit dashboard...",
    },
  ];

  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

      {/* Header */}

      <div className="text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">

          <Loader2
            size={40}
            className="animate-spin text-blue-600"
          />

        </div>

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          Analyzing Website
        </h2>

        <p className="mt-3 text-slate-500">
          Please wait while PagePulse inspects the webpage.
        </p>

      </div>

      {/* Progress Bar */}

      <div className="mt-10">

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

          <div className="h-full w-2/3 animate-pulse rounded-full bg-blue-600" />

        </div>

      </div>

      {/* Analysis Steps */}

      <div className="mt-10 space-y-5">

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">

              {step.icon}

            </div>

            <div className="flex-1">

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-slate-800">
                  {step.title}
                </h3>

                <Loader2
                  size={18}
                  className="animate-spin text-blue-600"
                />

              </div>

              <p className="mt-1 text-sm text-slate-500">
                {step.description}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* Footer */}

      <div className="mt-10 text-center">

        <p className="text-sm text-slate-500">
          This usually takes
          <span className="font-semibold text-slate-700">
            {" "}1–3 seconds
          </span>
          .
        </p>

      </div>

    </div>
  );
};

export default Loader;