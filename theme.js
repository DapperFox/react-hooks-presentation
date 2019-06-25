import { swiss as baseTheme } from 'mdx-deck/themes';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { javascript } from 'react-syntax-highlighter/dist/esm/languages/prism'

export default {
  ...baseTheme,
  prism: {
    style: dark,
    languages: {
      javascript: javascript
    }
  }
}
