import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {listPublicGistsAction, searchGistsByUsername} from "../../actions/GistActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

function GistsController(props) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState();
    return (
        <div>
            <Button variant="contained"  color="primary" onClick={() => dispatch(listPublicGistsAction())}>Get Public Gists</Button>
            <Grid container spacing={2} alignItems={"center"} style={{margin: '16px 0'}}>
                <Grid item>
                    <TextField id="gist-username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Grid>
                <Grid item>
                    <Button variant="contained"  color="primary" onClick={() => dispatch(searchGistsByUsername(username))}>Get Gists for username</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default GistsController;
