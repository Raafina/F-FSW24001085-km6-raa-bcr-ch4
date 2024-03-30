const transmissionUseCase = require("../usecase/transmission");

exports.getTransmissions = async (req, res, next) => {
  try {
    const data = await transmissionUseCase.getTransmissions();

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getTransmission = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await transmissionUseCase.getTransmission(id);
    if (!data) {
      return next({
        message: `Student with id ${id} is not found!`,
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

exports.createTransmission = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name || name == "") {
      return next({
        message: "Name must be provided!",
        statusCode: 400,
      });
    }
    const data = await transmissionUseCase.createTransmission({
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

exports.updateTransmission = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name || name == "") {
      return next({
        message: "Name must be provided!",
        statusCode: 400,
      });
    }

    const data = await transmissionUseCase.updateTransmission(id, { name });

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteTransmission = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await transmissionUseCase.deleteTransmission(id);

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
