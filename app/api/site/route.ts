import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const site = await prisma.site.findFirst();

    return NextResponse.json(site);
  } catch (error) {
    console.error("GET /api/site error:", error);

    return NextResponse.json(
      { error: "Gagal mengambil data site" },
      { status: 500 }
    );
  }
}