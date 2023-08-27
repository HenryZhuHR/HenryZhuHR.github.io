import{b as n}from"./app.a836d288.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=n(`<p>\u5B89\u88C5 MySQL \u670D\u52A1\u5668\u7248\u672C</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> mysql-server
</code></pre></div><p>\u914D\u7F6E\u7684 <code>/etc/mysql</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
\u251C\u2500\u2500 conf.d
\u2502   \u251C\u2500\u2500 mysql.cnf
\u2502   \u2514\u2500\u2500 mysqldump.cnf
\u251C\u2500\u2500 debian.cnf
\u251C\u2500\u2500 debian-start
\u251C\u2500\u2500 my.cnf -<span class="token operator">&gt;</span> /etc/alternatives/my.cnf
\u251C\u2500\u2500 my.cnf.fallback
\u251C\u2500\u2500 mysql.cnf
\u2514\u2500\u2500 mysql.conf.d
    \u251C\u2500\u2500 mysql.cnf
    \u2514\u2500\u2500 mysqld.cnf
</code></pre></div><p>\u4FEE\u6539 <code>mysql.conf.d</code></p><div class="language-conf ext-conf"><pre class="language-conf"><code>#
# The MySQL database server configuration file.
#
# One can use all long options that the program supports.
# Run program with --help to get a list of available options and with
# --print-defaults to see which it would actually understand and use.
#
# For explanations see
# http://dev.mysql.com/doc/mysql/en/server-system-variables.html

# Here is entries for some specific programs
# The following values assume you have at least 32M ram

[mysqld]    # mysqld \u670D\u52A1\u5668\u7A0B\u5E8F \u7EC4
#
# * Basic Settings
#
user            = mysql                         # mysql\u542F\u52A8\u65F6\u4F7F\u7528\u7684\u7528\u6237
# pid-file      = /var/run/mysqld/mysqld.pid    # \u4E3Amysqld\u7A0B\u5E8F\u6307\u5B9A\u4E00\u4E2A\u5B58\u653E\u8FDB\u7A0BID\u7684\u6587\u4EF6(\u4EC5\u9002\u7528\u4E8Eunix/linux)
# socket        = /var/run/mysqld/mysqld.sock   # socket\u6587\u4EF6\u662F\u5BA2\u6237\u7A0B\u5E8F\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u901A\u4FE1\u7684\u6587\u4EF6 (\u4EC5\u9002\u7528\u4E8Eunix/linux)
# port          = 3306                          # \u9ED8\u8BA4\u8FDE\u63A5\u7AEF\u53E3
# datadir       = /var/lib/mysql                # \u6307\u5B9A\u6570\u636E\u6587\u4EF6\u76EE\u5F55


# If MySQL is running as a replication slave, this should be
# changed. Ref https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_tmpdir
# tmpdir                = /tmp
#
# Instead of skip-networking the default is now to listen only on
# localhost which is more compatible and is not less secure.
bind-address          = 127.0.0.1 # \u9700\u8981\u505A\u670D\u52A1\u7AEF\u88AB\u8FDC\u7A0B\u8FDE\u63A5\u65F6\u5019\u9700\u8981\u6CE8\u91CA
mysqlx-bind-address     = 127.0.0.1
#
# * Fine Tuning
#
key_buffer_size         = 16M
# max_allowed_packet    = 64M
# thread_stack          = 256K

# thread_cache_size       = -1

# This replaces the startup script and checks MyISAM tables if needed
# the first time they are touched
myisam-recover-options  = BACKUP

# max_connections        = 151

# table_open_cache       = 4000

#
# * Logging and Replication
#
# Both location gets rotated by the cronjob.
#
# Log all queries
# Be aware that this log type is a performance killer.
# general_log_file        = /var/log/mysql/query.log
# general_log             = 1
#
# Error log - should be very few entries.
#
log_error = /var/log/mysql/error.log
#
# Here you can see queries with especially long duration
# slow_query_log                = 1
# slow_query_log_file   = /var/log/mysql/mysql-slow.log
# long_query_time = 2
# log-queries-not-using-indexes
#
# The following can be used as easy to replay backup logs or for replication.
# note: if you are setting up a replication slave, see README.Debian about
#       other settings you may need to change.
# server-id             = 1 # \u8868\u793A\u672C\u673A\u7684\u5E8F\u53F7\u4E3A1\uFF0C\u552F\u4E00\uFF0C\u4E3B\u4ECE\u590D\u5236\u7684\u65F6\u5019\u9700\u8981\u4F7F\u7528
# log_bin                       = /var/log/mysql/mysql-bin.log
# binlog_expire_logs_seconds    = 2592000
max_binlog_size   = 100M
# binlog_do_db          = include_database_name
# binlog_ignore_db      = include_database_name
</code></pre></div><p>\u4E00\u3001 \u542F\u52A8 1\u3001\u4F7F\u7528 service \u542F\u52A8\uFF1A<code>service mysql start</code> 2\u3001\u4F7F\u7528 mysqld \u811A\u672C\u542F\u52A8\uFF1A<code>/etc/inint.d/mysql start</code> 3\u3001\u4F7F\u7528 safe_mysqld \u542F\u52A8\uFF1A<code>safe_mysql&amp;</code></p><p>\u4E8C\u3001\u505C\u6B62 1\u3001\u4F7F\u7528 service \u542F\u52A8\uFF1A<code>service mysql stop</code> 2\u3001\u4F7F\u7528 mysqld \u811A\u672C\u542F\u52A8\uFF1A<code>/etc/inint.d/mysql stop</code> 3\u3001mysqladmin shutdown</p><p>\u4E09\u3001\u91CD\u542F 1\u3001\u4F7F\u7528 service \u542F\u52A8\uFF1A<code>service mysql restart</code> 2\u3001\u4F7F\u7528 mysqld \u811A\u672C\u542F\u52A8\uFF1A<code>/etc/inint.d/mysql restart</code></p><h1 id="mysql\u5B66\u4E60\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#mysql\u5B66\u4E60\u7B14\u8BB0" aria-hidden="true">#</a> MySQL\u5B66\u4E60\u7B14\u8BB0</h1><h2 id="\u767B\u5F55\u548C\u9000\u51FAmysql\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u548C\u9000\u51FAmysql\u670D\u52A1\u5668" aria-hidden="true">#</a> \u767B\u5F55\u548C\u9000\u51FAMySQL\u670D\u52A1\u5668</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u767B\u5F55MySQL</span>
$ mysql -u root -p12345612

<span class="token comment"># \u9000\u51FAMySQL\u6570\u636E\u5E93\u670D\u52A1\u5668</span>
<span class="token builtin class-name">exit</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u57FA\u672C\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u8BED\u6CD5</h2><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u663E\u793A\u6240\u6709\u6570\u636E\u5E93
show databases;

-- \u521B\u5EFA\u6570\u636E\u5E93
CREATE DATABASE test;

-- \u5207\u6362\u6570\u636E\u5E93
use test;

-- \u663E\u793A\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709\u8868
show tables;

-- \u521B\u5EFA\u6570\u636E\u8868
CREATE TABLE pet (
    name VARCHAR(20),
    owner VARCHAR(20),
    species VARCHAR(20),
    sex CHAR(1),
    birth DATE,
    death DATE
);

-- \u67E5\u770B\u6570\u636E\u8868\u7ED3\u6784
-- describe pet;
desc pet;

-- \u67E5\u8BE2\u8868
SELECT * from pet;

-- \u63D2\u5165\u6570\u636E
INSERT INTO pet VALUES (&#39;puffball&#39;, &#39;Diane&#39;, &#39;hamster&#39;, &#39;f&#39;, &#39;1990-03-30&#39;, NULL);

-- \u4FEE\u6539\u6570\u636E
UPDATE pet SET name = &#39;squirrel&#39; where owner = &#39;Diane&#39;;

-- \u5220\u9664\u6570\u636E
DELETE FROM pet where name = &#39;squirrel&#39;;

-- \u5220\u9664\u8868
DROP TABLE myorder;
</code></pre></div><h2 id="\u5EFA\u8868\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u8868\u7EA6\u675F" aria-hidden="true">#</a> \u5EFA\u8868\u7EA6\u675F</h2><h3 id="\u4E3B\u952E\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u952E\u7EA6\u675F" aria-hidden="true">#</a> \u4E3B\u952E\u7EA6\u675F</h3><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u4E3B\u952E\u7EA6\u675F
-- \u4F7F\u67D0\u4E2A\u5B57\u6BB5\u4E0D\u91CD\u590D\u4E14\u4E0D\u5F97\u4E3A\u7A7A\uFF0C\u786E\u4FDD\u8868\u5185\u6240\u6709\u6570\u636E\u7684\u552F\u4E00\u6027\u3002
CREATE TABLE user (
    id INT PRIMARY KEY,
    name VARCHAR(20)
);

-- \u8054\u5408\u4E3B\u952E
-- \u8054\u5408\u4E3B\u952E\u4E2D\u7684\u6BCF\u4E2A\u5B57\u6BB5\u90FD\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u5E76\u4E14\u52A0\u8D77\u6765\u4E0D\u80FD\u548C\u5DF2\u8BBE\u7F6E\u7684\u8054\u5408\u4E3B\u952E\u91CD\u590D\u3002
CREATE TABLE user (
    id INT,
    name VARCHAR(20),
    password VARCHAR(20),
    PRIMARY KEY(id, name)
);

-- \u81EA\u589E\u7EA6\u675F
-- \u81EA\u589E\u7EA6\u675F\u7684\u4E3B\u952E\u7531\u7CFB\u7EDF\u81EA\u52A8\u9012\u589E\u5206\u914D\u3002
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20)
);

-- \u6DFB\u52A0\u4E3B\u952E\u7EA6\u675F
-- \u5982\u679C\u5FD8\u8BB0\u8BBE\u7F6E\u4E3B\u952E\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7SQL\u8BED\u53E5\u8BBE\u7F6E\uFF08\u4E24\u79CD\u65B9\u5F0F\uFF09\uFF1A
ALTER TABLE user ADD PRIMARY KEY(id);
ALTER TABLE user MODIFY id INT PRIMARY KEY;

-- \u5220\u9664\u4E3B\u952E
ALTER TABLE user drop PRIMARY KEY;
</code></pre></div><h3 id="\u552F\u4E00\u4E3B\u952E" tabindex="-1"><a class="header-anchor" href="#\u552F\u4E00\u4E3B\u952E" aria-hidden="true">#</a> \u552F\u4E00\u4E3B\u952E</h3><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u5EFA\u8868\u65F6\u521B\u5EFA\u552F\u4E00\u4E3B\u952E
CREATE TABLE user (
    id INT,
    name VARCHAR(20),
    UNIQUE(name)
);

-- \u6DFB\u52A0\u552F\u4E00\u4E3B\u952E
-- \u5982\u679C\u5EFA\u8868\u65F6\u6CA1\u6709\u8BBE\u7F6E\u552F\u4E00\u5EFA\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7SQL\u8BED\u53E5\u8BBE\u7F6E\uFF08\u4E24\u79CD\u65B9\u5F0F\uFF09\uFF1A
ALTER TABLE user ADD UNIQUE(name);
ALTER TABLE user MODIFY name VARCHAR(20) UNIQUE;

-- \u5220\u9664\u552F\u4E00\u4E3B\u952E
ALTER TABLE user DROP INDEX name;
</code></pre></div><h3 id="\u975E\u7A7A\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u975E\u7A7A\u7EA6\u675F" aria-hidden="true">#</a> \u975E\u7A7A\u7EA6\u675F</h3><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u5EFA\u8868\u65F6\u6DFB\u52A0\u975E\u7A7A\u7EA6\u675F
-- \u7EA6\u675F\u67D0\u4E2A\u5B57\u6BB5\u4E0D\u80FD\u4E3A\u7A7A
CREATE TABLE user (
    id INT,
    name VARCHAR(20) NOT NULL
);

-- \u79FB\u9664\u975E\u7A7A\u7EA6\u675F
ALTER TABLE user MODIFY name VARCHAR(20);
</code></pre></div><h3 id="\u9ED8\u8BA4\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u7EA6\u675F" aria-hidden="true">#</a> \u9ED8\u8BA4\u7EA6\u675F</h3><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u5EFA\u8868\u65F6\u6DFB\u52A0\u9ED8\u8BA4\u7EA6\u675F
-- \u7EA6\u675F\u67D0\u4E2A\u5B57\u6BB5\u7684\u9ED8\u8BA4\u503C
CREATE TABLE user2 (
    id INT,
    name VARCHAR(20),
    age INT DEFAULT 10
);

-- \u79FB\u9664\u975E\u7A7A\u7EA6\u675F
ALTER TABLE user MODIFY age INT;
</code></pre></div><h3 id="\u5916\u952E\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u5916\u952E\u7EA6\u675F" aria-hidden="true">#</a> \u5916\u952E\u7EA6\u675F</h3><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u73ED\u7EA7
CREATE TABLE classes (
    id INT PRIMARY KEY,
    name VARCHAR(20)
);

-- \u5B66\u751F\u8868
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(20),
    -- \u8FD9\u91CC\u7684 class_id \u8981\u548C classes \u4E2D\u7684 id \u5B57\u6BB5\u76F8\u5173\u8054
    class_id INT,
    -- \u8868\u793A class_id \u7684\u503C\u5FC5\u987B\u6765\u81EA\u4E8E classes \u4E2D\u7684 id \u5B57\u6BB5\u503C
    FOREIGN KEY(class_id) REFERENCES classes(id)
);

-- 1. \u4E3B\u8868\uFF08\u7236\u8868\uFF09classes \u4E2D\u6CA1\u6709\u7684\u6570\u636E\u503C\uFF0C\u5728\u526F\u8868\uFF08\u5B50\u8868\uFF09students \u4E2D\uFF0C\u662F\u4E0D\u53EF\u4EE5\u4F7F\u7528\u7684\uFF1B
-- 2. \u4E3B\u8868\u4E2D\u7684\u8BB0\u5F55\u88AB\u526F\u8868\u5F15\u7528\u65F6\uFF0C\u4E3B\u8868\u4E0D\u53EF\u4EE5\u88AB\u5220\u9664\u3002
</code></pre></div><h2 id="\u6570\u636E\u5E93\u7684\u4E09\u5927\u8BBE\u8BA1\u8303\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u7684\u4E09\u5927\u8BBE\u8BA1\u8303\u5F0F" aria-hidden="true">#</a> \u6570\u636E\u5E93\u7684\u4E09\u5927\u8BBE\u8BA1\u8303\u5F0F</h2><h3 id="_1nf" tabindex="-1"><a class="header-anchor" href="#_1nf" aria-hidden="true">#</a> 1NF</h3><p>\u53EA\u8981\u5B57\u6BB5\u503C\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u62C6\u5206\uFF0C\u5C31\u4E0D\u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F\u3002</p><p>\u8303\u5F0F\u8BBE\u8BA1\u5F97\u8D8A\u8BE6\u7EC6\uFF0C\u5BF9\u67D0\u4E9B\u5B9E\u9645\u64CD\u4F5C\u53EF\u80FD\u4F1A\u66F4\u597D\uFF0C\u4F46\u5E76\u975E\u90FD\u6709\u597D\u5904\uFF0C\u9700\u8981\u5BF9\u9879\u76EE\u7684\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u8BBE\u5B9A\u3002</p><h3 id="_2nf" tabindex="-1"><a class="header-anchor" href="#_2nf" aria-hidden="true">#</a> 2NF</h3><p>\u5728\u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F\u7684\u524D\u63D0\u4E0B\uFF0C\u5176\u4ED6\u5217\u90FD\u5FC5\u987B\u5B8C\u5168\u4F9D\u8D56\u4E8E\u4E3B\u952E\u5217\u3002\u5982\u679C\u51FA\u73B0\u4E0D\u5B8C\u5168\u4F9D\u8D56\uFF0C\u53EA\u53EF\u80FD\u53D1\u751F\u5728\u8054\u5408\u4E3B\u952E\u7684\u60C5\u51B5\u4E0B\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u8BA2\u5355\u8868
CREATE TABLE myorder (
    product_id INT,
    customer_id INT,
    product_name VARCHAR(20),
    customer_name VARCHAR(20),
    PRIMARY KEY (product_id, customer_id)
);
</code></pre></div><p>\u5B9E\u9645\u4E0A\uFF0C\u5728\u8FD9\u5F20\u8BA2\u5355\u8868\u4E2D\uFF0C<code>product_name</code> \u53EA\u4F9D\u8D56\u4E8E <code>product_id</code> \uFF0C<code>customer_name</code> \u53EA\u4F9D\u8D56\u4E8E <code>customer_id</code> \u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C<code>product_name</code> \u548C <code>customer_id</code> \u662F\u6CA1\u7528\u5173\u7CFB\u7684\uFF0C<code>customer_name</code> \u548C <code>product_id</code> \u4E5F\u662F\u6CA1\u6709\u5173\u7CFB\u7684\u3002</p><p>\u8FD9\u5C31\u4E0D\u6EE1\u8DB3\u7B2C\u4E8C\u8303\u5F0F\uFF1A\u5176\u4ED6\u5217\u90FD\u5FC5\u987B\u5B8C\u5168\u4F9D\u8D56\u4E8E\u4E3B\u952E\u5217\uFF01</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>CREATE TABLE myorder (
    order_id INT PRIMARY KEY,
    product_id INT,
    customer_id INT
);

CREATE TABLE product (
    id INT PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE customer (
    id INT PRIMARY KEY,
    name VARCHAR(20)
);
</code></pre></div><p>\u62C6\u5206\u4E4B\u540E\uFF0C<code>myorder</code> \u8868\u4E2D\u7684 <code>product_id</code> \u548C <code>customer_id</code> \u5B8C\u5168\u4F9D\u8D56\u4E8E <code>order_id</code> \u4E3B\u952E\uFF0C\u800C <code>product</code> \u548C <code>customer</code> \u8868\u4E2D\u7684\u5176\u4ED6\u5B57\u6BB5\u53C8\u5B8C\u5168\u4F9D\u8D56\u4E8E\u4E3B\u952E\u3002\u6EE1\u8DB3\u4E86\u7B2C\u4E8C\u8303\u5F0F\u7684\u8BBE\u8BA1\uFF01</p><h3 id="_3nf" tabindex="-1"><a class="header-anchor" href="#_3nf" aria-hidden="true">#</a> 3NF</h3><p>\u5728\u6EE1\u8DB3\u7B2C\u4E8C\u8303\u5F0F\u7684\u524D\u63D0\u4E0B\uFF0C\u9664\u4E86\u4E3B\u952E\u5217\u4E4B\u5916\uFF0C\u5176\u4ED6\u5217\u4E4B\u95F4\u4E0D\u80FD\u6709\u4F20\u9012\u4F9D\u8D56\u5173\u7CFB\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>CREATE TABLE myorder (
    order_id INT PRIMARY KEY,
    product_id INT,
    customer_id INT,
    customer_phone VARCHAR(15)
);
</code></pre></div><p>\u8868\u4E2D\u7684 <code>customer_phone</code> \u6709\u53EF\u80FD\u4F9D\u8D56\u4E8E <code>order_id</code> \u3001 <code>customer_id</code> \u4E24\u5217\uFF0C\u4E5F\u5C31\u4E0D\u6EE1\u8DB3\u4E86\u7B2C\u4E09\u8303\u5F0F\u7684\u8BBE\u8BA1\uFF1A\u5176\u4ED6\u5217\u4E4B\u95F4\u4E0D\u80FD\u6709\u4F20\u9012\u4F9D\u8D56\u5173\u7CFB\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>CREATE TABLE myorder (
    order_id INT PRIMARY KEY,
    product_id INT,
    customer_id INT
);

CREATE TABLE customer (
    id INT PRIMARY KEY,
    name VARCHAR(20),
    phone VARCHAR(15)
);
</code></pre></div><p>\u4FEE\u6539\u540E\u5C31\u4E0D\u5B58\u5728\u5176\u4ED6\u5217\u4E4B\u95F4\u7684\u4F20\u9012\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5176\u4ED6\u5217\u90FD\u53EA\u4F9D\u8D56\u4E8E\u4E3B\u952E\u5217\uFF0C\u6EE1\u8DB3\u4E86\u7B2C\u4E09\u8303\u5F0F\u7684\u8BBE\u8BA1\uFF01</p><h2 id="\u67E5\u8BE2\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u7EC3\u4E60" aria-hidden="true">#</a> \u67E5\u8BE2\u7EC3\u4E60</h2><h3 id="\u51C6\u5907\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u6570\u636E" aria-hidden="true">#</a> \u51C6\u5907\u6570\u636E</h3><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u521B\u5EFA\u6570\u636E\u5E93
CREATE DATABASE select_test;
-- \u5207\u6362\u6570\u636E\u5E93
USE select_test;

-- \u521B\u5EFA\u5B66\u751F\u8868
CREATE TABLE student (
    no VARCHAR(20) PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    birthday DATE, -- \u751F\u65E5
    class VARCHAR(20) -- \u6240\u5728\u73ED\u7EA7
);

-- \u521B\u5EFA\u6559\u5E08\u8868
CREATE TABLE teacher (
    no VARCHAR(20) PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    birthday DATE,
    profession VARCHAR(20) NOT NULL, -- \u804C\u79F0
    department VARCHAR(20) NOT NULL -- \u90E8\u95E8
);

-- \u521B\u5EFA\u8BFE\u7A0B\u8868
CREATE TABLE course (
    no VARCHAR(20) PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    t_no VARCHAR(20) NOT NULL, -- \u6559\u5E08\u7F16\u53F7
    -- \u8868\u793A\u8BE5 tno \u6765\u81EA\u4E8E teacher \u8868\u4E2D\u7684 no \u5B57\u6BB5\u503C
    FOREIGN KEY(t_no) REFERENCES teacher(no) 
);

-- \u6210\u7EE9\u8868
CREATE TABLE score (
    s_no VARCHAR(20) NOT NULL, -- \u5B66\u751F\u7F16\u53F7
    c_no VARCHAR(20) NOT NULL, -- \u8BFE\u7A0B\u53F7
    degree DECIMAL,	-- \u6210\u7EE9
    -- \u8868\u793A\u8BE5 s_no, c_no \u5206\u522B\u6765\u81EA\u4E8E student, course \u8868\u4E2D\u7684 no \u5B57\u6BB5\u503C
    FOREIGN KEY(s_no) REFERENCES student(no),	
    FOREIGN KEY(c_no) REFERENCES course(no),
    -- \u8BBE\u7F6E s_no, c_no \u4E3A\u8054\u5408\u4E3B\u952E
    PRIMARY KEY(s_no, c_no)
);

-- \u67E5\u770B\u6240\u6709\u8868
SHOW TABLES;

-- \u6DFB\u52A0\u5B66\u751F\u8868\u6570\u636E
INSERT INTO student VALUES(&#39;101&#39;, &#39;\u66FE\u534E&#39;, &#39;\u7537&#39;, &#39;1977-09-01&#39;, &#39;95033&#39;);
INSERT INTO student VALUES(&#39;102&#39;, &#39;\u5321\u660E&#39;, &#39;\u7537&#39;, &#39;1975-10-02&#39;, &#39;95031&#39;);
INSERT INTO student VALUES(&#39;103&#39;, &#39;\u738B\u4E3D&#39;, &#39;\u5973&#39;, &#39;1976-01-23&#39;, &#39;95033&#39;);
INSERT INTO student VALUES(&#39;104&#39;, &#39;\u674E\u519B&#39;, &#39;\u7537&#39;, &#39;1976-02-20&#39;, &#39;95033&#39;);
INSERT INTO student VALUES(&#39;105&#39;, &#39;\u738B\u82B3&#39;, &#39;\u5973&#39;, &#39;1975-02-10&#39;, &#39;95031&#39;);
INSERT INTO student VALUES(&#39;106&#39;, &#39;\u9646\u519B&#39;, &#39;\u7537&#39;, &#39;1974-06-03&#39;, &#39;95031&#39;);
INSERT INTO student VALUES(&#39;107&#39;, &#39;\u738B\u5C3C\u739B&#39;, &#39;\u7537&#39;, &#39;1976-02-20&#39;, &#39;95033&#39;);
INSERT INTO student VALUES(&#39;108&#39;, &#39;\u5F20\u5168\u86CB&#39;, &#39;\u7537&#39;, &#39;1975-02-10&#39;, &#39;95031&#39;);
INSERT INTO student VALUES(&#39;109&#39;, &#39;\u8D75\u94C1\u67F1&#39;, &#39;\u7537&#39;, &#39;1974-06-03&#39;, &#39;95031&#39;);

-- \u6DFB\u52A0\u6559\u5E08\u8868\u6570\u636E
INSERT INTO teacher VALUES(&#39;804&#39;, &#39;\u674E\u8BDA&#39;, &#39;\u7537&#39;, &#39;1958-12-02&#39;, &#39;\u526F\u6559\u6388&#39;, &#39;\u8BA1\u7B97\u673A\u7CFB&#39;);
INSERT INTO teacher VALUES(&#39;856&#39;, &#39;\u5F20\u65ED&#39;, &#39;\u7537&#39;, &#39;1969-03-12&#39;, &#39;\u8BB2\u5E08&#39;, &#39;\u7535\u5B50\u5DE5\u7A0B\u7CFB&#39;);
INSERT INTO teacher VALUES(&#39;825&#39;, &#39;\u738B\u840D&#39;, &#39;\u5973&#39;, &#39;1972-05-05&#39;, &#39;\u52A9\u6559&#39;, &#39;\u8BA1\u7B97\u673A\u7CFB&#39;);
INSERT INTO teacher VALUES(&#39;831&#39;, &#39;\u5218\u51B0&#39;, &#39;\u5973&#39;, &#39;1977-08-14&#39;, &#39;\u52A9\u6559&#39;, &#39;\u7535\u5B50\u5DE5\u7A0B\u7CFB&#39;);

-- \u6DFB\u52A0\u8BFE\u7A0B\u8868\u6570\u636E
INSERT INTO course VALUES(&#39;3-105&#39;, &#39;\u8BA1\u7B97\u673A\u5BFC\u8BBA&#39;, &#39;825&#39;);
INSERT INTO course VALUES(&#39;3-245&#39;, &#39;\u64CD\u4F5C\u7CFB\u7EDF&#39;, &#39;804&#39;);
INSERT INTO course VALUES(&#39;6-166&#39;, &#39;\u6570\u5B57\u7535\u8DEF&#39;, &#39;856&#39;);
INSERT INTO course VALUES(&#39;9-888&#39;, &#39;\u9AD8\u7B49\u6570\u5B66&#39;, &#39;831&#39;);

-- \u6DFB\u52A0\u6DFB\u52A0\u6210\u7EE9\u8868\u6570\u636E
INSERT INTO score VALUES(&#39;103&#39;, &#39;3-105&#39;, &#39;92&#39;);
INSERT INTO score VALUES(&#39;103&#39;, &#39;3-245&#39;, &#39;86&#39;);
INSERT INTO score VALUES(&#39;103&#39;, &#39;6-166&#39;, &#39;85&#39;);
INSERT INTO score VALUES(&#39;105&#39;, &#39;3-105&#39;, &#39;88&#39;);
INSERT INTO score VALUES(&#39;105&#39;, &#39;3-245&#39;, &#39;75&#39;);
INSERT INTO score VALUES(&#39;105&#39;, &#39;6-166&#39;, &#39;79&#39;);
INSERT INTO score VALUES(&#39;109&#39;, &#39;3-105&#39;, &#39;76&#39;);
INSERT INTO score VALUES(&#39;109&#39;, &#39;3-245&#39;, &#39;68&#39;);
INSERT INTO score VALUES(&#39;109&#39;, &#39;6-166&#39;, &#39;81&#39;);

-- \u67E5\u770B\u8868\u7ED3\u6784
SELECT * FROM course;
SELECT * FROM score;
SELECT * FROM student;
SELECT * FROM teacher;
</code></pre></div><h3 id="_1-\u5230-10" tabindex="-1"><a class="header-anchor" href="#_1-\u5230-10" aria-hidden="true">#</a> 1 \u5230 10</h3><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u67E5\u8BE2 student \u8868\u7684\u6240\u6709\u884C
SELECT * FROM student;

-- \u67E5\u8BE2 student \u8868\u4E2D\u7684 name\u3001sex \u548C class \u5B57\u6BB5\u7684\u6240\u6709\u884C
SELECT name, sex, class FROM student;

-- \u67E5\u8BE2 teacher \u8868\u4E2D\u4E0D\u91CD\u590D\u7684 department \u5217
-- department: \u53BB\u91CD\u67E5\u8BE2
SELECT DISTINCT department FROM teacher;

-- \u67E5\u8BE2 score \u8868\u4E2D\u6210\u7EE9\u572860-80\u4E4B\u95F4\u7684\u6240\u6709\u884C\uFF08\u533A\u95F4\u67E5\u8BE2\u548C\u8FD0\u7B97\u7B26\u67E5\u8BE2\uFF09
-- BETWEEN xx AND xx: \u67E5\u8BE2\u533A\u95F4, AND \u8868\u793A &quot;\u5E76\u4E14&quot;
SELECT * FROM score WHERE degree BETWEEN 60 AND 80;
SELECT * FROM score WHERE degree &gt; 60 AND degree &lt; 80;

-- \u67E5\u8BE2 score \u8868\u4E2D\u6210\u7EE9\u4E3A 85, 86 \u6216 88 \u7684\u884C
-- IN: \u67E5\u8BE2\u89C4\u5B9A\u4E2D\u7684\u591A\u4E2A\u503C
SELECT * FROM score WHERE degree IN (85, 86, 88);

-- \u67E5\u8BE2 student \u8868\u4E2D &#39;95031&#39; \u73ED\u6216\u6027\u522B\u4E3A &#39;\u5973&#39; \u7684\u6240\u6709\u884C
-- or: \u8868\u793A\u6216\u8005\u5173\u7CFB
SELECT * FROM student WHERE class = &#39;95031&#39; or sex = &#39;\u5973&#39;;

-- \u4EE5 class \u964D\u5E8F\u7684\u65B9\u5F0F\u67E5\u8BE2 student \u8868\u7684\u6240\u6709\u884C
-- DESC: \u964D\u5E8F\uFF0C\u4ECE\u9AD8\u5230\u4F4E
-- ASC\uFF08\u9ED8\u8BA4\uFF09: \u5347\u5E8F\uFF0C\u4ECE\u4F4E\u5230\u9AD8
SELECT * FROM student ORDER BY class DESC;
SELECT * FROM student ORDER BY class ASC;

-- \u4EE5 c_no \u5347\u5E8F\u3001degree \u964D\u5E8F\u67E5\u8BE2 score \u8868\u7684\u6240\u6709\u884C
SELECT * FROM score ORDER BY c_no ASC, degree DESC;

-- \u67E5\u8BE2 &quot;95031&quot; \u73ED\u7684\u5B66\u751F\u4EBA\u6570
-- COUNT: \u7EDF\u8BA1
SELECT COUNT(*) FROM student WHERE class = &#39;95031&#39;;

-- \u67E5\u8BE2 score \u8868\u4E2D\u7684\u6700\u9AD8\u5206\u7684\u5B66\u751F\u5B66\u53F7\u548C\u8BFE\u7A0B\u7F16\u53F7\uFF08\u5B50\u67E5\u8BE2\u6216\u6392\u5E8F\u67E5\u8BE2\uFF09\u3002
-- (SELECT MAX(degree) FROM score): \u5B50\u67E5\u8BE2\uFF0C\u7B97\u51FA\u6700\u9AD8\u5206
SELECT s_no, c_no FROM score WHERE degree = (SELECT MAX(degree) FROM score);

--  \u6392\u5E8F\u67E5\u8BE2
-- LIMIT r, n: \u8868\u793A\u4ECE\u7B2Cr\u884C\u5F00\u59CB\uFF0C\u67E5\u8BE2n\u6761\u6570\u636E
SELECT s_no, c_no, degree FROM score ORDER BY degree DESC LIMIT 0, 1;
</code></pre></div><h3 id="\u5206\u7EC4\u8BA1\u7B97\u5E73\u5747\u6210\u7EE9" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4\u8BA1\u7B97\u5E73\u5747\u6210\u7EE9" aria-hidden="true">#</a> \u5206\u7EC4\u8BA1\u7B97\u5E73\u5747\u6210\u7EE9</h3><p><strong>\u67E5\u8BE2\u6BCF\u95E8\u8BFE\u7684\u5E73\u5747\u6210\u7EE9\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- AVG: \u5E73\u5747\u503C
SELECT AVG(degree) FROM score WHERE c_no = &#39;3-105&#39;;
SELECT AVG(degree) FROM score WHERE c_no = &#39;3-245&#39;;
SELECT AVG(degree) FROM score WHERE c_no = &#39;6-166&#39;;

-- GROUP BY: \u5206\u7EC4\u67E5\u8BE2
SELECT c_no, AVG(degree) FROM score GROUP BY c_no;
</code></pre></div><h3 id="\u5206\u7EC4\u6761\u4EF6\u4E0E\u6A21\u7CCA\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4\u6761\u4EF6\u4E0E\u6A21\u7CCA\u67E5\u8BE2" aria-hidden="true">#</a> \u5206\u7EC4\u6761\u4EF6\u4E0E\u6A21\u7CCA\u67E5\u8BE2</h3><p><strong>\u67E5\u8BE2 <code>score</code> \u8868\u4E2D\u81F3\u5C11\u6709 2 \u540D\u5B66\u751F\u9009\u4FEE\uFF0C\u5E76\u4EE5 3 \u5F00\u5934\u7684\u8BFE\u7A0B\u7684\u5E73\u5747\u5206\u6570\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT * FROM score;
-- c_no \u8BFE\u7A0B\u7F16\u53F7
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 103  | 3-105 |     92 |
| 103  | 3-245 |     86 |
| 103  | 6-166 |     85 |
| 105  | 3-105 |     88 |
| 105  | 3-245 |     75 |
| 105  | 6-166 |     79 |
| 109  | 3-105 |     76 |
| 109  | 3-245 |     68 |
| 109  | 6-166 |     81 |
+------+-------+--------+
</code></pre></div><p>\u5206\u6790\u8868\u53D1\u73B0\uFF0C\u81F3\u5C11\u6709 2 \u540D\u5B66\u751F\u9009\u4FEE\u7684\u8BFE\u7A0B\u662F <code>3-105</code> \u3001<code>3-245</code> \u3001<code>6-166</code> \uFF0C\u4EE5 3 \u5F00\u5934\u7684\u8BFE\u7A0B\u662F <code>3-105</code> \u3001<code>3-245</code> \u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6211\u4EEC\u8981\u67E5\u8BE2\u6240\u6709 <code>3-105</code> \u548C <code>3-245</code> \u7684 <code>degree</code> \u5E73\u5747\u5206\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u9996\u5148\u628A c_no, AVG(degree) \u901A\u8FC7\u5206\u7EC4\u67E5\u8BE2\u51FA\u6765
SELECT c_no, AVG(degree) FROM score GROUP BY c_no
+-------+-------------+
| c_no  | AVG(degree) |
+-------+-------------+
| 3-105 |     85.3333 |
| 3-245 |     76.3333 |
| 6-166 |     81.6667 |
+-------+-------------+

-- \u518D\u67E5\u8BE2\u51FA\u81F3\u5C11\u6709 2 \u540D\u5B66\u751F\u9009\u4FEE\u7684\u8BFE\u7A0B
-- HAVING: \u8868\u793A\u6301\u6709
HAVING COUNT(c_no) &gt;= 2

-- \u5E76\u4E14\u662F\u4EE5 3 \u5F00\u5934\u7684\u8BFE\u7A0B
-- LIKE \u8868\u793A\u6A21\u7CCA\u67E5\u8BE2\uFF0C&quot;%&quot; \u662F\u4E00\u4E2A\u901A\u914D\u7B26\uFF0C\u5339\u914D &quot;3&quot; \u540E\u9762\u7684\u4EFB\u610F\u5B57\u7B26\u3002
AND c_no LIKE &#39;3%&#39;;

-- \u628A\u524D\u9762\u7684SQL\u8BED\u53E5\u62FC\u63A5\u8D77\u6765\uFF0C
-- \u540E\u9762\u52A0\u4E0A\u4E00\u4E2A COUNT(*)\uFF0C\u8868\u793A\u5C06\u6BCF\u4E2A\u5206\u7EC4\u7684\u4E2A\u6570\u4E5F\u67E5\u8BE2\u51FA\u6765\u3002
SELECT c_no, AVG(degree), COUNT(*) FROM score GROUP BY c_no
HAVING COUNT(c_no) &gt;= 2 AND c_no LIKE &#39;3%&#39;;
+-------+-------------+----------+
| c_no  | AVG(degree) | COUNT(*) |
+-------+-------------+----------+
| 3-105 |     85.3333 |        3 |
| 3-245 |     76.3333 |        3 |
+-------+-------------+----------+
</code></pre></div><h3 id="\u591A\u8868\u67E5\u8BE2-1" tabindex="-1"><a class="header-anchor" href="#\u591A\u8868\u67E5\u8BE2-1" aria-hidden="true">#</a> \u591A\u8868\u67E5\u8BE2 - 1</h3><p><strong>\u67E5\u8BE2\u6240\u6709\u5B66\u751F\u7684 <code>name</code>\uFF0C\u4EE5\u53CA\u8BE5\u5B66\u751F\u5728 <code>score</code> \u8868\u4E2D\u5BF9\u5E94\u7684 <code>c_no</code> \u548C <code>degree</code> \u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT no, name FROM student;
+-----+-----------+
| no  | name      |
+-----+-----------+
| 101 | \u66FE\u534E      |
| 102 | \u5321\u660E      |
| 103 | \u738B\u4E3D      |
| 104 | \u674E\u519B      |
| 105 | \u738B\u82B3      |
| 106 | \u9646\u519B      |
| 107 | \u738B\u5C3C\u739B    |
| 108 | \u5F20\u5168\u86CB    |
| 109 | \u8D75\u94C1\u67F1    |
+-----+-----------+

SELECT s_no, c_no, degree FROM score;
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 103  | 3-105 |     92 |
| 103  | 3-245 |     86 |
| 103  | 6-166 |     85 |
| 105  | 3-105 |     88 |
| 105  | 3-245 |     75 |
| 105  | 6-166 |     79 |
| 109  | 3-105 |     76 |
| 109  | 3-245 |     68 |
| 109  | 6-166 |     81 |
+------+-------+--------+
</code></pre></div><p>\u901A\u8FC7\u5206\u6790\u53EF\u4EE5\u53D1\u73B0\uFF0C\u53EA\u8981\u628A <code>score</code> \u8868\u4E2D\u7684 <code>s_no</code> \u5B57\u6BB5\u503C\u66FF\u6362\u6210 <code>student</code> \u8868\u4E2D\u5BF9\u5E94\u7684 <code>name</code> \u5B57\u6BB5\u503C\u5C31\u53EF\u4EE5\u4E86\uFF0C\u5982\u4F55\u505A\u5462\uFF1F</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- FROM...: \u8868\u793A\u4ECE student, score \u8868\u4E2D\u67E5\u8BE2
-- WHERE \u7684\u6761\u4EF6\u8868\u793A\u4E3A\uFF0C\u53EA\u6709\u5728 student.no \u548C score.s_no \u76F8\u7B49\u65F6\u624D\u663E\u793A\u51FA\u6765\u3002
SELECT name, c_no, degree FROM student, score 
WHERE student.no = score.s_no;
+-----------+-------+--------+
| name      | c_no  | degree |
+-----------+-------+--------+
| \u738B\u4E3D      | 3-105 |     92 |
| \u738B\u4E3D      | 3-245 |     86 |
| \u738B\u4E3D      | 6-166 |     85 |
| \u738B\u82B3      | 3-105 |     88 |
| \u738B\u82B3      | 3-245 |     75 |
| \u738B\u82B3      | 6-166 |     79 |
| \u8D75\u94C1\u67F1    | 3-105 |     76 |
| \u8D75\u94C1\u67F1    | 3-245 |     68 |
| \u8D75\u94C1\u67F1    | 6-166 |     81 |
+-----------+-------+--------+
</code></pre></div><h3 id="\u591A\u8868\u67E5\u8BE2-2" tabindex="-1"><a class="header-anchor" href="#\u591A\u8868\u67E5\u8BE2-2" aria-hidden="true">#</a> \u591A\u8868\u67E5\u8BE2 - 2</h3><p><strong>\u67E5\u8BE2\u6240\u6709\u5B66\u751F\u7684 <code>no</code> \u3001\u8BFE\u7A0B\u540D\u79F0 ( <code>course</code> \u8868\u4E2D\u7684 <code>name</code> ) \u548C\u6210\u7EE9 ( <code>score</code> \u8868\u4E2D\u7684 <code>degree</code> ) \u5217\u3002</strong></p><p>\u53EA\u6709 <code>score</code> \u5173\u8054\u5B66\u751F\u7684 <code>no</code> \uFF0C\u56E0\u6B64\u53EA\u8981\u67E5\u8BE2 <code>score</code> \u8868\uFF0C\u5C31\u80FD\u627E\u51FA\u6240\u6709\u548C\u5B66\u751F\u76F8\u5173\u7684 <code>no</code> \u548C <code>degree</code> \uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT s_no, c_no, degree FROM score;
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 103  | 3-105 |     92 |
| 103  | 3-245 |     86 |
| 103  | 6-166 |     85 |
| 105  | 3-105 |     88 |
| 105  | 3-245 |     75 |
| 105  | 6-166 |     79 |
| 109  | 3-105 |     76 |
| 109  | 3-245 |     68 |
| 109  | 6-166 |     81 |
+------+-------+--------+
</code></pre></div><p>\u7136\u540E\u67E5\u8BE2 <code>course</code> \u8868\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>+-------+-----------------+
| no    | name            |
+-------+-----------------+
| 3-105 | \u8BA1\u7B97\u673A\u5BFC\u8BBA      |
| 3-245 | \u64CD\u4F5C\u7CFB\u7EDF        |
| 6-166 | \u6570\u5B57\u7535\u8DEF        |
| 9-888 | \u9AD8\u7B49\u6570\u5B66        |
+-------+-----------------+
</code></pre></div><p>\u53EA\u8981\u628A <code>score</code> \u8868\u4E2D\u7684 <code>c_no</code> \u66FF\u6362\u6210 <code>course</code> \u8868\u4E2D\u5BF9\u5E94\u7684 <code>name</code> \u5B57\u6BB5\u503C\u5C31\u53EF\u4EE5\u4E86\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u589E\u52A0\u4E00\u4E2A\u67E5\u8BE2\u5B57\u6BB5 name\uFF0C\u5206\u522B\u4ECE score\u3001course \u8FD9\u4E24\u4E2A\u8868\u4E2D\u67E5\u8BE2\u3002
-- as \u8868\u793A\u53D6\u4E00\u4E2A\u8BE5\u5B57\u6BB5\u7684\u522B\u540D\u3002
SELECT s_no, name as c_name, degree FROM score, course
WHERE score.c_no = course.no;
+------+-----------------+--------+
| s_no | c_name          | degree |
+------+-----------------+--------+
| 103  | \u8BA1\u7B97\u673A\u5BFC\u8BBA      |     92 |
| 105  | \u8BA1\u7B97\u673A\u5BFC\u8BBA      |     88 |
| 109  | \u8BA1\u7B97\u673A\u5BFC\u8BBA      |     76 |
| 103  | \u64CD\u4F5C\u7CFB\u7EDF        |     86 |
| 105  | \u64CD\u4F5C\u7CFB\u7EDF        |     75 |
| 109  | \u64CD\u4F5C\u7CFB\u7EDF        |     68 |
| 103  | \u6570\u5B57\u7535\u8DEF        |     85 |
| 105  | \u6570\u5B57\u7535\u8DEF        |     79 |
| 109  | \u6570\u5B57\u7535\u8DEF        |     81 |
+------+-----------------+--------+
</code></pre></div><h3 id="\u4E09\u8868\u5173\u8054\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u4E09\u8868\u5173\u8054\u67E5\u8BE2" aria-hidden="true">#</a> \u4E09\u8868\u5173\u8054\u67E5\u8BE2</h3><p><strong>\u67E5\u8BE2\u6240\u6709\u5B66\u751F\u7684 <code>name</code> \u3001\u8BFE\u7A0B\u540D ( <code>course</code> \u8868\u4E2D\u7684 <code>name</code> ) \u548C <code>degree</code> \u3002</strong></p><p>\u53EA\u6709 <code>score</code> \u8868\u4E2D\u5173\u8054\u5B66\u751F\u7684\u5B66\u53F7\u548C\u8BFE\u5802\u53F7\uFF0C\u6211\u4EEC\u53EA\u8981\u56F4\u7ED5\u7740 <code>score</code> \u8FD9\u5F20\u8868\u67E5\u8BE2\u5C31\u597D\u4E86\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT * FROM score;
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 103  | 3-105 |     92 |
| 103  | 3-245 |     86 |
| 103  | 6-166 |     85 |
| 105  | 3-105 |     88 |
| 105  | 3-245 |     75 |
| 105  | 6-166 |     79 |
| 109  | 3-105 |     76 |
| 109  | 3-245 |     68 |
| 109  | 6-166 |     81 |
+------+-------+--------+
</code></pre></div><p>\u53EA\u8981\u628A <code>s_no</code> \u548C <code>c_no</code> \u66FF\u6362\u6210 <code>student</code> \u548C <code>srouse</code> \u8868\u4E2D\u5BF9\u5E94\u7684 <code>name</code> \u5B57\u6BB5\u503C\u5C31\u597D\u4E86\u3002</p><p>\u9996\u5148\u628A <code>s_no</code> \u66FF\u6362\u6210 <code>student</code> \u8868\u4E2D\u7684 <code>name</code> \u5B57\u6BB5\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT name, c_no, degree FROM student, score WHERE student.no = score.s_no;
+-----------+-------+--------+
| name      | c_no  | degree |
+-----------+-------+--------+
| \u738B\u4E3D      | 3-105 |     92 |
| \u738B\u4E3D      | 3-245 |     86 |
| \u738B\u4E3D      | 6-166 |     85 |
| \u738B\u82B3      | 3-105 |     88 |
| \u738B\u82B3      | 3-245 |     75 |
| \u738B\u82B3      | 6-166 |     79 |
| \u8D75\u94C1\u67F1    | 3-105 |     76 |
| \u8D75\u94C1\u67F1    | 3-245 |     68 |
| \u8D75\u94C1\u67F1    | 6-166 |     81 |
+-----------+-------+--------+
</code></pre></div><p>\u518D\u628A <code>c_no</code> \u66FF\u6362\u6210 <code>course</code> \u8868\u4E2D\u7684 <code>name</code> \u5B57\u6BB5\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u8BFE\u7A0B\u8868
SELECT no, name FROM course;
+-------+-----------------+
| no    | name            |
+-------+-----------------+
| 3-105 | \u8BA1\u7B97\u673A\u5BFC\u8BBA      |
| 3-245 | \u64CD\u4F5C\u7CFB\u7EDF        |
| 6-166 | \u6570\u5B57\u7535\u8DEF        |
| 9-888 | \u9AD8\u7B49\u6570\u5B66        |
+-------+-----------------+

-- \u7531\u4E8E\u5B57\u6BB5\u540D\u5B58\u5728\u91CD\u590D\uFF0C\u4F7F\u7528 &quot;\u8868\u540D.\u5B57\u6BB5\u540D as \u522B\u540D&quot; \u4EE3\u66FF\u3002
SELECT student.name as s_name, course.name as c_name, degree 
FROM student, score, course
WHERE student.NO = score.s_no
AND score.c_no = course.no;
</code></pre></div><h3 id="\u5B50\u67E5\u8BE2\u52A0\u5206\u7EC4\u6C42\u5E73\u5747\u5206" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2\u52A0\u5206\u7EC4\u6C42\u5E73\u5747\u5206" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2\u52A0\u5206\u7EC4\u6C42\u5E73\u5747\u5206</h3><p><strong>\u67E5\u8BE2 <code>95031</code> \u73ED\u5B66\u751F\u6BCF\u95E8\u8BFE\u7A0B\u7684\u5E73\u5747\u6210\u7EE9\u3002</strong></p><p>\u5728 <code>score</code> \u8868\u4E2D\u6839\u636E <code>student</code> \u8868\u7684\u5B66\u751F\u7F16\u53F7\u7B5B\u9009\u51FA\u5B66\u751F\u7684\u8BFE\u5802\u53F7\u548C\u6210\u7EE9\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- IN (..): \u5C06\u7B5B\u9009\u51FA\u7684\u5B66\u751F\u53F7\u5F53\u505A s_no \u7684\u6761\u4EF6\u67E5\u8BE2
SELECT s_no, c_no, degree FROM score
WHERE s_no IN (SELECT no FROM student WHERE class = &#39;95031&#39;);
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 105  | 3-105 |     88 |
| 105  | 3-245 |     75 |
| 105  | 6-166 |     79 |
| 109  | 3-105 |     76 |
| 109  | 3-245 |     68 |
| 109  | 6-166 |     81 |
+------+-------+--------+
</code></pre></div><p>\u8FD9\u65F6\u53EA\u8981\u5C06 <code>c_no</code> \u5206\u7EC4\u4E00\u4E0B\u5C31\u80FD\u5F97\u51FA <code>95031</code> \u73ED\u5B66\u751F\u6BCF\u95E8\u8BFE\u7684\u5E73\u5747\u6210\u7EE9\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT c_no, AVG(degree) FROM score
WHERE s_no IN (SELECT no FROM student WHERE class = &#39;95031&#39;)
GROUP BY c_no;
+-------+-------------+
| c_no  | AVG(degree) |
+-------+-------------+
| 3-105 |     82.0000 |
| 3-245 |     71.5000 |
| 6-166 |     80.0000 |
+-------+-------------+
</code></pre></div><h3 id="\u5B50\u67E5\u8BE2-1" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2-1" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2 - 1</h3><p><strong>\u67E5\u8BE2\u5728 <code>3-105</code> \u8BFE\u7A0B\u4E2D\uFF0C\u6240\u6709\u6210\u7EE9\u9AD8\u4E8E <code>109</code> \u53F7\u540C\u5B66\u7684\u8BB0\u5F55\u3002</strong></p><p>\u9996\u5148\u7B5B\u9009\u51FA\u8BFE\u5802\u53F7\u4E3A <code>3-105</code> \uFF0C\u5728\u627E\u51FA\u6240\u6709\u6210\u7EE9\u9AD8\u4E8E <code>109</code> \u53F7\u540C\u5B66\u7684\u7684\u884C\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT * FROM score 
WHERE c_no = &#39;3-105&#39;
AND degree &gt; (SELECT degree FROM score WHERE s_no = &#39;109&#39; AND c_no = &#39;3-105&#39;);
</code></pre></div><h3 id="\u5B50\u67E5\u8BE2-2" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2-2" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2 - 2</h3><p><strong>\u67E5\u8BE2\u6240\u6709\u6210\u7EE9\u9AD8\u4E8E <code>109</code> \u53F7\u540C\u5B66\u7684 <code>3-105</code> \u8BFE\u7A0B\u6210\u7EE9\u8BB0\u5F55\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u4E0D\u9650\u5236\u8BFE\u7A0B\u53F7\uFF0C\u53EA\u8981\u6210\u7EE9\u5927\u4E8E109\u53F7\u540C\u5B66\u76843-105\u8BFE\u7A0B\u6210\u7EE9\u5C31\u53EF\u4EE5\u3002
SELECT * FROM score
WHERE degree &gt; (SELECT degree FROM score WHERE s_no = &#39;109&#39; AND c_no = &#39;3-105&#39;);
</code></pre></div><h3 id="year-\u51FD\u6570\u4E0E\u5E26-in-\u5173\u952E\u5B57\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#year-\u51FD\u6570\u4E0E\u5E26-in-\u5173\u952E\u5B57\u67E5\u8BE2" aria-hidden="true">#</a> YEAR \u51FD\u6570\u4E0E\u5E26 IN \u5173\u952E\u5B57\u67E5\u8BE2</h3><p><strong>\u67E5\u8BE2\u6240\u6709\u548C <code>101</code> \u3001<code>108</code> \u53F7\u5B66\u751F\u540C\u5E74\u51FA\u751F\u7684 <code>no</code> \u3001<code>name</code> \u3001<code>birthday</code> \u5217\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- YEAR(..): \u53D6\u51FA\u65E5\u671F\u4E2D\u7684\u5E74\u4EFD
SELECT no, name, birthday FROM student
WHERE YEAR(birthday) IN (SELECT YEAR(birthday) FROM student WHERE no IN (101, 108));
</code></pre></div><h3 id="\u591A\u5C42\u5D4C\u5957\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u591A\u5C42\u5D4C\u5957\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u591A\u5C42\u5D4C\u5957\u5B50\u67E5\u8BE2</h3><p><strong>\u67E5\u8BE2 <code>&#39;\u5F20\u65ED&#39;</code> \u6559\u5E08\u4EFB\u8BFE\u7684\u5B66\u751F\u6210\u7EE9\u8868\u3002</strong></p><p>\u9996\u5148\u627E\u5230\u6559\u5E08\u7F16\u53F7\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT NO FROM teacher WHERE NAME = &#39;\u5F20\u65ED&#39;
</code></pre></div><p>\u901A\u8FC7 <code>sourse</code> \u8868\u627E\u5230\u8BE5\u6559\u5E08\u8BFE\u7A0B\u53F7\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT NO FROM course WHERE t_no = ( SELECT NO FROM teacher WHERE NAME = &#39;\u5F20\u65ED&#39; );
</code></pre></div><p>\u901A\u8FC7\u7B5B\u9009\u51FA\u7684\u8BFE\u7A0B\u53F7\u67E5\u8BE2\u6210\u7EE9\u8868\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT * FROM score WHERE c_no = (
    SELECT no FROM course WHERE t_no = ( 
        SELECT no FROM teacher WHERE NAME = &#39;\u5F20\u65ED&#39; 
    )
);
</code></pre></div><h3 id="\u591A\u8868\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u591A\u8868\u67E5\u8BE2" aria-hidden="true">#</a> \u591A\u8868\u67E5\u8BE2</h3><p><strong>\u67E5\u8BE2\u67D0\u9009\u4FEE\u8BFE\u7A0B\u591A\u4E8E5\u4E2A\u540C\u5B66\u7684\u6559\u5E08\u59D3\u540D\u3002</strong></p><p>\u9996\u5148\u5728 <code>teacher</code> \u8868\u4E2D\uFF0C\u6839\u636E <code>no</code> \u5B57\u6BB5\u6765\u5224\u65AD\u8BE5\u6559\u5E08\u7684\u540C\u4E00\u95E8\u8BFE\u7A0B\u662F\u5426\u6709\u81F3\u5C115\u540D\u5B66\u5458\u9009\u4FEE\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u67E5\u8BE2 teacher \u8868
SELECT no, name FROM teacher;
+-----+--------+
| no  | name   |
+-----+--------+
| 804 | \u674E\u8BDA   |
| 825 | \u738B\u840D   |
| 831 | \u5218\u51B0   |
| 856 | \u5F20\u65ED   |
+-----+--------+

SELECT name FROM teacher WHERE no IN (
    -- \u5728\u8FD9\u91CC\u627E\u5230\u5BF9\u5E94\u7684\u6761\u4EF6
);
</code></pre></div><p>\u67E5\u770B\u548C\u6559\u5E08\u7F16\u53F7\u6709\u6709\u5173\u7684\u8868\u7684\u4FE1\u606F\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT * FROM course;
-- t_no: \u6559\u5E08\u7F16\u53F7
+-------+-----------------+------+
| no    | name            | t_no |
+-------+-----------------+------+
| 3-105 | \u8BA1\u7B97\u673A\u5BFC\u8BBA      | 825  |
| 3-245 | \u64CD\u4F5C\u7CFB\u7EDF        | 804  |
| 6-166 | \u6570\u5B57\u7535\u8DEF        | 856  |
| 9-888 | \u9AD8\u7B49\u6570\u5B66        | 831  |
+-------+-----------------+------+
</code></pre></div><p>\u6211\u4EEC\u5DF2\u7ECF\u627E\u5230\u548C\u6559\u5E08\u7F16\u53F7\u6709\u5173\u7684\u5B57\u6BB5\u5C31\u5728 <code>course</code> \u8868\u4E2D\uFF0C\u4F46\u662F\u8FD8\u65E0\u6CD5\u77E5\u9053\u54EA\u95E8\u8BFE\u7A0B\u81F3\u5C11\u67095\u540D\u5B66\u751F\u9009\u4FEE\uFF0C\u6240\u4EE5\u8FD8\u9700\u8981\u6839\u636E <code>score</code> \u8868\u6765\u67E5\u8BE2\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u5728\u6B64\u4E4B\u524D\u5411 score \u63D2\u5165\u4E00\u4E9B\u6570\u636E\uFF0C\u4EE5\u4FBF\u4E30\u5BCC\u67E5\u8BE2\u6761\u4EF6\u3002
INSERT INTO score VALUES (&#39;101&#39;, &#39;3-105&#39;, &#39;90&#39;);
INSERT INTO score VALUES (&#39;102&#39;, &#39;3-105&#39;, &#39;91&#39;);
INSERT INTO score VALUES (&#39;104&#39;, &#39;3-105&#39;, &#39;89&#39;);

-- \u67E5\u8BE2 score \u8868
SELECT * FROM score;
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 101  | 3-105 |     90 |
| 102  | 3-105 |     91 |
| 103  | 3-105 |     92 |
| 103  | 3-245 |     86 |
| 103  | 6-166 |     85 |
| 104  | 3-105 |     89 |
| 105  | 3-105 |     88 |
| 105  | 3-245 |     75 |
| 105  | 6-166 |     79 |
| 109  | 3-105 |     76 |
| 109  | 3-245 |     68 |
| 109  | 6-166 |     81 |
+------+-------+--------+

-- \u5728 score \u8868\u4E2D\u5C06 c_no \u4F5C\u4E3A\u5206\u7EC4\uFF0C\u5E76\u4E14\u9650\u5236 c_no \u6301\u6709\u81F3\u5C11 5 \u6761\u6570\u636E\u3002
SELECT c_no FROM score GROUP BY c_no HAVING COUNT(*) &gt; 5;
+-------+
| c_no  |
+-------+
| 3-105 |
+-------+
</code></pre></div><p>\u6839\u636E\u7B5B\u9009\u51FA\u6765\u7684\u8BFE\u7A0B\u53F7\uFF0C\u627E\u51FA\u5728\u67D0\u8BFE\u7A0B\u4E2D\uFF0C\u62E5\u6709\u81F3\u5C115\u540D\u5B66\u5458\u7684\u6559\u5E08\u7F16\u53F7\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT t_no FROM course WHERE no IN (
    SELECT c_no FROM score GROUP BY c_no HAVING COUNT(*) &gt; 5
);
+------+
| t_no |
+------+
| 825  |
+------+
</code></pre></div><p>\u5728 <code>teacher</code> \u8868\u4E2D\uFF0C\u6839\u636E\u7B5B\u9009\u51FA\u6765\u7684\u6559\u5E08\u7F16\u53F7\u627E\u5230\u6559\u5E08\u59D3\u540D\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT name FROM teacher WHERE no IN (
    -- \u6700\u7EC8\u6761\u4EF6
    SELECT t_no FROM course WHERE no IN (
        SELECT c_no FROM score GROUP BY c_no HAVING COUNT(*) &gt; 5
    )
);
</code></pre></div><h3 id="\u5B50\u67E5\u8BE2-3" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2-3" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2 - 3</h3><p><strong>\u67E5\u8BE2 \u201C\u8BA1\u7B97\u673A\u7CFB\u201D \u8BFE\u7A0B\u7684\u6210\u7EE9\u8868\u3002</strong></p><p>\u601D\u8DEF\u662F\uFF0C\u5148\u627E\u51FA <code>course</code> \u8868\u4E2D\u6240\u6709 <code>\u8BA1\u7B97\u673A\u7CFB</code> \u8BFE\u7A0B\u7684\u7F16\u53F7\uFF0C\u7136\u540E\u6839\u636E\u8FD9\u4E2A\u7F16\u53F7\u67E5\u8BE2 <code>score</code> \u8868\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u901A\u8FC7 teacher \u8868\u67E5\u8BE2\u6240\u6709 \`\u8BA1\u7B97\u673A\u7CFB\` \u7684\u6559\u5E08\u7F16\u53F7
SELECT no, name, department FROM teacher WHERE department = &#39;\u8BA1\u7B97\u673A\u7CFB&#39;
+-----+--------+--------------+
| no  | name   | department   |
+-----+--------+--------------+
| 804 | \u674E\u8BDA   | \u8BA1\u7B97\u673A\u7CFB     |
| 825 | \u738B\u840D   | \u8BA1\u7B97\u673A\u7CFB     |
+-----+--------+--------------+

-- \u901A\u8FC7 course \u8868\u67E5\u8BE2\u8BE5\u6559\u5E08\u7684\u8BFE\u7A0B\u7F16\u53F7
SELECT no FROM course WHERE t_no IN (
    SELECT no FROM teacher WHERE department = &#39;\u8BA1\u7B97\u673A\u7CFB&#39;
);
+-------+
| no    |
+-------+
| 3-245 |
| 3-105 |
+-------+

-- \u6839\u636E\u7B5B\u9009\u51FA\u6765\u7684\u8BFE\u7A0B\u53F7\u67E5\u8BE2\u6210\u7EE9\u8868
SELECT * FROM score WHERE c_no IN (
    SELECT no FROM course WHERE t_no IN (
        SELECT no FROM teacher WHERE department = &#39;\u8BA1\u7B97\u673A\u7CFB&#39;
    )
);
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 103  | 3-245 |     86 |
| 105  | 3-245 |     75 |
| 109  | 3-245 |     68 |
| 101  | 3-105 |     90 |
| 102  | 3-105 |     91 |
| 103  | 3-105 |     92 |
| 104  | 3-105 |     89 |
| 105  | 3-105 |     88 |
| 109  | 3-105 |     76 |
+------+-------+--------+
</code></pre></div><h3 id="union-\u548C-notin-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#union-\u548C-notin-\u7684\u4F7F\u7528" aria-hidden="true">#</a> UNION \u548C NOTIN \u7684\u4F7F\u7528</h3><p><strong>\u67E5\u8BE2 <code>\u8BA1\u7B97\u673A\u7CFB</code> \u4E0E <code>\u7535\u5B50\u5DE5\u7A0B\u7CFB</code> \u4E2D\u7684\u4E0D\u540C\u804C\u79F0\u7684\u6559\u5E08\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- NOT: \u4EE3\u8868\u903B\u8F91\u975E
SELECT * FROM teacher WHERE department = &#39;\u8BA1\u7B97\u673A\u7CFB&#39; AND profession NOT IN (
    SELECT profession FROM teacher WHERE department = &#39;\u7535\u5B50\u5DE5\u7A0B\u7CFB&#39;
)
-- \u5408\u5E76\u4E24\u4E2A\u96C6
UNION
SELECT * FROM teacher WHERE department = &#39;\u7535\u5B50\u5DE5\u7A0B\u7CFB&#39; AND profession NOT IN (
    SELECT profession FROM teacher WHERE department = &#39;\u8BA1\u7B97\u673A\u7CFB&#39;
);
</code></pre></div><h3 id="any-\u8868\u793A\u81F3\u5C11\u4E00\u4E2A-desc-\u964D\u5E8F" tabindex="-1"><a class="header-anchor" href="#any-\u8868\u793A\u81F3\u5C11\u4E00\u4E2A-desc-\u964D\u5E8F" aria-hidden="true">#</a> ANY \u8868\u793A\u81F3\u5C11\u4E00\u4E2A - DESC ( \u964D\u5E8F )</h3><p><strong>\u67E5\u8BE2\u8BFE\u7A0B <code>3-105</code> \u4E14\u6210\u7EE9 <u>\u81F3\u5C11</u> \u9AD8\u4E8E <code>3-245</code> \u7684 <code>score</code> \u8868\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT * FROM score WHERE c_no = &#39;3-105&#39;;
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 101  | 3-105 |     90 |
| 102  | 3-105 |     91 |
| 103  | 3-105 |     92 |
| 104  | 3-105 |     89 |
| 105  | 3-105 |     88 |
| 109  | 3-105 |     76 |
+------+-------+--------+

SELECT * FROM score WHERE c_no = &#39;3-245&#39;;
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 103  | 3-245 |     86 |
| 105  | 3-245 |     75 |
| 109  | 3-245 |     68 |
+------+-------+--------+

-- ANY: \u7B26\u5408SQL\u8BED\u53E5\u4E2D\u7684\u4EFB\u610F\u6761\u4EF6\u3002
-- \u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728 3-105 \u6210\u7EE9\u4E2D\uFF0C\u53EA\u8981\u6709\u4E00\u4E2A\u5927\u4E8E\u4ECE 3-245 \u7B5B\u9009\u51FA\u6765\u7684\u4EFB\u610F\u884C\u5C31\u7B26\u5408\u6761\u4EF6\uFF0C
-- \u6700\u540E\u6839\u636E\u964D\u5E8F\u67E5\u8BE2\u7ED3\u679C\u3002
SELECT * FROM score WHERE c_no = &#39;3-105&#39; AND degree &gt; ANY(
    SELECT degree FROM score WHERE c_no = &#39;3-245&#39;
) ORDER BY degree DESC;
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 103  | 3-105 |     92 |
| 102  | 3-105 |     91 |
| 101  | 3-105 |     90 |
| 104  | 3-105 |     89 |
| 105  | 3-105 |     88 |
| 109  | 3-105 |     76 |
+------+-------+--------+
</code></pre></div><h3 id="\u8868\u793A\u6240\u6709\u7684-all" tabindex="-1"><a class="header-anchor" href="#\u8868\u793A\u6240\u6709\u7684-all" aria-hidden="true">#</a> \u8868\u793A\u6240\u6709\u7684 ALL</h3><p><strong>\u67E5\u8BE2\u8BFE\u7A0B <code>3-105</code> \u4E14\u6210\u7EE9\u9AD8\u4E8E <code>3-245</code> \u7684 <code>score</code> \u8868\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u53EA\u9700\u5BF9\u4E0A\u4E00\u9053\u9898\u7A0D\u4F5C\u4FEE\u6539\u3002
-- ALL: \u7B26\u5408SQL\u8BED\u53E5\u4E2D\u7684\u6240\u6709\u6761\u4EF6\u3002
-- \u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728 3-105 \u6BCF\u4E00\u884C\u6210\u7EE9\u4E2D\uFF0C\u90FD\u8981\u5927\u4E8E\u4ECE 3-245 \u7B5B\u9009\u51FA\u6765\u5168\u90E8\u884C\u624D\u7B97\u7B26\u5408\u6761\u4EF6\u3002
SELECT * FROM score WHERE c_no = &#39;3-105&#39; AND degree &gt; ALL(
    SELECT degree FROM score WHERE c_no = &#39;3-245&#39;
);
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 101  | 3-105 |     90 |
| 102  | 3-105 |     91 |
| 103  | 3-105 |     92 |
| 104  | 3-105 |     89 |
| 105  | 3-105 |     88 |
+------+-------+--------+
</code></pre></div><h3 id="\u590D\u5236\u8868\u7684\u6570\u636E\u4F5C\u4E3A\u6761\u4EF6\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u8868\u7684\u6570\u636E\u4F5C\u4E3A\u6761\u4EF6\u67E5\u8BE2" aria-hidden="true">#</a> \u590D\u5236\u8868\u7684\u6570\u636E\u4F5C\u4E3A\u6761\u4EF6\u67E5\u8BE2</h3><p><strong>\u67E5\u8BE2\u67D0\u8BFE\u7A0B\u6210\u7EE9\u6BD4\u8BE5\u8BFE\u7A0B\u5E73\u5747\u6210\u7EE9\u4F4E\u7684 <code>score</code> \u8868\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u67E5\u8BE2\u5E73\u5747\u5206
SELECT c_no, AVG(degree) FROM score GROUP BY c_no;
+-------+-------------+
| c_no  | AVG(degree) |
+-------+-------------+
| 3-105 |     87.6667 |
| 3-245 |     76.3333 |
| 6-166 |     81.6667 |
+-------+-------------+

-- \u67E5\u8BE2 score \u8868
SELECT degree FROM score;
+--------+
| degree |
+--------+
|     90 |
|     91 |
|     92 |
|     86 |
|     85 |
|     89 |
|     88 |
|     75 |
|     79 |
|     76 |
|     68 |
|     81 |
+--------+

-- \u5C06\u8868 b \u4F5C\u7528\u4E8E\u8868 a \u4E2D\u67E5\u8BE2\u6570\u636E
-- score a (b): \u5C06\u8868\u58F0\u660E\u4E3A a (b)\uFF0C
-- \u5982\u6B64\u5C31\u80FD\u7528 a.c_no = b.c_no \u4F5C\u4E3A\u6761\u4EF6\u6267\u884C\u67E5\u8BE2\u4E86\u3002
SELECT * FROM score a WHERE degree &lt; (
    (SELECT AVG(degree) FROM score b WHERE a.c_no = b.c_no)
);
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 105  | 3-245 |     75 |
| 105  | 6-166 |     79 |
| 109  | 3-105 |     76 |
| 109  | 3-245 |     68 |
| 109  | 6-166 |     81 |
+------+-------+--------+
</code></pre></div><h3 id="\u5B50\u67E5\u8BE2-4" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2-4" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2 - 4</h3><p><strong>\u67E5\u8BE2\u6240\u6709\u4EFB\u8BFE ( \u5728 <code>course</code> \u8868\u91CC\u6709\u8BFE\u7A0B ) \u6559\u5E08\u7684 <code>name</code> \u548C <code>department</code></strong> \u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT name, department FROM teacher WHERE no IN (SELECT t_no FROM course);
+--------+-----------------+
| name   | department      |
+--------+-----------------+
| \u674E\u8BDA   | \u8BA1\u7B97\u673A\u7CFB        |
| \u738B\u840D   | \u8BA1\u7B97\u673A\u7CFB        |
| \u5218\u51B0   | \u7535\u5B50\u5DE5\u7A0B\u7CFB      |
| \u5F20\u65ED   | \u7535\u5B50\u5DE5\u7A0B\u7CFB      |
+--------+-----------------+
</code></pre></div><h3 id="\u6761\u4EF6\u52A0\u7EC4\u7B5B\u9009" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u52A0\u7EC4\u7B5B\u9009" aria-hidden="true">#</a> \u6761\u4EF6\u52A0\u7EC4\u7B5B\u9009</h3><p><strong>\u67E5\u8BE2 <code>student</code> \u8868\u4E2D\u81F3\u5C11\u6709 2 \u540D\u7537\u751F\u7684 <code>class</code> \u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u67E5\u770B\u5B66\u751F\u8868\u4FE1\u606F
SELECT * FROM student;
+-----+-----------+-----+------------+-------+
| no  | name      | sex | birthday   | class |
+-----+-----------+-----+------------+-------+
| 101 | \u66FE\u534E      | \u7537  | 1977-09-01 | 95033 |
| 102 | \u5321\u660E      | \u7537  | 1975-10-02 | 95031 |
| 103 | \u738B\u4E3D      | \u5973  | 1976-01-23 | 95033 |
| 104 | \u674E\u519B      | \u7537  | 1976-02-20 | 95033 |
| 105 | \u738B\u82B3      | \u5973  | 1975-02-10 | 95031 |
| 106 | \u9646\u519B      | \u7537  | 1974-06-03 | 95031 |
| 107 | \u738B\u5C3C\u739B    | \u7537  | 1976-02-20 | 95033 |
| 108 | \u5F20\u5168\u86CB    | \u7537  | 1975-02-10 | 95031 |
| 109 | \u8D75\u94C1\u67F1    | \u7537  | 1974-06-03 | 95031 |
| 110 | \u5F20\u98DE      | \u7537  | 1974-06-03 | 95038 |
+-----+-----------+-----+------------+-------+

-- \u53EA\u67E5\u8BE2\u6027\u522B\u4E3A\u7537\uFF0C\u7136\u540E\u6309 class \u5206\u7EC4\uFF0C\u5E76\u9650\u5236 class \u884C\u5927\u4E8E 1\u3002
SELECT class FROM student WHERE sex = &#39;\u7537&#39; GROUP BY class HAVING COUNT(*) &gt; 1;
+-------+
| class |
+-------+
| 95033 |
| 95031 |
+-------+
</code></pre></div><h3 id="notlike-\u6A21\u7CCA\u67E5\u8BE2\u53D6\u53CD" tabindex="-1"><a class="header-anchor" href="#notlike-\u6A21\u7CCA\u67E5\u8BE2\u53D6\u53CD" aria-hidden="true">#</a> NOTLIKE \u6A21\u7CCA\u67E5\u8BE2\u53D6\u53CD</h3><p><strong>\u67E5\u8BE2 <code>student</code> \u8868\u4E2D\u4E0D\u59D3 &quot;\u738B&quot; \u7684\u540C\u5B66\u8BB0\u5F55\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- NOT: \u53D6\u53CD
-- LIKE: \u6A21\u7CCA\u67E5\u8BE2
mysql&gt; SELECT * FROM student WHERE name NOT LIKE &#39;\u738B%&#39;;
+-----+-----------+-----+------------+-------+
| no  | name      | sex | birthday   | class |
+-----+-----------+-----+------------+-------+
| 101 | \u66FE\u534E      | \u7537  | 1977-09-01 | 95033 |
| 102 | \u5321\u660E      | \u7537  | 1975-10-02 | 95031 |
| 104 | \u674E\u519B      | \u7537  | 1976-02-20 | 95033 |
| 106 | \u9646\u519B      | \u7537  | 1974-06-03 | 95031 |
| 108 | \u5F20\u5168\u86CB    | \u7537  | 1975-02-10 | 95031 |
| 109 | \u8D75\u94C1\u67F1    | \u7537  | 1974-06-03 | 95031 |
| 110 | \u5F20\u98DE      | \u7537  | 1974-06-03 | 95038 |
+-----+-----------+-----+------------+-------+
</code></pre></div><h3 id="year-\u4E0E-now-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#year-\u4E0E-now-\u51FD\u6570" aria-hidden="true">#</a> YEAR \u4E0E NOW \u51FD\u6570</h3><p><strong>\u67E5\u8BE2 <code>student</code> \u8868\u4E2D\u6BCF\u4E2A\u5B66\u751F\u7684\u59D3\u540D\u548C\u5E74\u9F84\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u4F7F\u7528\u51FD\u6570 YEAR(NOW()) \u8BA1\u7B97\u51FA\u5F53\u524D\u5E74\u4EFD\uFF0C\u51CF\u53BB\u51FA\u751F\u5E74\u4EFD\u540E\u5F97\u51FA\u5E74\u9F84\u3002
SELECT name, YEAR(NOW()) - YEAR(birthday) as age FROM student;
+-----------+------+
| name      | age  |
+-----------+------+
| \u66FE\u534E      |   42 |
| \u5321\u660E      |   44 |
| \u738B\u4E3D      |   43 |
| \u674E\u519B      |   43 |
| \u738B\u82B3      |   44 |
| \u9646\u519B      |   45 |
| \u738B\u5C3C\u739B    |   43 |
| \u5F20\u5168\u86CB    |   44 |
| \u8D75\u94C1\u67F1    |   45 |
| \u5F20\u98DE      |   45 |
+-----------+------+
</code></pre></div><h3 id="max-\u4E0E-min-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#max-\u4E0E-min-\u51FD\u6570" aria-hidden="true">#</a> MAX \u4E0E MIN \u51FD\u6570</h3><p><strong>\u67E5\u8BE2 <code>student</code> \u8868\u4E2D\u6700\u5927\u548C\u6700\u5C0F\u7684 <code>birthday</code> \u503C\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT MAX(birthday), MIN(birthday) FROM student;
+---------------+---------------+
| MAX(birthday) | MIN(birthday) |
+---------------+---------------+
| 1977-09-01    | 1974-06-03    |
+---------------+---------------+
</code></pre></div><h3 id="\u591A\u6BB5\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u591A\u6BB5\u6392\u5E8F" aria-hidden="true">#</a> \u591A\u6BB5\u6392\u5E8F</h3><p><strong>\u4EE5 <code>class</code> \u548C <code>birthday</code> \u4ECE\u5927\u5230\u5C0F\u7684\u987A\u5E8F\u67E5\u8BE2 <code>student</code> \u8868\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT * FROM student ORDER BY class DESC, birthday;
+-----+-----------+-----+------------+-------+
| no  | name      | sex | birthday   | class |
+-----+-----------+-----+------------+-------+
| 110 | \u5F20\u98DE      | \u7537  | 1974-06-03 | 95038 |
| 103 | \u738B\u4E3D      | \u5973  | 1976-01-23 | 95033 |
| 104 | \u674E\u519B      | \u7537  | 1976-02-20 | 95033 |
| 107 | \u738B\u5C3C\u739B    | \u7537  | 1976-02-20 | 95033 |
| 101 | \u66FE\u534E      | \u7537  | 1977-09-01 | 95033 |
| 106 | \u9646\u519B      | \u7537  | 1974-06-03 | 95031 |
| 109 | \u8D75\u94C1\u67F1    | \u7537  | 1974-06-03 | 95031 |
| 105 | \u738B\u82B3      | \u5973  | 1975-02-10 | 95031 |
| 108 | \u5F20\u5168\u86CB    | \u7537  | 1975-02-10 | 95031 |
| 102 | \u5321\u660E      | \u7537  | 1975-10-02 | 95031 |
+-----+-----------+-----+------------+-------+
</code></pre></div><h3 id="\u5B50\u67E5\u8BE2-5" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2-5" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2 - 5</h3><p><strong>\u67E5\u8BE2 &quot;\u7537&quot; \u6559\u5E08\u53CA\u5176\u6240\u4E0A\u7684\u8BFE\u7A0B\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT * FROM course WHERE t_no in (SELECT no FROM teacher WHERE sex = &#39;\u7537&#39;);
+-------+--------------+------+
| no    | name         | t_no |
+-------+--------------+------+
| 3-245 | \u64CD\u4F5C\u7CFB\u7EDF     | 804  |
| 6-166 | \u6570\u5B57\u7535\u8DEF     | 856  |
+-------+--------------+------+
</code></pre></div><h3 id="max-\u51FD\u6570\u4E0E\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#max-\u51FD\u6570\u4E0E\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> MAX \u51FD\u6570\u4E0E\u5B50\u67E5\u8BE2</h3><p><strong>\u67E5\u8BE2\u6700\u9AD8\u5206\u540C\u5B66\u7684 <code>score</code> \u8868\u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u627E\u51FA\u6700\u9AD8\u6210\u7EE9\uFF08\u8BE5\u67E5\u8BE2\u53EA\u80FD\u6709\u4E00\u4E2A\u7ED3\u679C\uFF09
SELECT MAX(degree) FROM score;

-- \u6839\u636E\u4E0A\u9762\u7684\u6761\u4EF6\u7B5B\u9009\u51FA\u6240\u6709\u6700\u9AD8\u6210\u7EE9\u8868\uFF0C
-- \u8BE5\u67E5\u8BE2\u53EF\u80FD\u6709\u591A\u4E2A\u7ED3\u679C\uFF0C\u5047\u8BBE degree \u503C\u591A\u6B21\u7B26\u5408\u6761\u4EF6\u3002
SELECT * FROM score WHERE degree = (SELECT MAX(degree) FROM score);
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 103  | 3-105 |     92 |
+------+-------+--------+
</code></pre></div><h3 id="\u5B50\u67E5\u8BE2-6" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2-6" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2 - 6</h3><p><strong>\u67E5\u8BE2\u548C &quot;\u674E\u519B&quot; \u540C\u6027\u522B\u7684\u6240\u6709\u540C\u5B66 <code>name</code> \u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u9996\u5148\u5C06\u674E\u519B\u7684\u6027\u522B\u4F5C\u4E3A\u6761\u4EF6\u53D6\u51FA\u6765
SELECT sex FROM student WHERE name = &#39;\u674E\u519B&#39;;
+-----+
| sex |
+-----+
| \u7537  |
+-----+

-- \u6839\u636E\u6027\u522B\u67E5\u8BE2 name \u548C sex
SELECT name, sex FROM student WHERE sex = (
    SELECT sex FROM student WHERE name = &#39;\u674E\u519B&#39;
);
+-----------+-----+
| name      | sex |
+-----------+-----+
| \u66FE\u534E      | \u7537  |
| \u5321\u660E      | \u7537  |
| \u674E\u519B      | \u7537  |
| \u9646\u519B      | \u7537  |
| \u738B\u5C3C\u739B    | \u7537  |
| \u5F20\u5168\u86CB    | \u7537  |
| \u8D75\u94C1\u67F1    | \u7537  |
| \u5F20\u98DE      | \u7537  |
+-----------+-----+
</code></pre></div><h3 id="\u5B50\u67E5\u8BE2-7" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2-7" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2 - 7</h3><p><strong>\u67E5\u8BE2\u548C &quot;\u674E\u519B&quot; \u540C\u6027\u522B\u4E14\u540C\u73ED\u7684\u540C\u5B66 <code>name</code> \u3002</strong></p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT name, sex, class FROM student WHERE sex = (
    SELECT sex FROM student WHERE name = &#39;\u674E\u519B&#39;
) AND class = (
    SELECT class FROM student WHERE name = &#39;\u674E\u519B&#39;
);
+-----------+-----+-------+
| name      | sex | class |
+-----------+-----+-------+
| \u66FE\u534E      | \u7537  | 95033 |
| \u674E\u519B      | \u7537  | 95033 |
| \u738B\u5C3C\u739B    | \u7537  | 95033 |
+-----------+-----+-------+
</code></pre></div><h3 id="\u5B50\u67E5\u8BE2-8" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2-8" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2 - 8</h3><p><strong>\u67E5\u8BE2\u6240\u6709\u9009\u4FEE &quot;\u8BA1\u7B97\u673A\u5BFC\u8BBA&quot; \u8BFE\u7A0B\u7684 &quot;\u7537&quot; \u540C\u5B66\u6210\u7EE9\u8868\u3002</strong></p><p>\u9700\u8981\u7684 &quot;\u8BA1\u7B97\u673A\u5BFC\u8BBA&quot; \u548C\u6027\u522B\u4E3A &quot;\u7537&quot; \u7684\u7F16\u53F7\u53EF\u4EE5\u5728 <code>course</code> \u548C <code>student</code> \u8868\u4E2D\u627E\u5230\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT * FROM score WHERE c_no = (
    SELECT no FROM course WHERE name = &#39;\u8BA1\u7B97\u673A\u5BFC\u8BBA&#39;
) AND s_no IN (
    SELECT no FROM student WHERE sex = &#39;\u7537&#39;
);
+------+-------+--------+
| s_no | c_no  | degree |
+------+-------+--------+
| 101  | 3-105 |     90 |
| 102  | 3-105 |     91 |
| 104  | 3-105 |     89 |
| 109  | 3-105 |     76 |
+------+-------+--------+
</code></pre></div><h3 id="\u6309\u7B49\u7EA7\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u6309\u7B49\u7EA7\u67E5\u8BE2" aria-hidden="true">#</a> \u6309\u7B49\u7EA7\u67E5\u8BE2</h3><p>\u5EFA\u7ACB\u4E00\u4E2A <code>grade</code> \u8868\u4EE3\u8868\u5B66\u751F\u7684\u6210\u7EE9\u7B49\u7EA7\uFF0C\u5E76\u63D2\u5165\u6570\u636E\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>CREATE TABLE grade (
    low INT(3),
    upp INT(3),
    grade char(1)
);

INSERT INTO grade VALUES (90, 100, &#39;A&#39;);
INSERT INTO grade VALUES (80, 89, &#39;B&#39;);
INSERT INTO grade VALUES (70, 79, &#39;C&#39;);
INSERT INTO grade VALUES (60, 69, &#39;D&#39;);
INSERT INTO grade VALUES (0, 59, &#39;E&#39;);

SELECT * FROM grade;
+------+------+-------+
| low  | upp  | grade |
+------+------+-------+
|   90 |  100 | A     |
|   80 |   89 | B     |
|   70 |   79 | C     |
|   60 |   69 | D     |
|    0 |   59 | E     |
+------+------+-------+
</code></pre></div><p><strong>\u67E5\u8BE2\u6240\u6709\u5B66\u751F\u7684 <code>s_no</code> \u3001<code>c_no</code> \u548C <code>grade</code> \u5217\u3002</strong></p><p>\u601D\u8DEF\u662F\uFF0C\u4F7F\u7528\u533A\u95F4 ( <code>BETWEEN</code> ) \u67E5\u8BE2\uFF0C\u5224\u65AD\u5B66\u751F\u7684\u6210\u7EE9 ( <code>degree</code> ) \u5728 <code>grade</code> \u8868\u7684 <code>low</code> \u548C <code>upp</code> \u4E4B\u95F4\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT s_no, c_no, grade FROM score, grade 
WHERE degree BETWEEN low AND upp;
+------+-------+-------+
| s_no | c_no  | grade |
+------+-------+-------+
| 101  | 3-105 | A     |
| 102  | 3-105 | A     |
| 103  | 3-105 | A     |
| 103  | 3-245 | B     |
| 103  | 6-166 | B     |
| 104  | 3-105 | B     |
| 105  | 3-105 | B     |
| 105  | 3-245 | C     |
| 105  | 6-166 | C     |
| 109  | 3-105 | C     |
| 109  | 3-245 | D     |
| 109  | 6-166 | B     |
+------+-------+-------+
</code></pre></div><h3 id="\u8FDE\u63A5\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u67E5\u8BE2" aria-hidden="true">#</a> \u8FDE\u63A5\u67E5\u8BE2</h3><p>\u51C6\u5907\u7528\u4E8E\u6D4B\u8BD5\u8FDE\u63A5\u67E5\u8BE2\u7684\u6570\u636E\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>CREATE DATABASE testJoin;

CREATE TABLE person (
    id INT,
    name VARCHAR(20),
    cardId INT
);

CREATE TABLE card (
    id INT,
    name VARCHAR(20)
);

INSERT INTO card VALUES (1, &#39;\u996D\u5361&#39;), (2, &#39;\u5EFA\u884C\u5361&#39;), (3, &#39;\u519C\u884C\u5361&#39;), (4, &#39;\u5DE5\u5546\u5361&#39;), (5, &#39;\u90AE\u653F\u5361&#39;);
SELECT * FROM card;
+------+-----------+
| id   | name      |
+------+-----------+
|    1 | \u996D\u5361      |
|    2 | \u5EFA\u884C\u5361    |
|    3 | \u519C\u884C\u5361    |
|    4 | \u5DE5\u5546\u5361    |
|    5 | \u90AE\u653F\u5361    |
+------+-----------+

INSERT INTO person VALUES (1, &#39;\u5F20\u4E09&#39;, 1), (2, &#39;\u674E\u56DB&#39;, 3), (3, &#39;\u738B\u4E94&#39;, 6);
SELECT * FROM person;
+------+--------+--------+
| id   | name   | cardId |
+------+--------+--------+
|    1 | \u5F20\u4E09   |      1 |
|    2 | \u674E\u56DB   |      3 |
|    3 | \u738B\u4E94   |      6 |
+------+--------+--------+
</code></pre></div><p>\u5206\u6790\u4E24\u5F20\u8868\u53D1\u73B0\uFF0C<code>person</code> \u8868\u5E76\u6CA1\u6709\u4E3A <code>cardId</code> \u5B57\u6BB5\u8BBE\u7F6E\u4E00\u4E2A\u5728 <code>card</code> \u8868\u4E2D\u5BF9\u5E94\u7684 <code>id</code> \u5916\u952E\u3002\u5982\u679C\u8BBE\u7F6E\u4E86\u7684\u8BDD\uFF0C<code>person</code> \u4E2D <code>cardId</code> \u5B57\u6BB5\u503C\u4E3A <code>6</code> \u7684\u884C\u5C31\u63D2\u4E0D\u8FDB\u53BB\uFF0C\u56E0\u4E3A\u8BE5 <code>cardId</code> \u503C\u5728 <code>card</code> \u8868\u4E2D\u5E76\u6CA1\u6709\u3002</p><h4 id="\u5185\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5185\u8FDE\u63A5" aria-hidden="true">#</a> \u5185\u8FDE\u63A5</h4><p>\u8981\u67E5\u8BE2\u8FD9\u4E24\u5F20\u8868\u4E2D\u6709\u5173\u7CFB\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>INNER JOIN</code> ( \u5185\u8FDE\u63A5 ) \u5C06\u5B83\u4EEC\u8FDE\u63A5\u5728\u4E00\u8D77\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- INNER JOIN: \u8868\u793A\u4E3A\u5185\u8FDE\u63A5\uFF0C\u5C06\u4E24\u5F20\u8868\u62FC\u63A5\u5728\u4E00\u8D77\u3002
-- on: \u8868\u793A\u8981\u6267\u884C\u67D0\u4E2A\u6761\u4EF6\u3002
SELECT * FROM person INNER JOIN card on person.cardId = card.id;
+------+--------+--------+------+-----------+
| id   | name   | cardId | id   | name      |
+------+--------+--------+------+-----------+
|    1 | \u5F20\u4E09   |      1 |    1 | \u996D\u5361      |
|    2 | \u674E\u56DB   |      3 |    3 | \u519C\u884C\u5361    |
+------+--------+--------+------+-----------+

-- \u5C06 INNER \u5173\u952E\u5B57\u7701\u7565\u6389\uFF0C\u7ED3\u679C\u4E5F\u662F\u4E00\u6837\u7684\u3002
-- SELECT * FROM person JOIN card on person.cardId = card.id;
</code></pre></div><blockquote><p>\u6CE8\u610F\uFF1A<code>card</code> \u7684\u6574\u5F20\u8868\u88AB\u8FDE\u63A5\u5230\u4E86\u53F3\u8FB9\u3002</p></blockquote><h4 id="\u5DE6\u5916\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5DE6\u5916\u8FDE\u63A5" aria-hidden="true">#</a> \u5DE6\u5916\u8FDE\u63A5</h4><p>\u5B8C\u6574\u663E\u793A\u5DE6\u8FB9\u7684\u8868 ( <code>person</code> ) \uFF0C\u53F3\u8FB9\u7684\u8868\u5982\u679C\u7B26\u5408\u6761\u4EF6\u5C31\u663E\u793A\uFF0C\u4E0D\u7B26\u5408\u5219\u8865 <code>NULL</code> \u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- LEFT JOIN \u4E5F\u53EB\u505A LEFT OUTER JOIN\uFF0C\u7528\u8FD9\u4E24\u79CD\u65B9\u5F0F\u7684\u67E5\u8BE2\u7ED3\u679C\u662F\u4E00\u6837\u7684\u3002
SELECT * FROM person LEFT JOIN card on person.cardId = card.id;
+------+--------+--------+------+-----------+
| id   | name   | cardId | id   | name      |
+------+--------+--------+------+-----------+
|    1 | \u5F20\u4E09   |      1 |    1 | \u996D\u5361      |
|    2 | \u674E\u56DB   |      3 |    3 | \u519C\u884C\u5361    |
|    3 | \u738B\u4E94   |      6 | NULL | NULL      |
+------+--------+--------+------+-----------+
</code></pre></div><h4 id="\u53F3\u5916\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53F3\u5916\u94FE\u63A5" aria-hidden="true">#</a> \u53F3\u5916\u94FE\u63A5</h4><p>\u5B8C\u6574\u663E\u793A\u53F3\u8FB9\u7684\u8868 ( <code>card</code> ) \uFF0C\u5DE6\u8FB9\u7684\u8868\u5982\u679C\u7B26\u5408\u6761\u4EF6\u5C31\u663E\u793A\uFF0C\u4E0D\u7B26\u5408\u5219\u8865 <code>NULL</code> \u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SELECT * FROM person RIGHT JOIN card on person.cardId = card.id;
+------+--------+--------+------+-----------+
| id   | name   | cardId | id   | name      |
+------+--------+--------+------+-----------+
|    1 | \u5F20\u4E09   |      1 |    1 | \u996D\u5361      |
|    2 | \u674E\u56DB   |      3 |    3 | \u519C\u884C\u5361    |
| NULL | NULL   |   NULL |    2 | \u5EFA\u884C\u5361    |
| NULL | NULL   |   NULL |    4 | \u5DE5\u5546\u5361    |
| NULL | NULL   |   NULL |    5 | \u90AE\u653F\u5361    |
+------+--------+--------+------+-----------+
</code></pre></div><h4 id="\u5168\u5916\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5168\u5916\u94FE\u63A5" aria-hidden="true">#</a> \u5168\u5916\u94FE\u63A5</h4><p>\u5B8C\u6574\u663E\u793A\u4E24\u5F20\u8868\u7684\u5168\u90E8\u6570\u636E\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- MySQL \u4E0D\u652F\u6301\u8FD9\u79CD\u8BED\u6CD5\u7684\u5168\u5916\u8FDE\u63A5
-- SELECT * FROM person FULL JOIN card on person.cardId = card.id;
-- \u51FA\u73B0\u9519\u8BEF\uFF1A
-- ERROR 1054 (42S22): Unknown column &#39;person.cardId&#39; in &#39;on clause&#39;

-- MySQL\u5168\u8FDE\u63A5\u8BED\u6CD5\uFF0C\u4F7F\u7528 UNION \u5C06\u4E24\u5F20\u8868\u5408\u5E76\u5728\u4E00\u8D77\u3002
SELECT * FROM person LEFT JOIN card on person.cardId = card.id
UNION
SELECT * FROM person RIGHT JOIN card on person.cardId = card.id;
+------+--------+--------+------+-----------+
| id   | name   | cardId | id   | name      |
+------+--------+--------+------+-----------+
|    1 | \u5F20\u4E09   |      1 |    1 | \u996D\u5361      |
|    2 | \u674E\u56DB   |      3 |    3 | \u519C\u884C\u5361    |
|    3 | \u738B\u4E94   |      6 | NULL | NULL      |
| NULL | NULL   |   NULL |    2 | \u5EFA\u884C\u5361    |
| NULL | NULL   |   NULL |    4 | \u5DE5\u5546\u5361    |
| NULL | NULL   |   NULL |    5 | \u90AE\u653F\u5361    |
+------+--------+--------+------+-----------+
</code></pre></div><h2 id="\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1" aria-hidden="true">#</a> \u4E8B\u52A1</h2><p>\u5728 MySQL \u4E2D\uFF0C\u4E8B\u52A1\u5176\u5B9E\u662F\u4E00\u4E2A\u6700\u5C0F\u7684\u4E0D\u53EF\u5206\u5272\u7684\u5DE5\u4F5C\u5355\u5143\u3002\u4E8B\u52A1\u80FD\u591F<strong>\u4FDD\u8BC1\u4E00\u4E2A\u4E1A\u52A1\u7684\u5B8C\u6574\u6027</strong>\u3002</p><p>\u6BD4\u5982\u6211\u4EEC\u7684\u94F6\u884C\u8F6C\u8D26\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- a -&gt; -100
UPDATE user set money = money - 100 WHERE name = &#39;a&#39;;

-- b -&gt; +100
UPDATE user set money = money + 100 WHERE name = &#39;b&#39;;
</code></pre></div><p>\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u5047\u8BBE\u53EA\u6709\u4E00\u6761 SQL \u8BED\u53E5\u6267\u884C\u6210\u529F\uFF0C\u800C\u53E6\u5916\u4E00\u6761\u6267\u884C\u5931\u8D25\u4E86\uFF0C\u5C31\u4F1A\u51FA\u73B0\u6570\u636E\u524D\u540E\u4E0D\u4E00\u81F4\u3002</p><p>\u56E0\u6B64\uFF0C\u5728\u6267\u884C\u591A\u6761\u6709\u5173\u8054 SQL \u8BED\u53E5\u65F6\uFF0C<strong>\u4E8B\u52A1</strong>\u53EF\u80FD\u4F1A\u8981\u6C42\u8FD9\u4E9B SQL \u8BED\u53E5\u8981\u4E48\u540C\u65F6\u6267\u884C\u6210\u529F\uFF0C\u8981\u4E48\u5C31\u90FD\u6267\u884C\u5931\u8D25\u3002</p><h3 id="\u5982\u4F55\u63A7\u5236\u4E8B\u52A1-commit-rollback" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u63A7\u5236\u4E8B\u52A1-commit-rollback" aria-hidden="true">#</a> \u5982\u4F55\u63A7\u5236\u4E8B\u52A1 - COMMIT / ROLLBACK</h3><p>\u5728 MySQL \u4E2D\uFF0C\u4E8B\u52A1\u7684<strong>\u81EA\u52A8\u63D0\u4EA4</strong>\u72B6\u6001\u9ED8\u8BA4\u662F\u5F00\u542F\u7684\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u67E5\u8BE2\u4E8B\u52A1\u7684\u81EA\u52A8\u63D0\u4EA4\u72B6\u6001
SELECT @@AUTOCOMMIT;
+--------------+
| @@AUTOCOMMIT |
+--------------+
|            1 |
+--------------+
</code></pre></div><p><strong>\u81EA\u52A8\u63D0\u4EA4\u7684\u4F5C\u7528</strong>\uFF1A\u5F53\u6211\u4EEC\u6267\u884C\u4E00\u6761 SQL \u8BED\u53E5\u7684\u65F6\u5019\uFF0C\u5176\u4EA7\u751F\u7684\u6548\u679C\u5C31\u4F1A\u7ACB\u5373\u4F53\u73B0\u51FA\u6765\uFF0C\u4E14\u4E0D\u80FD<strong>\u56DE\u6EDA</strong>\u3002</p><p>\u4EC0\u4E48\u662F\u56DE\u6EDA\uFF1F\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>CREATE DATABASE bank;

USE bank;

CREATE TABLE user (
    id INT PRIMARY KEY,
    name VARCHAR(20),
    money INT
);

INSERT INTO user VALUES (1, &#39;a&#39;, 1000);

SELECT * FROM user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
+----+------+-------+
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u6267\u884C\u63D2\u5165\u8BED\u53E5\u540E\u6570\u636E\u7ACB\u523B\u751F\u6548\uFF0C\u539F\u56E0\u662F MySQL \u4E2D\u7684\u4E8B\u52A1\u81EA\u52A8\u5C06\u5B83<strong>\u63D0\u4EA4</strong>\u5230\u4E86\u6570\u636E\u5E93\u4E2D\u3002\u90A3\u4E48\u6240\u8C13<strong>\u56DE\u6EDA</strong>\u7684\u610F\u601D\u5C31\u662F\uFF0C\u64A4\u9500\u6267\u884C\u8FC7\u7684\u6240\u6709 SQL \u8BED\u53E5\uFF0C\u4F7F\u5176\u56DE\u6EDA\u5230<strong>\u6700\u540E\u4E00\u6B21\u63D0\u4EA4</strong>\u6570\u636E\u65F6\u7684\u72B6\u6001\u3002</p><p>\u5728 MySQL \u4E2D\u4F7F\u7528 <code>ROLLBACK</code> \u6267\u884C\u56DE\u6EDA\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u56DE\u6EDA\u5230\u6700\u540E\u4E00\u6B21\u63D0\u4EA4
ROLLBACK;

SELECT * FROM user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
+----+------+-------+
</code></pre></div><p>\u7531\u4E8E\u6240\u6709\u6267\u884C\u8FC7\u7684 SQL \u8BED\u53E5\u90FD\u5DF2\u7ECF\u88AB\u63D0\u4EA4\u8FC7\u4E86\uFF0C\u6240\u4EE5\u6570\u636E\u5E76\u6CA1\u6709\u53D1\u751F\u56DE\u6EDA\u3002\u90A3\u5982\u4F55\u8BA9\u6570\u636E\u53EF\u4EE5\u53D1\u751F\u56DE\u6EDA\uFF1F</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u5173\u95ED\u81EA\u52A8\u63D0\u4EA4
SET AUTOCOMMIT = 0;

-- \u67E5\u8BE2\u81EA\u52A8\u63D0\u4EA4\u72B6\u6001
SELECT @@AUTOCOMMIT;
+--------------+
| @@AUTOCOMMIT |
+--------------+
|            0 |
+--------------+
</code></pre></div><p>\u5C06\u81EA\u52A8\u63D0\u4EA4\u5173\u95ED\u540E\uFF0C\u6D4B\u8BD5\u6570\u636E\u56DE\u6EDA\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>INSERT INTO user VALUES (2, &#39;b&#39;, 1000);

-- \u5173\u95ED AUTOCOMMIT \u540E\uFF0C\u6570\u636E\u7684\u53D8\u5316\u662F\u5728\u4E00\u5F20\u865A\u62DF\u7684\u4E34\u65F6\u6570\u636E\u8868\u4E2D\u5C55\u793A\uFF0C
-- \u53D1\u751F\u53D8\u5316\u7684\u6570\u636E\u5E76\u6CA1\u6709\u771F\u6B63\u63D2\u5165\u5230\u6570\u636E\u8868\u4E2D\u3002
SELECT * FROM user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
|  2 | b    |  1000 |
+----+------+-------+

-- \u6570\u636E\u8868\u4E2D\u7684\u771F\u5B9E\u6570\u636E\u5176\u5B9E\u8FD8\u662F\uFF1A
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
+----+------+-------+

-- \u7531\u4E8E\u6570\u636E\u8FD8\u6CA1\u6709\u771F\u6B63\u63D0\u4EA4\uFF0C\u53EF\u4EE5\u4F7F\u7528\u56DE\u6EDA
ROLLBACK;

-- \u518D\u6B21\u67E5\u8BE2
SELECT * FROM user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
+----+------+-------+
</code></pre></div><p>\u90A3\u5982\u4F55\u5C06\u865A\u62DF\u7684\u6570\u636E\u771F\u6B63\u63D0\u4EA4\u5230\u6570\u636E\u5E93\u4E2D\uFF1F\u4F7F\u7528 <code>COMMIT</code> :</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>INSERT INTO user VALUES (2, &#39;b&#39;, 1000);
-- \u624B\u52A8\u63D0\u4EA4\u6570\u636E\uFF08\u6301\u4E45\u6027\uFF09\uFF0C
-- \u5C06\u6570\u636E\u771F\u6B63\u63D0\u4EA4\u5230\u6570\u636E\u5E93\u4E2D\uFF0C\u6267\u884C\u540E\u4E0D\u80FD\u518D\u56DE\u6EDA\u63D0\u4EA4\u8FC7\u7684\u6570\u636E\u3002
COMMIT;

-- \u63D0\u4EA4\u540E\u6D4B\u8BD5\u56DE\u6EDA
ROLLBACK;

-- \u518D\u6B21\u67E5\u8BE2\uFF08\u56DE\u6EDA\u65E0\u6548\u4E86\uFF09
SELECT * FROM user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
|  2 | b    |  1000 |
+----+------+-------+
</code></pre></div><blockquote><p><strong>\u603B\u7ED3</strong></p><ol><li><p><strong>\u81EA\u52A8\u63D0\u4EA4</strong></p><ul><li><p>\u67E5\u770B\u81EA\u52A8\u63D0\u4EA4\u72B6\u6001\uFF1A<code>SELECT @@AUTOCOMMIT</code> \uFF1B</p></li><li><p>\u8BBE\u7F6E\u81EA\u52A8\u63D0\u4EA4\u72B6\u6001\uFF1A<code>SET AUTOCOMMIT = 0</code> \u3002</p></li></ul></li><li><p><strong>\u624B\u52A8\u63D0\u4EA4</strong></p><p><code>@@AUTOCOMMIT = 0</code> \u65F6\uFF0C\u4F7F\u7528 <code>COMMIT</code> \u547D\u4EE4\u63D0\u4EA4\u4E8B\u52A1\u3002</p></li><li><p><strong>\u4E8B\u52A1\u56DE\u6EDA</strong></p><p><code>@@AUTOCOMMIT = 0</code> \u65F6\uFF0C\u4F7F\u7528 <code>ROLLBACK</code> \u547D\u4EE4\u56DE\u6EDA\u4E8B\u52A1\u3002</p></li></ol></blockquote><p><strong>\u4E8B\u52A1\u7684\u5B9E\u9645\u5E94\u7528</strong>\uFF0C\u8BA9\u6211\u4EEC\u518D\u56DE\u5230\u94F6\u884C\u8F6C\u8D26\u9879\u76EE\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u8F6C\u8D26
UPDATE user set money = money - 100 WHERE name = &#39;a&#39;;

-- \u5230\u8D26
UPDATE user set money = money + 100 WHERE name = &#39;b&#39;;

SELECT * FROM user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |   900 |
|  2 | b    |  1100 |
+----+------+-------+
</code></pre></div><p>\u8FD9\u65F6\u5047\u8BBE\u5728\u8F6C\u8D26\u65F6\u53D1\u751F\u4E86\u610F\u5916\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>ROLLBACK</code> \u56DE\u6EDA\u5230\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\u7684\u72B6\u6001\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u5047\u8BBE\u8F6C\u8D26\u53D1\u751F\u4E86\u610F\u5916\uFF0C\u9700\u8981\u56DE\u6EDA\u3002
ROLLBACK;

SELECT * FROM user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
|  2 | b    |  1000 |
+----+------+-------+
</code></pre></div><p>\u8FD9\u65F6\u6211\u4EEC\u53C8\u56DE\u5230\u4E86\u53D1\u751F\u610F\u5916\u4E4B\u524D\u7684\u72B6\u6001\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E8B\u52A1\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u53EF\u4EE5\u53CD\u6094\u7684\u673A\u4F1A\u3002\u5047\u8BBE\u6570\u636E\u6CA1\u6709\u53D1\u751F\u610F\u5916\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u624B\u52A8\u5C06\u6570\u636E\u771F\u6B63\u63D0\u4EA4\u5230\u6570\u636E\u8868\u4E2D\uFF1A<code>COMMIT</code> \u3002</p><h3 id="\u624B\u52A8\u5F00\u542F\u4E8B\u52A1-begin-start-transaction" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u5F00\u542F\u4E8B\u52A1-begin-start-transaction" aria-hidden="true">#</a> \u624B\u52A8\u5F00\u542F\u4E8B\u52A1 - BEGIN / START TRANSACTION</h3><p>\u4E8B\u52A1\u7684\u9ED8\u8BA4\u63D0\u4EA4\u88AB\u5F00\u542F ( <code>@@AUTOCOMMIT = 1</code> ) \u540E\uFF0C\u6B64\u65F6\u5C31\u4E0D\u80FD\u4F7F\u7528\u4E8B\u52A1\u56DE\u6EDA\u4E86\u3002\u4F46\u662F\u6211\u4EEC\u8FD8\u53EF\u4EE5\u624B\u52A8\u5F00\u542F\u4E00\u4E2A\u4E8B\u52A1\u5904\u7406\u4E8B\u4EF6\uFF0C\u4F7F\u5176\u53EF\u4EE5\u53D1\u751F\u56DE\u6EDA\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u4F7F\u7528 BEGIN \u6216\u8005 START TRANSACTION \u624B\u52A8\u5F00\u542F\u4E00\u4E2A\u4E8B\u52A1
-- START TRANSACTION;
BEGIN;
UPDATE user set money = money - 100 WHERE name = &#39;a&#39;;
UPDATE user set money = money + 100 WHERE name = &#39;b&#39;;

-- \u7531\u4E8E\u624B\u52A8\u5F00\u542F\u7684\u4E8B\u52A1\u6CA1\u6709\u5F00\u542F\u81EA\u52A8\u63D0\u4EA4\uFF0C
-- \u6B64\u65F6\u53D1\u751F\u53D8\u5316\u7684\u6570\u636E\u4ECD\u7136\u662F\u88AB\u4FDD\u5B58\u5728\u4E00\u5F20\u4E34\u65F6\u8868\u4E2D\u3002
SELECT * FROM user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |   900 |
|  2 | b    |  1100 |
+----+------+-------+

-- \u6D4B\u8BD5\u56DE\u6EDA
ROLLBACK;

SELECT * FROM user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |  1000 |
|  2 | b    |  1000 |
+----+------+-------+
</code></pre></div><p>\u4ECD\u7136\u4F7F\u7528 <code>COMMIT</code> \u63D0\u4EA4\u6570\u636E\uFF0C\u63D0\u4EA4\u540E\u65E0\u6CD5\u518D\u53D1\u751F\u672C\u6B21\u4E8B\u52A1\u7684\u56DE\u6EDA\u3002</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>BEGIN;
UPDATE user set money = money - 100 WHERE name = &#39;a&#39;;
UPDATE user set money = money + 100 WHERE name = &#39;b&#39;;

SELECT * FROM user;
+----+------+-------+
| id | name | money |
+----+------+-------+
|  1 | a    |   900 |
|  2 | b    |  1100 |
+----+------+-------+

-- \u63D0\u4EA4\u6570\u636E
COMMIT;

-- \u6D4B\u8BD5\u56DE\u6EDA\uFF08\u65E0\u6548\uFF0C\u56E0\u4E3A\u8868\u7684\u6570\u636E\u5DF2\u7ECF\u88AB\u63D0\u4EA4\uFF09
ROLLBACK;
</code></pre></div><h3 id="\u4E8B\u52A1\u7684-acid-\u7279\u5F81\u4E0E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1\u7684-acid-\u7279\u5F81\u4E0E\u4F7F\u7528" aria-hidden="true">#</a> \u4E8B\u52A1\u7684 ACID \u7279\u5F81\u4E0E\u4F7F\u7528</h3><p><strong>\u4E8B\u52A1\u7684\u56DB\u5927\u7279\u5F81\uFF1A</strong></p><ul><li><strong>A \u539F\u5B50\u6027</strong>\uFF1A\u4E8B\u52A1\u662F\u6700\u5C0F\u7684\u5355\u4F4D\uFF0C\u4E0D\u53EF\u4EE5\u518D\u5206\u5272\uFF1B</li><li><strong>C \u4E00\u81F4\u6027</strong>\uFF1A\u8981\u6C42\u540C\u4E00\u4E8B\u52A1\u4E2D\u7684 SQL \u8BED\u53E5\uFF0C\u5FC5\u987B\u4FDD\u8BC1\u540C\u65F6\u6210\u529F\u6216\u8005\u5931\u8D25\uFF1B</li><li><strong>I \u9694\u79BB\u6027</strong>\uFF1A\u4E8B\u52A11 \u548C \u4E8B\u52A12 \u4E4B\u95F4\u662F\u5177\u6709\u9694\u79BB\u6027\u7684\uFF1B</li><li><strong>D \u6301\u4E45\u6027</strong>\uFF1A\u4E8B\u52A1\u4E00\u65E6\u7ED3\u675F ( <code>COMMIT</code> ) \uFF0C\u5C31\u4E0D\u53EF\u4EE5\u518D\u8FD4\u56DE\u4E86 ( <code>ROLLBACK</code> ) \u3002</li></ul><h3 id="\u4E8B\u52A1\u7684\u9694\u79BB\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1\u7684\u9694\u79BB\u6027" aria-hidden="true">#</a> \u4E8B\u52A1\u7684\u9694\u79BB\u6027</h3><p><strong>\u4E8B\u52A1\u7684\u9694\u79BB\u6027\u53EF\u5206\u4E3A\u56DB\u79CD ( \u6027\u80FD\u4ECE\u4F4E\u5230\u9AD8 )</strong> \uFF1A</p><ol><li><p><strong>READ UNCOMMITTED ( \u8BFB\u53D6\u672A\u63D0\u4EA4 )</strong></p><p>\u5982\u679C\u6709\u591A\u4E2A\u4E8B\u52A1\uFF0C\u90A3\u4E48\u4EFB\u610F\u4E8B\u52A1\u90FD\u53EF\u4EE5\u770B\u89C1\u5176\u4ED6\u4E8B\u52A1\u7684<strong>\u672A\u63D0\u4EA4\u6570\u636E</strong>\u3002</p></li><li><p><strong>READ COMMITTED ( \u8BFB\u53D6\u5DF2\u63D0\u4EA4 )</strong></p><p>\u53EA\u80FD\u8BFB\u53D6\u5230\u5176\u4ED6\u4E8B\u52A1<strong>\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6570\u636E</strong>\u3002</p></li><li><p><strong>REPEATABLE READ ( \u53EF\u88AB\u91CD\u590D\u8BFB )</strong></p><p>\u5982\u679C\u6709\u591A\u4E2A\u8FDE\u63A5\u90FD\u5F00\u542F\u4E86\u4E8B\u52A1\uFF0C\u90A3\u4E48\u4E8B\u52A1\u4E4B\u95F4\u4E0D\u80FD\u5171\u4EAB\u6570\u636E\u8BB0\u5F55\uFF0C\u5426\u5219\u53EA\u80FD\u5171\u4EAB\u5DF2\u63D0\u4EA4\u7684\u8BB0\u5F55\u3002</p></li><li><p><strong>SERIALIZABLE ( \u4E32\u884C\u5316 )</strong></p><p>\u6240\u6709\u7684\u4E8B\u52A1\u90FD\u4F1A\u6309\u7167<strong>\u56FA\u5B9A\u987A\u5E8F\u6267\u884C</strong>\uFF0C\u6267\u884C\u5B8C\u4E00\u4E2A\u4E8B\u52A1\u540E\u518D\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u4E2A\u4E8B\u52A1\u7684<strong>\u5199\u5165\u64CD\u4F5C</strong>\u3002</p></li></ol><p>\u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93\u7684\u9ED8\u8BA4\u9694\u79BB\u7EA7\u522B\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- MySQL 8.x, GLOBAL \u8868\u793A\u7CFB\u7EDF\u7EA7\u522B\uFF0C\u4E0D\u52A0\u8868\u793A\u4F1A\u8BDD\u7EA7\u522B\u3002
SELECT @@GLOBAL.TRANSACTION_ISOLATION;
SELECT @@TRANSACTION_ISOLATION;
+--------------------------------+
| @@GLOBAL.TRANSACTION_ISOLATION |
+--------------------------------+
| REPEATABLE-READ                | -- MySQL\u7684\u9ED8\u8BA4\u9694\u79BB\u7EA7\u522B\uFF0C\u53EF\u4EE5\u91CD\u590D\u8BFB\u3002
+--------------------------------+

-- MySQL 5.x
SELECT @@GLOBAL.TX_ISOLATION;
SELECT @@TX_ISOLATION;
</code></pre></div><p>\u4FEE\u6539\u9694\u79BB\u7EA7\u522B\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u8BBE\u7F6E\u7CFB\u7EDF\u9694\u79BB\u7EA7\u522B\uFF0CLEVEL \u540E\u9762\u8868\u793A\u8981\u8BBE\u7F6E\u7684\u9694\u79BB\u7EA7\u522B (READ UNCOMMITTED)\u3002
SET GLOBAL TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

-- \u67E5\u8BE2\u7CFB\u7EDF\u9694\u79BB\u7EA7\u522B\uFF0C\u53D1\u73B0\u5DF2\u7ECF\u88AB\u4FEE\u6539\u3002
SELECT @@GLOBAL.TRANSACTION_ISOLATION;
+--------------------------------+
| @@GLOBAL.TRANSACTION_ISOLATION |
+--------------------------------+
| READ-UNCOMMITTED               |
+--------------------------------+
</code></pre></div><h4 id="\u810F\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u810F\u8BFB" aria-hidden="true">#</a> \u810F\u8BFB</h4><p>\u6D4B\u8BD5 <strong>READ UNCOMMITTED ( \u8BFB\u53D6\u672A\u63D0\u4EA4 )</strong> \u7684\u9694\u79BB\u6027\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>INSERT INTO user VALUES (3, &#39;\u5C0F\u660E&#39;, 1000);
INSERT INTO user VALUES (4, &#39;\u6DD8\u5B9D\u5E97&#39;, 1000);

SELECT * FROM user;
+----+-----------+-------+
| id | name      | money |
+----+-----------+-------+
|  1 | a         |   900 |
|  2 | b         |  1100 |
|  3 | \u5C0F\u660E      |  1000 |
|  4 | \u6DD8\u5B9D\u5E97    |  1000 |
+----+-----------+-------+

-- \u5F00\u542F\u4E00\u4E2A\u4E8B\u52A1\u64CD\u4F5C\u6570\u636E
-- \u5047\u8BBE\u5C0F\u660E\u5728\u6DD8\u5B9D\u5E97\u4E70\u4E86\u4E00\u53CC800\u5757\u94B1\u7684\u978B\u5B50\uFF1A
START TRANSACTION;
UPDATE user SET money = money - 800 WHERE name = &#39;\u5C0F\u660E&#39;;
UPDATE user SET money = money + 800 WHERE name = &#39;\u6DD8\u5B9D\u5E97&#39;;

-- \u7136\u540E\u6DD8\u5B9D\u5E97\u5728\u53E6\u4E00\u65B9\u67E5\u8BE2\u7ED3\u679C\uFF0C\u53D1\u73B0\u94B1\u5DF2\u5230\u8D26\u3002
SELECT * FROM user;
+----+-----------+-------+
| id | name      | money |
+----+-----------+-------+
|  1 | a         |   900 |
|  2 | b         |  1100 |
|  3 | \u5C0F\u660E      |   200 |
|  4 | \u6DD8\u5B9D\u5E97    |  1800 |
+----+-----------+-------+
</code></pre></div><p>\u7531\u4E8E\u5C0F\u660E\u7684\u8F6C\u8D26\u662F\u5728\u65B0\u5F00\u542F\u7684\u4E8B\u52A1\u4E0A\u8FDB\u884C\u64CD\u4F5C\u7684\uFF0C\u800C\u8BE5\u64CD\u4F5C\u7684\u7ED3\u679C\u662F\u53EF\u4EE5\u88AB\u5176\u4ED6\u4E8B\u52A1\uFF08\u53E6\u4E00\u65B9\u7684\u6DD8\u5B9D\u5E97\uFF09\u770B\u89C1\u7684\uFF0C\u56E0\u6B64\u6DD8\u5B9D\u5E97\u7684\u67E5\u8BE2\u7ED3\u679C\u662F\u6B63\u786E\u7684\uFF0C\u6DD8\u5B9D\u5E97\u786E\u8BA4\u5230\u8D26\u3002\u4F46\u5C31\u5728\u8FD9\u65F6\uFF0C\u5982\u679C\u5C0F\u660E\u5728\u5B83\u6240\u5904\u7684\u4E8B\u52A1\u4E0A\u53C8\u6267\u884C\u4E86 <code>ROLLBACK</code> \u547D\u4EE4\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u5C0F\u660E\u6240\u5904\u7684\u4E8B\u52A1
ROLLBACK;

-- \u6B64\u65F6\u65E0\u8BBA\u5BF9\u65B9\u662F\u8C01\uFF0C\u5982\u679C\u518D\u53BB\u67E5\u8BE2\u7ED3\u679C\u5C31\u4F1A\u53D1\u73B0\uFF1A
SELECT * FROM user;
+----+-----------+-------+
| id | name      | money |
+----+-----------+-------+
|  1 | a         |   900 |
|  2 | b         |  1100 |
|  3 | \u5C0F\u660E      |  1000 |
|  4 | \u6DD8\u5B9D\u5E97    |  1000 |
+----+-----------+-------+
</code></pre></div><p>\u8FD9\u5C31\u662F\u6240\u8C13\u7684<strong>\u810F\u8BFB</strong>\uFF0C\u4E00\u4E2A\u4E8B\u52A1\u8BFB\u53D6\u5230\u53E6\u5916\u4E00\u4E2A\u4E8B\u52A1\u8FD8\u672A\u63D0\u4EA4\u7684\u6570\u636E\u3002\u8FD9\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u662F\u4E0D\u5141\u8BB8\u51FA\u73B0\u7684\u3002</p><h4 id="\u8BFB\u53D6\u5DF2\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u53D6\u5DF2\u63D0\u4EA4" aria-hidden="true">#</a> \u8BFB\u53D6\u5DF2\u63D0\u4EA4</h4><p>\u628A\u9694\u79BB\u7EA7\u522B\u8BBE\u7F6E\u4E3A <strong>READ COMMITTED</strong> \uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SET GLOBAL TRANSACTION ISOLATION LEVEL READ COMMITTED;
SELECT @@GLOBAL.TRANSACTION_ISOLATION;
+--------------------------------+
| @@GLOBAL.TRANSACTION_ISOLATION |
+--------------------------------+
| READ-COMMITTED                 |
+--------------------------------+
</code></pre></div><p>\u8FD9\u6837\uFF0C\u518D\u6709\u65B0\u7684\u4E8B\u52A1\u8FDE\u63A5\u8FDB\u6765\u65F6\uFF0C\u5B83\u4EEC\u5C31\u53EA\u80FD\u67E5\u8BE2\u5230\u5DF2\u7ECF\u63D0\u4EA4\u8FC7\u7684\u4E8B\u52A1\u6570\u636E\u4E86\u3002\u4F46\u662F\u5BF9\u4E8E\u5F53\u524D\u4E8B\u52A1\u6765\u8BF4\uFF0C\u5B83\u4EEC\u770B\u5230\u7684\u8FD8\u662F\u672A\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u6B63\u5728\u64CD\u4F5C\u6570\u636E\u4E8B\u52A1\uFF08\u5F53\u524D\u4E8B\u52A1\uFF09
START TRANSACTION;
UPDATE user SET money = money - 800 WHERE name = &#39;\u5C0F\u660E&#39;;
UPDATE user SET money = money + 800 WHERE name = &#39;\u6DD8\u5B9D\u5E97&#39;;

-- \u867D\u7136\u9694\u79BB\u7EA7\u522B\u88AB\u8BBE\u7F6E\u4E3A\u4E86 READ COMMITTED\uFF0C\u4F46\u5728\u5F53\u524D\u4E8B\u52A1\u4E2D\uFF0C
-- \u5B83\u770B\u5230\u7684\u4ECD\u7136\u662F\u6570\u636E\u8868\u4E2D\u4E34\u65F6\u6539\u53D8\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u771F\u6B63\u63D0\u4EA4\u8FC7\u7684\u6570\u636E\u3002
SELECT * FROM user;
+----+-----------+-------+
| id | name      | money |
+----+-----------+-------+
|  1 | a         |   900 |
|  2 | b         |  1100 |
|  3 | \u5C0F\u660E      |   200 |
|  4 | \u6DD8\u5B9D\u5E97    |  1800 |
+----+-----------+-------+


-- \u5047\u8BBE\u6B64\u65F6\u5728\u8FDC\u7A0B\u5F00\u542F\u4E86\u4E00\u4E2A\u65B0\u4E8B\u52A1\uFF0C\u8FDE\u63A5\u5230\u6570\u636E\u5E93\u3002
$ mysql -u root -p12345612

-- \u6B64\u65F6\u8FDC\u7A0B\u8FDE\u63A5\u67E5\u8BE2\u5230\u7684\u6570\u636E\u53EA\u80FD\u662F\u5DF2\u7ECF\u63D0\u4EA4\u8FC7\u7684
SELECT * FROM user;
+----+-----------+-------+
| id | name      | money |
+----+-----------+-------+
|  1 | a         |   900 |
|  2 | b         |  1100 |
|  3 | \u5C0F\u660E      |  1000 |
|  4 | \u6DD8\u5B9D\u5E97    |  1000 |
+----+-----------+-------+
</code></pre></div><p>\u4F46\u662F\u8FD9\u6837\u8FD8\u6709\u95EE\u9898\uFF0C\u90A3\u5C31\u662F\u5047\u8BBE\u4E00\u4E2A\u4E8B\u52A1\u5728\u64CD\u4F5C\u6570\u636E\u65F6\uFF0C\u5176\u4ED6\u4E8B\u52A1\u5E72\u6270\u4E86\u8FD9\u4E2A\u4E8B\u52A1\u7684\u6570\u636E\u3002\u4F8B\u5982\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u5C0F\u5F20\u5728\u67E5\u8BE2\u6570\u636E\u7684\u65F6\u5019\u53D1\u73B0\uFF1A
SELECT * FROM user;
+----+-----------+-------+
| id | name      | money |
+----+-----------+-------+
|  1 | a         |   900 |
|  2 | b         |  1100 |
|  3 | \u5C0F\u660E      |   200 |
|  4 | \u6DD8\u5B9D\u5E97    |  1800 |
+----+-----------+-------+

-- \u5728\u5C0F\u5F20\u6C42\u8868\u7684 money \u5E73\u5747\u503C\u4E4B\u524D\uFF0C\u5C0F\u738B\u505A\u4E86\u4E00\u4E2A\u64CD\u4F5C\uFF1A
START TRANSACTION;
INSERT INTO user VALUES (5, &#39;c&#39;, 100);
COMMIT;

-- \u6B64\u65F6\u8868\u7684\u771F\u5B9E\u6570\u636E\u662F\uFF1A
SELECT * FROM user;
+----+-----------+-------+
| id | name      | money |
+----+-----------+-------+
|  1 | a         |   900 |
|  2 | b         |  1100 |
|  3 | \u5C0F\u660E      |  1000 |
|  4 | \u6DD8\u5B9D\u5E97    |  1000 |
|  5 | c         |   100 |
+----+-----------+-------+

-- \u8FD9\u65F6\u5C0F\u5F20\u518D\u6C42\u5E73\u5747\u503C\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u51FA\u73B0\u8BA1\u7B97\u4E0D\u76F8\u7B26\u5408\u7684\u60C5\u51B5\uFF1A
SELECT AVG(money) FROM user;
+------------+
| AVG(money) |
+------------+
|  820.0000  |
+------------+
</code></pre></div><p>\u867D\u7136 <strong>READ COMMITTED</strong> \u8BA9\u6211\u4EEC\u53EA\u80FD\u8BFB\u53D6\u5230\u5176\u4ED6\u4E8B\u52A1\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u4F46\u8FD8\u662F\u4F1A\u51FA\u73B0\u95EE\u9898\uFF0C\u5C31\u662F<strong>\u5728\u8BFB\u53D6\u540C\u4E00\u4E2A\u8868\u7684\u6570\u636E\u65F6\uFF0C\u53EF\u80FD\u4F1A\u53D1\u751F\u524D\u540E\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u3002<strong>\u8FD9\u88AB\u79F0\u4E3A</strong>\u4E0D\u53EF\u91CD\u590D\u8BFB\u73B0\u8C61 ( READ COMMITTED )</strong> \u3002</p><h4 id="\u5E7B\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u5E7B\u8BFB" aria-hidden="true">#</a> \u5E7B\u8BFB</h4><p>\u5C06\u9694\u79BB\u7EA7\u522B\u8BBE\u7F6E\u4E3A <strong>REPEATABLE READ ( \u53EF\u88AB\u91CD\u590D\u8BFB\u53D6 )</strong> :</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SET GLOBAL TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SELECT @@GLOBAL.TRANSACTION_ISOLATION;
+--------------------------------+
| @@GLOBAL.TRANSACTION_ISOLATION |
+--------------------------------+
| REPEATABLE-READ                |
+--------------------------------+
</code></pre></div><p>\u6D4B\u8BD5 <strong>REPEATABLE READ</strong> \uFF0C\u5047\u8BBE\u5728\u4E24\u4E2A\u4E0D\u540C\u7684\u8FDE\u63A5\u4E0A\u5206\u522B\u6267\u884C <code>START TRANSACTION</code> :</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- \u5C0F\u5F20 - \u6210\u90FD</span>
<span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">user</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- \u5C0F\u738B - \u5317\u4EAC</span>
<span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>

<span class="token comment">-- \u5C0F\u5F20 - \u6210\u90FD</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5F53\u524D\u4E8B\u52A1\u5F00\u542F\u540E\uFF0C\u6CA1\u63D0\u4EA4\u4E4B\u524D\uFF0C\u67E5\u8BE2\u4E0D\u5230\uFF0C\u63D0\u4EA4\u540E\u53EF\u4EE5\u88AB\u67E5\u8BE2\u5230\u3002\u4F46\u662F\uFF0C\u5728\u63D0\u4EA4\u4E4B\u524D\u5176\u4ED6\u4E8B\u52A1\u88AB\u5F00\u542F\u4E86\uFF0C\u90A3\u4E48\u5728\u8FD9\u6761\u4E8B\u52A1\u7EBF\u4E0A\uFF0C\u5C31\u4E0D\u4F1A\u67E5\u8BE2\u5230\u5F53\u524D\u6709\u64CD\u4F5C\u4E8B\u52A1\u7684\u8FDE\u63A5\u3002\u76F8\u5F53\u4E8E\u5F00\u8F9F\u51FA\u4E00\u6761\u5355\u72EC\u7684\u7EBF\u7A0B\u3002</p><p>\u65E0\u8BBA\u5C0F\u5F20\u662F\u5426\u6267\u884C\u8FC7 <code>COMMIT</code> \uFF0C\u5728\u5C0F\u738B\u8FD9\u8FB9\uFF0C\u90FD\u4E0D\u4F1A\u67E5\u8BE2\u5230\u5C0F\u5F20\u7684\u4E8B\u52A1\u8BB0\u5F55\uFF0C\u800C\u662F\u53EA\u4F1A\u67E5\u8BE2\u5230\u81EA\u5DF1\u6240\u5904\u4E8B\u52A1\u7684\u8BB0\u5F55\uFF1A</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+-----------+-------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> name      <span class="token operator">|</span> money <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+-----------+-------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> a         <span class="token operator">|</span>   <span class="token number">900</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> b         <span class="token operator">|</span>  <span class="token number">1100</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span> \u5C0F\u660E      <span class="token operator">|</span>  <span class="token number">1000</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">4</span> <span class="token operator">|</span> \u6DD8\u5B9D\u5E97    <span class="token operator">|</span>  <span class="token number">1000</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">5</span> <span class="token operator">|</span> c         <span class="token operator">|</span>   <span class="token number">100</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+-----------+-------+</span>
</code></pre></div><p>\u8FD9\u662F<strong>\u56E0\u4E3A\u5C0F\u738B\u5728\u6B64\u4E4B\u524D\u5F00\u542F\u4E86\u4E00\u4E2A\u65B0\u7684\u4E8B\u52A1 ( <code>START TRANSACTION</code> ) <strong>\uFF0C\u90A3\u4E48</strong>\u5728\u4ED6\u7684\u8FD9\u6761\u65B0\u4E8B\u52A1\u7684\u7EBF\u4E0A\uFF0C\u8DDF\u5176\u4ED6\u4E8B\u52A1\u662F\u6CA1\u6709\u8054\u7CFB\u7684</strong>\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6B64\u65F6\u5982\u679C\u5176\u4ED6\u4E8B\u52A1\u6B63\u5728\u64CD\u4F5C\u6570\u636E\uFF0C\u5B83\u662F\u4E0D\u77E5\u9053\u7684\u3002</p><p>\u7136\u800C\u4E8B\u5B9E\u662F\uFF0C\u5728\u771F\u5B9E\u7684\u6570\u636E\u8868\u4E2D\uFF0C\u5C0F\u5F20\u5DF2\u7ECF\u63D2\u5165\u4E86\u4E00\u6761\u6570\u636E\u3002\u4F46\u662F\u5C0F\u738B\u6B64\u65F6\u5E76\u4E0D\u77E5\u9053\uFF0C\u4E5F\u63D2\u5165\u4E86\u540C\u4E00\u6761\u6570\u636E\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\u5462\uFF1F</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">user</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- ERROR 1062 (23000): Duplicate entry &#39;6&#39; for key &#39;PRIMARY&#39;</span>
</code></pre></div><p>\u62A5\u9519\u4E86\uFF0C\u64CD\u4F5C\u88AB\u544A\u77E5\u5DF2\u5B58\u5728\u4E3B\u952E\u4E3A <code>6</code> \u7684\u5B57\u6BB5\u3002\u8FD9\u79CD\u73B0\u8C61\u4E5F\u88AB\u79F0\u4E3A<strong>\u5E7B\u8BFB\uFF0C\u4E00\u4E2A\u4E8B\u52A1\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u4E0D\u80FD\u88AB\u5176\u4ED6\u4E8B\u52A1\u8BFB\u53D6\u5230</strong>\u3002</p><h4 id="\u4E32\u884C\u5316" tabindex="-1"><a class="header-anchor" href="#\u4E32\u884C\u5316" aria-hidden="true">#</a> \u4E32\u884C\u5316</h4><p>\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u6240\u6709\u4E8B\u52A1\u7684<strong>\u5199\u5165\u64CD\u4F5C</strong>\u5168\u90FD\u662F\u4E32\u884C\u5316\u7684\u3002\u4EC0\u4E48\u610F\u601D\uFF1F\u628A\u9694\u79BB\u7EA7\u522B\u4FEE\u6539\u6210 <strong>SERIALIZABLE</strong> :</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>SET GLOBAL TRANSACTION ISOLATION LEVEL SERIALIZABLE;
SELECT @@GLOBAL.TRANSACTION_ISOLATION;
+--------------------------------+
| @@GLOBAL.TRANSACTION_ISOLATION |
+--------------------------------+
| SERIALIZABLE                   |
+--------------------------------+
</code></pre></div><p>\u8FD8\u662F\u62FF\u5C0F\u5F20\u548C\u5C0F\u738B\u6765\u4E3E\u4F8B\uFF1A</p><div class="language-mysql ext-mysql"><pre class="language-mysql"><code>-- \u5C0F\u5F20 - \u6210\u90FD
START TRANSACTION;

-- \u5C0F\u738B - \u5317\u4EAC
START TRANSACTION;

-- \u5F00\u542F\u4E8B\u52A1\u4E4B\u524D\u5148\u67E5\u8BE2\u8868\uFF0C\u51C6\u5907\u64CD\u4F5C\u6570\u636E\u3002
SELECT * FROM user;
+----+-----------+-------+
| id | name      | money |
+----+-----------+-------+
|  1 | a         |   900 |
|  2 | b         |  1100 |
|  3 | \u5C0F\u660E      |  1000 |
|  4 | \u6DD8\u5B9D\u5E97    |  1000 |
|  5 | c         |   100 |
|  6 | d         |  1000 |
+----+-----------+-------+

-- \u53D1\u73B0\u6CA1\u6709 7 \u53F7\u738B\u5C0F\u82B1\uFF0C\u4E8E\u662F\u63D2\u5165\u4E00\u6761\u6570\u636E\uFF1A
INSERT INTO user VALUES (7, &#39;\u738B\u5C0F\u82B1&#39;, 1000);
</code></pre></div><p>\u6B64\u65F6\u4F1A\u53D1\u751F\u4EC0\u4E48\u5462\uFF1F\u7531\u4E8E\u73B0\u5728\u7684\u9694\u79BB\u7EA7\u522B\u662F <strong>SERIALIZABLE ( \u4E32\u884C\u5316 )</strong> \uFF0C\u4E32\u884C\u5316\u7684\u610F\u601D\u5C31\u662F\uFF1A\u5047\u8BBE\u628A\u6240\u6709\u7684\u4E8B\u52A1\u90FD\u653E\u5728\u4E00\u4E2A\u4E32\u884C\u7684\u961F\u5217\u4E2D\uFF0C\u90A3\u4E48\u6240\u6709\u7684\u4E8B\u52A1\u90FD\u4F1A\u6309\u7167<strong>\u56FA\u5B9A\u987A\u5E8F\u6267\u884C</strong>\uFF0C\u6267\u884C\u5B8C\u4E00\u4E2A\u4E8B\u52A1\u540E\u518D\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u4E2A\u4E8B\u52A1\u7684<strong>\u5199\u5165\u64CD\u4F5C</strong> ( <strong>\u8FD9\u610F\u5473\u7740\u961F\u5217\u4E2D\u540C\u65F6\u53EA\u80FD\u6267\u884C\u4E00\u4E2A\u4E8B\u52A1\u7684\u5199\u5165\u64CD\u4F5C</strong> ) \u3002</p><p>\u6839\u636E\u8FD9\u4E2A\u89E3\u91CA\uFF0C\u5C0F\u738B\u5728\u63D2\u5165\u6570\u636E\u65F6\uFF0C\u4F1A\u51FA\u73B0\u7B49\u5F85\u72B6\u6001\uFF0C\u76F4\u5230\u5C0F\u5F20\u6267\u884C <code>COMMIT</code> \u7ED3\u675F\u5B83\u6240\u5904\u7684\u4E8B\u52A1\uFF0C\u6216\u8005\u51FA\u73B0\u7B49\u5F85\u8D85\u65F6\u3002</p>`,261);function o(d,c){return a}var l=e(s,[["render",o]]);export{l as default};
