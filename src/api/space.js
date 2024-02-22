import { fetchContentful } from "./API_Contentful";

export function getStories(queryParams) {
    const searchParams = new URLSearchParams({ content_type: "story" });

    if(queryParams) {
        Object.entries(queryParams).forEach(([ key, val ]) => {
            searchParams.append(key, val);
        })
    }

    return fetchContentful("environments/master/entries", {
        searchParams
    })
        .then((res) => res.items);
}