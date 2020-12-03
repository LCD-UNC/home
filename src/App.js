import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Container, Tab, Tabs, ThemeProvider } from '@material-ui/core';
import RepoCard from './RepoCard';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import ProjectTab from './ProjectTab';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
        main: '#BF2633',
    },
    secondary: {
        main: '#D9D166'
    }
  },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    mainContainer: {
        backgroundColor: grey[700],
        height: '100%',
        marginBottom: '0px'
    },
    contentContainer: {
        paddingTop: '120px'
    },
    appBar: {
        textAlign: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

function App() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.mainContainer}>
            <ThemeProvider theme={ theme }>
            <AppBar position="fixed">
                <Toolbar variant="regular" className={classes.appBar}>
                    <Typography variant="h6" >
                        Proyectos del Laboratorio de Comunicaciones Digital - UNC
                    </Typography>
                </Toolbar>
                <Tabs value={value} onChange={handleChange} variant="scrollable"
                        scrollButtons="on">

                    {/* Add new tabs here ----------------------------------------------- NEW PROJECTS TABS */}
                    <Tab label="ContactAR" {...a11yProps(0)} />
                </Tabs>
            </AppBar>

            
            <Container maxWidth="xl" className={classes.contentContainer}>
                {/* ProjectTab with RepositoryCard example

                    <ProjectTab value={value} index={0}>
                        <Grid container spacing={3}>
                            <RepoCard image="" title="Example title 1" description="This is a lazy description"
                                zipUrl=""
                                githubUrl="" />

                            <RepoCard image="" title="Example title 2" description="This is a lazy description"
                                zipUrl=""
                                githubUrl="" />

                        </Grid>
                    </ProjectTab> */}

                {/* Add new tab content here ----------------------------------------------- NEW PROJECTS TABS */}

                <ProjectTab value={value} index={0}>
                    <Grid container spacing={3}>
                        <RepoCard image="" title="Feature Selection Scripts and Data" description="TODO"
                            zipUrl="https://github.com/LCD-UNC/contactar_feature_selection/archive/master.zip"
                            githubUrl="https://github.com/LCD-UNC/contactar_feature_selection" />

                        <RepoCard image="" title="Laboratory Android App" description="Aplicación Android para recolección de datos de periféricos de comunicación y sensores"
                            zipUrl="https://github.com/LCD-UNC/contactar_laboratory_android_app/archive/master.zip"
                            githubUrl="https://github.com/LCD-UNC/contactar_laboratory_android_app" />
                    </Grid>
                </ProjectTab>
                
            </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
