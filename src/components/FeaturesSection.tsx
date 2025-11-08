import { Card } from "@/components/ui/card";
import { Palette, Eye, Truck, Zap } from "lucide-react";
import featureEditor from "@/assets/feature-editor.jpg";
import featurePreview from "@/assets/feature-preview.jpg";
import featureDelivery from "@/assets/feature-delivery.jpg";

const features = [
  {
    icon: Palette,
    title: "Editor Visual Completo",
    description: "Adicione imagens, textos, escolha cores e fontes. Interface intuitiva e fácil de usar.",
    image: featureEditor,
  },
  {
    icon: Eye,
    title: "Preview 3D em Tempo Real",
    description: "Veja exatamente como sua caneca ficará antes de comprar. Sem surpresas!",
    image: featurePreview,
  },
  {
    icon: Truck,
    title: "Entrega Rápida e Segura",
    description: "Produção em 24h e rastreamento completo. Receba em casa com total segurança.",
    image: featureDelivery,
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Recursos{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Poderosos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa para criar a caneca perfeita, do design à entrega
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 space-y-6 hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-card"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
