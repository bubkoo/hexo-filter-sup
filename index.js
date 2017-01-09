var assign = require('object-assign');
var markup = '^';

hexo.config.sup = assign({ markup: markup }, hexo.config.sup);
markup = hexo.config.sup.markup || markup;

var reg = new RegExp(markup + '(.*?)' + markup, 'g');

function parse(data) {
  var source = data.source;
  var ext = source.substring(source.lastIndexOf('.')).toLowerCase();

  if (['.js', '.css', '.html', '.htm'].indexOf(ext) > -1) {
    return;
  }

  // 29^th^ => 29<sup>th</sup>
  data.content = data.content.replace(reg, function (raw, content) {
    return '<sup>' + content + '</sup>'
  });
}

hexo.extend.filter.register('before_post_render', parse, 9);
