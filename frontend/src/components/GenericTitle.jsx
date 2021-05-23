//Components
import { Typography } from '@material-ui/core';

//icons
import SportsTennisIcon from '@material-ui/icons/SportsTennis';


//to do: 1. fixa ikonen
//2. FLYTT NER TITEL

export default function GenericTitle({color}) {
    return (
        <div style={{marginTop: '50px', marginBottom: '10px', fontWeight: 'bold'}}>
            <Typography
                variant="h4"
                align="centered"
                color={color}
            >
                Tournament Tracker
                <SportsTennisIcon
                    color="primary"
                    fontSize="Large"
                />
            </Typography>
        </div>
    );
}

