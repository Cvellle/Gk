import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMore from '@material-ui/icons/ExpandMore'
import styles from '@assets/jss/components/accordionStyle'

const useStyles = makeStyles(styles)

const Accordion = ({ collapses, activeProp, children }) => {
  const classes = useStyles()

  const [active, setActive] = useState(activeProp)
  const handleChange = panel => (event, expanded) => {
    setActive(expanded ? panel : -1)
  }

  return (
    <div className={classes.root}>
      {collapses.map((prop, key) => {
        return (
          <ExpansionPanel
            expanded={active === key}
            onChange={handleChange(key)}
            key={key}
            classes={{
              root: classes.expansionPanel,
              expanded: classes.expansionPanelExpanded,
            }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMore />}
              classes={{
                root: classes.expansionPanelSummary,
                expanded: classes.expansionPanelSummaryExpaned,
                content: classes.expansionPanelSummaryContent,
                expandIcon: classes.expansionPanelSummaryExpandIcon,
              }}
            >
              <h4 className={classes.title}>{prop.title}</h4>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>{prop.content}</ExpansionPanelDetails>
            {children}
          </ExpansionPanel>
        )
      })}
    </div>
  )
}

Accordion.defaultProps = {
  activeProp: -1,
}

Accordion.propTypes = {
  // index of the default active collapse
  activeProp: PropTypes.number,
  collapses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    }),
  ).isRequired,
  children: PropTypes.node,
}

export default Accordion
