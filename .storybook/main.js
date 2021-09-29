module.exports = {
  "stories": [
    "../projects/xplorecomponents/src/lib/**/*.stories.mdx",
    "../projects/xplorecomponents/src/lib/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  }
}