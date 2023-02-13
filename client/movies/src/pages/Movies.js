import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
// import PropertyDetail from './PropertyDetail';

const card = (PropertyDetail, index) => {

    return (
        <>
            <Box><div style={{
                paddingTop: 10,
                justifyContent: 'center',
                display: 'flex'
            }}>
                <Card sx={{ minWidth: 275, width: 500, height: 250 }} style={{ backgroundColor: "#C0C0C0" }}>
                    <CardHeader title={PropertyDetail.name} />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Rating:  {PropertyDetail.rating}
                        </Typography>
                        <br />
                        <Typography variant="body2">
                            Release Date
                            <br />
                            {PropertyDetail.relesedDate}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
            </Box>
        </>
    )
}

export default function Movies() {

    const [data, setData] = React.useState();
    const baseURL = 'http:localhost:5000/movies';

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
            console.log(data)
        });
    }, []);

    return (
        <>
            {/* <div>
                {PropertyDetail.map(card)}
            </div> */}
            <div>
                {data.map(card)}
            </div>
        </>
    );
}