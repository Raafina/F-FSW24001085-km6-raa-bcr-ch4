const transactions_optionUseCase = require("../usecase/transactions_option");

exports.getTransactions_options = async (req, res, next) => {
  try {
    const data = await transactions_optionUseCase.getTransactions_options();

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getTransactions_option = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await transactions_optionUseCase.getTransactions_option(id);
    if (!data) {
      return next({
        message: `Transactions option with id ${id} is not found!`,
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

exports.createTransactions_option = async (req, res, next) => {
  try {
    const { cars_id, options_id } = req.body;

    if (!cars_id || cars_id == "") {
      return next({
        message: "Cars ID must be provided!",
        statusCode: 400,
      });
    }

    if (!options_id || options_id == "") {
      return next({
        message: "Option ID must be provided!",
        statusCode: 400,
      });
    }

    const data = await transactions_optionUseCase.createTransactions_option({
      cars_id,
      options_id,
    });

    res.status(201).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateTransactions_option = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { cars_id, options_id } = req.body;
    if (!cars_id || cars_id == "") {
      return next({
        message: "Car ID must be provided!",
        statusCode: 400,
      });
    }
    if (!options_id || options_id == "") {
      return next({
        message: "Option ID must be provided!",
        statusCode: 400,
      });
    }

    const data = await transactions_optionUseCase.updateTransactions_option(
      id,
      { cars_id, options_id }
    );

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteTransactions_option = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await transactions_optionUseCase.deleteTransactions_option(id);

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
