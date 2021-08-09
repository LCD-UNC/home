import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container, Fab, Tab, Tabs, ThemeProvider, Tooltip } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import { createTheme, makeStyles } from '@material-ui/core/styles';

import ProjectTab from './ProjectTab';
import RepoCard from './RepoCard';

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
        main: '#BF2633',
    },
    secondary: {
        main: '#D9D166'
    },
  },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    contentContainer: {
        paddingTop: '120px'
    },
    appBar: {
        textAlign: 'center'
    },
    fabStyle: {
        margin: theme.spacing(1),
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
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
        <div>
            <ThemeProvider theme={ theme }>
            <AppBar position="fixed">
                <Toolbar variant="regular" className={classes.appBar}>
                    <Typography variant="h6" >
                        Digital Communications Laboratory Projects (LCD-UNC)
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

                <ProjectTab value={value} index={0} avatarPath="/static/images/logo_contactar.svg" title="ContactAR" 
                            description='The general objective of the project is to research and develop an innovative solution for digital
                                         contact tracing within the context of COVID-19. This solution is based on the use of communication 
                                         technologies (GPS, cellular telephony: 2G/3G/4G, WiFi, Bluetooth) currently available in mobile 
                                         devices (cell phones). These devices have the ability to record the presence of digital signals emitted 
                                         by these technologies in a unique way, and thus estimate the proximity between the devices, and 
                                         consequently, between the people who use them. This solution seeks to determine quickly, objectively, 
                                         reliably, on a large scale (communities, populations, regions, countries, etc.) and at low cost the contacts 
                                         between people diagnosed with COVID-19 (confirmed cases) and people who, through direct or indirect contact 
                                         or by sharing common places, may have contracted COVID-19 but are asymptomatic or do not yet present symptoms.
                                         This project was presented by the Digital Communications Laboratory but different laboratories and research groups
                                         from the National University of Córdoba participate actively working.' >

                        <RepoCard image="" title="Feature Selection Scripts and Data" description='Contains the datasets and 
                                    scripts needed to obtain the results provided on the paper "Feature Selection for Proximity 
                                    Estimation in COVID-19 Contact Tracing Apps based on Bluetooth Low Energy (BLE)" presented in 
                                    "Pervasive and Mobile Computing" journal in the Special Issue on IoT for Fighting COVID-19'

                            zipUrl="https://github.com/LCD-UNC/contactar_feature_selection/archive/master.zip"
                            githubUrl="https://github.com/LCD-UNC/contactar_feature_selection" />

                        <RepoCard image="/static/images/logo_contactar_lab.svg" title="Laboratory Android App" description="Android application that can retrieve data 
                                    from different communication peripherals available on the device, persist them to a local database and 
                                    perform exporting operations in CSV file format to external storage memory. It is intended to use with 
                                    debugging and experimental purposes."

                            zipUrl="https://github.com/LCD-UNC/contactar_laboratory_android_app/archive/master.zip"
                            githubUrl="https://github.com/LCD-UNC/contactar_laboratory_android_app" />

                        <RepoCard image="/static/images/logo_contactar_seria.png" title="SERIA: Contact Tracing and Prevention Simulator for COVID-19" 
                                    description="A plethora of measures are being combined in the attempt to reduce SARS‑CoV‑2 spread. Due to its sustainability, 
                                    contact tracing is one of the most frequently applied interventions worldwide, albeit with mixed results. We evaluate the 
                                    performance of digital contact tracing for different infection detection rates and response time delays. We also introduce 
                                    and analyze a novel strategy we call contact prevention, which emits high exposure warnings to smartphone users according to 
                                    Bluetooth‑based contact counting. We model the effect of both strategies on transmission dynamics in SERIA, an agent‑based 
                                    simulation platform that implements population‑dependent statistical distributions. Results show that contact prevention 
                                    remains effective in scenarios with high diagnostic/response time delays and low infection detection rates, which greatly 
                                    impair the effect of traditional contact tracing strategies. Contact prevention could play a significant role in pandemic 
                                    mitigation, especially in developing countries where diagnostic and tracing capabilities are inadequate. Contact prevention 
                                    could thus sustainably reduce the propagation of respiratory viruses while relying on available technology, respecting data privacy, 
                                    and most importantly, promoting community‑based awareness and social responsibility. Depending on infection detection and app 
                                    adoption rates, applying a combination of digital contact tracing and contact prevention could reduce pandemic‑related 
                                    mortality by 20–56%."

                            zipUrl="https://github.com/LCD-UNC/contactar_seria_simulator/archive/main.zip"
                            githubUrl="https://github.com/LCD-UNC/contactar_seria_simulator" />
                </ProjectTab>
                
            </Container>
            
            <Tooltip title="lcd@fcefyn.unc.edu.ar" aria-label="mail" arrow>
                <Fab variant="extended" color="primary" aria-label="add" className={classes.fabStyle} href="mailto:lcd@fcefyn.unc.edu.ar">
                    <MailIcon className={classes.extendedIcon} />
                    Mail us
                </Fab>
            </Tooltip>
            </ThemeProvider>
        </div>
    );
}

export default App;
