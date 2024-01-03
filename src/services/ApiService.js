import config from "../config";

const ApiService = {
    url: function (path, params = {}) {
        params.api_key = config.api_key;

        // api_key=value&page=2&language=en
        // params = {api_key: config.api_key, page: 2, language: 'en'};

        return `${config.api_base_url}/${path}?${new URLSearchParams(params)}`;
    },

    get: function (path, params = {}) {
        return fetch(
            this.url(path, params)
        ).then((res) => res.json());
    }
};

export default ApiService;
