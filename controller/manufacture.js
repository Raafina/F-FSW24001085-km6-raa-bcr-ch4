const manufactureUseCase = require("../usecase/manufacture");

exports.getManufactures = async (req, res, next) => {
  try {
    const data = await manufactureUseCase.getManufactures();

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getManufacture = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await manufactureUseCase.getManufacture(id);
    if (!data) {
      return next({
        message: `Manufacture with id ${id} is not found!`,
        statusCode: 404,
      });
    }

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createManufacture = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name || name == "") {
      return next({
        message: "Name must be provided!",
        statusCode: 400,
      });
    }
    const data = await manufactureUseCase.createManufacture({
      name,
    });

    res.status(201).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateManufacture = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name || name == "") {
      return next({
        message: "Name must be provided!",
        statusCode: 400,
      });
    }

    const data = await manufactureUseCase.updateManufacture(id, { name });

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteManufacture = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await manufactureUseCase.deleteManufacture(id);

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
