import React, { Component, Fragment } from 'react'
import TopBar from '../../components/LayoutComponents/TopBar'
import Footer from '../../components/LayoutComponents/Footer'
import SimpleAsWaterLogo from '../../assets/logo.png'
import Grid from '@material-ui/core/Grid';
import ButtonOuline from '../../components/LayoutComponents/Button';
import Paper from '../../components/LayoutComponents/Paper';
import { NavLink } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <TopBar />
                <Grid container direction="column">
                    <Grid item xs={12} key={0}>
                        <Grid container justify="center" direction="row" alignItems="center" style={{ height: '100vh' }}>
                            <Grid key={0} item>
                                <center>
                                    <font size="6" color="#3498DB" style={{ fontFamily: 'Comfortaa' }}>SimpleAsWater</font>

                                    <br /><br /><br />

                                    <font size="5" alignItems="center">
                                        A <b><font color="">Friendly Community</font></b> where <b>Everyone</b>
                                        <br /><br />
                                        <NavLink to="/learn"
                                            style={{ textDecoration: 'none' }}
                                            activeStyle={{
                                                fontWeight: "bold",
                                            }}>
                                            <ButtonOuline color="#76D7C4" text="Learns" size="large" variant="outlined" />
                                        </NavLink>
                                        <br /><br />
                                        and
                                <br /><br />
                                        <NavLink to="/build"
                                            style={{ textDecoration: 'none' }}
                                            activeStyle={{
                                                fontWeight: "bold",
                                            }}>
                                            <ButtonOuline color="#C39BD3" text="Builds" size="large" variant="outlined" />
                                        </NavLink>
                                        <br /><br />
                                        the{' '}
                                        <b><font>Web3</font></b>.
                            </font>
                                </center>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} key={1}>
                        <Grid container justify="center" direction="row" spacing={2} style={{ width: '100%' }}>
                            <Grid key={0} item>
                                <Paper
                                    heading="Start from the Basics"
                                    description="Learn the basics of any Web3 Project or Platform using interactive tutorials. Try Ethereum, IPFS, HyperLedger etc. and learn how they work under-the-hood."
                                    paperColor="#EAFAF1"
                                    buttonText="Start Learning"
                                    buttonColor="#76D7C4"
                                    buttonLink="/learn"
                                />
                            </Grid>
                            <Grid key={1} item>
                                <Paper
                                    heading="Just start Typing"
                                    description="No more fussing with servers and setup: Your Dapp is live on the Web3 as you type. Create industry-standard code, whether you’re a new coder or an expert."
                                    paperColor="#F5EEF8"
                                    buttonText="Start Typing"
                                    buttonColor="#C39BD3"
                                    buttonLink="/build"
                                />
                            </Grid>
                            <Grid key={2} item>
                                <Paper
                                    heading="Spark Your Project"
                                    description="Use more than a million free Web3 Dapps instantly, or remix to make them your own. Find handy tools for work, art experiments, big ideas for education, and more."
                                    paperColor="#FEF5E7"
                                    buttonText="Explore Projects"
                                    buttonColor="#F8C471"
                                    buttonLink="/explore"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </Fragment>
        )
    }
}

export default Home