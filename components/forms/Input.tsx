// components/forms/Input.tsx
import { ComponentPropsWithoutRef } from "react";

// 1. Extend native input attributes
type InputProps = {
  label?: string;
  error?: string; // Added to support your error validation states
} & ComponentPropsWithoutRef<"input">;

export default function Input({
  label,
  error,
  type = "text",
  className = "", // Allow passing custom styles from outside
  ...props // Captures onChange, value, placeholder, required, etc.
}: InputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={props.name}
        className="mb-2 block font-medium text-slate-900"
      >
        {label}
      </label>
      <input
        id={props.name}
        type={type}
        // 2. Conditionally color borders if an error exists
        className={`text-sm w-full rounded-xl border px-4 py-3 outline-none transition focus:border-emerald-500 ${
          error ? "border-rose-500 focus:border-rose-500" : "border-slate-300"
        } ${className}`}
        aria-invalid={error ? "true" : "false"} // Good for accessibility
        {...props} // 3. Spread all native HTML input elements safely
      />
      {/* 4. Display validation error message if present */}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-rose-600">{error}</p>
      )}
    </div>
  );
}
