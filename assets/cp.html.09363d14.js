import{_ as e,o as t,c as o,b as i}from"./app.6a7e2086.js";const n={},r=i(`<p>Linux\u547D\u4EE4\u53C2\u6570\u8BE6\u7EC6\u89E3\u6790-cp 2017-12-24 953 \u4E3E\u62A5 \u7B80\u4ECB\uFF1A \u7528\u6CD5\uFF1Acp [\u9009\u9879]... [-T] \u6E90\u6587\u4EF6 \u76EE\u6807\u6587\u4EF6 \u3000\u6216\uFF1Acp [\u9009\u9879]... \u6E90\u6587\u4EF6... \u76EE\u5F55 \u3000\u6216\uFF1Acp [\u9009\u9879]... -t \u76EE\u5F55 \u6E90\u6587\u4EF6. \u7528\u6CD5\uFF1Acp [\u9009\u9879]... [-T] \u6E90\u6587\u4EF6 \u76EE\u6807\u6587\u4EF6 \u3000\u6216\uFF1Acp [\u9009\u9879]... \u6E90\u6587\u4EF6... \u76EE\u5F55 \u3000\u6216\uFF1Acp [\u9009\u9879]... -t \u76EE\u5F55 \u6E90\u6587\u4EF6... Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY</p><p>-a, --archive \u7B49\u4E8E-dR --preserve=all --attributes-only \u4EC5\u590D\u5236\u5C5E\u6027\u800C\u4E0D\u590D\u5236\u6570\u636E --backup[=CONTROL \u4E3A\u6BCF\u4E2A\u5DF2\u5B58\u5728\u7684\u76EE\u6807\u6587\u4EF6\u521B\u5EFA\u5907\u4EFD</p><p>-b \u7C7B\u4F3C--backup \u4F46\u4E0D\u63A5\u53D7\u53C2\u6570 --copy-contents \u5728\u9012\u5F52\u5904\u7406\u662F\u590D\u5236\u7279\u6B8A\u6587\u4EF6\u5185\u5BB9</p><p>-d \u7B49\u4E8E--no-dereference --preserve=links</p><p>-f, --force (\u5F3A\u5236) if an existing destination file cannot be opened, remove it and try again (this option is ignored when the -n option is also used)</p><p>-i, --interactive (\u4E92\u52A8) prompt before overwrite (overrides a previous -n option)</p><p>-H follow command-line symbolic links in SOURCE</p><p>-l, --link hard link files instead of copying \u94FE\u63A5\u786C\u94FE\u63A5\u6587\u4EF6\u800C\u4E0D\u662F\u590D\u5236</p><p>-L, --dereference always follow symbolic links in SOURCE</p><p>-n, --no-clobber \u4E0D\u8981\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u6587\u4EF6(\u4F7F\u524D\u9762\u7684 -i \u9009\u9879\u5931\u6548)</p><p>-P, --no-dereference \u4E0D\u8DDF\u968F\u6E90\u6587\u4EF6\u4E2D\u7684\u7B26\u53F7\u94FE\u63A5</p><p>-p \u7B49\u4E8E--preserve=\u6A21\u5F0F,\u6240\u6709\u6743,\u65F6\u95F4\u6233 --preserve[=\u5C5E\u6027\u5217\u8868 \u4FDD\u6301\u6307\u5B9A\u7684\u5C5E\u6027(\u9ED8\u8BA4\uFF1A\u6A21\u5F0F,\u6240\u6709\u6743,\u65F6\u95F4\u6233)\uFF0C\u5982\u679C \u53EF\u80FD\u4FDD\u6301\u9644\u52A0\u5C5E\u6027\uFF1A\u73AF\u5883\u3001\u94FE\u63A5\u3001xattr \u7B49</p><p>-c deprecated, same as --preserve=context --sno-preserve=\u5C5E\u6027\u5217\u8868 \u4E0D\u4FDD\u7559\u6307\u5B9A\u7684\u6587\u4EF6\u5C5E\u6027 --parents \u590D\u5236\u524D\u5728\u76EE\u6807\u76EE\u5F55\u521B\u5EFA\u6765\u6E90\u6587\u4EF6\u8DEF\u5F84\u4E2D\u7684\u6240\u6709\u76EE\u5F55</p><p>-R, -r, --recursive \u9012\u5F52\u590D\u5236\u76EE\u5F55\u53CA\u5176\u5B50\u76EE\u5F55\u5185\u7684\u6240\u6709\u5185\u5BB9 --reflink[=WHEN] \u63A7\u5236\u514B\u9686/CoW \u526F\u672C\u3002\u8BF7\u67E5\u770B\u4E0B\u9762\u7684\u5185\u5982\u3002 --remove-destination \u5C1D\u8BD5\u6253\u5F00\u76EE\u6807\u6587\u4EF6\u524D\u5148\u5220\u9664\u5DF2\u5B58\u5728\u7684\u76EE\u7684\u5730 \u6587\u4EF6 (\u76F8\u5BF9\u4E8E --force \u9009\u9879) --sparse=WHEN \u63A7\u5236\u521B\u5EFA\u7A00\u758F\u6587\u4EF6\u7684\u65B9\u5F0F --strip-trailing-slashes \u5220\u9664\u53C2\u6570\u4E2D\u6240\u6709\u6E90\u6587\u4EF6/\u76EE\u5F55\u672B\u7AEF\u7684\u659C\u6760</p><p>-s, --symbolic-link \u53EA\u521B\u5EFA\u7B26\u53F7\u94FE\u63A5\u800C\u4E0D\u590D\u5236\u6587\u4EF6</p><p>-S, --suffix=\u540E\u7F00 \u81EA\u884C\u6307\u5B9A\u5907\u4EFD\u6587\u4EF6\u7684\u540E\u7F00</p><p>-t, --target-directory=\u76EE\u5F55 \u5C06\u6240\u6709\u53C2\u6570\u6307\u5B9A\u7684\u6E90\u6587\u4EF6/\u76EE\u5F55 \u590D\u5236\u81F3\u76EE\u6807\u76EE\u5F55</p><p>-T, --no-target-directory \u5C06\u76EE\u6807\u76EE\u5F55\u89C6\u4F5C\u666E\u901A\u6587\u4EF6</p><p>-u, --update \u53EA\u5728\u6E90\u6587\u4EF6\u6BD4\u76EE\u6807\u6587\u4EF6\u65B0\uFF0C\u6216\u76EE\u6807\u6587\u4EF6 \u4E0D\u5B58\u5728\u65F6\u624D\u8FDB\u884C\u590D\u5236</p><p>-v, --verbose \u663E\u793A\u8BE6\u7EC6\u7684\u8FDB\u884C\u6B65\u9AA4</p><p>-x, --one-file-system \u4E0D\u8DE8\u8D8A\u6587\u4EF6\u7CFB\u7EDF\u8FDB\u884C\u64CD\u4F5C</p><p>-Z, --context[=CTX] set SELinux security context of destination file to default type, or to CTX if specified</p><p>--help \u663E\u793A\u6B64\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA --version \u663E\u793A\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA</p><p>Last login: Thu May 11 10:23:37 on ttys000 (base) henryzhu@MacBook-Pro-14-Powered-by-M1-Pro [10\u65F633\u520639\u79D2] [~] -&gt; % cp -h cp: illegal option -- h usage: cp [-R [-H | -L | -P]] [-fi | -n] [-aclpsvXx] source_file target_file cp [-R [-H | -L | -P]] [-fi | -n] [-aclpsvXx] source_file ... target_directory (base) henryzhu@MacBook-Pro-14-Powered-by-M1-Pro [10\u65F633\u520641\u79D2] [~] -&gt; % man cp</p><p>NAME cp \u2013 copy files</p><p>SYNOPSIS cp [-R [-H | -L | -P]] [-fi | -n] [-alpsvXx] source_file target_file cp [-R [-H | -L | -P]] [-fi | -n] [-alpsvXx] source_file ... target_directory cp [-f | -i | -n] [-alPpsvx] source_file target_file cp [-f | -i | -n] [-alPpsvx] source_file ... target_directory</p><p>DESCRIPTION In the first synopsis form, the cp utility copies the contents of the source_file to the target_file. In the second synopsis form, the contents of each named source_file is copied to the destination target_directory. The names of the files themselves are not changed. If cp detects an attempt to copy a file to itself, the copy will fail.</p><pre><code> The following options are available:

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
       response from the standard input begins with the character \u2018y\u2019 or
       \u2018Y\u2019, the file copy is attempted.  (The -i option overrides any
       previous -n option.)

 -l    Create hard links to regular files in a hierarchy instead of
</code></pre><p>:</p>`,29),s=[r];function p(a,c){return t(),o("div",null,s)}var f=e(n,[["render",p],["__file","cp.html.vue"]]);export{f as default};
