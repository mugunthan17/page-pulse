import {
  Image as ImageIcon,
  CheckCircle2,
  AlertTriangle,
  ImageOff,
} from "lucide-react";

const ImagesCard = ({ images }) => {
  const hasImages = images.total > 0;
  const percentage = hasImages
    ? Math.round((images.withAlt / images.total) * 100)
    : 0;
  const hasMissingAlt = images.missingAlt > 0;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
          <ImageIcon className="text-emerald-600" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Images</h3>
          <p className="text-sm text-slate-500">Accessibility overview</p>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Total Images</span>
          <span className="font-bold">{images.total}</span>
        </div>
        <div className="flex justify-between">
          <span>Images with ALT</span>
          <span className="font-bold text-green-600">{images.withAlt}</span>
        </div>
        <div className="flex justify-between">
          <span>Missing ALT</span>
          <span className={`font-bold ${hasMissingAlt ? "text-red-500" : "text-slate-400"}`}>
            {images.missingAlt}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-6">
        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full transition-all duration-700 ${hasImages ? "bg-green-500" : "bg-slate-300"}`}
            style={{ width: `${hasImages ? percentage : 100}%` }}
          />
        </div>
      </div>

      {/* Status */}
      {hasMissingAlt ? (
        <div className="mt-6 rounded-xl border border-red-100 bg-red-50 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 text-red-500" size={20} />
            <div>
              <p className="font-semibold text-red-600">
                {images.missingAlt} image{images.missingAlt === 1 ? "" : "s"} missing ALT text.
              </p>
              <p className="mt-1 text-sm text-red-500">
                Consider adding ALT text for better accessibility.
              </p>
            </div>
          </div>
        </div>
      ) : hasImages ? (
        <div className="mt-6 rounded-xl border border-green-100 bg-green-50 p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 text-green-600" size={20} />
            <div>
              <p className="font-semibold text-green-700">
                All images have ALT text.
              </p>
              <p className="mt-1 text-sm text-green-600">
                Nice work — this keeps the page accessible to screen readers.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-start gap-3">
            <ImageOff className="mt-0.5 text-slate-400" size={20} />
            <div>
              <p className="font-semibold text-slate-600">
                No images found on this page.
              </p>
              <p className="mt-1 text-sm text-slate-500">
                There's nothing to check for ALT text here.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ImagesCard;