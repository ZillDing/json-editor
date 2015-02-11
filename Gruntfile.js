module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      src: ['test']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'test/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      gruntfile: {
        options: {},
        src: 'Gruntfile.js'
      },
      src: {
        options: {},
        src: ['src/<%= pkg.name %>.js']
      }
    },
    less: {
      development: {
        options: {
          compress: true
        },
        files: {
          'test/<%= pkg.name %>.css': 'src/<%= pkg.name %>.less'
        }
      }
    },
    copy: {
      main: {
        src: 'src/index.html',
        dest: 'test/index.html'
      }
    },
    watch: {
      css: {
        files: 'src/*.less',
        tasks: ['less']
      },
      js: {
        files: 'src/*.js',
        tasks: ['jshint', 'uglify']
      },
      html: {
        files: 'src/*.html',
        tasks: ['copy']
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'less', 'jshint', 'uglify', 'copy']);

};