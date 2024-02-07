# About project

This project is made using React.js with Vite as the build tool. It is using
TypeScript for static code analysis and TailwindCSS for styling. Prettier and Eslint libraries are used for code quality maintenance.
Most of the components are imported from Shadcn library. Global state is managed using Zustand library.
Application is serverless and uses Supabase as the backend (authentication and data fetching).

# Getting started

## Install the dependencies

To install the dependencies (libraries, etc.), run the following command:
```bash
npm install
```

## Run the project

To run the project, run the following command:
```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) to see the app.

# Dependencies

## TypeScript

TypeScript is a superset of JavaScript, which provides static type checking. It is used for static code analysis and to catch errors before runtime.
For this project, Typescript is used to define types for component properties, functions, etc.

Example for defining type for component properties:
```typescript
type Props = {
  name: string;
  age: number;
}

const MyComponent = (props: Props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
}
```

Example for defining type for function:
```typescript
const add = (a: number, b: number) => {
  return a + b;
}
```

For more information, visit [TypeScript documentation](https://www.typescriptlang.org/docs/).


## TailwindCSS

Tailwind is library, which provides a set of utility classes for styling. It is used for styling the application.
Instead of traditional CSS, it provides ability, to use classes directly in HTML.

Example:
```html
<div class="bg-blue-500 text-white p-4">Hello world</div>
```

For more information, visit [TailwindCSS documentation](https://tailwindcss.com/docs).

## Shadcn

Shadcn is a library, which provides a set of components for React. It is used for importing components, which are used in the application.

Install the build of the library:
```bash
npx shadcn-ui@latest add button
```

Example of usage:
```typescript
import { Button } from '@/lib/shadcn-components/ui/button.tsx';

const MyComponent = () => {
  return (
    <Button>Click me</Button>
  );
}
```

For more information, visit [Shadcn documentation](https://ui.shadcn.com).
