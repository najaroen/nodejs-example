exports.authUser = (req, res, next) => {
    console.log('In authUser a middleware ')
    next()
};
exports.authRole = (req, res, next) => {
    console.log('In authRole a middleware ')
    next()
};
