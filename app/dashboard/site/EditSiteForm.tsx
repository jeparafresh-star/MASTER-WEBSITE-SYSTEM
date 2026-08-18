"use client";

import { useState } from "react";

type SiteData = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
};

type Props = {
  site: SiteData;
  updateSite: (formData: FormData) => Promise<void>;
};

export default function EditSiteForm({ site, updateSite }: Props) {
  const [editing, setEditing] = useState(false);

  if (!editing) {
    return (
      <button
        type="button"
        onClick={() => setEditing(true)}
        className="mt-8 rounded-lg bg-[#D4AF37] px-5 py-3 text-sm font-bold text-black transition hover:opacity-90"
      >
        EDIT SITE
      </button>
    );
  }

  return (
    <form action={updateSite} className="mt-8 space-y-5">
      <input type="hidden" name="id" value={site.id} />

      <div>
        <label className="text-sm text-white/60">Nama</label>
        <input
          name="name"
          defaultValue={site.name}
          required
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
        />
      </div>

      <div>
        <label className="text-sm text-white/60">Tagline</label>
        <input
          name="tagline"
          defaultValue={site.tagline}
          required
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
        />
      </div>

      <div>
        <label className="text-sm text-white/60">Description</label>
        <textarea
          name="description"
          defaultValue={site.description}
          required
          rows={5}
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm text-white/60">Email</label>
          <input
            name="email"
            type="email"
            defaultValue={site.email}
            required
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="text-sm text-white/60">Phone</label>
          <input
            name="phone"
            defaultValue={site.phone}
            required
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="rounded-lg bg-[#D4AF37] px-5 py-3 text-sm font-bold text-black transition hover:opacity-90"
        >
          SIMPAN
        </button>

        <button
          type="button"
          onClick={() => setEditing(false)}
          className="rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
        >
          BATAL
        </button>
      </div>
    </form>
  );
}