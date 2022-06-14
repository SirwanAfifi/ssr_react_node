import React from 'react'

export const App = () => {
    return <>
        <h1>
            App Sirwan 3
            {new Date().getTime()}

        </h1>
        <span>{JSON.stringify({ name: "Sirwan", lastName: "Afifi" }, null, 2)}</span></>
}