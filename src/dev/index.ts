export function consoleDeleteMe(...args: any[]) {
    console.log(...args)
}

export function showJSON(json: object) {
    console.log(JSON.stringify(json, null, 4))
}

// show json delete me
export const sjdm = showJSON