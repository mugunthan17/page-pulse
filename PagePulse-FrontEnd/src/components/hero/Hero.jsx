import { ShieldCheck, Link2, ArrowRight, Loader2 } from "lucide-react";

const Hero = ({
  url,
  setUrl,
  onAnalyze,
  error,
  loading,
  clearError,
}) => {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-20">

      {/* Header */}

      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Analyze any webpage in seconds.
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">
          Get insights on performance, SEO, accessibility and content of any URL.
        </p>
      </div>

      {/* Input */}

      <div className="mx-auto mt-10 max-w-3xl">

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onAnalyze();
          }}
          className={`
            flex flex-col gap-3 rounded-2xl p-2 shadow-sm
            transition-all duration-300
            focus-within:border-blue-500
            focus-within:ring-4
            focus-within:ring-blue-100
            sm:flex-row

            ${
              loading
                ? "opacity-80"
                : ""
            }

            ${
              error
                ? "border border-red-400 bg-red-50"
                : "border border-slate-200 bg-white"
            }
          `}
        >

          {/* Input */}

          <div className="flex flex-1 items-center px-3">

            <Link2
              size={20}
              className={`
                mr-3 transition-colors duration-300

                ${
                  loading
                    ? "text-slate-300"
                    : error
                    ? "text-red-500"
                    : "text-slate-400"
                }
              `}
            />

            <input
              type="text"
              value={url}
              disabled={loading}
              onChange={(e) => {
                setUrl(e.target.value);
                clearError();
              }}
              placeholder={
                loading
                  ? "Analyzing website..."
                  : "https://example.com"
              }
              className={`
                w-full
                bg-transparent
                text-base
                outline-none
                transition-all
                duration-300
                placeholder:text-slate-400

                ${
                  loading
                    ? "cursor-not-allowed text-slate-400"
                    : "text-slate-900"
                }
              `}
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className={`
              flex h-12 items-center justify-center gap-2 rounded-xl px-7
              font-semibold text-white
              transition-all duration-300

              ${
                loading
                  ? "cursor-not-allowed bg-blue-400"
                  : "bg-blue-600 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:scale-95"
              }
            `}
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />

                Analyzing...
              </>
            ) : (
              <>
                Analyze Website

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </>
            )}
          </button>

        </form>

        {/* Error */}

        {error && (
          <p className="mt-3 text-sm font-medium text-red-600 transition-all duration-300">
            {error}
          </p>
        )}

        {/* Footer */}

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-slate-500">

          <div className="flex items-center gap-1.5">

            <ShieldCheck
              className="text-emerald-500"
              size={16}
            />

            <span>Safe & secure analysis</span>

          </div>

          <span className="hidden sm:inline">•</span>

          <span className="hidden sm:inline">
            We don't store or index your data
          </span>

        </div>

      </div>

    </section>
  );
};

export default Hero;