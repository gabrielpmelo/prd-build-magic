import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              CanecaCriativa
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/editor" className="text-foreground hover:text-primary transition-colors">
              Editor
            </Link>
            <Link to="/sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Entrar
            </Button>
            <Link to="/editor">
              <Button variant="hero" size="lg">
                Começar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
