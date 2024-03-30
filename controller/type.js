const typeUseCase = require("../usecase/type");

exports.getTypes = async (req, res, next) => {
  try {
    const data = await typeUseCase.getTypes();

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await typeUseCase.getType(id);
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

exports.createType = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name || name == "") {
      return next({
        message: "Name must be provided!",
        statusCode: 400,
      });
    }
    const data = await typeUseCase.createType({
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

exports.updateType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name || name == "") {
      return next({
        message: "Name must be provided!",
        statusCode: 400,
      });
    }

    const data = await typeUseCase.updateType(id, { name });

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await typeUseCase.deleteType(id);

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
