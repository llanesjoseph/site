"use client";

import { usePathname } from "next/navigation";
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
import { Logo } from "./logo";

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
        <Logo />
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
