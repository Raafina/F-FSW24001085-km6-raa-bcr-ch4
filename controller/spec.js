const specUseCase = require("../usecase/spec");

exports.getSpecs = async (req, res, next) => {
  try {
    const data = await specUseCase.getSpecs();

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSpec = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await specUseCase.getSpec(id);
    if (!data) {
      return next({
        message: `Specification with id ${id} is not found!`,
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

exports.createSpec = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name || name == "") {
      return next({
        message: "Name must be provided!",
        statusCode: 400,
      });
    }
    const data = await specUseCase.createSpec({
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

exports.updateSpec = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name || name == "") {
      return next({
        message: "Name must be provided!",
        statusCode: 400,
      });
    }

    const data = await specUseCase.updateSpec(id, { name });

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSpec = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await specUseCase.deleteSpec(id);

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
