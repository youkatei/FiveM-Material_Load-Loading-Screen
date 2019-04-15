This is a Chinese localized fork of FiveM Loading Screen - Material_Load from Loqrin, original repo can be found here: 
https://github.com/Loqrin/FiveM-Material_Load-Loading-Screen

这是一个由Loqrin制作的FiveM Loading Screen - Material_Load的中文化Fork, 原repo在这里:
https://github.com/Loqrin/FiveM-Material_Load-Loading-Screen

---

# [LoqScript] FiveM载入界面 - Material_Load
Material_Load是一个由Loqrin(github.com/Loqrin)开发的FiveM的载入界面. 此载入界面有可自定义的JSON文件, 用户可以根据喜欢用此文件自定义. JSON文件可自定义项目包括：
+ 使用纯色背景, 颜色可用RGB设置
+ 使用图片背景, 图片可设置文件位置
+ 使用不同文字颜色, 颜色可用RGB设置
+ 使用粗体文字
+ 设置服务器名
+ (Youtube API, 国内无法使用, README第三段有非JSON自定义的代替的介绍) ~~Enable audio to be played in the background as well as supply a path to the audio and adjust the volume of it.~~
+ 可设置载入界面上显示的服务器规则
+ 可设置载入界面上显示的联系方式/论坛地址(或者其他类似的)
+ 可设置载入界面上显示的服务器内容

此载入界面根据Material Design来设计, 并且是responsive(支持不同分辨率). 如果你希望看一下此载入界面的演示, 可翻墙看此视频:
https://youtu.be/B32-xvPCdP8

---

# 如何安装
安装过程很简单. 如果你的服务器已安装其他载入画面, 请卸载它们并从你的server.cfg删除他们. 

1. 下载.zip或者clone此repo到你本地
2. 解压.zip到你本地
3. 文件夹名必须是"loqscript-material_load-loadingscreen"
4. 复制文件夹到你服务器的资源文件夹
5. 把你的server.cfg打开然后加上:
```lua
start loqscript-material_load-loadingscreen
```

就这么简单. 接下来是自定义的时间. 

---

# How to configure
自定义其实也很简单. 打开文件夹"loqscript-material_load-loadingscreen", 然后进入文件夹"LoadingScreen", 你会在里面发现一个文件夹叫"config.json". 

1. 打开config.json
2. 当你打开, 你会看到这些设定
![alt text](https://i.loli.net/2019/04/15/5cb4102cea818.png "config.json设定")
3. 底下是设定的解释
  * **"useBackgroundColour"** : 使用纯色背景, 设置成true或者false
  * **"backgroundColour"** : 纯色背景的颜色, 设置成RGB的数据. 数据的格式是"0,0,0"
  * **"useBackgroundImage"** : 使用图片背景, 设置成true或者false
  * **"backgroundImagePath"** : 设置图片的位置, 你可以放其他地方, 但是推荐放在"images"文件夹
  * **"useTextColour"** : 使用不同文字颜色, 设置成true或者false
  * **"textColour"** : 文字的颜色, 设置成RGB的数据. 数据的格式是"0,0,0"
  * **"useBoldText"** : 使用粗字体, 设置成true或者false
  * **"serverTitle"** : 设置服务器名
  * (Youtube API, 国内无法使用, 请看本段最后的非JSON自定义的替代的解释) ~~**"playVideoInBackground"** : set this value to true or false if you want to play audio from youtube in the background when someone is joining.~~
  * ~~**"YTVideoID"** : set this value to the ID of a YouTube video. Eg: (https://www.youtube.com/watch?v=HPc8QMycGno) ID = HPc8QMycGno.~~
  * ~~**"videoVolume"** : set this value between 0 and 100 to change the volume of the video that is playing.~~
  * **"rule1"** : 设置载入时显示的服务器的规则, **rule2**到**rule7**都可以使用
  * **"servers1"** : 设置载入时显示的联系方式/论坛地址/或者类似的, **servers2**到**servers7**都可以使用
  * **"content1"** : 设置载入时显示的服务器的内容, **content2**到**content7**都可以使用
  
  **你只需要把设置内容加入引号之间！请不要加多余的引号！请不要改动其他东西, 比如逗号, 或增加更多的规则, 联系方式和服务器内容！这么做会使这个载入画面不工作！请只根据提供的介绍做！**

  **来自Fork主youkatei: 因为国内防火墙的问题, 我写了一个能背景播放本地ogg音乐文件的功能. 可惜不知道为啥config里的数据总是传不进去（等有时间了再研究一下）. 所以如果想要播放本地文件, 请根据index.html里从97行开始的注释改动. 音乐文件夹必须是ogg格式！然后推荐放进“music”文件夹！**

4. 如果你使用背景图片, 别忘记把它加入文件夹"loqscript-material_load-loadingscreen"之中的__resource.lua
  * 请把文件夹位置加在"--Loading Image Files--"部分, 位置必须有''
  
---

基本就这样, 挺简单的. 谢谢你使用Loqrin的载入画面. 

---

如果你喜欢Loqrin的载入画面, 想给他/她买一杯咖啡之类, 你可以给他/她通过Paypal捐赠. 

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L5WM8JJY3KXEU)

