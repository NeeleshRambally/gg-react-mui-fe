import React, { useEffect, useState } from 'react'
import DataTable from '../common/DataTable/DataTable';

const columns = [
    { field: 'id', headerName: 'id', width: 20 },
    { field: 'title', headerName: 'title', width: 255 },
    { field: 'year', headerName: 'year', width: 255 },
    { field: 'genre', headerName: 'genre', width: 255 },
    { field: 'director', headerName: 'director', width: 255 },
    { field: 'actors', headerName: 'actors', width: 555 },
    { field: 'rating', headerName: 'rating', width: 200 },
];

const movieTableStyles = {
    height: '650px'
};

const MovieTable = ({ onError }) => {
    const [movies, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://d5ejp96hg6.execute-api.us-east-1.amazonaws.com/getMovieApi')
            .then((response) => response.json())
            .then((json) => setUsers(json))
            .catch(() => onError())
    }, []);

    return (
        <DataTable
            rows={movies}
            columns={columns}
            loading={!movies.length}
            sx={movieTableStyles}
        />
    );
};

export default MovieTable