# Ed Wong's Turporepo

This Turborepo includes the following packages/apps:

- Packages:
  - UI library- this will contain the custom react components that I will be able to reuse in other projects. The aim is to make these as generic and reusable as possible.
  - Eslint config- this will keep linting between the projects consistent. I have kept this to the default Turborepo template.
  - Tailwind config- for defining and extending custom brand variables and any specific theming that will be used across my projects. Each project will define their own tailwind config that will extend this one.
  - Typescript config- TSconfig for use across the projects. This is also kept to the default values from the Turborepo template.
- Applications:
  - Storybook- presenting the components from the UI library using the Storybook framework.
  - Website- my personal website and first proper application in this monorepo.

## Running the monorepo

Note that the backend requires a CMS that matches [https://github.com/edmondwong6279/ew.website-cms](https://github.com/edmondwong6279/ew.website-cms) and also the correct environment variables too. Without the `.env` set up in the `ew.website` project, the application will not function properly. Provided those values are prepared and ready, then you may proceed with the remaining steps.

1. Install the packages

```
yarn install
```

2. Run dev mode

```
yarn dev
```

3. For the main website application, go to [http://localhost:3000](http://localhost:3000). For storybook, go to [http://localhost:6006](http://localhost:6006).
