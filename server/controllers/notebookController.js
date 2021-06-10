const logger = require('loglevel');

// List all notebooks
exports.notebook_list = function(req, res) {
    res.send('NOT implemented: notebook_list');
    logger.debug('notebook_list', 'list of notebooks');
};

// Single notebook
exports.notebook_detail = function(req, res) {
    var book_id = req.params.id;
    res.send('NOT implemented: notebook_detail ' + book_id);
    logger.debug('notebook_detail', 'detail of notebooks, %s', {'id': book_id});
};