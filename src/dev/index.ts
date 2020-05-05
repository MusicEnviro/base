import React, { useEffect } from 'react'

export function consoleDeleteMe(...args: any[]) {
    console.log(...args)
}

export function showJSON(json: object) {
    console.log(JSON.stringify(json, null, 4))
}

// show json delete me
export const sjdm = showJSON


// -----------------------------------------------------------------------------
// react component watching
// -----------------------------------------------------------------------------

let enabled: boolean = false
export function enableUseWatch() {
    enabled = true
}

export function useWatch(props: any, name: string) {
    useEffect(() => {
        if (enabled) console.log(name, 'MOUNTING')
    }, [])

    useEffect(() => {
        if (enabled) console.log(name, 'UPDATING')
    }, [props])
}