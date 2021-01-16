import React, {Fragment} from 'react';
import Typography from "@material-ui/core/Typography";
import GistsTable from "../../../../components/GistsTable";
import GistsController from "../../../../components/GistController";


const Gists = () => {
    return (
        <Fragment>
            <Typography variant="h5" component="h2" color='primary' gutterBottom style={{marginTop: '16px'}}>
                Gists
            </Typography>
            <GistsController />
            <GistsTable />
        </Fragment>
    );
}

export default Gists;
