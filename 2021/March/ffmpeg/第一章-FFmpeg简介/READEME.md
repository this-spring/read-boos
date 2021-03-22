<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-03-22 20:15:06
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-03-22 23:41:42
-->
## 1.3 FFmpeg组成  

FFmpeg基本组成包含AFVormat、AVCodec、AVFilter、AVDevice和AVUtil等

### AFFormat  
实现mp4、flv、ts等文件格式解封装。RTMP、RTSP和HLS等网络协议的封装格式。

### AVCodec

实现了大多数常用的编解码格式，支持AAC、h264、h265编码和解码  

### AVFilter  
提供了音频、视频、字幕、滤镜等处理框架。

### swscale模块  

将图像数据从YUV420P转成YUYV或者YUV转RGB

### swresample 
重采样、允许操作音频采样、音频通道布局转换

## 1.4 ffmpeg 
ffmpeg(编译后可执行的二进制)主要工作流程具体如下：  
1. 解封装
2. 解码
3. 编码
4. 封装

### 1.5 ffplay(ffmpeg的播放器)

使用avformat和avcodec可以播放各种媒体文件或者流。如果想使用ffplay首先需要有SDL来进行ffplay支持。  

### 1.6 ffmpeg多媒体分析器ffprobe

ffprobe是一个强大的多媒体分析工具，它能获得你想要了解的媒体信息，比如音视频参数、媒体容器等参数信息。  

### 1.8 ffmpeg编解码和解封装  
查看编码支持：  
./configure --list-encoders  

查看解码支持：  
./configure --list-decoders  

查看封装支持：
./configure --list-muxers  

查看解封装支持：
./configure --list-demuxing  

通信协议支持:  
./configure --list-protocals  

```
rtmp
rtsp
file
hls
unix
udp
tcp
http
https
mms
.....
```