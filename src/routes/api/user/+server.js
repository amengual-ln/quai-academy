import { clerkClient } from 'svelte-clerk/server';
import { json } from '@sveltejs/kit';

export const GET = async ({ locals }) => {
    const session = await locals.auth();
    if (!session?.userId) {
        return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 });
    }
    
    const user = await clerkClient.users.getUser(session.userId);
    return json(user);
};