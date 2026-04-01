import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Database, 
  Search, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Globe,
  Eye,
  Scale,
  MessageSquare,
  BarChart3,
  FileText,
  Lightbulb,
  Activity,
  Code2,
  Fingerprint,
  TrendingUp,
  History,
  ZapOff,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { cn } from './lib/utils';
import { GoogleGenAI } from "@google/genai";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass">
    <div className="flex items-center gap-2">
      <div className="p-1.5 rounded-lg bg-epistemic-indigo">
        <Brain className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-bold font-display tracking-tight">Epistemic<span className="text-epistemic-indigo">Forge</span></span>
    </div>
    <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
      <a href="#vision" className="hover:text-epistemic-indigo transition-colors">Vision</a>
      <a href="#pillars" className="hover:text-epistemic-indigo transition-colors">Bottlenecks</a>
      <a href="#risks" className="hover:text-epistemic-indigo transition-colors">Risks</a>
      <a href="#interventions" className="hover:text-epistemic-indigo transition-colors">Interventions</a>
      <a href="#forge" className="hover:text-epistemic-indigo transition-colors">The Forge</a>
    </div>
    <button className="px-4 py-2 rounded-full bg-epistemic-dark text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-epistemic-dark/20">
      Get Involved
    </button>
  </nav>
);

const Hero = () => (
  <section id="vision" className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20">
      <div className="absolute top-20 left-10 w-72 h-72 bg-epistemic-blue rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-epistemic-indigo rounded-full blur-[150px]" />
    </div>
    
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-epistemic-indigo bg-epistemic-indigo/10 rounded-full">
          The Future of Truth
        </span>
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8 leading-[1.1]">
          AI for AI for <span className="gradient-text">Epistemics</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          As R&D is increasingly automated, AI systems will play a larger role in developing tools that help humans determine truth and improve knowledge validation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-epistemic-indigo text-white font-semibold hover:scale-105 transition-transform shadow-xl shadow-epistemic-indigo/25 flex items-center justify-center gap-2">
            Explore the Vision <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50 transition-colors">
            Read the Thesis
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const BottleneckChart = () => {
  const data = [
    { label: 'Past', bottleneck: 'Model Quality', color: 'bg-slate-400' },
    { label: 'Present', bottleneck: 'Dev Investment', color: 'bg-epistemic-blue' },
    { label: 'Future', bottleneck: 'Compute & Trust', color: 'bg-epistemic-indigo' },
  ];

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <TrendingUp className="w-24 h-24" />
      </div>
      <h3 className="text-xl font-bold mb-6 font-display">The Bottleneck Shift</h3>
      <div className="space-y-8">
        {data.map((item, i) => (
          <div key={i} className="relative">
            <div className="flex justify-between mb-2 text-sm font-medium">
              <span className="text-slate-500">{item.label}</span>
              <span className="text-slate-900">{item.bottleneck}</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${(i + 1) * 33.3}%` }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className={cn("h-full rounded-full", item.color)}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xs text-slate-400 leading-relaxed italic">
        *As R&D automates, the constraint moves from human labor to computational resources and human trust.
      </p>
    </div>
  );
};

const TrustAudit = () => {
  const [activeAudit, setActiveAudit] = useState(0);
  const audits = [
    { name: "Forecasting Engine", score: 98, status: "Verified", color: "text-emerald-500" },
    { name: "Bias Detector", score: 84, status: "Auditing", color: "text-amber-500" },
    { name: "Truth Tracker", score: 92, status: "Verified", color: "text-emerald-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAudit((prev) => (prev + 1) % audits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-epistemic-dark p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Epistemic Audit</span>
        </div>
        <Activity className="w-4 h-4 text-slate-500" />
      </div>
      
      <div className="space-y-4">
        {audits.map((audit, i) => (
          <motion.div 
            key={i}
            animate={{ opacity: activeAudit === i ? 1 : 0.3, scale: activeAudit === i ? 1 : 0.98 }}
            className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className={cn("p-2 rounded-lg bg-white/5", audit.color)}>
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-white">{audit.name}</span>
            </div>
            <div className="text-right">
              <div className={cn("text-lg font-bold", audit.color)}>{audit.score}%</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">{audit.status}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const PillarCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
  >
    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", color)}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const Pillars = () => (
  <section id="pillars" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-[0.03] pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight">The Shifting <span className="gradient-text">Bottlenecks</span></h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            As AI-driven R&D accelerates, progress shifts from model quality to these critical constraints. We must anticipate these shifts to build tools that track truth reliably.
          </p>
        </div>
        <BottleneckChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PillarCard 
          icon={Cpu} 
          title="Compute" 
          description="Automated R&D requires massive compute for inference, experiments, and specialized training. Deep pockets become the primary driver of tool quality."
          color="bg-blue-500"
        />
        <PillarCard 
          icon={Users} 
          title="Adoption & Trust" 
          description="Early tools shape what people rely on. Trust is a function of adoption, and incumbency effects make early versions persistent."
          color="bg-purple-500"
        />
        <PillarCard 
          icon={Search} 
          title="Ground Truth Evaluation" 
          description="Pushing tools to objectively excellent levels requires signals for 'good' that go beyond human satisfaction, especially in conceptual domains."
          color="bg-orange-500"
        />
        <PillarCard 
          icon={ZapOff} 
          title="The Outlier Advantage" 
          description="Leveraging neurodivergent cognitive profiles to detect subtle misalignments and systemic biases that neurotypical consensus often overlooks."
          color="bg-pink-500"
        />
      </div>
    </div>
  </section>
);

const Risks = () => (
  <section id="risks" className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold font-display mb-6">Risks of Rapid Progress</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Automated R&D means strong epistemic tools could come online on a compressed timeline, bringing unique risks that we must track and guard against.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Epistemic Misalignment</h4>
                <p className="text-sm text-slate-500">Powerful tools steering thoughts in directions other than truth-tracking, often due to ground truth issues or Goodhart's Law.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Lock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Trust Lock-in</h4>
                <p className="text-sm text-slate-500">Incumbency effects where people buy into trusting tools or ecosystems that don't deserve it, making them hard to displace.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                <Scale className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Power Concentration</h4>
                <p className="text-sm text-slate-500">Information advantages leveraged into political or financial outcomes by those with the best epistemic tools.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h5 className="font-bold text-slate-900 mb-2">Goodhart's Law</h5>
            <p className="text-xs text-slate-500">Optimization for the wrong metric can lead to systems that are satisfying but subtly wrong.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-8">
            <h5 className="font-bold text-slate-900 mb-2">Regress Problem</h5>
            <p className="text-xs text-slate-500">Using AI to judge AI can cause subtle errors to compound rather than shrink.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h5 className="font-bold text-slate-900 mb-2">Agenda-Driven Tools</h5>
            <p className="text-xs text-slate-500">Tools shaped to further specific agendas while purporting to be neutral aids.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-8">
            <h5 className="font-bold text-slate-900 mb-2">Epistemic Dependency</h5>
            <p className="text-xs text-slate-500">Gradual atrophy of human critical reasoning due to over-reliance on AI tools.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NeuroAudit = () => (
  <div className="py-24 px-6 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 border border-pink-200 mb-6">
            <Fingerprint className="w-3 h-3 text-pink-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-pink-700">Cognitive Diversity</span>
          </div>
          <h2 className="text-4xl font-bold font-display mb-6 tracking-tight">The <span className="text-pink-600">Outlier</span> Advantage</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Epistemic progress isn't just about compute—it's about perspective. We explicitly integrate the "Outlier Advantage": the high-intensity, non-conforming cognitive styles of neurodivergent individuals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <ZapOff className="w-4 h-4 text-pink-500" />
                Bias Detection
              </h4>
              <p className="text-sm text-slate-500">Autistic and neurodivergent thinkers are often less susceptible to social desirability bias and groupthink.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-500" />
                Pattern Recognition
              </h4>
              <p className="text-sm text-slate-500">Hyper-focused attention to detail enables the detection of subtle epistemic misalignments in complex systems.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative p-8 bg-epistemic-dark rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-epistemic-indigo" />
            <h3 className="text-xl font-bold text-white mb-6 font-display">Neuro-Inclusive Validation</h3>
            <div className="space-y-4">
              {[
                { label: "Non-Standard Logic Check", value: 94, color: "bg-pink-500" },
                { label: "Social Bias Filtering", value: 88, color: "bg-epistemic-blue" },
                { label: "Edge-Case Synthesis", value: 97, color: "bg-epistemic-indigo" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                      className={cn("h-full rounded-full", item.color)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-pink-500" />
              </div>
              <p className="text-xs text-slate-400 italic">
                "Epistemic outliers provide the critical friction necessary to prevent AI from optimizing for satisfying but false neurotypical consensus."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const Interventions = () => (
  <section id="interventions" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-full h-full bg-dot opacity-[0.03] pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight">Strategic <span className="gradient-text">Interventions</span></h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            What we can do now to prepare for a world of automated epistemic R&D. These actions ensure that truth-tracking tools are built with the right incentives and auditable foundations.
          </p>
        </div>
        <TrustAudit />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Build Appetite",
            desc: "Encourage frontier AI labs and philanthropic funders to prioritize epistemic safety as a core R&D pillar.",
            icon: Users
          },
          {
            title: "Anticipate Data Needs",
            desc: "Curate human judgements, record researcher discussions, and design self-play loops for truth-tracking.",
            icon: Database
          },
          {
            title: "Grounding Research",
            desc: "Theoretical and practical work to define calibration in domains without clear ground truth.",
            icon: Search
          },
          {
            title: "Drive Early Adoption",
            desc: "Get early versions into use to build familiarity and surface real-world feedback before lock-in.",
            icon: Zap
          },
          {
            title: "Auditable Infrastructure",
            desc: "Support open systems that allow communities to audit internal processes and behaviors.",
            icon: Eye
          },
          {
            title: "Incentive Alignment",
            desc: "Support development in organizations aligned with public good rather than profit or influence.",
            icon: Scale
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-epistemic-indigo/10 flex items-center justify-center mb-4">
              <item.icon className="w-5 h-5 text-epistemic-indigo" />
            </div>
            <h4 className="font-bold mb-2 font-display">{item.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Examples = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold font-display mb-12 text-center">Application Domains</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
          <BarChart3 className="w-10 h-10 text-blue-600 mb-6" />
          <h3 className="text-xl font-bold mb-4">Forecasting</h3>
          <p className="text-sm text-slate-600 mb-6">Automated R&D can improve forecasting without severe ground truth problems. The focus is on data infrastructure and historical knowledge cutoffs.</p>
          <ul className="space-y-2 text-xs text-slate-500">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Legible track records</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Strict knowledge cutoffs</li>
          </ul>
        </div>
        <div className="p-8 rounded-3xl bg-purple-50 border border-purple-100">
          <MessageSquare className="w-10 h-10 text-purple-600 mb-6" />
          <h3 className="text-xl font-bold mb-4">Misinformation</h3>
          <p className="text-sm text-slate-600 mb-6">Trust lock-in is the central concern. Open and auditable approaches are vital to prevent agenda-driven tools from dominating.</p>
          <ul className="space-y-2 text-xs text-slate-500">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-purple-500" /> Auditable adjudication</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-purple-500" /> Early adoption drive</li>
          </ul>
        </div>
        <div className="p-8 rounded-3xl bg-orange-50 border border-orange-100">
          <Lightbulb className="w-10 h-10 text-orange-600 mb-6" />
          <h3 className="text-xl font-bold mb-4">Conceptual Research</h3>
          <p className="text-sm text-slate-600 mb-6">The highest risk of epistemic misalignment. Requires training regimes like self-play loops that ground to truth-tracking.</p>
          <ul className="space-y-2 text-xs text-slate-500">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-orange-500" /> Self-play loops</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-orange-500" /> Truth-tracking regimes</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const EpistemicForge = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [view, setView] = useState<'preview' | 'blueprint'>('preview');
  const [result, setResult] = useState<null | { title: string, description: string, features: string[], riskMitigation: string, blueprint: string }>(null);

  const generateTool = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    setResult(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Design an epistemic tool (a tool for truth-seeking or knowledge validation) for the following domain: "${prompt}". 
        Consider the context of "AI for AI for Epistemics" where R&D is automated.
        Return the response in JSON format with the following structure:
        {
          "title": "Short catchy name",
          "description": "One sentence description of how it helps humans determine truth",
          "features": ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
          "riskMitigation": "One sentence on how it avoids epistemic misalignment or trust lock-in",
          "blueprint": "A technical summary of the data pipeline and validation logic (markdown format)"
        }`,
        config: {
          responseMimeType: "application/json",
        }
      });

      const data = JSON.parse(response.text || "{}");
      setResult({
        title: data.title || `${prompt} Validator`,
        description: data.description || `An automated system for ${prompt}.`,
        features: data.features || ["Provenance tracking", "Bias detection", "Audit traces", "Human verification"],
        riskMitigation: data.riskMitigation || "Ensures truth-tracking through auditable infrastructure.",
        blueprint: data.blueprint || "No blueprint available."
      });
    } catch (error) {
      console.error("Forge error:", error);
      setResult({
        title: "Forge Interrupted",
        description: "The epistemic synthesis was interrupted. Please try again.",
        features: ["Check network connection", "Verify API configuration", "Retry synthesis"],
        riskMitigation: "N/A",
        blueprint: "Synthesis failed."
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="forge" className="py-24 px-6 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Zap className="w-3 h-3 text-cyan-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-100">Automated R&D Engine</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">The Epistemic <span className="text-cyan-400">Forge</span></h2>
          <p className="text-slate-100 max-w-2xl mx-auto text-lg">
            Experience how AI can automate the creation of truth-seeking tools. 
            Describe a domain, and let the Forge design a validation system that guards against misalignment.
          </p>
        </div>

        <div className="glass bg-slate-900/50 border-white/20 p-8 rounded-3xl shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
              <input 
                type="text" 
                placeholder="e.g., Scientific consensus, Misinformation tracking, Conceptual research..."
                className="w-full bg-slate-800/50 border border-white/20 rounded-xl pl-12 pr-6 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-lg"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <button 
              onClick={generateTool}
              disabled={isGenerating || !prompt}
              className="px-8 py-4 bg-cyan-500 text-slate-950 rounded-xl font-black hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group uppercase tracking-tight"
            >
              {isGenerating ? <Activity className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />}
              Forge Tool
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isGenerating ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-20 flex flex-col items-center justify-center gap-6"
              >
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    className="w-20 h-20 border-2 border-dashed border-cyan-500/50 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-cyan-400 animate-pulse" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-xl mb-1">Synthesizing Architecture</p>
                  <p className="text-cyan-200 font-mono text-xs uppercase tracking-widest font-bold">Cross-referencing ground truth datasets...</p>
                </div>
              </motion.div>
            ) : result ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="flex border-b border-white/20">
                  <button 
                    onClick={() => setView('preview')}
                    className={cn("flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-colors", view === 'preview' ? "bg-white/10 text-cyan-400" : "text-slate-300 hover:text-white")}
                  >
                    Preview
                  </button>
                  <button 
                    onClick={() => setView('blueprint')}
                    className={cn("flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-colors", view === 'blueprint' ? "bg-white/10 text-cyan-400" : "text-slate-300 hover:text-white")}
                  >
                    Blueprint
                  </button>
                </div>

                <div className="p-8">
                  {view === 'preview' ? (
                    <>
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-3xl font-bold font-display text-cyan-400 mb-2">{result.title}</h3>
                          <p className="text-white text-lg leading-relaxed">{result.description}</p>
                        </div>
                        <div className="p-4 bg-cyan-400/20 rounded-2xl border border-cyan-400/30">
                          <ShieldCheck className="w-10 h-10 text-cyan-400" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {result.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-100 text-base bg-white/5 p-4 rounded-xl border border-white/10">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="p-6 bg-amber-500/20 border border-amber-500/40 rounded-2xl flex gap-4 items-start">
                        <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">Safety Layer: Risk Mitigation</h5>
                          <p className="text-base text-slate-100 leading-relaxed">{result.riskMitigation}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="font-mono text-base text-slate-100 leading-relaxed whitespace-pre-wrap bg-black/40 p-8 rounded-2xl border border-white/10">
                      <div className="flex items-center gap-2 mb-6 text-cyan-400">
                        <Code2 className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-widest">Technical Specification</span>
                      </div>
                      {result.blueprint}
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              <div className="py-20 text-center border-2 border-dashed border-white/10 rounded-2xl">
                <Database className="w-12 h-12 text-white/10 mx-auto mb-4" />
                <p className="text-slate-500">Forge output will appear here.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-slate-200 bg-slate-50">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <Brain className="w-6 h-6 text-epistemic-indigo" />
        <span className="text-lg font-bold font-display">EpistemicForge</span>
      </div>
      <p className="text-slate-500 text-sm">© 2026 Epistemic Forge. Built for the future of truth.</p>
      <div className="flex gap-6 text-slate-400">
        <a href="#" className="hover:text-epistemic-indigo transition-colors">Twitter</a>
        <a href="#" className="hover:text-epistemic-indigo transition-colors">GitHub</a>
        <a href="#" className="hover:text-epistemic-indigo transition-colors">Discord</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-epistemic-indigo/20 selection:text-epistemic-indigo">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Risks />
        <NeuroAudit />
        <Interventions />
        <Examples />
        <EpistemicForge />
      </main>
      <Footer />
    </div>
  );
}
