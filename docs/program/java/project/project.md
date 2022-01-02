
# Java 安装与项目配置
- [Java 安装与项目配置](#java-安装与项目配置)
  - [JAVA 安装](#java-安装)
  - [JAVA 配置环境](#java-配置环境)
    - [Linux/MacOS 下环境配置](#linuxmacos-下环境配置)
    - [Windows 下环境配置](#windows-下环境配置)
  - [插件安装](#插件安装)
- [配置](#配置)

## JAVA 安装


JDK(Java Development Kit) 是 Java 语言的软件开发工具包(SDK)
- **JAVA SE** ： standard edition，标准版。包含了基础和核心的库，可用于控制台及桌面应用软件的开发。
- **JAVA EE** ： enterprise edition，企业版。主要用于企业级分布式网络应用的开发。
- **JAVA ME** ： micro edition，微型版。主要用于嵌入式设备和移动设备上的应用开发。


[Java SE Development Kit 11 Downloads](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)，下载需要登陆


## JAVA 配置环境
### Linux/MacOS 下环境配置

Linux 下编辑用户级的环境变量文件 `~/.bashrc` ， MacOS下下编辑用户级的环境变量文件 `~/.zshrc`
```sh
# EX: export JAVA_HOME=/usr/lib/jvm/jdk-17
export JAVA_HOME=<path_to_your_jdk_path>
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib:${CLASSPATH}
export PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin:$PATH
```

### Windows 下环境配置
- `JAVA_HOME` : `...\Java\jdk-11.0.9` jdk的安装目录
- `CLASSPATH` : `%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar` (JDK1.5以上可以不用配置CLASSPATH变量)
- 添加到Path
  - `%JAVA_HOME%\bin`
  - `%JAVA_HOME%\jre\bin`

测试
```bash
java
javac
java --version
```



## 插件安装
- [Language Support for Java™ by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)

配置不同版本的java
```json
"java.configuration.runtimes": [
  {
    "name": "JavaSE-1.8",
    "path": "/path/to/jdk-8",
  },
  {
    "name": "JavaSE-11",
    "path": "/path/to/jdk-11",
  },
  {
    "name": "JavaSE-16",
    "path": "/path/to/jdk-16",
    "default": true
  },
]
```


- [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)

- [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)

- [Test Runner for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test)

- [Project Manager for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency)

# 配置

settings.json
```json
{
    "java.home": "path-to-your-jdk"
}
```