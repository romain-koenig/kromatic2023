# kromatic2023

This is an eleventy site for Kromatic - (brainstorming changes for 2023).

## Getting Started

1. Clone this repo
2. `npm install`
3. `npm run serve` to start a local server

## Deploying

This site is deployed to Netlify. Pushing to the `main` branch will trigger a new deploy.

[![Netlify Status](https://api.netlify.com/api/v1/badges/29cc711c-6a60-41d8-bf48-24dfd510cd6c/deploy-status)](https://app.netlify.com/sites/kromatic/deploys)

## Editing Content

This site uses [Eleventy](https://www.11ty.dev/) to manage content (markdown files).

### Adding a new page

1. Create a new markdown file in the `src` directory
2. Add the following frontmatter to the top of the file:

```
---
layout: base.njk

eleventyNavigation:
  key: <Page Title>
  order: <1>

---

```

3. Add content below the frontmatter


