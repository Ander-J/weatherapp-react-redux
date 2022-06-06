import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

function getData(id, location, lat, lon, temp, weather){
    return {id, location, lat, lon, temp, weather}
}

const rows = [
    getData(1, 'Tallinn', '23.2', '32.2', 16.5, 'Sunny'),
    getData(2, 'Tartu', '23.2', '32.2', 16.5, 'Sunny'),
    getData(3, 'Helsinki', '23.2', '32.2', 16.5, 'Sunny'),
    getData(4, 'London', '23.2', '32.2', 16.5, 'Sunny')
]

function List(){
    return(
    <div>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Location</TableCell>
                        <TableCell>Temperature</TableCell>
                        <TableCell>Conditions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">{row.location}</TableCell>
                            <TableCell>{row.temp}</TableCell>
                            <TableCell>{row.weather}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    );
}

export default List;