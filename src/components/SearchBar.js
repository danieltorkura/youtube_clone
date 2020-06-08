import React, {Component} from "react"

import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"

class SearchBar extends Component {
    state = {
        searchTerm : ''
    }

    handleChange = (e) => {
        this.setState({ searchTerm : e.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {searchTerm} = this.state
        const {onFormSubmit} = this.props

        onFormSubmit(searchTerm)
    }

    render() {
        return(
           <Paper elevation={6} style={{padding: '25px'}} onSubmit={this.handleSubmit}>
               <form>
                   <TextField fullWidth label="Search..." onChange={this.handleChange}/>
               </form>
           </Paper>
        )
    }
}


export default SearchBar
