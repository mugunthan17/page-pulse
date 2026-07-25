import {
  ShieldCheck,
  ShieldAlert,
  Lock,
  Unlock,
} from "lucide-react";

const SecurityRow = ({ label, ok }) => (
  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">
    <span className="font-medium text-slate-700">{label}</span>

    <span
      className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
        ok ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }`}
    >
      {ok ? <ShieldCheck size={14} /> : <ShieldAlert size={14} />}
      {ok ? "Present" : "Missing"}
    </span>
  </div>
);

const SecurityCard = ({ security }) => {
  const https = Boolean(security?.https);
  const headers = security?.headers || {};

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      <div className="mb-6 flex items-center gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
            https ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {https ? (
            <Lock className="text-green-600" size={24} />
          ) : (
            <Unlock className="text-red-600" size={24} />
          )}
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900">Security</h3>
          <p className="text-sm text-slate-500">HTTPS & response header checks</p>
        </div>
      </div>

      <div className="space-y-3">
        <SecurityRow label="HTTPS Enabled" ok={https} />
        <SecurityRow label="Content-Security-Policy" ok={Boolean(headers.contentSecurityPolicy)} />
        <SecurityRow label="X-Frame-Options" ok={Boolean(headers.xFrameOptions)} />
        <SecurityRow label="Strict-Transport-Security" ok={Boolean(headers.strictTransportSecurity)} />
      </div>

    </div>
  );
};

export default SecurityCard;