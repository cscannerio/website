module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'theme/css/main.css': 'theme/sass/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        exec: {
            mkdocs: "mkdocs serve"
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            serve: {
                tasks: ["watch", "exec:mkdocs"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('default', ['concurrent:serve']);
};