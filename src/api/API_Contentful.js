export function fetchContentful(endpoint, { searchParams, requestInit } = {}) {
    const urlParams = new URLSearchParams(searchParams);
    
    urlParams.append('access_token', import.meta.env.CONTENTFUL_ACCESS_TOKEN);
    
    const fullEndpoint = `/spaces/${import.meta.env.CONTENTFUL_SPACE_ID}/${endpoint}?${urlParams.toString()}`;
    const fullUrl = new URL(fullEndpoint, `${import.meta.env.CONTENTFUL_API_URL}`);
    
    return fetch(fullUrl, {
        method: "GET",
        ...requestInit
    })
        .then((e) => e.json());
}