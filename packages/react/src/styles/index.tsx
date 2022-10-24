import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  radii,
  sizes,
  space,
  zIndices,
  shadows,
  transitions,
  borderWidths,
  borderStyles,
} from '@weich-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    radii,
    sizes,
    space,
    zIndices,
    shadows,
    transitions,
    borderWidths,
    borderStyles,
  },
})
