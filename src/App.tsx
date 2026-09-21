import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { ScrollManager } from "./components/ScrollManager";
import { SiteLayout } from "./components/SiteLayout";
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
function RouteLoading() { return <div className="container-site section" role="status" aria-live="polite"><div className="h-5 w-28 animate-pulse rounded bg-sand"/><div className="mt-5 h-12 max-w-lg animate-pulse rounded bg-sand"/></div>; }
export default function App() { return <SiteLayout><ScrollManager/><Suspense fallback={<RouteLoading/>}><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/services/:slug" element={<ServiceDetail/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="*" element={<NotFound/>}/></Routes></Suspense><Toaster position="bottom-right" richColors closeButton/></SiteLayout>; }
