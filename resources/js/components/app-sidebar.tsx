import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, User2Icon, UserCheck } from 'lucide-react';
import can from '@/lib/can';
import { usePage } from '@inertiajs/react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutGrid,
    },

{
        title: 'Users',
        url: '/users',
        icon: UserCheck,
    },

    {
        title: 'Roles',
        url: '/roles',
        icon: User2Icon,
    },

    {
        title: 'Prozonons',
        url: '/prozonons',
        icon: User2Icon,
        role: 'aitechnician',
    },

 
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        url: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        url: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];

export function AppSidebar() {

const { auth }: any = usePage().props;

//console.log(auth.roles);

    const filteredMenu = mainNavItems.filter((item) => {
        if (item.role && !auth.roles?.includes(item.role)) {
            return false;
        }

        if (item.permission && !can(item.permission)) {
            return false;
        }

        return true;
    });






    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={filteredMenu} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
