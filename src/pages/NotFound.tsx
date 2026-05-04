import { useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error('Erro 404: Usuário tentou acessar uma rota inexistente:', location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background p-4 text-center animate-fade-in">
      <div className="space-y-6 max-w-md">
        <h1 className="text-8xl font-heading font-bold text-primary">
          <span className="text-gradient-gold">404</span>
        </h1>
        <h2 className="text-2xl font-semibold text-foreground tracking-tight">
          Página não encontrada
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Ops! Parece que o conteúdo que você está procurando não existe, foi movido ou você não tem
          acesso.
        </p>
        <div className="pt-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/">
              <Home className="mr-2 size-5" />
              Voltar ao Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
