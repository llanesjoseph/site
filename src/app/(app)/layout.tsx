import { AppSidebar } from '@/components/app-sidebar';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <AppSidebar />
        <SidebarInset>
          <div className="p-4 md:p-8">
            <div className="md:hidden pb-4">
              <SidebarTrigger />
            </div>
            {children}
          </div>
        </SidebarInset>
      </div>
      <Toaster />
    </SidebarProvider>
  );
}
