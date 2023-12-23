import React from 'react'
import "../styles.css"
import logo from "@images/logo.png"
import logo2 from "@images/logo.svg"
export const Content = (): JSX.Element => {
    console.log(process.env.API_KEY);
    console.log(process.env.DEBUG);
    return (
        <div>
            <h1>React TypeScript Webpack project</h1>
            <img src={logo} alt={"avfd"} style={{width: "50px"}}/>
            <img src={logo2} alt={"avfod"} style={{width: "50px"}}/>
            <br/>
            {process.env.NODE_ENV}
            <br/>
            {process.env.NODE_ENV == 'development' && 'We are in dev environment'}
            {process.env.NODE_ENV == 'production' && 'We are in prod environment'}
            <br/>
            {process.env.BASE_URL}
            <img src="/logo3.png" alt={"avfod"} style={{width: "50px"}}/>
        </div>
    )
}
