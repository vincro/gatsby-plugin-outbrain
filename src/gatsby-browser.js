exports.onRouteUpdate = function () {
    // Don't track while developing.
    if (process.env.NODE_ENV === `production` && typeof obApi === `function`) {
        obApi('track', 'PAGE_VIEW');
    }
};
