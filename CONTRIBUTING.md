# Contributing

**Working on your first Pull Request?** You can learn how from this _free_
series
[How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)

### **Core**

Core is the culmination of all the above packages and provides consumers with
the entire Futil library. Core is automatically generated based on the packages
co-located in `components/`, `libraries/` and `primitives/`. Contributors
shouldn't generally modify Core's `src/` directory. From time to time, Core's
`tools/` may need updating.

## **Contributing a new package**

The `pnpm:pkg` script will create a templated package which will guarantee that
your new package meets Futil's [Package Requirements](#package-requirements).

```sh
# run
$ pnpm plop:pkg

# then walk through the CLI prompts to add a new package.
```

## **Package Requirements**

- [ ] a `package.json` file with the following sub-requirements:
  - contains the scripts: `build, build:quick, clean, tscheck`.
  - package should be "sideEffects" free (`"sideEffects": false,`). A "side
    effect" is defined as code that performs a special behavior when imported,
    other than exposing one or more exports. An example of this is a polyfill,
    which affect the global scope and usually do not provide an export. This
    allows tree-shaking to work.
    [Additional reading](https://webpack.js.org/guides/tree-shaking/).
  - You must define the `"status"` of the component to be one of: (run
    `yarn productionize` to update the status to `"production"`)
    - `"production"`
    - `"development"`
- [ ] a `tsconfig.json` file (they're all the same/similar).
- [ ] a `src/` folder with all your package's code,
  - [ ] named modules/exports are exported from a `src/index.ts` file
- [ ] a `__tests__` folder with your package's tests.
- [ ] a `README.md` to detail more information about working on that package's
      code, if necessary. (_This is automatically generated but may need some
      tweaking._)
