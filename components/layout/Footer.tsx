import {siteConfig} from "@/config/site";
export default function Footer(){return <footer className="site-footer"><div className="container footer-inner"><div><strong>{siteConfig.name}</strong><p>{siteConfig.tagline}</p></div><small>MASTER WEBSITE SYSTEM · {new Date().getFullYear()}</small></div></footer>}
