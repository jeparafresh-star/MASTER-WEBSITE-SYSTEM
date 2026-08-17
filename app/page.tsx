"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import ServiceCards from "@/components/sections/ServiceCards";
import PortfolioGrid from "@/components/sections/PortfolioGrid";

type SiteData = {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
};

export default function HomePage() {
  const [site, setSite] = useState<SiteData | null>(null);

  useEffect(() => {
    fetch("/api/site")
      .then((res) => res.json())
      .then((data) => setSite(data))
      .catch((error) => console.error("Gagal mengambil data site:", error));
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">
            <Sparkles size={14} />
            {site?.name || "MASTER WEBSITE SYSTEM"}
          </p>

          <h1>
            {site?.tagline ||
              "Membangun website dengan fondasi yang siap berkembang."}
          </h1>

          <p className="hero-text">
            {site?.description ||
              "Blueprint website reusable yang dirancang agar konten, layanan, portfolio, dan pengaturan nantinya dapat dikendalikan melalui Master Admin Dashboard."}
          </p>

          <div className="hero-actions">
            <Link
              href="/layanan"
              className="button button-primary"
            >
              Jelajahi Sistem <ArrowRight size={17} />
            </Link>

            <Link
              href="/portfolio"
              className="button button-secondary"
            >
              Lihat Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">MASTER MODULE</p>
              <h2>Layanan</h2>
            </div>
            <p>
              Contoh modul yang nantinya dapat dikendalikan dari Dashboard.
            </p>
          </div>

          <ServiceCards />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">MASTER MODULE</p>
              <h2>Portfolio</h2>
            </div>
            <p>
              Komponen reusable untuk berbagai jenis website.
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>
    </main>
  );
}