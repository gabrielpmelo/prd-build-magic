import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* About Section */}
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-hero bg-clip-text text-transparent">
              Sobre a CanecaCriativa
            </h1>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground">
              <p>
                A CanecaCriativa nasceu com a missão de transformar momentos especiais em memórias duradouras.
                Acreditamos que cada caneca conta uma história única e personalizada.
              </p>
              <p>
                Nossa plataforma oferece tecnologia de ponta para criar designs personalizados,
                combinada com qualidade premium de impressão e materiais sustentáveis.
              </p>
              <p>
                Com entrega rápida e segura, garantimos que sua criação chegue perfeita até você.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">contato@canecacriativa.com.br</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Telefone</h3>
                      <p className="text-muted-foreground">(11) 9 9999-9999</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Endereço</h3>
                      <p className="text-muted-foreground">
                        São Paulo, SP<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Envie sua Mensagem</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      placeholder="Como podemos ajudar?"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background resize-none"
                    />
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
