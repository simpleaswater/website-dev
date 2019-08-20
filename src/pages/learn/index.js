import React, { Component, Fragment } from 'react'
import TopBar from '../../components/LayoutComponents/TopBar'
import Footer from '../../components/LayoutComponents/Footer'

import Grid from '@material-ui/core/Grid';
import ButtonOuline from '../../components/LayoutComponents/Button';
import Paper from '../../components/LayoutComponents/Paper';

class Learn extends Component {
    render() {

        const { match } = this.props

        if (match.params.chapter) {

        }

        return (
            <Fragment>
                <TopBar />
                <Grid container direction="column" style={{ marginTop: '40px' }}>
                    <Grid item xs={12} key={0}>
                        <Grid container justify="center" direction="row" spacing={2} style={{ width: '100%' }}>
                            <Grid key={0} item>
                                <Paper
                                    heading="Decentralized data Structures"
                                    description="The decentralized web relies on unique data structures and linking strategies. Learn about the benefits of hashing, content addressing, DAG and Merkle Trees!"
                                    paperColor="#EAFAF1"
                                    buttonText="Start Learning"
                                    buttonColor="#76D7C4"
                                />
                            </Grid>
                            <Grid key={1} item>
                                <Paper
                                    heading="IPFS: Mutable File System"
                                    description="The Mutable File System (MFS) lets you work with files and directories as if you were using a traditional name-based file system."
                                    paperColor="#F5EEF8"
                                    buttonText="Start Typing"
                                    buttonColor="#C39BD3"
                                />
                            </Grid>
                            <Grid key={2} item>
                                <Paper
                                    heading="P2P data links with content addressing"
                                    description="Store, fetch, and create verifiable links between peer-hosted datasets with IPFS and CIDs. It’s graphs with friends!"
                                    paperColor="#FEF5E7"
                                    buttonText="Explore Projects"
                                    buttonColor="#F8C471"
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


export default Learn