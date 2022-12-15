import React from 'react'
import DialogContent from '@mui/material/DialogContent'
import MuiDialog from '@mui/material/Dialog'
import {Typography} from '@mui/material'
import {assertDefined} from '../utils/assert'


/**
 * A generic base dialog component.
 *
 * @property {object} icon Leading icon above header description
 * @property {string} headerText Short message describing the operation
 * @property {boolean} isDialogDisplayed
 * @property {Function} setIsDialogDisplayed
 * @property {object} content node
 * @return {React.ReactElement} React component
 */
export default function Dialog({
  icon,
  headerText,
  isDialogDisplayed,
  setIsDialogDisplayed,
  content,
}) {
  assertDefined(icon, headerText, isDialogDisplayed, setIsDialogDisplayed, content)
  const close = () => setIsDialogDisplayed(false)
  return (
    <MuiDialog
      open={isDialogDisplayed}
      onClose={close}
      sx={{textAlign: 'center'}}
    >
      <Typography
        variant='h1'
        sx={{marginTop: '24px'}}
      >
        {headerText}
      </Typography>
      <DialogContent sx={{
        'marginTop': '10px',
        'paddingTop': '0px',
        '@media (max-width: 900px)': {
          paddingTop: '10px',
        },
      }}
      >
        <Typography variant='p'>
          {content}
        </Typography>
      </DialogContent>
    </MuiDialog>)
}
