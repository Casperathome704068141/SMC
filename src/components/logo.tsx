
"use client";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-primary ${className}`}>
      <img src="https://studio-724080340-7b7b9.web.app/logo-for-spark.svg" alt="Spark Logo" className="h-12" />
    </div>
  );
}
