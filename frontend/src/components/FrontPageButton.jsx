//react imports
import { useHistory } from 'react-router-dom';

//material imports
import { Grid, Button } from '@material-ui/core';


export default function FrontPageButtons({link, title}) {
    
    const history= useHistory();
    return (
        <>
            <Grid item xs={12} alignItems="center">
           
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={{ minWidth: '200px', fontSize: '1.2rem', color:"#FFF0D7"}} 
                    disableRipple="true" 
                    onClick={() => history.push(link)}
                >
                    {title}
                </Button>
            </Grid>

        </>
    );
}