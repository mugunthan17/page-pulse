import {
  AlertTriangle,
  RotateCcw,
  CircleX,
} from "lucide-react";

const ErrorState = ({
  message = "Something went wrong while analyzing the website.",
  onRetry,
}) => {
  return (
    <div className="mt-12 rounded-3xl border border-red-200 bg-white p-10 shadow-sm">

      {/* Error Icon */}

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">

        <CircleX
          size={50}
          className="text-red-500"
        />

      </div>

      {/* Title */}

      <h2 className="mt-8 text-center text-3xl font-bold text-slate-900">
        Analysis Failed
      </h2>

      {/* Description */}

      <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-slate-500">
        {message}
      </p>

      {/* Possible Reasons */}

      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-red-100 bg-red-50 p-6">

        <div className="mb-4 flex items-center gap-2">

          <AlertTriangle
            size={20}
            className="text-red-500"
          />

          <h3 className="font-semibold text-red-700">
            Possible Reasons
          </h3>

        </div>

        <ul className="space-y-3 text-slate-600">

          <li>
            • The URL is invalid or incorrectly formatted.
          </li>

          <li>
            • The website did not respond within the timeout period.
          </li>

          <li>
            • The server blocked automated requests.
          </li>

          <li>
            • The URL does not point to an HTML webpage.
          </li>

          <li>
            • A temporary network issue occurred.
          </li>

        </ul>

      </div>

      {/* Retry Button */}

      <div className="mt-10 flex justify-center">

        <button
          onClick={onRetry}
          className="flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg"
        >
          <RotateCcw size={18} />
          Try Again
        </button>

      </div>

    </div>
  );
};

export default ErrorState;