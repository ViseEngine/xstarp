/**
 * Created by van on 2016/2/20.
 */


var gulp = require('gulp'),

    minifyCSS = require('gulp-minify-css'),
    spriter = require('gulp-css-spriter');

gulp.task('spriter', function () {

    var timestamp = +new Date();
    //��Ҫ�Զ��ϲ�ѩ��ͼ����ʽ�ļ�
    return gulp.src('./src/css/spriter.css')
        .pipe(spriter({
            // ���ɵ�spriter��λ��
            'spriteSheet': './img/sprite.png',
            // ������ʽ�ļ�ͼƬ���õ�ַ��·��
            // ���½�������backgound:url(../images/sprite20324232.png)
            'pathToSpriteSheetFromCSS': '../img/sprite.png'
        }))
        //.pipe(minifyCSS())
        //����·��
        .pipe(gulp.dest('./css'));
});

