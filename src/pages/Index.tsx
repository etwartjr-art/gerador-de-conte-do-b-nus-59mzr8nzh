import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Scale, Calculator, MessageSquare, ArrowRight, Sparkles } from 'lucide-react'

export default function Index() {
  const modules = [
    {
      title: 'Kit de Sobrevivência Jurídica',
      description: 'Checklist da Lei do Salão Parceiro, modelos de NDA e alertas vitais.',
      icon: Scale,
      href: '/juridico',
      color: 'text-amber-500',
    },
    {
      title: 'Calculadora de Lucro Real',
      description: 'Estrutura exata para calcular seu custo por minuto e lucro líquido.',
      icon: Calculator,
      href: '/calculadora',
      color: 'text-emerald-500',
    },
    {
      title: 'Recepção que Vende',
      description: 'Scripts de vendas, mentalidade e mensagens de reativação.',
      icon: MessageSquare,
      href: '/recepcao',
      color: 'text-blue-500',
    },
  ]

  return (
    <div
      className="max-w-5xl mx-auto space-y-8 animate-slide-up opacity-0"
      style={{ animationFillMode: 'forwards' }}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-8 md:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Sparkles className="size-4" />
            <span>Conteúdo Exclusivo</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            Bem-vindo ao seu <br />
            <span className="text-gradient-gold">Dashboard de Elite</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Acesse as ferramentas práticas e materiais complementares da mentoria. Estes 3 bônus
            foram desenhados para proteger seu negócio, garantir sua margem de lucro e aumentar seu
            faturamento imediato.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="grid gap-6 md:grid-cols-3">
        {modules.map((mod) => (
          <Card
            key={mod.href}
            className="group relative overflow-hidden border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:bg-card"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader>
              <mod.icon className={`size-10 mb-4 ${mod.color}`} />
              <CardTitle className="font-heading text-xl">{mod.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {mod.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full group/btn" variant="outline">
                <Link to={mod.href}>
                  Acessar Conteúdo
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Quick Tips */}
      <section className="rounded-xl border border-border/50 bg-secondary/30 p-6">
        <h3 className="font-heading text-lg font-semibold mb-4 text-primary">
          Dicas de Ouro para o Sucesso
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>Sempre adapte os scripts de vendas para o seu tom de voz e da sua marca.</li>
          <li>Revise seu custo por minuto a cada 3 meses para não perder margem de lucro.</li>
          <li>Contratos verbais não têm validade jurídica no regime de salão parceiro.</li>
        </ul>
      </section>
    </div>
  )
}
