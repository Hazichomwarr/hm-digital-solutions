import Link from "next/link";

export default function FooterBottomBar() {
  return (
    <div className="border-t border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 HM Digital Solutions. All rights reserved.</p>

        <div className="flex gap-6">
          <Link href="/privacy-policy" className="transition hover:text-white">
            Privacy Policy
          </Link>

          <Link href="/terms" className="transition hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
