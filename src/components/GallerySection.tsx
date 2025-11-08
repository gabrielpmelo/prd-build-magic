import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import galleryMugs from "@/assets/gallery-mugs.jpg";

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={galleryMugs} 
              alt="Galeria de canecas personalizadas" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              Inspiração{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Infinita
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Explore nossa galeria de designs criados por clientes reais. 
              De presente romântico a brinde corporativo, as possibilidades são infinitas.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">Templates prontos para você começar</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-foreground">Designs exclusivos de clientes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground">Brindes corporativos personalizados</span>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="mt-8">
              Ver Mais Exemplos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
