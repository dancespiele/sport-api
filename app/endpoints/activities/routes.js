const activitiesModel = require("./model");
const checkPermision = require("../../modules/permisions");

module.exports = function(app) {
    app.get("/activities", async (req, res) => {
        const query = req.query;
        try {
            const response = await activitiesModel
                .find(query);

            res.send(response);
        } catch (error) {
            return res.status(500).send(error);
        } 
    });

    app.get("/activities/:activityId", async (req, res) => {
        const activityId = req.params.activityId;

        try {
            const response = await activitiesModel
                .findOne({_id: activityId});

            res.send(response);
        } catch (error) {
            return res.status(500).send(error);
        } 
    });


    app.post("/activities", async (req, res) => {
        const activity = req.body;
        activity.user_id = req.logedUser.id;
        try {
            const response = await activitiesModel.create(activity);

            res.send(response);
        } catch(error) {
            res.status(500).send(error);
        }
    });

    app.put("/activities/:activityId", async (req, res) => {
        const activityId = req.params.activityId;
        const activity = req.body;
        try {
            const response = await activitiesModel
                .where({_id: activityId})
                .update(activity);

            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.use("/activities/:activityId", (req, res, next) => {
        if(req.method === "DELETE") {
            return checkPermision("admin", req, res, next);
        }

        return next();
    });

    app.delete("/activities/:activityId", async (req, res) => {
        const activityId = req.params.activityId;

        try {
            const response = await activitiesModel
                .find({_id: activityId})
                .remove();
            res.send(activityId);
        } catch(error) {
            res.status(500).send(error);
        }
    });
}