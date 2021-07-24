import axios from "axios";

export default function apiCaller(url: string) {
    return axios
        .get(url)
        .then((res) => res.data)
        .catch((error) => {
            if (process.env.NODE_ENV === "development") {
                console.error(error);
            }
        });
}

export async function bikingSearchData() {
    const fetchUrl = ``;
    const items = await apiCaller(fetchUrl);
    return {fetchUrl, value: items};
}

export async function bikingFetchData() {
    const fetchUrl = ``;
    const items = await apiCaller(fetchUrl);
    return {fetchUrl, value: items};
}