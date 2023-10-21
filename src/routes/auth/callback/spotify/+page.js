import { redirect } from '@sveltejs/kit';

export const load = ({ url }) => {
    const code = url.searchParams.get("code");
    console.log(code);

	return redirect(300, "/")
};