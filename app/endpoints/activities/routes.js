const activitiesModel = require("./model");
const checkPermision = require("../../modules/permisions");

module.exports = function(app) {
    app.get("/activities", async (req, res) => {
        const userId = req.params.user_id;

        try {
            const response = await activitiesModel
                .find({user_id: userId});

            res.send(response);
        } catch (error) {
            return res.status(500).send(error);
        } 
    });

    app.get("/activities/:activity_id", async (req, res) => {
        const activityId = req.params.activity_id;

        try {
            const response = await activitiesModel
                .find({_id: activityId});

            res.send(response);
        } catch (error) {
            return res.status(500).send(error);
        } 
    });


    app.post("/activities", async (req, res) => {
        const activity = req.body;
        activity.user_id = req.logedUser._id;
        try {
            const response = await activitiesModel.create(activity);

            res.send(response);
        } catch(error) {
            res.status(500).send(error);
        }
    });

    app.put("/activities/:activity_id", async (req, res) => {
        const activityId = req.params.activity_id;
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

    app.use("/activities/:activity_id", (req, res, next) => {
        if(req.method === "DELETE") {
            return checkPermision("admin", req, res, next);
        }
    });

    app.delete("/activities/:activity_id", async (req, res) => {
        const activityId = req.params.activity_id;

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