import React from 'react';
import styled from 'styled-components'

import LoggedInSideNav from "../Nav/LoggedInSideNav.js";
import MobileNav from "../Nav/MobileNav.js";

const All = styled.div`
background-color: #303848;
border: 3px solid white;
font-family: Roboto;
margin: 30px;
padding: 10px;
`

const Title = styled.h1`
display: flex;
flex-wrap: wrap;
flex-direction: row;
// justify-content: space-evenly;
font-size: 35px;
font-weight: bold;
padding-bottom: 20px;
padding-top: 20px;
letter-spacing: 2px;
border-bottom: 2px solid white;

@media (min-width: 1920px) {
    font-size: 25px;
  }

  @media (max-width: 800px) {
    font-size: 25px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`

const SubTitle = styled.h3`
display: flex;
font-size: 25px;
padding-top: 20px;
padding-bottom: 5px;
font-weight: bold;
letter-spacing: 1px;
border-bottom: 2px solid white;

@media (min-width: 1920px) {
    font-size: 20px;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`

const H4 = styled.h4`
display: flex;
font-size: 20px;
padding-top: 20px;
padding-bottom: 5px;
font-weight: bold;
letter-spacing: 1px;

@media (min-width: 1920px) {
    font-size: 20px;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`

const P = styled.p`
font-size: 15px;
color: white;
padding-bottom: 10px;
padding-top: 10px;

@media (min-width: 1920px) {
    font-size: 15px;
  }

  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }

`

const A = styled.a`
font-size: 15px;
color: #9EE493;
font-weight: bold;

&:hover { 
    color: #E34A6F;
  }

@media (min-width: 1920px) {
    font-size: 15px;
  }

  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`



const Privacy = (props) => {
  return (



    <All>
<LoggedInSideNav />
<MobileNav />


<Title>Sleepsta Privacy Policy</Title>
<P>This policy applies to all information collected or submitted on Sleepsta’s website and our apps for iPhone and any other devices and platforms.</P>
<SubTitle>Information we collect</SubTitle>
<P>We store your name and email as a part of your account. We also store information about your sleep: times you went to sleep and woke up, motion throughout the night, and any notes you make. We sync this information between the website and your devices.</P>
<H4>Technical basics</H4>
<P>We use cookies on the site and similar tokens in the app to keep you logged in. Our server software may also store basic technical information, such as your IP address, in temporary memory or logs.</P>
<H4>Netlify</H4>
<P>Our website is hosted on Netlify and your data is displayed there when you are logged in. You can find <A href="https://www.netlify.com/privacy/">Netlify’s privacy policy here</A>.</P>
<H4>Heroku</H4>
<P>All our data is stored on Heroku. You can find <A href="https://www.salesforce.com/company/privacy/#">Heroku’s privacy statement here</A>.</P>
<SubTitle>Information usage</SubTitle>
<P>We use the information we collect to operate and improve our website, apps, and customer support.</P>
<P>We do not share personal information with outside parties except to the extent necessary to accomplish Sleepsta’s functionality.</P>
<P>We may disclose your information in response to subpoenas, court orders, or other legal requirements; to exercise our legal rights or defend against legal claims; to investigate, prevent, or take action regarding illegal activities, suspected fraud or abuse, violations of our policies; or to protect our rights and property.</P>
<P>In the future, we may sell to, buy, merge with, or partner with other businesses. In such transactions, user information may be among the transferred assets.</P>
<SubTitle>Security</SubTitle>
<P>We implement a variety of security measures to help keep your information secure. For instance, all communication with the app and website requires HTTPS with certificate pinning. We do not store any passwords directly but utilize <A href="https://oauth.net/2/">OAuth</A> with Google to sign you in.</P>
<SubTitle>Accessing, changing, or deleting your information</SubTitle>
<P>You may access or change your information or delete your account from the Sleepsta website.</P>
<SubTitle>California Online Privacy Protection Act Compliance</SubTitle>
<P>We comply with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent.</P>
<SubTitle>Children’s Online Privacy Protection Act Compliance</SubTitle>
<P>We never collect or maintain information at our website from those we actually know are under 13, and no part of our website is structured to attract anyone under 13.</P>
<SubTitle>Information for European Union Customers</SubTitle>
<P>By using Sleepsta and providing your information, you authorize us to collect, use, and store your information outside of the European Union.</P>
<SubTitle>International Transfers of Information</SubTitle>
<P>Information may be processed, stored, and used outside of the country in which you are located. Data privacy laws vary across jurisdictions, and different laws may be applicable to your data depending on where it is processed, stored, or used.</P>
<SubTitle>Your Consent</SubTitle>
<P>By using our site or apps, you consent to our privacy policy.</P>

<SubTitle>Contacting Us</SubTitle>
<P>If you have questions regarding this privacy policy, you may email <A href="mailto:privacy@sleepsta.app">privacy@sleepsta.app</A>  
<br/>
Please note that account deletion should be done within the Sleepsta website, not via email requests, for security reasons.</P>

    
    </All>
  );
};

export default Privacy;