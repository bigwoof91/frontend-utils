<h1 align="center">@futil/core</h1>
<p align="center">All the frontend utilities you can dream of.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@futil/core"><img src="https://badgen.net/npm/v/@futil/core?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Installation

```bash
# npm
$ npm i --save @futil/core

# yarn
$ yarn add @futil/core

# pnpm
$ pnpm add @futil/core
```

## Usage

```tsx
import { spread } from '@futil/core/v1/spread';
// or
// import { spread } from '@futil/core/v1';
import {
  SomeOtherComponent,
  type SomeOtherComponentProps,
} from 'some-other-component';

type MyReactComponentProps = {
  someOtherComponentProps?: SomeOtherComponentProps;
};

const MyReactComponent = ({
  someOtherComponentProps,
}: MyReactComponentProps) => {
  return <SomeOtherComponent {...spread(someOtherComponentProps)} />;
};
```
