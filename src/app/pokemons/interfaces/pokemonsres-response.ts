
export interface PokemonResponse
{
    count: number
    next: string | null
    previus: string | null
    results: Result[]
}
 
interface Result{
    name: string
    url: string
}