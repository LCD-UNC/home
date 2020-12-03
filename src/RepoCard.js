import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class RepoCard extends Component {

    render() {
        const {image, title, description, zipUrl, githubUrl} = this.props;
        return (
            <Grid item xs={12} xl={3}>
                <Card >
                    <CardActionArea target="_blank" href={ githubUrl }>
                        {image !== "" && (
                        <CardMedia component="img" alt={ title } height="140"
                                    image={ image }
                                    title={ title } />)}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                { title }
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                { description }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" target="_blank" href={ zipUrl }>
                            Descargar ZIP
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

}

export default RepoCard;