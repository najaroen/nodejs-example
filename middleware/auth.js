exports.authUser = (req, res, next) => {
    console.log('In a middleware ')
    next()
};
