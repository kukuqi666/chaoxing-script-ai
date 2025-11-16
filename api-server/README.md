# 使用方法

* 提供了三种版本的使用方法，分别是node版本、python版本、go版本。 node版本是最推荐的版本，也是最完善的版本，python版本和go版本都是为了方便开发者在不同的环境中使用而提供的版本。python版本和go版本的使用方法和node版本的使用方法是一致的，只需要将代码放到对应的环境中运行即可。python版本会有点bug,导致连接服务器失败，go版本可以AI搜索答案但不会自动填充，可以正常使用。有愿意折腾的可以去修复一下 不想折腾的可以直接使用node版本的代码 安装好nodejs以后 直接双击`启动服务.bat`即可运行

## node版本

1. 安装依赖
```bash
yarn install
```
2. 运行项目
```bash
yarn start
```

## python版本

1. 安装依赖
```bash
pip install -r requirements.txt
```
2. 运行项目
```bash
python main.py
```

## go版本

1. 初始化模块
```bash
go mod init api-server
```

2. 安装依赖
```bash
go mod tidy
```

3. 运行项目
```bash
go run main.go
```
