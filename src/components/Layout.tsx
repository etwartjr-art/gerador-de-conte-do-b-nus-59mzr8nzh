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
import { Crown, Scale, Calculator, MessageSquare, LayoutDashboard } from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Kit Jurídico', href: '/juridico', icon: Scale },
  { name: 'Calculadora de Lucro', href: '/calculadora', icon: Calculator },
  { name: 'Recepção que Vende', href: '/recepcao', icon: MessageSquare },
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
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border/50 px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="w-px h-4 bg-border mx-2" />
          <h1 className="font-heading text-lg text-foreground/90 font-semibold">
            {navigation.find((n) => n.href === location.pathname)?.name || 'Mentoria'}
          </h1>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-8 animate-fade-in">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
