import PropTypes from 'prop-types';
import {Box, Grid, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/*

    ProjectTab Component

*/

const useStyles = makeStyles((theme) => ({
    avatarSize: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginLeft: theme.spacing(1)
    },
    paddingBottom: {
        paddingBottom: '25px'
    },
    projectDescription: {
        paddingTop: '15px',
        paddingBottom: '30px'
    },
    listItemText: {
        paddingLeft: '30px',
    }
}));

function ProjectTab(props) {
    const classes = useStyles();

    const { children, value, index, avatarPath, title, description } = props;

    return (
        <div role="tabpanel" hidden={value !== index}
                id={`scrollable-force-tabpanel-${index}`}
                aria-labelledby={`scrollable-force-tab-${index}`}>
            {value === index && (
                <Box p={2}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <ListItem divider={true} disableGutters={true} className={classes.paddingBottom}>
                                <ListItemAvatar>
                                    <Avatar src={avatarPath} className={classes.avatarSize}></Avatar>
                                </ListItemAvatar>
                                <ListItemText className={classes.listItemText}>
                                    <Typography variant="h4" color="textPrimary" component="p">{title}</Typography>
                                </ListItemText>
                            </ListItem>
                            <Typography gutterBottom color="textPrimary" className={classes.projectDescription}>
                                {description}
                            </Typography>
                            <Typography variant="h5" color="textPrimary" component="p">Repositories</Typography>
                        </Grid>
                        
                        {children}
                </Grid>
                </Box>
            )}
        </div>
    );
}

ProjectTab.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default ProjectTab;