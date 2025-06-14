// src/lib/server/clerk.js
import { createClerkClient } from 'svelte-clerk/server';

// Crear una instancia de Clerk
export const clerk = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.PUBLIC_CLERK_PUBLISHABLE_KEY,
});

// Helper para obtener la sesión
export async function getSession(request) {
    try {
        const authState = await clerk.authenticateRequest(request);
        return authState.toAuth();
    } catch (error) {
        return { userId: null };
    }
}

// Helper para obtener el usuario
export async function getUser(session) {
    if (!session?.userId) return null;
    return await clerk.users.getUser(session.userId);
}