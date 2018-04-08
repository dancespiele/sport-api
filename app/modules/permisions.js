const checkPermission = (name, req, res, next) => {
    if (req.logedUser.permissions.includes(name)) return next();

    res.status(401).send({
        error: 'not allowed'
    });

}

module.exports = checkPermission;