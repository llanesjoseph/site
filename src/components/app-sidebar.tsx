"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  GitFork,
  LayoutDashboard,
  Lightbulb,
  TestTube2,
  Workflow,
} from "lucide-react";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/workflow-analyzer", icon: Workflow, label: "Workflow Analyzer" },
  { href: "/solution-generator", icon: Lightbulb, label: "Solution Generator" },
  { href: "/workflow-visualizer", icon: GitFork, label: "Workflow Visualizer" },
  { href: "/scenario-simulation", icon: TestTube2, label: "Scenario Simulation" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="block p-2">
          <Image 
            src="https://res.cloudinary.com/dr0jtjwlh/image/upload/v1756470323/crucible_logo_1000px_lqooa3.png"
            alt="Crucible Analytics Logo"
            width={200}
            height={44}
            className="w-full h-auto"
            priority
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={{ children: item.label }}
              >
                <a href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
