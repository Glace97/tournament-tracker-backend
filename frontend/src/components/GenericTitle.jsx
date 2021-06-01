//Components
import { Typography } from '@material-ui/core';

//icons
import SportsTennisIcon from '@material-ui/icons/SportsTennis';


//to do: 1. fixa ikonen

export default function GenericTitle({title}) {
    return (
        <div style={{marginTop: '50px', marginBottom: '10px', fontWeight: 'bold'}}>
            <Typography
                variant="h4"
                align="centered"
                style={{color: '#ffffff'}}
            >
                {title}
                <SportsTennisIcon
                    color="primary"
                    fontSize="Large"
                />
            </Typography>
        </div>
    );
}

