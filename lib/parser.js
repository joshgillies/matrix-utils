var jade = require('jade')
  , path = '../examples/menu.jade'
  , str = require('fs').readFileSync(path, 'utf8')
  , parser = (function (data) {
      var lines = data.split('\n')
        , count = 0
        , next = 0
        , indentRegex = /^\s+/gi
        , mixinRegex = /\+.*?$/gi
        , indent = function(line) {
            if (line) {
              if (line.match(indentRegex)) {
                return line.match(indentRegex)[0].length;
              } else {
                return 0;
              }
            }
          }
        , mixin = false
        , block = false
        , lineBreak = ''
        , output = '';

      for( ; count < lines.length; count++) {
        next = count + 1;
        mixin = (lines[count].search(mixinRegex) !== -1 ? true : false);
        block = (indent(lines[count]) < indent(lines[next]) ? true : false);
        lineBreak = (count < lines.length ? '\n' : '');

        if (mixin) {
          if (block) {
            output += lines[count].replace(mixinRegex, '+block' + lineBreak);
            continue;
          }
          output += lines[count].replace(mixinRegex, '//- remove me' + lineBreak);
          continue;
        }
        output += lines[count] + lineBreak;
        continue;
      }

      return output;
    })
  // , fn = jade.compile(parser(str), { filename: path, pretty: true });
  , fn = jade.compile(str, { filename: path, pretty: true });

console.log(fn());