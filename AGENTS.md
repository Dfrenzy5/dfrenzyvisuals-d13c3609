<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Technical decisions
- `src/start.ts` uses the project-specific bearer middleware in `src/lib/supabase-auth-middleware.ts` instead of the generated `auth-attacher` — the generated one constructs the browser Supabase client, which throws when the public `VITE_SUPABASE_*` vars are absent (external builds like Vercel), breaking every public server function. Do not swap it back for the generated attacher.
- All server functions in this app are public (no `requireSupabaseAuth`); privileged work uses `supabaseAdmin` inside handlers after input validation.
