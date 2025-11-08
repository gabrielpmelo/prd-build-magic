import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-16 lg:p-20 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Oferta de Lançamento</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Pronto Para Criar Algo Único?
            </h2>
            
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já criaram suas canecas personalizadas. 
              Comece gratuitamente e veja a magia acontecer!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 text-lg h-14 px-8 shadow-xl"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg h-14 px-8"
              >
                Falar com Vendas
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/70 pt-4">
              Sem necessidade de cartão de crédito • Cancele quando quiser
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
