export function configF() {
    const apiKey = 'Guardian_API_KEY';
    const searchUrl = `https://content.guardianapis.com/search?q=weather&show-fields=thumbnail,trailText&api-key=${apiKey}`;
    return searchUrl;
}


