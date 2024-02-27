export async function getfilmes() {
    const url = 'http://10.107.134.40:8080/v2/acmefilmes/filmes'
    const response = fetch(url)
    const data = await response.json()
    console.table(data.filmes)
}

export async function getfilme(id) {
    const url = 'http://10.107.134.40:8080/v2/acmefilmes/filmes/filme/${id)'
    const response = await fetch(url)
    const data = await response.json()
    return data.filme[0]

}