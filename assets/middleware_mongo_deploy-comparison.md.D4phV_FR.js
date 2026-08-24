import{_ as n,o as s,c as t,a7 as e}from"./chunks/framework.DmcojIVA.js";const u=JSON.parse('{"title":"部署模式对比","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"middleware/mongo/deploy-comparison.md","filePath":"middleware/mongo/deploy-comparison.md","lastUpdated":1778503884000}'),l={name:"middleware/mongo/deploy-comparison.md"};function p(i,a,d,r,o,c){return s(),t("div",null,[...a[0]||(a[0]=[e(`<h1 id="bu-shu-mo-shi-dui-bi" tabindex="-1">部署模式对比 <a class="header-anchor" href="#bu-shu-mo-shi-dui-bi" aria-label="Permalink to &quot;部署模式对比&quot;">​</a></h1><p>MongoDB 支持三种部署模式，适用于不同规模和可用性要求的场景。</p><h2 id="gai-shu" tabindex="-1">概述 <a class="header-anchor" href="#gai-shu" aria-label="Permalink to &quot;概述&quot;">​</a></h2><table tabindex="0"><thead><tr><th>模式</th><th>节点数</th><th>高可用</th><th>水平扩展</th><th>适用场景</th></tr></thead><tbody><tr><td>单节点</td><td>1</td><td>❌</td><td>❌</td><td>本地开发、测试</td></tr><tr><td>副本集</td><td>≥ 3</td><td>✅</td><td>❌</td><td>生产环境、读扩展</td></tr><tr><td>分片集群</td><td>≥ 9</td><td>✅</td><td>✅</td><td>大规模生产、海量数据</td></tr></tbody></table><h2 id="dan-jie-dianstandalone" tabindex="-1">单节点（Standalone） <a class="header-anchor" href="#dan-jie-dianstandalone" aria-label="Permalink to &quot;单节点（Standalone）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌──────────┐</span></span>
<span class="line"><span>│  mongod  │</span></span>
<span class="line"><span>│  27017   │</span></span>
<span class="line"><span>└──────────┘</span></span></code></pre></div><p><strong>优点</strong>：</p><ul><li>部署最简单，一条命令启动</li><li>资源占用最少，适合本地开发和 CI</li><li>管理零成本</li></ul><p><strong>缺点</strong>：</p><ul><li>无高可用，宕机即不可用</li><li>无读扩展，所有读写集中一个节点</li><li>数据丢失风险，无冗余备份</li></ul><p><strong>适用</strong>：本地开发、单元测试、CI 流水线。</p><h2 id="fu-ben-jireplica-set" tabindex="-1">副本集（Replica Set） <a class="header-anchor" href="#fu-ben-jireplica-set" aria-label="Permalink to &quot;副本集（Replica Set）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌──────────┐  异步复制  ┌──────────┐</span></span>
<span class="line"><span>│ Primary  │───────────▶│Secondary │</span></span>
<span class="line"><span>│ (写+读)   │            │  (读)     │</span></span>
<span class="line"><span>└──────────┘            └──────────┘</span></span>
<span class="line"><span>     │                       │</span></span>
<span class="line"><span>     └───────────┬───────────┘</span></span>
<span class="line"><span>                 ▼</span></span>
<span class="line"><span>          ┌──────────┐</span></span>
<span class="line"><span>          │Secondary │</span></span>
<span class="line"><span>          │  (读)     │</span></span>
<span class="line"><span>          └──────────┘</span></span></code></pre></div><p><strong>优点</strong>：</p><ul><li>自动故障转移，Primary 宕机后 10 秒内选举新 Primary</li><li>数据冗余，每个节点持有完整数据副本</li><li>读写分离，Secondary 可分担读请求</li><li>oplog 支持数据恢复和时间点回溯</li></ul><p><strong>缺点</strong>：</p><ul><li>至少 3 节点，资源成本是单节点的 3 倍</li><li>写操作仍集中在 Primary，无法水平扩展写入</li><li>异步复制存在数据延迟窗口（默认由 writeConcern 控制）</li><li>数据全量复制，无分片能力，单 Shard 存储有上限</li></ul><p><strong>适用</strong>：绝大多数生产场景，中小规模应用，要求高可用但不需水平扩展。</p><h2 id="fen-pian-ji-qunsharded-cluster" tabindex="-1">分片集群（Sharded Cluster） <a class="header-anchor" href="#fen-pian-ji-qunsharded-cluster" aria-label="Permalink to &quot;分片集群（Sharded Cluster）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>       ┌──────────┐</span></span>
<span class="line"><span>       │  mongos  │  路由</span></span>
<span class="line"><span>       └──────────┘</span></span>
<span class="line"><span>            │</span></span>
<span class="line"><span>   ┌────────┼────────┐</span></span>
<span class="line"><span>   │        │        │</span></span>
<span class="line"><span>┌──────┐ ┌──────┐ ┌──────┐</span></span>
<span class="line"><span>│Shard1│ │Shard2│ │Shard3│  数据分片（各为副本集）</span></span>
<span class="line"><span>│  RS  │ │  RS  │ │  RS  │</span></span>
<span class="line"><span>└──────┘ └──────┘ └──────┘</span></span>
<span class="line"><span>   │        │        │</span></span>
<span class="line"><span>   └────────┼────────┘</span></span>
<span class="line"><span>            │</span></span>
<span class="line"><span>   ┌────────┼────────┐</span></span>
<span class="line"><span>   │ Config Server  │  元数据（副本集）</span></span>
<span class="line"><span>   │      RS        │</span></span>
<span class="line"><span>   └───────────────┘</span></span></code></pre></div><p><strong>优点</strong>：</p><ul><li>水平写扩展，写入可分散到多个 Shard</li><li>海量数据存储，突破单机磁盘限制</li><li>数据分片后查询可并行执行（Scatter-Gather）</li><li>可按地域分区（Zone Sharding），数据就近存储</li><li>每个 Shard 本身是副本集，兼具高可用</li></ul><p><strong>缺点</strong>：</p><ul><li>架构复杂，最少 9 个 mongod 进程（3 Config + 2×3 Shard） + mongos</li><li>运维成本高，需要监控 Config Server、mongos、各 Shard</li><li>分片键选择不可逆，选错会导致数据倾斜和热点</li><li>跨 Shard 查询性能差，尽量让查询命中单个 Shard</li><li>某些操作受限（如 <code>$lookup</code> 跨 Shard 不支持）</li></ul><p><strong>适用</strong>：大规模应用，TB/PB 级数据，高写入吞吐需求，全球部署。</p><h2 id="xuan-xing-jue-ce" tabindex="-1">选型决策 <a class="header-anchor" href="#xuan-xing-jue-ce" aria-label="Permalink to &quot;选型决策&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>是否需要高可用？</span></span>
<span class="line"><span>├── 否 → 单节点</span></span>
<span class="line"><span>└── 是</span></span>
<span class="line"><span>    └── 数据量/写入量是否会超单机能力？</span></span>
<span class="line"><span>        ├── 否 → 副本集</span></span>
<span class="line"><span>        └── 是 → 分片集群</span></span></code></pre></div><table tabindex="0"><thead><tr><th>条件</th><th>推荐模式</th></tr></thead><tbody><tr><td>本地开发、测试</td><td>单节点</td></tr><tr><td>生产环境，数据量 &lt; 1TB</td><td>副本集</td></tr><tr><td>生产环境，数据量 &gt; 1TB 或写 QPS &gt; 单机</td><td>分片集群</td></tr><tr><td>需要跨地域部署</td><td>分片集群 + Zone Sharding</td></tr></tbody></table><h2 id="can-kao" tabindex="-1">参考 <a class="header-anchor" href="#can-kao" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://www.mongodb.com/docs/manual/core/replica-set-architectures/" target="_blank" rel="noreferrer">MongoDB Architecture Guide</a></li></ul>`,30)])])}const g=n(l,[["render",p]]);export{u as __pageData,g as default};
