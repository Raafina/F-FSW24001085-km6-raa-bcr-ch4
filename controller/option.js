const optionUseCase = require("../usecase/option");

exports.getOptions = async (req, res, next) => {
  try {
    const data = await optionUseCase.getOptions();

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getOption = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await optionUseCase.getOption(id);
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

exports.createOption = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name || name == "") {
      return next({
        message: "Name must be provided!",
        statusCode: 400,
      });
    }
    const data = await optionUseCase.createOption({
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

exports.updateOption = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name || name == "") {
      return next({
        message: "Name must be provided!",
        statusCode: 400,
      });
    }

    const data = await optionUseCase.updateOption(id, { name });

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteOption = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await optionUseCase.deleteOption(id);

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
