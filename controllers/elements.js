exports.getElements = async (req, res, next) => {
  {
    try {
      const Item = require("../models/Item");

      var items = await Item.find();

      var filteredArray = items.filter((item) => {
        return item.itemId && item.code == "025" && item.name.includes("test");
      });

      console.log("Here some filtered results :" + filteredArray);

      // Added a random service instead of a mock
      const soap = require("soap");
      const wsdlURL = "https://tckimlik.nvi.gov.tr/service/kpspublic.asmx?WSDL";

      const client = await soap.createClientAsync(wsdlURL);
      const response = await client.TCKimlikNoDogrulaAsync(filteredArray);

      // some imagining result
      // if(response.isSuccess === 1)
      //var result = response.data;
      res.status(200).send(result);
    } catch (error) {
      if (error.response.status) {
        res.status(error.response.status);
      }

      res.json("Error occured ");
    }
  }
};
