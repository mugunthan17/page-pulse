const MetricCard = ({
  icon,
  iconBg = "bg-blue-100",
  iconColor = "text-blue-600",

  title,
  value,
  unit,
  subtitle,

  badge,
  badgeColor = "bg-green-100 text-green-700",

  children,
}) => {
  return (
    <div className="flex h-44 w-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Top */}

      <div className="flex items-start justify-between">

        <div className="flex gap-4">

          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconBg}`}
          >
            <div className={iconColor}>{icon}</div>
          </div>

          <div>

            <p className="text-sm text-slate-500">
              {title}
            </p>

            <div className="mt-1 flex items-end gap-2">

              <h3 className="text-2xl font-bold text-slate-900">
                {value}
              </h3>

              {unit && (
                <span className="pb-1 text-lg text-slate-500">
                  {unit}
                </span>
              )}

            </div>

          </div>

        </div>

        {badge && (
          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold ${badgeColor}`}
          >
            {badge}
          </span>
        )}

      </div>

      {/* Bottom */}

      <div className="mt-5">

        {subtitle && (
          <p className="text-sm text-slate-500">
            {subtitle}
          </p>
        )}

        {children}

      </div>

    </div>
  );
};

export default MetricCard;