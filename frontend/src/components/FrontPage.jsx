import { green } from '@material-ui/core/colors';
import React from 'react';
import Background from '../assets/frontpage_img.jpg';

//specific css style
import '../styles/frontpage.css';


export default function FrontPage() {
     const background = `url${Background}`;
    
     return (
    <div class="background">
        Hello
    </div>
    );
}