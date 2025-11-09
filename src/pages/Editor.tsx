import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Image, Type, Palette, Download } from "lucide-react";

const Editor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Editor de Personalização
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crie sua caneca única em poucos passos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Preview Area */}
            <Card className="p-8 bg-card">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Image className="h-24 w-24 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Preview da caneca</p>
                </div>
              </div>
              <Button variant="hero" className="w-full" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
            </Card>

            {/* Editing Tools */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Upload className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Upload de Imagem</h3>
                </div>
                <Button variant="outline" className="w-full">
                  Escolher Arquivo
                </Button>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Type className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Adicionar Texto</h3>
                </div>
                <input
                  type="text"
                  placeholder="Digite seu texto aqui..."
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                />
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Palette className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Cor da Caneca</h3>
                </div>
                <div className="grid grid-cols-6 gap-3">
                  {['bg-white', 'bg-black', 'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'].map((color) => (
                    <button
                      key={color}
                      className={`${color} h-12 w-12 rounded-lg border-2 border-border hover:scale-110 transition-transform`}
                    />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Editor;
