import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import EditSiteForm from "./EditSiteForm";

async function updateSite(formData: FormData) {
  "use server";

  const id = String(formData.get("id"));
  const name = String(formData.get("name"));
  const tagline = String(formData.get("tagline"));
  const description = String(formData.get("description"));
  const email = String(formData.get("email"));
  const phone = String(formData.get("phone"));

  await prisma.site.update({
    where: { id },
    data: {
      name,
      tagline,
      description,
      email,
      phone,
    },
  });

  revalidatePath("/dashboard/site");
}

export default async function SiteDashboardPage() {
  const site = await prisma.site.findFirst();

  if (!site) {
    return (
      <div>
        <p className="text-sm font-bold tracking-[0.2em] text-[#D4AF37]">
          SITE
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Pengaturan Site
        </h1>

        <p className="mt-4 text-white/60">
          Data Site belum tersedia.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm font-bold tracking-[0.2em] text-[#D4AF37]">
        SITE
      </p>

      <h1 className="mt-2 text-3xl font-bold">
        Pengaturan Site
      </h1>

      <div className="mt-8 space-y-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs text-white/50">NAMA</p>
          <p className="mt-1 text-lg font-semibold">{site.name}</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs text-white/50">TAGLINE</p>
          <p className="mt-1">{site.tagline}</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs text-white/50">DESCRIPTION</p>
          <p className="mt-1 text-white/80">{site.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs text-white/50">EMAIL</p>
            <p className="mt-1">{site.email}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs text-white/50">PHONE</p>
            <p className="mt-1">{site.phone}</p>
          </div>
        </div>
      </div>

      <EditSiteForm
        site={site}
        updateSite={updateSite}
      />
    </div>
  );
}