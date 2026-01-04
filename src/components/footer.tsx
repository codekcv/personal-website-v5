import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/40 bg-background/80 backdrop-blur-md z-10 relative">
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          &copy; {new Date().getFullYear()} Creative Developer. All rights
          reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hover:text-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
