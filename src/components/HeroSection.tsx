import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroMug from "@/assets/hero-mug.jpg";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Personalização em Tempo Real</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Crie Canecas{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Únicas
              </span>
              {" "}em Minutos
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              A plataforma mais intuitiva para personalizar canecas no Brasil. 
              Visualize em 3D, edite em tempo real e receba em casa com confiança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg h-14 px-8">
                Começar a Criar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg h-14 px-8">
                Ver Exemplos
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">3D</div>
                <div className="text-sm text-muted-foreground">Preview em tempo real</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Produção rápida</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Garantia de qualidade</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroMug} 
              alt="Caneca personalizada com design colorido" 
              className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
