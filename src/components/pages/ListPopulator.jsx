import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

const ListPopulator = props => {
    const classes = useStyles();


    return (
        <div>
            {props.items.map((item, i) => {
                return (
                    <div key={i}>
                        <div>
                            <div className={classes.root}>
                                <ExpansionPanel defaultExpanded>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1c-content"
                                        id="panel1c-header"
                                    >
                                        <div className={classes.column}>
                                            <Typography className={classes.heading}>Forgetfill: {item.listItem}</Typography>
                                        </div>
                                        <div className={classes.column}>
                                            <Typography className={classes.secondaryHeading}>Next Change: <Moment fromNow unit="days">{item.nextChanged}</Moment></Typography>
                                        </div>
                                    </ExpansionPanelSummary>

                                    <ExpansionPanelDetails className={classes.details}>
                                        <div className={classes.column} >Details: {item.itemDetails}</div>

                                        <div className={classes.column}>
                                            Last Change: <Moment fromNow unit="days">{item.lastChanged}</Moment>
                                        </div>
                                        <div className={clsx(classes.column, classes.helper)}>
                                            <Typography variant="caption">
                                                Need to Order?
                                        <br />
                                                <a href="#sub-labels-and-columns" className={classes.link}>
                                                    Learn more
                                        </a>
                                            </Typography>
                                        </div>
                                    </ExpansionPanelDetails>
                                    <Divider />
                                    <ExpansionPanelActions>
                                        <Button size="small">Cancel</Button>
                                        <Button size="small" color="primary">
                                            Save
                                </Button>
                                    </ExpansionPanelActions>
                                </ExpansionPanel>
                            </div>
                            <br />
                        </div>
                    </div>
                )
            })}
        </div>
    )


}


export default ListPopulator