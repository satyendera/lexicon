# Lexicon next based Framework

Hi Team this framework is already designed and developed by me and now making  changes for Lexicon code challenges exclusive and customizing it as per need. created env specific env files

## Ecosystem of this reference architecture 🎉

- **Development Environment:** Storybook integrated for developing and showcasing components.
- **Flow typed:** All components are FlowTyped and Flow Type checked.
- **Static Code Quality checks and formatting:** Javascript and CSS linting using Eslint, StyleLint and Prettier.
- **Component scaffolding:** Consistently generate components using Plop.
- **Git Hooks:** Pre-commit, Pre-push and pre-publish using Husky.
- **Unit testing framework:** with Jest and Enzyme.
- **Theme and Styling:** with Styled Components.
- **Next.js:** to render react application server side and more.
- **PWA:** application.
- **Dynamic Authoring:** of pages with headless CMS.

## Main Technology Dependencies

1. React
2. Next.js
3. Redux
4. Node.js

## Installation

Fork the repository & install dependencies using the yarn/npm command line tools.

```sh
yarn install
yarn start - it will be a prod build
yern dev - it will be a dev build
```


## How to ramp-up?

Follow this ramp-up [guide](readme/01-GettingStarted.md)

## Trade offs
No Partial Rendering 
Less scope for Micorfrontend 
Less Scope for joining multiapps i.e. Lerna
entire Store is visible at client side



## Assumptions
1. it's Headless, standalone  Solution which can use any Back end system with or without API gateway through REST API's.
2. We need SSR (SEO compitable) and SSG (Static site generation) feature with best TTFB, TTI rate.
3. node version should be > 10.30 and React version should be >16.0
4. Streaming providers could be configurable 
5. By this practice test , you would like to know knowledge about tech stack , not assuming fully functional prototype
6. If ask is not properly working or implemented , team will ask for best solution and how could we achieve same by this architecture.
7. Use of this framework is just to ease development and  save time in installing things , i am handy for new setup as well.
8. Sitespeed , Sonar and jest setup are not part of ask.




