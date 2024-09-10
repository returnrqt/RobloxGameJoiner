const href = window.location.href;
const url = new URL(href);
function searchParams() {
    let CombinedParameters = '';
    url.searchParams.forEach(function(value, key) {
        if (CombinedParameters !== '') {
            CombinedParameters = CombinedParameters + '&' + key + '=' + value;
        } else {
            CombinedParameters = CombinedParameters + '?' + key + '=' + value;
        }
    });
    return CombinedParameters;
};
window.location.href = 'roblox://experiences/start'+searchParams();