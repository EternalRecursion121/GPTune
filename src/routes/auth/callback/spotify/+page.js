import { redirect } from '@sveltejs/kit';

export const load = ({ url }) => {
    const { code } = url.searchParams;
    console.log(code);

	return redirect(300, "/")
};