<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-14 20:18:53
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-14 21:44:44
-->
## 1.3 编码器  
视频
```
libx264：最流行的开源 H.264 编码器
NVENC：基于 NVIDIA GPU 的 H.264 编码器
libx265：开源的 HEVC 编码器
libvpx：谷歌的 VP8 和 VP9 编码器
libaom：AV1 编码器
```  

音频  
```
libfdk-aac  
aac
```  

查看已经安装编码器  
```
ffmpeg -encoders
```

## ffmpeg使用格式  
ffmpeg命令参数非常多，可以分为5个部分  
```
ffmpeg {1} {2} -i {3} {4} {5}  

1: 全局参数
2: 输入文件参数
3: 输入文件
4: 输出文件参数
5： 输出文件
```  

例子：  
```
$ ffmpeg \
-y \ # 全局参数
-c:a libfdk_aac -c:v libx264 \ # 输入文件参数
-i input.mp4 \ # 输入文件重点
-c:v libvpx-vp9 -c:a libvorbis \ # 输出文件参数
output.webm # 输出文件
```
上面的命令将 mp4 文件转成 webm 文件，这两个都是容器格式。输入的 mp4 文件的音频编码格式是 aac，视频编码格式是 H.264；输出的 webm 文件的视频编码格式是 VP9，音频格式是 Vorbis。

如果不指明编码格式，FFmpeg 会自己判断输入文件的编码。因此，上面的命令可以简单写成下面的样子。

```
$ ffmpeg -i input.avi output.mp4
```
## 常用命令行参数  
ffmpeg常用命令行参数  
```
-c：指定编码器
-c copy：直接复制，不经过重新编码（这样比较快）
-c:v：指定视频编码器
-c:a：指定音频编码器
-i：指定输入文件
-an：去除音频流
-vn： 去除视频流
-preset：指定输出的视频质量，会影响文件的生成速度，有以下几个可用的值 ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow。
-y：不经过确认，输出时直接覆盖同名文件。
```  
```
例子1：将目录中的learnff.mov转为learn.mp4  
ffmpeg -i learnff.mov learn.mp4

例子2：将目录中的learnff.mov转为learn.mp4,不带声音
ffmpeg -i learnff.mov -an learn.mp4


例子3：将目录中的learnff.mov转为learn.mp4,不带视频
ffmpeg -i learnff.mov -c:a:mp3 -vn learn.mp4


例子4：将目录中的learnff.mov转为learn.mp4,不带声音，并且指定编码格式为mp3
ffmpeg -i learnff.mov -vn -c:a libmp3lame ./demo/learn.mp4 
```  

## 常用  

### 查看文件信息  
```
$ ffmpeg -i input.mp4 -hide_banner 

Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'learnff.mov':
  Metadata:
    major_brand     : qt  
    minor_version   : 0
    compatible_brands: qt  
    creation_time   : 2021-01-14T12:38:33.000000Z
    com.apple.quicktime.make: Apple
    com.apple.quicktime.model: MacBookPro14,1
    com.apple.quicktime.software: Mac OS X 10.14.6 (18G95)
    com.apple.quicktime.creationdate: 2021-01-14T20:37:45+0800
    <!-- 时长 -->
  Duration: 00:00:08.41, start: 0.000000, bitrate: 11389 kb/s
    <!-- 视频 -->
    Stream #0:0(und): Video: h264 (Main) (avc1 / 0x31637661), yuv420p(tv, bt709), 1280x720 [SAR 1:1 DAR 16:9], 11073 kb/s, 30.09 fps, 30.09 tbr, 30k tbn, 60k tbc (default)
    Metadata:
      creation_time   : 2021-01-14T12:38:33.000000Z
      handler_name    : Core Media Data Handler
      encoder         : H.264
      <!-- 音频 -->
    Stream #0:1(und): Audio: aac (LC) (mp4a / 0x6134706D), 44100 Hz, stereo, fltp, 312 kb/s (default)
    Metadata:
      creation_time   : 2021-01-14T12:38:33.000000Z
      handler_name    : Core Media Data Handler
```  

### 转换编码格式  
```
将视频转成xh265编码  
$ ffmpeg -i [input.file] -c:v libx265 output.mp4 

```

### 转换容器  
```
将mov转成mp4
ffmpeg xuxiuquan$ ffmpeg -i learnff.mov -c copy ./demo/learn.mp4 
```  

### 调整码率  
```
将mov变小,最大码率3856K，最小帧率964K，最大buffer2000K
ffmpeg -i learnff.mov -minrate 100K -maxrate 200K -bufsize 2000K ./demo/learn.mp4 
```  

## 提取音频  
```
有时，需要从视频里面提取音频（demuxing），可以像下面这样写。
ffmpeg \
-i input.mp4 \
-vn -c:a copy \
output.aac

上面例子中，-vn表示去掉视频，-c:a copy表示不改变音频编码，直接拷贝。
```

## 添加音轨  

```
添加音轨（muxing）指的是，将外部音频加入视频，比如添加背景音乐或旁白。

ffmpeg \
-i input.aac -i input.mp4 \
output.mp4
```  

## 截图  

```
下面的例子是从指定时间开始，连续对1秒钟的视频进行截图。
ffmpeg \
-y \
-i input.mp4 \
-ss 00:01:24 -t 00:00:01 \
output_%3d.jpg  

如果只需要截一张图，可以指定只截取一帧。
ffmpeg \
-ss 01:23:45 \
-i input \
-vframes 1 -q:v 2 \
output.jpg
上面例子中，-vframes 1指定只截取一帧，-q:v 2表示输出的图片质量，一般是1到5之间（1 为质量最高）。

```  

## 剪裁  
裁剪（cutting）指的是，截取原始视频里面的一个片段，输出为一个新视频。可以指定开始时间（start）和持续时间（duration），也可以指定结束时间（end）。
```
ffmpeg -ss 00:01:50 -i [input] -t 10.5 -c copy [output]
ffmpeg -ss 2.5 -i [input] -to 10 -c copy [output]
```