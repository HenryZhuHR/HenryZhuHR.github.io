# VScode

- [VScode](#vscode)
- [Download](#download)
- [使用技巧](#使用技巧)
	- [命令面板](#命令面板)
	- [命令行](#命令行)
- [工作区配置文件](#工作区配置文件)
- [用户代码片段](#用户代码片段)

# Download
[VScode](https://code.visualstudio.com/)

# 使用技巧

## 命令面板
顶部菜单栏
Keyboard Shortcut: `Ctrl+Shift+P`
![Command Palette](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/OpenCommandPalatte.gif)

## 命令行
VS Code has a powerful command line interface (CLI) which allows you to customize how the editor is launched to support various scenarios.
```bash
# open code with current directory
code .

# open the current directory in the most recently used code window
code -r .

# create a new window
code -n

# change the language
code --locale=es

# open diff editor
code --diff <file1> <file2>

# open file at specific line and column <file:line[:character]>
code --goto package.json:10:5

# see help options
code --help

# disable all extensions
code --disable-extensions .
```


# 工作区配置文件


# 用户代码片段

左下角齿轮可以打开用户代码片段，你可以为指定语言配置代码片段，也可以全局配置

示例文件已经说明了如何编写代码片段(snippets)
```json
// Place your 全局 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
// Placeholders with the same ids are connected.
// Example:
// "Print to console": {
// 	"scope": "javascript,typescript",
// 	"prefix": "log",
// 	"body": [
// 		"console.log('$1');",
// 		"$2"
// 	],
// 	"description": "Log output to console"
// }
```

下面的代码片段是快速生成 C++ 中的初始代码模板
```json
{
  	"cpp_code_basic": {
    	"scope": "cpp",
    	"prefix": "cppcode",
    	"body": [
    		"#include<iostream>",
    		"#include <string>",
    		"using namespace std;",            
    		"$1",
    		"int main(void){",
    		"\t$0",
    		"\treturn 0;",
    		"}"
        ],
    	"description": "cpp basic code"
    }
}
```
`cpp_code_basic` 是该用户片段的名字，`scope` 是当前用户片段所针对的语言，也就是说，在指定语言下才会触发当前的用户片段，`prefix` 是触发代码片段的词，当输入触发词之后，可以自动补全出 `body` 内的代码，`description` 则描述了该代码片段

当我们在输入 `cppcode` 会出现当前代码片段的提示，就可以快速生成代码，可以理解成一种自定义的代码补全

关键是 `body` 内的代码片段如何编写：

在 `body` 这个数组内，每一

