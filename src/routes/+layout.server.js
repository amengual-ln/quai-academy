export function load({ locals }) {
    const serializableSession = locals.session ? {
        userId: locals.session.userId,
    } : null;

    return {
        session: serializableSession
    };
}