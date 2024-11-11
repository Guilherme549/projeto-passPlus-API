export const handleError = (err, res) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
};
