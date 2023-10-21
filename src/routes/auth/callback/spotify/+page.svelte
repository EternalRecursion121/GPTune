<script>
  import { page, goto } from '$app/stores';

  // Get the code from the URL
  let code;
  $page.query.subscribe(params => {
    code = params.get('code');
  });

  // Save the token and redirect
  if (code) {
    localStorage.setItem('access_token', code);
    goto('/');
  }
</script>