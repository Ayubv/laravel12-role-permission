import { usePage } from "@inertiajs/react";





export default function can(permission: string): boolean {
    const { auth } = usePage().props as {

        auth?: {
         permissions?: string[] }

        };

    return auth?.permissions?.includes(permission) ?? false;
}

// interface AuthProps {
//     permissions?: string[];
// }

// const can = (permission: string): boolean => {
//     const { auth } = usePage().props as { auth?: AuthProps };

//     return auth?.permissions?.includes(permission) ?? false;
// };

// export default can;
