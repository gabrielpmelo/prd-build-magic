import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              CanecaCriativa
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Galeria
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Entrar
            </Button>
            <Button variant="hero" size="lg">
              Começar Grátis
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
