import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from "react-redux";
import TableHead from "@material-ui/core/TableHead";
import {GISTS_PAGINATION_SIZE} from "../../constants";
import {listPublicGistsAction} from "../../actions/GistActions";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import CircleLazyLoader from "../CircleLazyLoader";

const useStyles = makeStyles({
    table: {
        minWidth: 500,
        maxHeight: 300,
    },
});

function GistsTable(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const gists = useSelector(({gistsReducer}) => gistsReducer.gists);
    const loadingGists = useSelector(({gistsReducer}) => gistsReducer.loadingGists);
    React.useEffect(() => {
        dispatch(listPublicGistsAction());
    }, []);

    if(loadingGists) {
        return (
            <CircleLazyLoader/>
        )
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: 'bold'}}>Owner</TableCell>
                            <TableCell style={{fontWeight: 'bold'}}>Pull URL</TableCell>
                            <TableCell style={{fontWeight: 'bold'}}>Description</TableCell>
                            <TableCell style={{fontWeight: 'bold'}}>Created At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {gists.map((row) => (
                            <TableRow key={row.id} onClick={() => {}} style={{cursor: 'pointer'}}>
                                <TableCell >
                                    <a href={row.owner.html_url} target="_blank">
                                        <Grid container spacing={2} alignItems={"center"}>
                                            <Grid item>
                                                <Avatar alt={row.owner.login} src={row.owner.avatar_url} />
                                            </Grid>
                                            <Grid item>{row.owner.login}</Grid>
                                        </Grid>
                                    </a>
                                </TableCell>
                                <TableCell >
                                    {row.git_pull_url}
                                </TableCell>
                                <TableCell >
                                    {row.description}
                                </TableCell>
                                <TableCell >
                                    {row.created_at}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default GistsTable;
