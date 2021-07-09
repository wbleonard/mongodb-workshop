exports = function(payload) {

    var queryArg = payload.query.name || '';
    return context.functions.execute("getRestaurantsByName", queryArg);

};
