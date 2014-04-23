module.exports = function(grunt) {

  grunt.initConfig({
    stylus: {
      slides: {
        src: 'assets/slides.styl',
        dest: 'build/slides.css',
      }
    },
    watch: {
      styles: {
        files: '<%= stylus.slides.src %>',
        tasks: ['stylus'],
      },
      livereload: {
        options: {
          livereload: true,
        },
        files: [
          '<%= stylus.slides.dest %>',
          '*.html',
        ],
        tasks: [],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['stylus', 'watch']);
};
