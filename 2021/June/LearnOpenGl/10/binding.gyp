{
  "targets": [
    {
      "target_name": "render",
      "cflags!" : [
        "-fno-exceptions"
      ],
      "cflags_cc!": [
        "-fno-rtti",
        "-fno-exceptions"
      ],
      "sources": [ "render.cpp" ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")",
        "../include/",
        "/usr/local/include/",
        "/usr/include/"
      ],
      "library_dirs": [
        "/Users/xuxiuquan/mygithub/read-boos/2021/June/LearnOpenGl/lib/",
        "/usr/local/Cellar/glew/2.1.0_1/lib/",
        "/usr/lib/"
      ],
      "libraries": [
        "-lfreetype -lbz2 -lglfw  -lglad  -lz -lpng"
      ],
      "conditions": [
        [
          "OS==\"mac\"", {
            "xcode_settings": {
              "OTHER_CFLAGS": [
                "-mmacosx-version-min=10.7",
                "-std=c++11",
                "-stdlib=libc++"
              ],
              "GCC_ENABLE_CPP_RTTI": "YES",
              "GCC_ENABLE_CPP_EXCEPTIONS": "YES"
            }
          }
        ]
      ],
      'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ],
    }
  ]
}