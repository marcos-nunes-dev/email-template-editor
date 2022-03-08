# Carta

Project developed for the takehome, Frontend challenge.

## **Considerations and Improvements**

Some of my own options when developing this project were:
- I chose to use my own boilerplate where I had everything set up regarding code maintenance and tools to streamline the development process using component-based-design;
- About the process of updating and rendering the template I chose to use a parser and mustache to interpret and update the template editing in real time without the need to send a request for every time I wanted to render the template in the preview.
- At the end of the process I realized that I had forgotten the requirement to disable the button. I believe that the way I did it (creating a new state in context) is not the most suitable.

basically the points of improvement that should be evaluated are:
- graphical improvements in the error pages and boundary error handlers.
- Taking into account that I chose to build and interpret the layout only on the frontend, we need to add more validations to ensure that the experience of using and editing the frontend template is interpreted with the same rules as the backend.
- As I didn't have much time the tests should have a coverage of at least 90%.
- IDE intelligence could be improved
- The IDE could have a different highlighter to contain the number of lines and other visual aspects
- responsive layout improvements
- improvements and intelisense in the variable template editor

---

## The project

In this project I chose to choose a set of technology that would give me more development speed since I am very busy because of my current project. I chose to use a component based design and theme based design design pattern. That way I can streamline the development process without worrying about the scalability and styling versatility of each component.

-   [Typescript](https://www.typescriptlang.org) - Project base
-   [Testing Library](https://testing-library.com) - Jest based testing utilities.
-   [Styled Components](https://styled-components.com) - Styling
-   [Styled System](https://styled-system.com) - Component base design for styling
-   [Styled Tools](https://github.com/diegohaz/styled-tools) - Interpolation functions for styling
-   [Antd](https://ant.design/docs/react/introduce) - React UI Library
-   [html react parser](https://www.npmjs.com/package/html-react-parser) - Convert string to components
-   [mustache](https://www.npmjs.com/package/mustache) - handling template variables directly on frontend
-   [Prism.js](https://prismjs.com) - Syntax highlight
-   [react simple code editor](https://www.npmjs.com/package/react-simple-code-editor) - Code editor

and I just used a few others things like: Next.js, husky, esLint, axios, react truncate and etc.

## Installation

requires [Node.js](https://nodejs.org/) v10+ to run.

Create a .env file in root folder based on .env-sample

```sh
NEXT_PUBLIC_TEMPLATES_ENDPOINT= //Key used to communicate with backend
```

Install the dependencies and devDependencies

```sh
yarn
npm install
```

For development

```sh
yarn dev
```

For production

```sh
yarn build
```

some others commands

```sh
yarn test // run jest unit tests
yarn coverage // generates coverage report
yarn lint:fix // runs eslint
```
