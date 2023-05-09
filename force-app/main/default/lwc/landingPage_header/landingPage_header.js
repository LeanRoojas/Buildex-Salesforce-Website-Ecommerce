import { LightningElement } from 'lwc';
import myResource from '@salesforce/resourceUrl/Buildex_images';

export default class LandingPage_header extends LightningElement {
    image = myResource + '/header_background.png'
    mailIcon = myResource + '/mail.svg'
    buildexLogo  = myResource + '/buildex_loco.svg'
    connectedCallback(){
     
    }
}