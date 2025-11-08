import { Card } from "@/components/ui/card";
import { Upload, Palette, Eye, ShoppingCart } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "1. Escolha um Modelo",
    description: "Comece com um template ou crie do zero. Upload de imagens até 10MB.",
  },
  {
    icon: Palette,
    title: "2. Personalize",
    description: "Adicione textos, imagens, escolha cores e fontes. Editor super fácil.",
  },
  {
    icon: Eye,
    title: "3. Visualize em 3D",
    description: "Veja sua criação em tempo real de todos os ângulos. Sem surpresas!",
  },
  {
    icon: ShoppingCart,
    title: "4. Finalize & Receba",
    description: "Pagamento seguro e entrega rápida. Acompanhe seu pedido online.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Como{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Funciona
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crie sua caneca personalizada em 4 passos simples
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2" />
              )}
              
              <Card className="p-6 space-y-4 text-center relative hover:shadow-soft transition-all duration-300 bg-card">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mx-auto">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
