const countryController = require("../controller/countriesController")
const countryControllers = new countryController.countriesController()

function countriesApi(router) {
    const getCountriesDetails = "/countries"
    const getStates = "/states"
    const getDistricts = "/districts"

    router.get(getCountriesDetails, async (req, res) => {

        await countryControllers.fetchCoutryDetails(function (error, response) {
            if (error) {
                return res.status(500).send(response);
            } else {
                return res.status(200).send(response);
            }
        })
    })


    router.get(getStates, async (req, res) => {
        if (req.query.countryname == null || req.query.countryname == undefined || req.query.countryname.length <= 0) {
            return res.status(500).send({ status: false, message: "countryname should not be empty", data: [] })
        }

        await countryControllers.fetchStateDetails(req.query.countryname, function (error, response) {
            if (error) {
                return res.status(500).send(response);
            } else {
                return res.status(200).send(response);
            }
        })
    })


    router.get(getDistricts, async (req, res) => {
        if (req.query.countryname == null || req.query.countryname == undefined || req.query.countryname.length <= 0) {
            return res.status(500).send({ status: false, message: "countryname should not be empty", data: [] })
        }

        if (req.query.statename == null || req.query.statename == undefined || req.query.statename.length <= 0) {
            return res.status(500).send({ status: false, message: "statename should not be empty", data: [] })
        }

        await countryControllers.fetchDistrictDetails(req.query, function (error, response) {
            if (error) {
                return res.status(500).send(response);
            } else {
                return res.status(200).send(response);
            }
        })
    })
}

module.exports = { countriesApi }