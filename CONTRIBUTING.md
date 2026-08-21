# Contributing to SevenGen Studios

GitHub is the shared source of truth for the SevenGen Studios website.

## Branch workflow

Never make ongoing work directly on `main`. Create a short branch name such as:

- `content/update-services`
- `design/homepage-spacing`
- `feature/project-inquiry`
- `fix/mobile-navigation`

## Before opening a pull request

Run:

```bash
npm ci
npm run build
```

Then review the changed pages on desktop and mobile.

## Pull requests

Keep each pull request focused. Include:

- what changed;
- why it changed;
- which routes were affected;
- screenshots for visual changes;
- any follow-up work still required.

The other founder should review the pull request before it is merged.

## Content standards

- Write `openband.ca` in lowercase.
- Describe Brennan Kakakaway as Founder.
- Describe Rylan Iron as Co-founder and Original Partner.
- Do not exaggerate audience, client work, results or team size.
- Keep claims specific, verifiable and respectful of Indigenous communities.
- Use `sevengenerationscapital@gmail.com` for public contact.

## Production

Merging code into GitHub does not by itself change the currently deployed website. Production deployment remains a separate release step until a hosting provider is connected to this repository.
