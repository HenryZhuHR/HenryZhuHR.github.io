import{_ as n,o as s,c as a,a as p}from"./app.e2a6bb87.js";const t={},o=p(`<h1 id="\u5728-carla-\u4E2D\u91C7\u96C6\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5728-carla-\u4E2D\u91C7\u96C6\u6570\u636E" aria-hidden="true">#</a> \u5728 CARLA \u4E2D\u91C7\u96C6\u6570\u636E</h1><h2 id="\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u914D\u7F6E</h2><ol><li>python 3.7</li><li>CARLA_0.9.13 Release\u7248\u672C</li></ol><p><code>/opt/carla-simulator/PythonAPI/carla/dist</code></p><p>(tsgan) zhr@Ubuntu-Server:/opt/carla-simulator/PythonAPI/carla/dist$ ls carla-0.9.13-cp27-cp27mu-manylinux_2_27_x86_64.whl carla-0.9.13-py2.7-linux-x86_64.egg carla-0.9.13-cp37-cp37m-manylinux_2_27_x86_64.whl carla-0.9.13-py3.7-linux-x86_64.egg</p><h2 id="\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#\u7EC6\u8282" aria-hidden="true">#</a> \u7EC6\u8282</h2><p>\u8BBE\u7F6E\u4E00\u4E2A\u904D\u5386\u5217\u8868\uFF0C\u5B58\u50A8\u53EF\u80FD\u7684\u76F8\u673A\u4F4D\u7F6E\uFF0C\u683C\u5F0F\u4E3A <code>[ x, y, z, fov ]</code></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>camera_distance_list <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment"># [ x, y, z, fov ]</span>
    <span class="token punctuation">[</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">90</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">90</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">90</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">80</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">80</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">70</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">70</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">60</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">60</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5916\u8FD8\u9700\u8981\u5BF9\u76F8\u673A\u4F4D\u7F6E\u8FDB\u884C\u4E00\u4E2A\u6269\u5145\uFF0C\u8986\u76D6\u76F8\u673A\u5468\u56F4 10 \u79CD\u65B9\u4F4D</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">extend_xyz</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span> x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> z <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span> x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> z <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token operator">-</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token operator">-</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> z <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token operator">-</span>x<span class="token punctuation">,</span> <span class="token operator">-</span>y<span class="token punctuation">,</span> z<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span>y<span class="token punctuation">,</span> z<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span> x<span class="token punctuation">,</span> <span class="token operator">-</span>y<span class="token punctuation">,</span> z<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521D\u59CB\u5316\u76F8\u673A\uFF0C\u8BBE\u7F6E\u91C7\u6837\u95F4\u9694\u4E3A 1.0 s</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># blueprint camera</span>
camera_bp <span class="token operator">=</span> blueprint_library<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;sensor.camera.rgb&#39;</span><span class="token punctuation">)</span>
camera_bp<span class="token punctuation">.</span>set_attribute<span class="token punctuation">(</span><span class="token string">&#39;image_size_x&#39;</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span>img_size<span class="token punctuation">)</span><span class="token punctuation">)</span>
camera_bp<span class="token punctuation">.</span>set_attribute<span class="token punctuation">(</span><span class="token string">&#39;image_size_y&#39;</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span>img_size<span class="token punctuation">)</span><span class="token punctuation">)</span>
camera_bp<span class="token punctuation">.</span>set_attribute<span class="token punctuation">(</span><span class="token string">&#39;sensor_tick&#39;</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u904D\u5386\u76F8\u673A\u4F4D\u7F6E</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">for</span> i_view<span class="token punctuation">,</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> fov<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>camera_distance_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
   xyz_list <span class="token operator">=</span> extend_xyz<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">not</span> is_test<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">]</span><span class="token punctuation">]</span>

   <span class="token keyword">for</span> i_extend<span class="token punctuation">,</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>xyz_list<span class="token punctuation">)</span><span class="token punctuation">:</span>

     save_name <span class="token operator">=</span> <span class="token string">&quot;sp_%04d-dis_%03d-%d&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>i_point<span class="token punctuation">,</span> i_view<span class="token punctuation">,</span> i_extend<span class="token punctuation">)</span>
     save_path <span class="token operator">=</span> <span class="token keyword">lambda</span> <span class="token builtin">dir</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">:</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>data_save_dir<span class="token punctuation">,</span> <span class="token builtin">dir</span><span class="token punctuation">,</span> save_name <span class="token operator">+</span> <span class="token builtin">type</span><span class="token punctuation">)</span>

     pitch<span class="token punctuation">,</span> yaw<span class="token punctuation">,</span> roll <span class="token operator">=</span> get_rotation_by_center_actor<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
     camera_transform <span class="token operator">=</span> carla<span class="token punctuation">.</span>Transform<span class="token punctuation">(</span>location<span class="token operator">=</span>carla<span class="token punctuation">.</span>Location<span class="token punctuation">(</span>x<span class="token operator">=</span>x<span class="token punctuation">,</span> y<span class="token operator">=</span>y<span class="token punctuation">,</span> z<span class="token operator">=</span>z<span class="token punctuation">)</span><span class="token punctuation">,</span>
                                        rotation<span class="token operator">=</span>carla<span class="token punctuation">.</span>Rotation<span class="token punctuation">(</span>pitch<span class="token operator">=</span>pitch<span class="token punctuation">,</span> yaw<span class="token operator">=</span>yaw<span class="token punctuation">,</span> roll<span class="token operator">=</span>roll<span class="token punctuation">)</span><span class="token punctuation">)</span>
     camera_bp<span class="token punctuation">.</span>set_attribute<span class="token punctuation">(</span><span class="token string">&#39;fov&#39;</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span>fov<span class="token punctuation">)</span><span class="token punctuation">)</span>
     instance_segmentation_camera_bp<span class="token punctuation">.</span>set_attribute<span class="token punctuation">(</span><span class="token string">&#39;fov&#39;</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span>fov<span class="token punctuation">)</span><span class="token punctuation">)</span>
     camera_actor <span class="token operator">=</span> world<span class="token punctuation">.</span>spawn_actor<span class="token punctuation">(</span>camera_bp<span class="token punctuation">,</span>
                                      camera_transform<span class="token punctuation">,</span>
                                      attach_to<span class="token operator">=</span>model3_actor<span class="token punctuation">,</span>
                                      attachment_type<span class="token operator">=</span>carla<span class="token punctuation">.</span>AttachmentType<span class="token punctuation">.</span>Rigid<span class="token punctuation">)</span>
     calibration <span class="token operator">=</span> np<span class="token punctuation">.</span>identity<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
     calibration<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> img_size <span class="token operator">/</span> <span class="token number">2.0</span>
     calibration<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> img_size <span class="token operator">/</span> <span class="token number">2.0</span>
     calibration<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> calibration<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> img_size <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">2.0</span> <span class="token operator">*</span> np<span class="token punctuation">.</span>tan<span class="token punctuation">(</span>fov <span class="token operator">*</span> np<span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">360.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
     camera_actor<span class="token punctuation">.</span>calibration <span class="token operator">=</span> calibration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),e=[o];function c(u,l){return s(),a("div",null,e)}var k=n(t,[["render",c],["__file","retrieve_data.html.vue"]]);export{k as default};
