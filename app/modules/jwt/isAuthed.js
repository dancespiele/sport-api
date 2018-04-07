const moment = require("moment");
const jwt = require("jwt-simple");
const config = require("./config");

const isAuthed = (req, res, next) => {
    if (!req.headers.authorization) {
		return res
		.status(403)
		.send({
			error: 'Invalid Token'
		});
    }

    const token = req.headers.authorization.split(' ')[1];
    let payload;

    try {
		payload = jwt.decode(token, config.secret);
	} catch (error) {
		return res
		.status(401)
		.send({
			error: 'Invalid Token'
		});
	}

	if (payload.exp <= moment().unix()) {
		return res
		.status(401)
		.send({
			error: 'Expired Token'
		});
	}

	req.logedUser = payload.user;

    next();
}

module.exports = isAuthed;