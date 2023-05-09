import { LightningElement } from 'lwc';
import myResource from '@salesforce/resourceUrl/Buildex_images';

export default class LandingPage_footer extends LightningElement {

    mailIcon = myResource + '/mail.svg'
    submitArrow = myResource + '/arrow.svg'
    facebookIcon = myResource + '/facebook.svg'
    instagramIcon = myResource + '/instagram.svg'
    youtubeIcon = myResource + '/youtube.svg'


    connectedCallback(){
     
    }
}