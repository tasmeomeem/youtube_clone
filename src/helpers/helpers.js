const helpers = {
    toTitleCase: function (str) {
        return str
            .replace('-', '_')
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    },
}

export default helpers;
