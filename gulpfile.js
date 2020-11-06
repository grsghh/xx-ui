const gulp = require('gulp');
const replace = require('gulp-replace');
const path = require('path');
const fs = require('fs');
// 优化文档打包逻辑
gulp.task('doc', cb => {
  return gulp.src('./docs/component_origin/*.md')
    // 模版地址修改
    .pipe(replace(/:::demo====(\w+)-(.+)====(.*)/g, function (match, p1, p2, p3) {
      var str = `
<ClientOnly>
 <${p1}-${p2}></${p1}-${p2}>
</ClientOnly>`;
      str += '\n\n';
      if (p3.toString().trim()) {
        str += `::: tip\n${p3}\n:::\n\n`;
      }
      var fileName = `docs/.vuepress/components/${p1}/${p2}.vue`;
      // 接下来读取这个文件，得到里面的代码
      var fileStr = fs.readFileSync(path.resolve(fileName));
      // 接下来进行逐行匹配
      str += "::: details 点击查看代码\n```vue\n";
      var tplArr = [], cssArr = [], jsArr = [], canAddTpl = false, canAddCss = false, canAddJs = false;
      fileStr.toString().replace(/(.+)/g, function (match) {
        // console.log(match);
        if (match.indexOf("</demo-block>") > -1) {
          canAddTpl = false;
        }

        if (canAddTpl && match.trim()) {
          // 这边最好再进行两次缩进，即 4 个空格
          tplArr.push(match.substring(4, match.length));
        }
        if (canAddCss && match.trim()) {
          cssArr.push(match);
        }

        // 判断是否要忽略一些 js
        if (match.indexOf("script--ignore--start") > -1) {
          canAddJs = false;
        }

        if (canAddJs && match.trim()) {
          jsArr.push(match);
        }
        // 判断是否要导入 script 的文档
        if (match.indexOf("<script doc>") > -1) {
          canAddJs = true;
          jsArr.push("<script>");
        }

        if (match.indexOf("script--ignore--end") > -1) {
          canAddJs = true;
        }

        if (match.indexOf("<demo-block") > -1) {
          canAddTpl = true;
        }

        if (match.indexOf('<style scoped') > -1) {
          canAddCss = true;
          cssArr.push("<style>");
        }

        if (match.indexOf("</style>") > -1) {
          canAddCss = false;
        }

        if (match.indexOf("</script>") > -1) {
          canAddJs = false;
        }
      });
      // 最后拼起来
      str += tplArr.join("\n");
      if (jsArr.length) {
        str += "\n\n" + jsArr.join("\n");
      }
      if (cssArr.length) {
        str += "\n\n" + cssArr.join("\n");
      }
      str += "\n```\n:::";
      return str;
    }))
    .pipe(gulp.dest('./docs/component'));
});
