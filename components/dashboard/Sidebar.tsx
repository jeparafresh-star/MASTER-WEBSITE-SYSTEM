"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Site", href: "/dashboard/site" },
  { label: "Services", href: "/dashboard/services" },
  { label: "Portfolio", href: "/dashboard/portfolio" },
  { label: "Pengaturan", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-white/10 bg-black/40 p-4 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="mb-6">
        <p className="text-xs font-bold tracking-[0.2em] text-[#D4AF37]">
          MASTER ADMIN
        </p>

        <h2 className="mt-1 text-lg font-bold text-white">
          Dashboard Master
        </h2>
      </div>

      <nav className="space-y-2">
        {menu.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                active
                  ? "bg-[#D4AF37] text-black"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}