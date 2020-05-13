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


export function useWatchPropChanges<T>(props: T) {
    const prevProps = React.useRef<T>()
	if (prevProps.current) {console.log(Object.keys(props).map(key => 
		(prevProps.current as any)[key] === (props as any)[key] ? null : key))
		}
	prevProps.current = props
}