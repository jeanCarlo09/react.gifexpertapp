export const getGifs = async (category) => {

    const api_key = '0JijOLr1glVVdNYjLEjbBp26R16up6TN';
    // encodeURI elimina los espacios vacios (es de JS)
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${api_key}`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            url: img.images?.original.url,
            title: img.title
        }
    });

    return gifs;
}