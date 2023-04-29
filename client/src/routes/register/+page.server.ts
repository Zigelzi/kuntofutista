import type { Actions } from '@sveltejs/kit';

export const actions = {
	register: async ({ locals, request }) => {
		const formData: FormData = await request.formData();
		const newUser = Object.fromEntries([...formData]);
		locals.pb.collection('users').create(newUser);
	}
} satisfies Actions;
