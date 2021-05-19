//Components
import { Typography } from '@material-ui/core';

//icons
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';


export default function GenericTitle() {
    return (
        <>
            <Typography
                variant="h4"
                align="centered"
            >
                Tournament Tracker
        <SportsBaseballIcon
                    color="primary"
                    fontSize="Large"
                />
            </Typography>
        </>
    );
}

