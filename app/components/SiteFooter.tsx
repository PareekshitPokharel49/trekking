import Container from "@/app/components/Container";
import Logo from "@/app/components/Logo";
import { footerLinks, siteName } from "@/app/data/site";

export default function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-stone-200 bg-white">
      <Container className="py-14 md:flex md:items-start md:justify-between">
        <div className="max-w-xs">
          <span className="flex items-center gap-2 text-lg font-bold tracking-tight text-stone-900">
            <Logo className="h-8 w-8" />
            {siteName}
          </span>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Bridging majestic exploration with active compassion.
          </p>
        </div>

        <nav className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone-600 md:mt-1">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-stone-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>

      <div className="border-t border-stone-200">
        <Container className="py-6 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
