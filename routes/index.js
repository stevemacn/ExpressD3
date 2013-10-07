
/*
 * GET home page.
 */

exports.graph = function (req, res) {
    
    res.render('graph', {title: 'Student Data Explorer'})
}

exports.d3 = function (req, res) {
    res.render('vis', { title: 'Visualization'});
};

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
