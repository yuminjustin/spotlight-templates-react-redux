## spotlight-templates-react_all
spotlight scaffold template for react<br>

## Use：

     npm install

     npm run dev

     npm run build

此模板是react环境<br>
This template is base on webpack, support for reactjs<br>

1.配置在build/config.js 当中；<br>
  Configures in build/config.js <br><br>

2.react + react-router + redux +[ant](https://ant.design)<br><br>

3.由于router使用的是history方式，build之后的代码需要放在根目录，不然就会404<br>
  Because the router mod is using "history". So after you run build , production code have to run at website's root path ,or all page is 404<br><br>
 <font color="green">如果使用的history路由需要做以下操作：</font><br/>
<font color="orange">1)、在config.js中需要将dev和build的html5Router属性设置成true;</font><br/>
<font color="red">2)、gulp需要全局安装;</font><br/>
<font color="cyan">
   3)、此模板打包已支持Apache, 你只需要确认你的Apache开启rewrite功能(ngix 需要另外配置，如下);
</font><br/>

    location / {
        try_files $uri $uri/ /index.html;
    }

4.Upgrade to webpack4<br>

enjoy!
