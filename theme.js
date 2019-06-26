import { dark as baseTheme } from 'mdx-deck/themes';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { javascript } from 'react-syntax-highlighter/dist/esm/languages/prism'

export const kDark = {
  ...baseTheme,
  prism: {
    style: dark,
    languages: {
      javascript: javascript
    }
  },
  li: {
    padding: '15px'
  }
}
