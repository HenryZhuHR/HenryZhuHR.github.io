import{_ as e,c as t,o,a2 as i}from"./chunks/framework.CKTzbFpk.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"development/linux/command/cp.md","filePath":"development/linux/command/cp.md","lastUpdated":1715354557000}'),n={name:"development/linux/command/cp.md"},r=i(`<p>Linux命令参数详细解析-cp 2017-12-24 953 举报 简介： 用法：cp [选项]... [-T] 源文件 目标文件 　或：cp [选项]... 源文件... 目录 　或：cp [选项]... -t 目录 源文件. 用法：cp [选项]... [-T] 源文件 目标文件 　或：cp [选项]... 源文件... 目录 　或：cp [选项]... -t 目录 源文件... Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY</p><p>-a, --archive 等于-dR --preserve=all --attributes-only 仅复制属性而不复制数据 --backup[=CONTROL 为每个已存在的目标文件创建备份</p><p>-b 类似--backup 但不接受参数 --copy-contents 在递归处理是复制特殊文件内容</p><p>-d 等于--no-dereference --preserve=links</p><p>-f, --force (强制) if an existing destination file cannot be opened, remove it and try again (this option is ignored when the -n option is also used)</p><p>-i, --interactive (互动) prompt before overwrite (overrides a previous -n option)</p><p>-H follow command-line symbolic links in SOURCE</p><p>-l, --link hard link files instead of copying 链接硬链接文件而不是复制</p><p>-L, --dereference always follow symbolic links in SOURCE</p><p>-n, --no-clobber 不要覆盖已存在的文件(使前面的 -i 选项失效)</p><p>-P, --no-dereference 不跟随源文件中的符号链接</p><p>-p 等于--preserve=模式,所有权,时间戳 --preserve[=属性列表 保持指定的属性(默认：模式,所有权,时间戳)，如果 可能保持附加属性：环境、链接、xattr 等</p><p>-c deprecated, same as --preserve=context --sno-preserve=属性列表 不保留指定的文件属性 --parents 复制前在目标目录创建来源文件路径中的所有目录</p><p>-R, -r, --recursive 递归复制目录及其子目录内的所有内容 --reflink[=WHEN] 控制克隆/CoW 副本。请查看下面的内如。 --remove-destination 尝试打开目标文件前先删除已存在的目的地 文件 (相对于 --force 选项) --sparse=WHEN 控制创建稀疏文件的方式 --strip-trailing-slashes 删除参数中所有源文件/目录末端的斜杠</p><p>-s, --symbolic-link 只创建符号链接而不复制文件</p><p>-S, --suffix=后缀 自行指定备份文件的后缀</p><p>-t, --target-directory=目录 将所有参数指定的源文件/目录 复制至目标目录</p><p>-T, --no-target-directory 将目标目录视作普通文件</p><p>-u, --update 只在源文件比目标文件新，或目标文件 不存在时才进行复制</p><p>-v, --verbose 显示详细的进行步骤</p><p>-x, --one-file-system 不跨越文件系统进行操作</p><p>-Z, --context[=CTX] set SELinux security context of destination file to default type, or to CTX if specified</p><p>--help 显示此帮助信息并退出 --version 显示版本信息并退出</p><p>Last login: Thu May 11 10:23:37 on ttys000 (base) henryzhu@MacBook-Pro-14-Powered-by-M1-Pro [10时33分39秒] [~] -&gt; % cp -h cp: illegal option -- h usage: cp [-R [-H | -L | -P]] [-fi | -n] [-aclpsvXx] source_file target_file cp [-R [-H | -L | -P]] [-fi | -n] [-aclpsvXx] source_file ... target_directory (base) henryzhu@MacBook-Pro-14-Powered-by-M1-Pro [10时33分41秒] [~] -&gt; % man cp</p><p>NAME cp – copy files</p><p>SYNOPSIS cp [-R [-H | -L | -P]] [-fi | -n] [-alpsvXx] source_file target_file cp [-R [-H | -L | -P]] [-fi | -n] [-alpsvXx] source_file ... target_directory cp [-f | -i | -n] [-alPpsvx] source_file target_file cp [-f | -i | -n] [-alPpsvx] source_file ... target_directory</p><p>DESCRIPTION In the first synopsis form, the cp utility copies the contents of the source_file to the target_file. In the second synopsis form, the contents of each named source_file is copied to the destination target_directory. The names of the files themselves are not changed. If cp detects an attempt to copy a file to itself, the copy will fail.</p><pre><code> The following options are available:

 -H    If the -R option is specified, symbolic links on the command line
       are followed.  (Symbolic links encountered in the tree traversal
       are not followed.)

 -L    If the -R option is specified, all symbolic links are followed.

 -P    No symbolic links are followed.  This is the default if the -R
       option is specified.

 -R    If source_file designates a directory, cp copies the directory and
       the entire subtree connected at that point.  If the source_file
       ends in a /, the contents of the directory are copied rather than
       the directory itself.  This option also causes symbolic links to be
       copied, rather than indirected through, and for cp to create
       special files rather than copying them as normal files.  Created
       directories have the same mode as the corresponding source
       directory, unmodified by the process&#39; umask.

       In -R mode, cp will continue copying even if errors are detected.

       Note that cp copies hard linked files as separate files.  If you
       need to preserve hard links, consider using tar(1), cpio(1), or
       pax(1) instead.

 -a    Archive mode.  Same as -RpP options. Preserves structure and
       attributes of files but not directory structure.

 -f    If the destination file cannot be opened, remove it and create a
       new file, without prompting for confirmation regardless of its
       permissions.  (The -f option overrides any previous -n option.)

       The target file is not unlinked before the copy.  Thus, any
       existing access rights will be retained.

 -i    Cause cp to write a prompt to the standard error output before
       copying a file that would overwrite an existing file.  If the
       response from the standard input begins with the character ‘y’ or
       ‘Y’, the file copy is attempted.  (The -i option overrides any
       previous -n option.)

 -l    Create hard links to regular files in a hierarchy instead of
</code></pre><p>:</p>`,29),s=[r];function p(a,c,l,d,f,h){return o(),t("div",null,s)}const y=e(n,[["render",p]]);export{m as __pageData,y as default};
