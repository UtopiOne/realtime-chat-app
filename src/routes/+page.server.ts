import { supabase } from '$lib/db/supabaseClient';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const messages = await supabase.from('messages').select('*');
	return {
		post: messages
	};
}) satisfies PageServerLoad;
