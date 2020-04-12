import { IRange } from "../@types";

export function fillRange<T = number>(range: IRange<T>): T[] {
    // to avoid this casting, need a ts operator like AliasOf or NumberLike in the definition of IRange
    const rng = range as unknown as IRange<number> 

    const result = []

    for (let i = rng.min; i <= rng.max; i += (rng.step || 1)) {
        result.push(i)
    }

    // again casting, see above.
    return result as unknown as T[]
}

export function scaleToSum(arr: number[], sum: number): number[] {
    const originalSum = arr.reduce((sum, n) => sum + n, 0)
    return arr.map(n => n / originalSum * sum)
} 