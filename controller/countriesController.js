const { models } = require("../model/index")

function countriesController() {
    this.fetchCoutryDetails = async (callback) => {
        await models.Country.find().select('name code').then((response) => {
            if (response) {
                const apiResponse = { status: true, message: "country names", data: response }
                return callback(null, apiResponse)
            } else {
                const apiResponse = { status: false, message: "country names not found", data: null }
                return callback(null, apiResponse)
            }

        }).catch((error) => {
            const apiResponse = { status: false, message: "something went to wrong", data: error }
            callback(error, apiResponse)
        })
    }


    this.fetchStateDetails = async (name, callback) => {
        await models.Country.findOne({ name: name }).select('states.name').then((response) => {
            if (response) {
                const apiResponse = { status: true, message: "state names", data: response }
                return callback(null, apiResponse)
            } else {
                const apiResponse = { status: false, message: "state not found", data: null }
                return callback(null, apiResponse)
            }

        }).catch((error) => {
            const apiResponse = { status: false, message: "something went to wrong", data: error }
            callback(error, apiResponse)
        })
    }


    this.fetchDistrictDetails = async (arguments, callback) => {

        await models.Country.find({ name: arguments.countryname }).select('states').then((response) => {
            if (response) {
                const state = response[0].states.find(state => state.name == arguments.statename);
                if (!state) {
                    return callback(null, { status: false, message: 'State not found' });
                }
                const apiResponse = { status: true, message: "district names", data: state.districts }
                return callback(null, apiResponse)
            } else {
                const apiResponse = { status: false, message: "country name not found", data: null }
                return callback(null, apiResponse)
            }
        }).catch((error) => {
            const apiResponse = { status: false, message: "something went to wrong", data: error }
            callback(error, apiResponse)
        })
    }




}

module.exports = { countriesController }