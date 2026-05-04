import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar'
import { Crown, ClipboardList, BarChart, Clapperboard, LayoutDashboard } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Kit Jurídico', href: '/juridico', icon: ClipboardList },
  { name: 'Calculadora de Lucro', href: '/calculadora', icon: BarChart },
  { name: 'Recepção que Vende', href: '/recepcao', icon: Clapperboard },
]

export default function Layout() {
  const location = useLocation()

  return (
    <SidebarProvider>
      <Sidebar variant="inset" className="border-r-border/50">
        <SidebarHeader className="p-4 flex flex-row items-center gap-3">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Crown className="size-5" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-heading font-bold text-lg text-primary text-gradient-gold">
              Mentoria
            </span>
            <span className="text-xs text-muted-foreground font-medium">High-Ticket Beauty</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-muted-foreground uppercase text-xs tracking-wider">
              Bônus Exclusivos
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigation.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.href}
                      className="hover:bg-primary/10 hover:text-primary transition-colors data-[active=true]:bg-primary/20 data-[active=true]:text-primary data-[active=true]:font-semibold"
                    >
                      <Link to={item.href}>
                        <item.icon className="size-4" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="bg-background">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border/50 px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <div className="w-px h-4 bg-border mx-2" />
            <div className="flex items-center gap-2">
              <Crown className="size-5 text-primary hidden sm:block" />
              <h1 className="font-heading text-lg text-foreground/90 font-semibold truncate max-w-[150px] sm:max-w-none">
                Mentoria High-Ticket
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium hidden sm:inline-block">Maria Silva</span>
            <Avatar className="size-8">
              <AvatarImage
                src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1"
                alt="Student"
              />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-8 animate-fade-in flex flex-col">
          <div className="flex-1">
            <Outlet />
          </div>
          <footer className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Mentoria High-Ticket. Todos os direitos reservados.
            </p>
            <a href="#" className="hover:text-primary transition-colors font-medium">
              Suporte
            </a>
          </footer>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
