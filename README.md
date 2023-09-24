# 🧰 futil

A library containing a <ins>few useful frontend utilities</ins> or `futil` for
short 🙃

> ⚠️ WARNING: This library is a work in progress. Every release is at risk of
> having breaking changes, until its first major release.

<br />

## Getting Started

### Installation

The easiest way to get started is to install `@futil/core`:

```bash
# pnpm
$ pnpm add @futil/core

# yarn
$ yarn add @futil/core

# npm
$ npm i @futil/core --save
```

_Or_ install individual futil packages

```bash
$ pnpm add @futil/browser
```

<details>
<summary><b>Why would you install individual packages?</b></summary>

<b>Possibility 1: Version Pinning.</b> <br /> If you want to lock your project
into a certain version of <code>@futil/browser</code>, but keep everything else
from <code>@futil/core</code> up to date, you can pin
<code>@futil/browser</code> to a certain version. For example, here's how you'd
go about doing that: <br />

<pre>
$ pnpm add @futil/core@latest && pnpm add @futil/browser@0.0.2

// then your package.json will look like:

{ "dependencies": { "@futil/browser": "0.0.2", "@futil/core": "latest" } }

</pre>
<br />
<b>Possibility 2: Unnecessary Modules.</b>
<br />
You just don't care for the rest of futil and only want a single
package's utilities.
</details>

<br />

### Usage

There are a few ways to import utilities from futil. Below are a few different
approaches:

```tsx
// Option 1 (Recommended): import module from individual package through `core`
import { getQueryParams } from '@futil/core/browser';
// Option 2 (Recommended): import module from individual package
import { getQueryParams } from '@futil/browser';
// Option 3 (NOT Recommended): import module from core
import { getQueryParams } from '@futil/core';

// then use the module however you please
const [filterParam, sortParam] = getQueryParams(['filter', 'sort']);
```

<br />

## So what is `futil`?

This library was inspired by frontend engineers, trying to help other frontend
engineers. This library was created to provide our fellow frontend engineers:

1. with utilities ranging from basic to advanced (as needed)
2. the ability to use just 1 utility - or many - without incurring nasty library
   bloat

<details>
<summary><b>Why not just use something like <code>lodash</code> or <code>lodash.get</code>?</b></summary>
While Lodash is an amazing library, it provides different kinds of helpers. Lodash
simply serves a different purpose. Futil doesn't offer common JS
utilities that help to shorten and optimize code. Futil provides
<i>frontend</i> utilities that don't really exist in an existing popular library.
</details>

<details>
<summary><b>More on "Why <code>futil</code>?"</b></summary>
We are a small group of frontend engineers that have worked on large-scale
projects, in high-growth startups or enterprise orgs... and have just repeatedly created
the same utilities for each team.
<br />
<br />
Essentially, we just got tired of doing it over and over... and over.

</details>

<br />

## Development

### Scripts

```bash
# install dependencies
$ pnpm setup

# run tests
$ pnpm test

# or run tests in watch mode
$ pnpm test:watch

# create new package from plop template
$ pnpm plop:pkg
```

### Contributing and Development

- [Contribution Guide](https://github.com/bigwoof91/frontend-utils/blob/main/CONTRIBUTING.md)
