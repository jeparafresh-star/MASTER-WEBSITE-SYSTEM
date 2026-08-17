import type {Metadata} from "next"; import "./globals.css"; import Header from "@/components/layout/Header"; import Footer from "@/components/layout/Footer"; import {siteConfig} from "@/config/site";
export const metadata:Metadata={title:siteConfig.name,description:siteConfig.description};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body><Header/>{children}<Footer/></body></html>}
