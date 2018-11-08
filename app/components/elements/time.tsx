import { compose, defaultProps, setDisplayName } from 'recompose'
import { withTheme } from 'styled-components'
import Box from 'ui-box'

import { T, U } from '.'

export default compose<T, U>(
  setDisplayName('timestamp'),
  withTheme,
  defaultProps({
    is: 'time',
    fontSize: 'inherit',
    margin: 0
  })
)(({ theme, ...props }) => <Box color={theme.faded} {...props} />)