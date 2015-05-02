/*global module, require, process */
/*jslint nomen: true*/
module.exports = function (grunt) {
    'use strict';

    var localRootPath = '/',
        localDevPath = './src/',
        localMinPath = './min/',
        localTempPath = './temp/',
        localTestPath = './test/';

    // needed for 'watch' task to get correct path
    var seleniumUrl = grunt.option('baseUrl') || 'http://localhost:8081/wallet/min/';

    // Auto-load grunt plugin tasks
    require('load-grunt-tasks')(grunt);

    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        path: localDevPath,
        minPath: localMinPath,
        testPath: localTestPath,
        rootPath: localRootPath,
        tempPath: localTempPath,
        jshint: {
            options: {
                ignores: ['src/assets/**/*'],
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                freeze: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noempty: true,
                nonew: true,
                undef: true,
                unused: true,
                strict: true,
                browser: true,
                devel: true,
                plusplus: false,
                globals: {
                    'angular': true
                }
            },
            files: ['src/app/**/*.js']
        },
        karma: {
            dev: {
                configFile: '<%= testPath %>/karma.conf.js'
            },
            min: {
                configFile: '<%= testPath %>/karma.conf.min.js'
            }
        },
        protractor: {
            options: {
                keepAlive: false
            },
            dev: {
                options: {
                    configFile: '<%= testPath %>/protractor.conf.js',
                    args: {
                        baseUrl: seleniumUrl
                    }
                }
            }
        },
        clean: {
            all: ['min', 'temp'],
            temp: ['temp']
        },
        concat: {
            app: {
                src: [
                    '<%= path %>app/shared/environmentConfig.js',
                    '<%= path %>app/shared/config.js',
                    '<%= path %>app/shared/helpers.js',
                    '<%= path %>app/shared/services.js',
                    '<%= path %>app/shared/filters.js',
                    '<%= path %>assets/js/templates.js',
                    '<%= path %>app/components/content/controller.js',
                    '<%= path %>app/components/content/services.js',
                    '<%= path %>app/components/wallet/controller.js',
                    '<%= path %>app/components/wallet/directive.js',
                    '<%= path %>app/components/wallet/services.js',
                    '<%= path %>app/components/source/controller.js',
                    '<%= path %>app/components/source/directive.js',
                    '<%= path %>app/components/header/controller.js',
                    '<%= path %>app/components/header/directive.js',
                    '<%= path %>app/components/header/services.js',
                    '<%= path %>app/components/errors/controller.js',
                    '<%= path %>app/components/errors/directive.js',
                    '<%= path %>app/app.routes.js',
                    '<%= path %>app/app.module.js'
                ],
                dest: '<%= tempPath %>wallet.min.js'
            },
            vendor: {
                src: [
                    '<%= path %>assets/libs/angular.min.js',
                    '<%= path %>assets/libs/angular-animate.min.js',
                    '<%= path %>assets/libs/angular-route.min.js',
                    '<%= path %>assets/libs/angular-touch.min.js',
                    '<%= path %>assets/libs/angular-filter.min.js',
                    '<%= path %>assets/libs/angular-storage.min.js'

                ],
                dest: '<%= tempPath %>vendor.min.js'
            },
            css: {
                src: ['<%= path %>assets/css/*.css'],
                dest: '<%= tempPath %>assets/css/wallet.min.css'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'min/wallet.min.js': ['<%= tempPath %>wallet.min.js'],
                    'min/vendor.min.js': ['<%= tempPath %>vendor.min.js']
                }
            }
        },
        cssmin: {
            options: {
                roundingPrecision: -1
            },
            target: {
                files: {
                    'min/assets/css/wallet.min.css': ['<%= tempPath %>assets/css/wallet.min.css']
                }
            }
        },
        useminPrepare: {
            html: '<%= minPath %>index.html',
            temp: '<%= tempPath %>index.html'
        },
        usemin: {
            html: ['<%= minPath %>index.html'],
            temp: ['<%= tempPath %>index.html']
        },
        copy: {
            all: {
                expand: true,
                cwd: 'src/',
                src: ['assets/img/**.*', 'assets/fonts/**.*', 'index.html', 'app/pages/*.html'],
                dest: 'min/'
            },
            temp: {
                expand: true,
                cwd: 'src/',
                src: ['assets/img/**.*', 'assets/fonts/**.*', 'index.html', 'app/pages/*.html'],
                dest: 'temp/'
            }
        },
        rev: {
            files: {
                src: ['<%= minPath %>**/*.{js,css}']
            }
        },
        ngtemplates:  {
            common: {
                src:      'src/app/components/**/*.html',
                dest:     'src/assets/js/templates.js',
                options:    {
                    htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
                }
            }
        },
        ngconstant: {
            dist: {
                options: {
                    name: 'config',
                    dest: 'src/app/shared/environmentConfig.js',
                    constants: {
                        ENV_CONFIG: grunt.file.readJSON('src/assets/configs/prod.json')
                    },
                    values: {
                        debug: false
                    }
                },
                build: {

                }
            },
            dev: {
                options: {
                    name: 'config',
                    dest: 'src/app/shared/environmentConfig.js',
                    constants: {
                        ENV_CONFIG: grunt.file.readJSON('src/assets/configs/dev.json')
                    }
                },
                build: {

                }
            }
        }
    });

    grunt.registerTask('test', ['karma:dev']);
    grunt.registerTask('testmin', ['karma:min']);

    grunt.registerTask('build', ['prebuild', 'clean:all', 'concatonate', 'uglify', 'cssmin', 'copy:all', 'useminPrepare:html', 'rev', 'usemin:html', 'clean:temp', 'testmin']);
    grunt.registerTask('builddev', ['default', 'clean:all', 'concatonate', 'uglify', 'cssmin', 'copy:all', 'useminPrepare:html', 'rev', 'usemin:html', 'clean:temp', 'testmin']);

    grunt.registerTask('debug', ['default', 'clean:all', 'concatonate', 'uglify', 'cssmin', 'copy:temp', 'useminPrepare:temp', 'usemin:temp', 'copy:all', 'useminPrepare:html', 'rev', 'usemin:html']);

    grunt.registerTask('concatonate', ['concat:app', 'concat:vendor', 'concat:css']);

    grunt.registerTask('default', [ 'jshint', 'templates', 'devconfig', 'test']);
    grunt.registerTask('prebuild', [ 'jshint', 'templates', 'prodconfig', 'test']);

    grunt.registerTask('prodconfig', ['ngconstant:dist']);
    grunt.registerTask('devconfig', ['ngconstant:dev']);

    grunt.registerTask('templates', ['ngtemplates']);

    grunt.registerTask('e2etest', ['protractor']);


};