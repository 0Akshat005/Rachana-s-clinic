import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { clinic } from "../data/clinic";
import { useI18n } from "../i18n";

export function SEO({ title, description, jsonLd }: { title: string; description: string; jsonLd?: object }) {
  const { pathname } = useLocation();
  const { language } = useI18n();
  const canonical = `https://rachana-physiotherapy.example${pathname}`;
  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={clinic.name} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
