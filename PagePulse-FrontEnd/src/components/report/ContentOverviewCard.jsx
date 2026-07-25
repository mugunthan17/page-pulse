import {
  FileCode2,
  Braces,
  Link,
  Globe,
} from "lucide-react";

const ContentOverviewCard = ({ content }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">

          <FileCode2
            size={24}
            className="text-cyan-600"
          />

        </div>

        <div>

          <h3 className="text-xl font-bold text-slate-900">
            Content Overview
          </h3>

          <p className="text-sm text-slate-500">
            Structure of the analyzed webpage
          </p>

        </div>

      </div>

      {/* Stats */}

      <div className="space-y-4">

        {/* HTML Elements */}

        <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">

          <div className="flex items-center gap-3">

            <Braces
              size={20}
              className="text-blue-600"
            />

            <span className="font-medium text-slate-700">
              HTML Elements
            </span>

          </div>

          <span className="text-xl font-bold text-slate-900">
            {content.htmlElements}
          </span>

        </div>

        {/* Internal Links */}

        <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">

          <div className="flex items-center gap-3">

            <Link
              size={20}
              className="text-green-600"
            />

            <span className="font-medium text-slate-700">
              Internal Links
            </span>

          </div>

          <span className="text-xl font-bold text-slate-900">
            {content.internalLinks}
          </span>

        </div>

        {/* External Links */}

        <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">

          <div className="flex items-center gap-3">

            <Globe
              size={20}
              className="text-purple-600"
            />

            <span className="font-medium text-slate-700">
              External Links
            </span>

          </div>

          <span className="text-xl font-bold text-slate-900">
            {content.externalLinks}
          </span>

        </div>

      </div>

    </div>
  );
};

export default ContentOverviewCard;