import { ref } from 'vue';

export function useFetch(url: string) {
    const data = ref(null);
    const error = ref(null);

    const fetchData = () => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    data.value = json;
                    resolve({ data: data.value, error: null });
                })
                .catch(err => {
                    error.value = err;
                    reject({ data: null, error: error.value });
                });
        });
    };

    return fetchData();
}
