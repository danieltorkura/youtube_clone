import React from 'react'
import Grid from '@material-ui/core/Grid'

import youtube from './api/youtube'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'
 

class App extends React.Component {
    state = {
        videos : [],
        selectedVideo : null
    }


    handleSubmit = async(searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDwyKiy5-piL7WZbw9taB_B28ClTRYxP-8',
                q: searchTerm 
            }
        })

        console.log(response)

        this.setState({ videos : response.data.items, selectedVideo: response.data.items[0]})
    }
    
   
    render() {

        const {selectedVideo} = this.state

        return(
                <Grid justify="center" container spacing={1}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <SearchBar onFormSubmit={this.handleSubmit}/>
                            </Grid>
                            <Grid item xs={8}>
                                <VideoDetail video={selectedVideo}/>
                                {/* <Trash/> */}
                            </Grid>
                            <Grid item xs={4}>
                                <VideoList/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            
        )
    }
}

export default App
