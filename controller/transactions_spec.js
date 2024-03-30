const transactions_specUseCase = require("../usecase/transactions_spec");

exports.getTransactions_specs = async (req, res, next) => {
  try {
    const data = await transactions_specUseCase.getTransactions_specs();

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getTransactions_spec = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await transactions_specUseCase.getTransactions_spec(id);
    if (!data) {
      return next({
        message: `Transactions spec with id ${id} is not found!`,
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

exports.createTransactions_spec = async (req, res, next) => {
  try {
    const { cars_id, spec_id } = req.body;

    if (!cars_id || cars_id == "") {
      return next({
        message: "Car ID must be provided!",
        statusCode: 400,
      });
    }
    if (!spec_id || spec_id == "") {
      return next({
        message: "Specification ID must be provided!",
        statusCode: 400,
      });
    }
    const data = await transactions_specUseCase.createTransactions_spec({
      cars_id,
      spec_id,
    });

    res.status(201).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateTransactions_spec = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { cars_id, spec_id } = req.body;

    if (!cars_id || cars_id == "") {
      return next({
        message: "Cars ID must be provided!",
        statusCode: 400,
      });
    }

    if (!spec_id || spec_id == "") {
      return next({
        message: "Specification ID must be provided!",
        statusCode: 400,
      });
    }

    const data = await transactions_specUseCase.updateTransactions_spec(id, {
      cars_id,
      spec_id,
    });

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteTransactions_spec = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await transactions_specUseCase.deleteTransactions_spec(id);

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
