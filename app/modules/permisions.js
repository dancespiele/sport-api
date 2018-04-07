export const checkPermission = (name, req, res, next) => {
    if (req.logedUser.permission.includes(name)) return next();

    res.status(401).send({
        error: 'not allowed'
    });

}