import { ArrowRight, Download, Server, Cpu, Lock, Check, Building2, Activity, ShieldCheck, Terminal, UserCheck, Shield, Zap } from 'lucide-react';
import { TruSafeMainIcon, TrustGatewayIcon, TrustVaultIcon, TrustAutoRedIcon, TrustAuthIcon } from './components/Icons';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <TruSafeMainIcon className="w-10 h-10 transition-transform duration-500 group-hover:scale-110" />
            <span className="text-2xl font-black tracking-tighter text-white leading-none">
              TRUSAFEAI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <div className="group relative">
              <a href="#products" className="hover:text-white transition-colors flex items-center gap-1">
                产品 <ArrowRight className="w-3 h-3 rotate-90" />
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <a href="#products" className="block px-4 py-2 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">Trust Auth</a>
                <a href="#products" className="block px-4 py-2 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">Trust Gateway</a>
                <a href="#products" className="block px-4 py-2 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">Trust Vault</a>
              </div>
            </div>
            <a href="#solutions" className="hover:text-white transition-colors">解决方案</a>
            <a href="#autored" className="hover:text-white transition-colors">AutoRed 红队工具</a>
            <a href="#about" className="hover:text-white transition-colors">关于我们</a>
          </div>
          <div>
            <a href="#contact" className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-900/20 cursor-pointer">
              联系销售
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Optional Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          新一代 AI 安全网关 2.0 发布
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          数据可用不可见 <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">权限共管不越界</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed">
          AI 时代的智能业务安全基础设施。专为金融、医疗与政务打造的大模型防御网关与高密资产金库。
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 cursor-pointer">
            <Download className="w-5 h-5" />
            下载 TrustLLM AutoRed 探针
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
            预约架构师演示
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Badges / Features */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4" />
            极速私有化部署
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            异构算力兼容
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            符合金融级应用合规
          </div>
        </div>
      </main>

      {/* Dual-Engine Vision Section */}
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto relative">
        {/* Blurred Code Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-[0.04] select-none z-0">
          <pre className="text-[0.65rem] md:text-sm text-blue-300 font-mono leading-relaxed blur-[2px] transform -rotate-3 scale-110">
{`{
  "policy_id": "pol_sec_99x",
  "enforcement_level": "strict",
  "mac_rules": {
    "agent_io": "sandbox_jail",
    "network_egress": ["*.trusted.internal"],
    "dlp_stream": true
  },
  "tee_enclave": {
    "attestation": "hardware_root",
    "mpc_nodes": 5,
    "key_derivation": "hkdf-sha256"
  },
  "intent_engine": {
    "model": "slm-guard-v2",
    "latency_budget_ms": 15,
    "block_jailbreak": true
  }
}`}
          </pre>
        </div>

        <div className="relative z-10 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">三位一体：企业级 AI 全链路安全治理架构</h2>
          <p className="text-slate-400 text-lg">身份中心定义边界，网关执行审计，金库最终鉴权</p>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trust Auth Card */}
          <div className="group relative p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col">
            {/* Glow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-500"></div>

            <div className="relative z-10">
              <TrustAuthIcon className="w-14 h-14 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Trust Auth
              </h3>
              <p className="text-blue-400 font-medium mb-6">/ AI 统一身份中心</p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20">身份定义</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20">权限注入</span>
              </div>
              
              <ul className="space-y-5 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 rounded-full p-1 shrink-0">
                    <UserCheck className="w-4 h-4 text-blue-400" strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed"><strong className="text-white font-semibold">Agent Service Account:</strong> 为每一个 AI 实体签发基于 OAuth2/JWT 的唯一加密身份，确保行为可追溯。</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 rounded-full p-1 shrink-0">
                    <Zap className="w-4 h-4 text-blue-400" strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed"><strong className="text-white font-semibold">动态上下文注入:</strong> 将权限声明实时转化为 RAG 过滤条件与 System Prompt 约束，实现“意图级”权限控制。</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 rounded-full p-1 shrink-0">
                    <Shield className="w-4 h-4 text-blue-400" strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed"><strong className="text-white font-semibold">全生命周期管控:</strong> 实现对 AI Agent 权限的实时下发、审计与一键熔断，防止 Agent 行为失控。</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Trust Gateway Card */}
          <div className="group relative p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col">
            {/* Glow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-500"></div>

            <div className="relative z-10">
              <TrustGatewayIcon className="w-14 h-14 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Trust Gateway
              </h3>
              <p className="text-blue-400 font-medium mb-6">/ 零信任意图网关</p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20">智能意图引擎</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20">全链路动态脱敏</span>
              </div>
              
              <ul className="space-y-5 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 rounded-full p-1 shrink-0">
                    <Check className="w-4 h-4 text-blue-400" strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed"><strong className="text-white font-semibold">内置原生智能防护引擎 (SLM)：</strong> 搭载行业领先的轻量级意图分析专有模型，毫秒级阻断高维 Prompt Injection (提示词注入) 与越狱攻击。</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 rounded-full p-1 shrink-0">
                    <Check className="w-4 h-4 text-blue-400" strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed"><strong className="text-white font-semibold">动态流式清洗 (DLP)：</strong> 融合高精度实体识别与千万级特征库，对涉密、隐私数据进行极速流式脱敏，确保流转合规。</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 rounded-full p-1 shrink-0">
                    <Check className="w-4 h-4 text-blue-400" strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed"><strong className="text-white font-semibold">底层行为拓扑隔离：</strong> 基于深度强访问控制 (MAC) 技术，实现针对 AI Agent 网络请求与本地底层文件 I/O 的细粒度沙箱隔离。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust Vault Card */}
          <div className="group relative p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col">
            {/* Glow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/30 transition-colors duration-500"></div>

            <div className="relative z-10">
              <TrustVaultIcon className="w-14 h-14 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Trust Vault
              </h3>
              <p className="text-purple-400 font-medium mb-6">/ 高密可信金库</p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm font-medium rounded-full border border-purple-500/20">可信计算沙箱</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm font-medium rounded-full border border-purple-500/20">多方协同安全</span>
              </div>
              
              <ul className="space-y-5 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-500/20 rounded-full p-1 shrink-0">
                    <Check className="w-4 h-4 text-purple-400" strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed"><strong className="text-white font-semibold">全内存态加密托管：</strong> 全面接管企业高权 API Key、交易凭证与敏感账本，实现“AI 可用，明文不落盘、不出域”。</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-500/20 rounded-full p-1 shrink-0">
                    <Check className="w-4 h-4 text-purple-400" strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed"><strong className="text-white font-semibold">硬件级信任根与 MPC 协同：</strong> 融合 TEE (可信执行环境) 与安全多方计算技术。AI 仅具备“提议权”，金库独立掌握“签名权”，彻底切断单点越权风险。</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-500/20 rounded-full p-1 shrink-0">
                    <Check className="w-4 h-4 text-purple-400" strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed"><strong className="text-white font-semibold">无缝对接企业级基建：</strong> 深度兼容企业物理密码机 (HSM) 与国际/国密安全标准，满足极其严苛的金融与政务审计要求。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security Chain Flow Block */}
        <div className="relative z-10 mt-20 p-8 rounded-3xl bg-slate-800/20 border border-slate-800 backdrop-blur-sm max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <UserCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-bold">身份中心 (Auth)</div>
                <div className="text-slate-500 text-xs">定义安全边界</div>
              </div>
            </div>
            
            <ArrowRight className="w-6 h-6 text-slate-700 hidden md:block" />
            <div className="w-px h-8 bg-slate-800 md:hidden"></div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <Activity className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-bold">网关 (Gateway)</div>
                <div className="text-slate-500 text-xs">执行实时审计</div>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 text-slate-700 hidden md:block" />
            <div className="w-px h-8 bg-slate-800 md:hidden"></div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                <Lock className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-white font-bold">金库 (Vault)</div>
                <div className="text-slate-500 text-xs">完成最终鉴权</div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-400 text-sm italic">
            “三位一体”架构确保了从身份识别到行为审计，再到资产访问的全链路闭环安全。
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">赋能高净值场景，让 AI 触及核心业务流</h2>
          <div className="w-24 h-1 bg-blue-500/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">数字银行与 Fintech</h3>
            <p className="text-slate-400 leading-relaxed">
              自动化审批流与核心资金调动的安全闭环，对接机构电子签章。
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">医疗与隐私计算</h3>
            <p className="text-slate-400 leading-relaxed">
              在不离开物理边界的 TEE 沙箱内进行 AI 病历分析，绝对保护患者隐私。
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">智慧政务大模型</h3>
            <p className="text-slate-400 leading-relaxed">
              适配国产化操作系统的政务大模型安全网关，防范敏感公文数据外泄。
            </p>
          </div>
        </div>
      </section>

      {/* AutoRed Section */}
      <section id="autored" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border-t border-b border-blue-900/30">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div>
            <TrustAutoRedIcon className="w-16 h-16 mb-8" />
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/50 text-blue-300 text-sm font-medium mb-6">
              <Terminal className="w-4 h-4" />
              PLG 开发者工具
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              您的 AI 业务离<br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">数据裸奔</span>还有多远？
            </h2>
            <p className="text-lg text-blue-100/70 mb-10 leading-relaxed">
              下载 TrustLLM AutoRed 企业级自动化红队探针。只需 5 分钟，在零业务损害的前提下，全面评估贵司内部大模型 Agent 的越权漏洞、注入风险与隐私外泄敞口。
            </p>
            <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-yellow-950 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
              <Download className="w-5 h-5" />
              免费获取内部 AI 安全体检报告
            </button>
          </div>

          {/* Right Terminal UI */}
          <div className="rounded-xl bg-[#0d1117] border border-slate-700 shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Terminal Header */}
            <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-slate-400 font-mono ml-2">autored@trusafe: ~</div>
            </div>
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm md:text-base space-y-3">
              <div className="text-slate-300"><span className="text-blue-400">$</span> trustllm-autored scan --target local_agent</div>
              <div className="text-slate-400">[*] Initializing probe modules...</div>
              <div className="text-slate-400">[*] Injecting test payload: "Ignore previous instructions..."</div>
              <div className="text-emerald-400">Scanning Agent I/O...</div>
              <div className="text-red-400 font-bold animate-pulse">[FAILED] Prompt Injection Vulnerability Detected!</div>
              <div className="text-red-400/80">  ↳ Agent executed unauthorized command: `SELECT * FROM users`</div>
              <div className="text-slate-400 pt-2">[*] Generating remediation report...</div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">$</span>
                <span className="w-2 h-5 bg-slate-400 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">获取私有化部署方案与报价</h2>
            <p className="text-slate-400 text-lg">我们的安全架构师将在 24 小时内与您联系</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
            <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">姓名</label>
                  <input type="text" id="name" name="name" required className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="您的姓名" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">企业邮箱</label>
                  <input type="email" id="email" name="email" required className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="name@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-slate-300">公司名称</label>
                <input type="text" id="company" name="company" required className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="您的企业名称" />
              </div>
              <div className="space-y-2">
                <label htmlFor="scenario" className="text-sm font-medium text-slate-300">您的主要业务场景</label>
                <select id="scenario" name="scenario" required defaultValue="" className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all [&>option]:bg-slate-800">
                  <option value="" disabled>请选择业务场景</option>
                  <option value="数字银行">数字银行</option>
                  <option value="Web3">Web3</option>
                  <option value="医疗政务">医疗政务</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20 mt-4 cursor-pointer">
                提交咨询
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <TruSafeMainIcon className="w-8 h-8" />
                <span className="text-xl font-black text-white tracking-tighter">TRUSAFEAI</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                建立 AI 时代的信任基石。
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">产品</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#products" className="hover:text-blue-400 transition-colors">Trust Auth</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition-colors">Trust Gateway</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition-colors">Trust Vault</a></li>
                <li><a href="#autored" className="hover:text-blue-400 transition-colors">Trust AutoRed</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">资源</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#autored" className="hover:text-blue-400 transition-colors">AutoRed 下载</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">文档</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">博客</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">联系我们</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="mailto:contact@trusafe.ai" className="hover:text-blue-400 transition-colors">contact@trusafe.ai</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© 2026 TruSafe AI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300 transition-colors">隐私政策</a>
              <a href="#" className="hover:text-slate-300 transition-colors">服务条款</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
