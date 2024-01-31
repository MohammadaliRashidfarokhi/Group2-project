import { useMediaQuery } from '@/utils/hooks/useMediaQuery.ts'
import { SCREEN_BREAKPOINTS } from '@/lib/theme/screenBreakpoints.ts'

const QueryType = {
  up: 'min-width',
  down: 'max-width',
}

type Args = {
  breakpoint: keyof typeof SCREEN_BREAKPOINTS
  direction?: keyof typeof QueryType
}

export const useTailwindBreakpoint = (args: Args) => {
  const { direction = 'up', breakpoint } = args

  const breakpointValue = SCREEN_BREAKPOINTS[breakpoint]

  const query = `(${QueryType[direction]}: ${breakpointValue})`

  return useMediaQuery(query)
}
