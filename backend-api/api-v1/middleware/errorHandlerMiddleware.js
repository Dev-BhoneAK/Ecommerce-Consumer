exports.errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err.message || 'Internal Server Error' });
};

exports.notFound = (req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
};
