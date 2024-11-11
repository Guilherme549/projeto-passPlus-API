module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
      error: 'Ocorreu um erro no servidor!',
      message: err.message || 'Erro interno.',
    });
  };
  