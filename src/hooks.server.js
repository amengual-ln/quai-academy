import { getSession, getUser } from '$lib/server/clerk';
import { redirect } from '@sveltejs/kit';

// Solo las rutas que requieren autenticación
const protectedRoutes = ['/app', '/profile'];

export async function handle({ event, resolve }) {
    // Obtener la sesión
    const session = await getSession(event.request);
    event.locals.session = session;
    
    // Obtener el usuario si está autenticado
    if (session?.userId) {
        event.locals.user = await getUser(session);
    }
    
    const currentPath = event.url.pathname;
    const isAuthPage = ['/sign-in', '/sign-up'].includes(currentPath);
    
    // Redirección de la ruta raíz
    if (currentPath === '/') {
        const redirectTo = session?.userId ? '/app' : '/sign-in';
        throw redirect(302, redirectTo);
    }
    
    // Redireccionar rutas protegidas
    if (protectedRoutes.some(route => currentPath.startsWith(route))) {
        if (!session?.userId) {
            throw redirect(303, `/sign-in?redirect_url=${encodeURIComponent(currentPath)}`);
        }
    }
    // Redireccionar si ya está autenticado y está en página de autenticación
    else if (isAuthPage && session?.userId) {
        const redirectTo = event.url.searchParams.get('redirect_url') || '/app';
        throw redirect(303, redirectTo);
    }
    
    return resolve(event);
}
