[![Emulsify Design System](https://user-images.githubusercontent.com/409903/170579210-327abcdd-2c98-4922-87bb-36446a4cc013.svg)](https://www.emulsify.info/)

**This repository is experimental and NOT ready for production.**

# Emulsify UI kit - Web Components Library

This repository contains the Web Components version of the Emulsify UI Kit library. The components are implemented using [Lit](https://lit.dev/). The idea behind this repository is to provide tools for experimenting, building and testing components that will be later integrated into an extended version of the UI Kit project.

## Emulsify UI kit vision

The Emulsify UI Kit is a tool for designers and front-end engineers to build high-quality user interfaces effectively and efficiently while maintaining WCAG 2.1 AA standards and project performance goals.

The Emulsify UI Kit gives users access to a library of prebuilt tokens and components that follow accessibility best practices and are easy to customize. The components in the kit are fully responsive, carefully designed, and can be implemented for modification in every project.

## The goals of the Emulsify UI Kit are to

- Create efficiency in the user interface design process
- Establish consistency in user interface design
- Maintain high accessibility standards

The Emulsify UI Kit has two distinct building blocks: the Figma and the code repo. These two items are kept in alignment for a seamless experience.

## What the Emulsify UI Kit is not

- Handcuffs. If using the kit is a barrier to a successful project, do what you need to for your project to be successful and provide feedback on why the kit was a barrier.
- A "default" visual design. Your visual design work should be tailor-made for each of your clients.

## There are two parts of this UI Kit

- [Figma UI Kit](https://www.figma.com/community/file/1141071510618977331)
- [Storybook](emulsify-ds.github.io/emulsify-ui-kit/)

## Getting Starter

```
npm install
npm run develop
```

This version only supports developing and previewing the components within Storybook. Support for building components for use in Drupal or frontend frameworks
will be added later.

[View the deployed storybook instance](https://emulsify-ds.github.io/emulsify-web-components/)

## Connecting components with Figma

First, get your own copy of the [Emulsify UI kit](https://www.figma.com/community/file/1141071510618977331) from the Figma community.

The strength of this UI kit leans on its connection with Figma via [Tokens Studio](https://tokens.studio/).

To connect the Figma file with your code, [see the instructions in the Tokens Studio documentation](https://docs.tokens.studio/sync/github).

## Creating a component

A complete component meets the following criteria:

1. Design tokens are defined as their own set in Figma, in the Token Studio plugin, and they use references to values defined in `semantic` as much as possible.
2. The component has an independent frame in Figma.
3. The component's styles uses the generated design tokens as much as possible. See button example below.
4. A component's story connects to the corresponding Figma frame, defined in `.storybook/configma.json`.
5. The component passes WCAG 2 AA.

### Naming tokens

See [this whiteboard](https://www.figma.com/file/l6MIPQCewbIJoKvZpxhAwr/Token-Naming?node-id=0%3A1&t=5IaZF2ZNEoruxEld-1) that outlines the preferred naming convention for design tokens.

### Connecting a component's story to the corresponding Figma frame

1. In Figma, select the frame to share and activate the Share button (in the upper right hand corner).
2. In the share modal make sure that "Link to selected frame" is checked and activate "Copy link".
3. Open `.storybook/configma.json` and confirm the following:
4. Using this example: `https://www.figma.com/file/[FIGMA_FILE_ID]/[FIGMA_FILE_NAME]?node-id=[NODE_ID]`
5. Confirm that `url` has the correct `FIGMA_FILE_ID` and `FIGMA_FILE_NAME`.
6. Add your component name to the file as a key with the `NODE_ID` being the value.
7. Import `configma.json` into your story.
8. In the parameters of your story, include `figma.$KEY` as shown below.

```js
parameters: {
  design: {
    type: 'figma',
    url: figma.url + figma.button,
  },
},
```

## Contributing to this UI Kit

To come. TKTK
