import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShowMoreText from "react-show-more-text";

/*

    RepoCard Component

    image:          path to static image associated with this repository.
    title:          repository descriptive title.
    description:    long repository description.
    zipUrl:         link to download a branch of this repository.
    githubUrl:      link reference to the repository.

*/

class RepoCard extends Component {

    render() {
        const {image, title, description, zipUrl, githubUrl} = this.props;
        return (
            <Grid item xs={12} xl={3} lg={3} md={6} sm={6}>
                <Card >
                    <CardActionArea target="_blank" href={ githubUrl }>
                        {image !== "" && (
                        <CardMedia component="img" alt={ title } height="300"
                                    image={ image }
                                    title={ title } />)}
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                { title }
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <ShowMoreText lines={2} more="Show more" less="Show less" className="show-more-less"
                                                truncatedEndingComponent={" ... "} >
                                    { description }
                                </ShowMoreText>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" target="_blank" href={ zipUrl }>
                            Download ZIP
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

}

export default RepoCard;