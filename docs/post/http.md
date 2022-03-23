---
layout: Post
title: HTTP
subtitle: How to give up HTTP and Web Development? Oh, just give it up.
author: HenryZhu
date: 2022-03-19
useHeaderImage: true
headerImage: /images/newworld.png
headerMask: rgb(0,0,0, .5)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - web
---



# HTTP 协议
HTTP 协议是 Hyper Text Transfer Protocol (超文本传输协议) 的缩写

## HTTP 工作原理
HTTP三点注意事项：

- HTTP是无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。
- HTTP是媒体独立的：这意味着，只要客户端和服务器知道如何处理的数据内容，任何类型的数据都可以通过HTTP发送。客户端以及服务器指定使用适合的MIME-type内容类型。
- HTTP是无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。

## HTTP 消息结构

请求行由请求方法字段、URL字段和HTTP协议版本字段3个字段组成，它们用空格分隔。例如
```
<method> <url> <protocol>
GET /index.html HTTP/1.1。
```


## HTTP 请求方法
HTTP标准规定了:
- HTTP1.0 定义了三种请求方法: GET, POST 和 HEAD 方法。
- HTTP1.1 新增了五种请求方法: OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法，共八种


### GET
GET	请求指定的页面信息，并返回实体主体。

GET方法用于使用给定的URI从给定服务器中检索信息，即从指定资源中请求数据。使用GET方法的请求应该只是检索数据，并且不应对数据产生其他影响。

在GET请求的URL中发送查询字符串（名称/值对）

GET请求是可以缓存的，我们可以从浏览器历史记录中查找到GET请求，还可以把它收藏到书签中；且GET请求有长度限制，仅用于请求数据（不修改）。

注：因GET请求的不安全性，在处理敏感数据时，绝不可以使用GET请求。

### POST
POST 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST 请求可能会导致新的资源的建立和/或已有资源的修改。

POST方法用于将数据发送到服务器以创建或更新资源，它要求服务器确认请求中包含的内容作为由URI区分的Web资源的另一个下属。

POST请求永远不会被缓存，且对数据长度没有限制；我们无法从浏览器历史记录中查找到POST请求。

### HEAD
HEAD 类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头

HEAD方法与GET方法相同，但没有响应体，仅传输状态行和标题部分。这对于恢复相应头部编写的元数据非常有用，而无需传输整个内容。

###	PUT
PUT 从客户端向服务器传送的数据取代指定的文档的内容。

PUT方法用于将数据发送到服务器以创建或更新资源，它可以用上传的内容替换目标资源中的所有当前内容。

它会将包含的元素放在所提供的URI下，如果URI指示的是当前资源，则会被改变。如果URI未指示当前资源，则服务器可以使用该URI创建资源。

###	DELETE
DELETE 请求服务器删除指定的页面。

DELETE方法用来删除指定的资源，它会删除URI给出的目标资源的所有当前内容。

###	CONNECT
CONNECT HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。

CONNECT方法用来建立到给定URI标识的服务器的隧道；它通过简单的TCP / IP隧道更改请求连接，通常实使用解码的HTTP代理来进行SSL编码的通信（HTTPS）。

###	OPTIONS
OPTIONS 允许客户端查看服务器的性能。

OPTIONS方法用来描述了目标资源的通信选项，会返回服务器支持预定义URL的HTTP策略。

###	TRACE
TRACE	回显服务器收到的请求，主要用于测试或诊断。

TRACE方法用于沿着目标资源的路径执行消息环回测试；它回应收到的请求，以便客户可以看到中间服务器进行了哪些（假设任何）进度或增量。

###	PATCH
PATCH	是对 PUT 方法的补充，用来对已知资源进行局部更新 。


## HTTP 请求头
请求头部由关键字/值对组成，每行一对，关键字和值用英文冒号“:”分隔。请求头部通知服务器有关于客户端请求的信息，典型的请求头有：
- User-Agent: 产生请求的浏览器类型。
- Accept: 客户端可识别的内容类型列表。
- Host: 请求的主机名，允许多个域名同处一个IP地址，即虚拟主机。
## HTTP 响应头信息

### HTTP 状态码
HTTP 状态码(Status Code)
常见的 HTTP 状态码：
- `200 OK` 请求成功
- `301 Moved Permanently` 资源（网页等）被永久转移到其它URL
- `404 Not Found` 请求的资源（网页等）不存在
- `500 Internal Server Error` 内部服务器错误
- `502	Bad Gateway` 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应



其他


- `1xx` 信息，服务器收到请求，需要请求者继续执行操作
  - `100 Continue` 继续。客户端应继续其请求
  - `101 Switching Protocols` 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议

---
- `2xx` 成功，操作被成功接收并处理
  - `200 OK`请求成功。一般用于GET与POST请求
  - `201 Created`已创建。成功请求并创建了新的资源
  - `202 Accepted`	已接受。已经接受请求，但未处理完成
  - `203 Non-Authoritative Information`	非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本
  - `204	No Content`	无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
  - `205	Reset Content`	重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域
  - `206	Partial Content`	部分内容。服务器成功处理了部分GET请求

---
- `3xx`: 重定向，需要进一步的操作以完成请求
  - `300	Multiple Choices`	多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择
  - `301	Moved Permanently`	永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
  - `302	Found`	临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI
  - `303	See Other`	查看其它地址。与301类似。使用GET和POST请求查看
  - `304	Not Modified`	未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
  - `305	Use Proxy`	使用代理。所请求的资源必须通过代理访问
  - `306	Unused`	已经被废弃的HTTP状态码
  - `307	Temporary Redirect`	临时重定向。与302类似。使用GET请求重定向

---
- `4xx`: 客户端错误，请求包含语法错误或无法完成请求
  - `400	Bad Request` 客户端请求的语法错误，服务器无法理解
  - `401	Unauthorized` 请求要求用户的身份认证
  - `402	Payment Required` 保留，将来使用
  - `403	Forbidden` 服务器理解请求客户端的请求，但是拒绝执行此请求
  - `404	Not Found` 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面
  - `405	Method Not Allowed`	客户端请求中的方法被禁止
  - `406	Not Acceptable` 服务器无法根据客户端请求的内容特性完成请求
  - `407	Proxy Authentication Required` 请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权
  - `408	Request Time-out`	服务器等待客户端发送的请求时间过长，超时
  - `409	Conflict	服务器完成客户端的 PUT` 请求时可能返回此代码，服务器处理请求时发生了冲突
  - `410	Gone`	客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置
  - `411	Length Required`	服务器无法处理客户端发送的不带Content-Length的请求信息
  - `412	Precondition Failed`	客户端请求信息的先决条件错误
  - `413	Request Entity Too Large`	由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息
  - `414	Request-URI Too Large`	请求的URI过长（URI通常为网址），服务器无法处理
  - `415	Unsupported Media Type`	服务器无法处理请求附带的媒体格式
  - `416	Requested range not satisfiable`	客户端请求的范围无效
  - `417	Expectation Failed`	服务器无法满足Expect的请求头信息

---
- `5xx`: 服务器错误，服务器在处理请求的过程中发生了错误
  - `500	Internal Server Error`	服务器内部错误，无法完成请求
  - `501	Not Implemented`	服务器不支持请求的功能，无法完成请求
  - `502	Bad Gateway`	作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
  - `503	Service Unavailable`	由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中
  - `504	Gateway Time-out`	充当网关或代理的服务器，未及时从远端服务器获取请求
  - `505	HTTP Version not supported`	服务器不支持请求的HTTP协议的版本，无法完成处理


## 参考
- [HTTP请求方式中8种请求方法（简单介绍）](https://www.bbsmax.com/A/obzbrNg6zE/)
- [Http请求头和响应头(Get和Post)](https://www.cnblogs.com/lauhp/p/8979393.html)
- [Hypertext Transfer Protocol - Wiki](https://en.m.wikipedia.org/wiki/Hypertext_Transfer_Protocol)