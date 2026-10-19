import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, X, Plus, Minus, Eye, Users, ShieldCheck, HelpCircle, ArrowRight, Gift, Clock, Sparkles, MoveHorizontal } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";
import sampleMap from "@/assets/sample-map.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mapas Mentais de Enfermagem — Revise para concursos" },
      { name: "description", content: "Mapas mentais visuais em PDF para estudantes e profissionais de enfermagem revisarem para concursos." },
      { property: "og:title", content: "Mapas Mentais de Enfermagem" },
      { property: "og:description", content: "Revisão visual e organizada para concursos de enfermagem, em PDF." },
    ],
  }),
  component: Index,
});

const CHECKOUT = "#planos";

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={CHECKOUT} className={`inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-cta-foreground shadow-cta transition-transform hover:-translate-y-0.5 ${className}`}>
      {children}
    </a>
  );
}

function Pill({ children, tone = "sky" }: { children: React.ReactNode; tone?: "sky" | "gold" | "dark" }) {
  const t = tone === "gold" ? "bg-gold-soft text-orange border-gold/40" : tone === "dark" ? "bg-navy-soft/60 text-sky border-sky/40" : "bg-sky-soft text-accent-foreground border-sky/30";
  return <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${t}`}>{children}</span>;
}

const modules = [
  { n: "01", t: "SUS e saúde pública", d: "Princípios, leis e políticas de saúde conectados em esquemas visuais.", i: ["Leis 8.080 e 8.142", "PNAB", "Vigilância em saúde"], c: "from-sky to-cta" },
  { n: "02", t: "Fundamentos e clínica", d: "Conceitos-base de enfermagem e clínica médica de forma direta.", i: ["Sinais vitais", "Cálculos", "Curativos", "Biossegurança"], c: "from-cta to-cta" },
  { n: "03", t: "Epidemiologia e transmissíveis", d: "Imunização, indicadores e doenças em um só lugar.", i: ["Vacinação", "Notificação", "Indicadores"], c: "from-accent-foreground to-sky" },
  { n: "04", t: "Mulher, criança e idoso", d: "Os ciclos da vida organizados para revisar rápido.", i: ["Pré-natal", "Aleitamento", "Triagem neonatal", "Idoso"], c: "from-sky to-accent-foreground" },
  { n: "05", t: "Urgência, emergência e UTI", d: "Atendimento crítico e cuidados intensivos com clareza.", i: ["SAMU", "RCP", "Trauma", "Choques"], c: "from-destructive to-destructive" },
  { n: "06", t: "Ética e legislação COFEN", d: "Direitos, deveres e atribuições reunidos em mapas.", i: ["Lei 7.498/86", "Código de Ética", "Atribuições"], c: "from-orange to-gold" },
];

const bonuses = [
  { tag: "Presente especial", t: "Cronograma de Revisão 60 Dias", d: "Planilha com a ordem diária de estudo dos mapas para você cobrir o edital com método." },
  { tag: "Exclusivo", t: "Mural de Mnemônicos", d: "Pôster em PDF com siglas e frases curtas para fixar notificação compulsória e calendário vacinal." },
  { tag: "Teste de retenção", t: "Simulado com Gabarito", d: "100 questões de bancas comentadas e ligadas aos mapas correspondentes." },
  { tag: "Guia prático", t: "Guia de Cálculos de Medicamentos", d: "Regra de três, gotejamento e diluição explicados de forma visual." },
];

const testimonials = [
  "Material muito completo e objetivo. Usei nos simulados e senti que fixei bem mais o conteúdo!",
  "Consigo revisar entre um plantão e outro. Os mapas são lindos e fáceis de entender.",
  "Finalmente parei de me perder nas anotações. Recomendo para quem vai prestar concurso.",
];

const faqs = [
  ["Quais formas de pagamento são aceitas?", "Pix, cartão de crédito e boleto, pela plataforma de pagamento parceira."],
  ["O acesso é imediato após a compra?", "Sim. Após a confirmação do pagamento você recebe o acesso por e-mail."],
  ["Tem mensalidade?", "Não. O pagamento é único."],
  ["O material é digital?", "Sim, todo o conteúdo é entregue em PDF."],
  ["Posso imprimir?", "Pode! Os arquivos estão em alta resolução."],
  ["Recebo os bônus junto?", "Sim, no plano completo os bônus chegam junto com o material."],
  ["Existe garantia?", "Sim, 7 dias de garantia incondicional."],
];

function Index() {
  const [slide, setSlide] = useState(0);
  const [tSlide, setTSlide] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const slides = [sampleMap, heroPhone, sampleMap];

  return (
    <main className="min-h-screen">
      <div className="bg-navy py-2 text-center text-sm font-bold text-navy-foreground">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cta" />Acesso com desconto por tempo limitado.
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-10 text-center">
        <Pill>Material de apoio para estudantes e profissionais de enfermagem</Pill>
        <h1 className="mt-6 text-4xl font-black leading-[1.05] md:text-7xl">
          Revise com mais<br />foco e segurança para<br /><span className="text-gradient-title">concursos de enfermagem</span>
        </h1>
        <div className="mx-auto mt-8 w-full max-w-sm overflow-hidden rounded-3xl border-4 border-navy shadow-card">
          <img src={heroPhone} alt="Mapa mental de enfermagem no celular" width={768} height={1152} className="w-full" />
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
          Centenas de mapas mentais visuais para revisar temas, reforçar o aprendizado e consultar informações rapidamente durante a preparação.
        </p>
        <CTA className="mt-8">Quero meus mapas mentais</CTA>
        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground"><Check className="h-4 w-4 text-cta" />Acesso imediato ao material em PDF.</p>
      </section>

      {/* Sample */}
      <section className="bg-navy-gradient px-4 py-20 text-center text-navy-foreground">
        <Pill tone="dark"><Eye className="h-4 w-4" />Amostra real do material</Pill>
        <h2 className="mt-4 text-3xl font-black md:text-4xl">Veja por dentro do material</h2>
        <p className="mt-2 flex items-center justify-center gap-2 text-sm text-sky"><MoveHorizontal className="h-4 w-4" />Toque nas miniaturas para navegar.</p>
        <div className="relative mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl border-4 border-card bg-card">
          <img src={slides[slide]} alt="Exemplo de mapa mental" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full object-cover" />
          <span className="absolute bottom-3 right-3 rounded-full bg-navy px-3 py-1 text-xs font-bold">{slide + 1} / {slides.length}</span>
        </div>
        <div className="mt-4 flex justify-center gap-3">
          {slides.map((s, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`h-14 w-16 overflow-hidden rounded-md border-2 ${i === slide ? "border-cta" : "border-transparent opacity-60"}`}>
              <img src={s} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <Pill>Conteúdo programático</Pill>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black md:text-5xl">Do SUS à UTI: tudo organizado para sua revisão.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Mapas distribuídos em 6 módulos. Escolha o tema, abra o material e foque no que importa.</p>
        <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
          {modules.map((m) => (
            <div key={m.n} className="overflow-hidden rounded-2xl border bg-card shadow-card">
              <div className={`h-1.5 bg-gradient-to-r ${m.c}`} />
              <div className="border-b p-5">
                <span className="rounded-full bg-sky-soft px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-accent-foreground">Módulo {m.n}</span>
                <h3 className="mt-3 text-lg font-extrabold">{m.t}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{m.d}</p>
                <ul className="mt-4 space-y-2">
                  {m.i.map((x) => <li key={x} className="flex items-center gap-2 text-sm font-semibold"><Check className="h-4 w-4 text-cta" />{x}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="px-4">
        <div className="mx-auto max-w-6xl rounded-3xl bg-navy-gradient p-8 text-center text-navy-foreground shadow-card md:p-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-black md:text-4xl">Pare de começar do zero e vá direto ao que precisa dominar.</h2>
          <p className="mt-3 text-sm text-sky">Uma revisão que cabe entre aulas, trabalho e plantões.</p>
          <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
            {[["01 / Encontre", "Escolha o tema.", "Abra o módulo e localize o mapa do assunto em segundos.", "text-sky"], ["02 / Entenda", "Conecte as ideias.", "Veja palavras-chave e relações entre conceitos.", "text-gold"], ["03 / Avance", "Ganhe ritmo.", "Identifique o que reforçar e siga com questões e revisões.", "text-cta"]].map(([a, b, c, col]) => (
              <div key={a} className="rounded-2xl border border-navy-foreground/10 bg-navy-soft/60 p-6">
                <p className={`text-xs font-extrabold uppercase tracking-wider ${col}`}>{a}</p>
                <h3 className="mt-2 font-extrabold">{b}</h3>
                <p className="mt-3 text-sm opacity-70">{c}</p>
              </div>
            ))}
          </div>
          <CTA className="mt-10">Quero ganhar tempo nas revisões <ArrowRight className="h-4 w-4" /></CTA>
        </div>
      </section>

      {/* Audience */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-2xl font-black md:text-3xl">Para quem quer passar no concurso e crescer na Enfermagem.</h2>
        <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
          {[[Sparkles, "Na preparação para concursos", "Organize as revisões e chegue às questões com os assuntos claros."], [Plus, "Da faculdade aos plantões", "Retome conhecimentos da formação e construa uma base sólida."]].map(([Icon, t, d]: any) => (
            <div key={t} className="rounded-2xl border bg-card p-6 shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-soft text-accent-foreground"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-extrabold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-5xl px-4 pb-20 text-center">
        <Pill><Users className="h-4 w-4" />Depoimentos</Pill>
        <h2 className="mt-4 text-3xl font-black md:text-5xl">O que dizem quem já usa os Mapas Mentais</h2>
        <div className="mx-auto mt-10 max-w-lg rounded-3xl border bg-card p-8 text-left shadow-card">
          <div className="flex items-end gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-sky to-cta" />
            <p className="rounded-2xl border p-4 text-base">{testimonials[tSlide]}</p>
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {testimonials.map((_, i) => <button key={i} aria-label={`Depoimento ${i + 1}`} onClick={() => setTSlide(i)} className={`h-2 rounded-full transition-all ${i === tSlide ? "w-7 bg-cta" : "w-2 bg-border"}`} />)}
        </div>
        <CTA className="mt-10">Quero garantir os meus mapas!</CTA>
      </section>

      {/* Bonuses */}
      <section className="border-t px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <Pill tone="gold">Presentes exclusivos</Pill>
            <h2 className="mt-5 text-4xl font-black leading-tight">Garantindo hoje, você ainda leva <span className="text-cta">estes presentes:</span></h2>
            <p className="mt-5 text-muted-foreground">Bônus criados para acelerar sua aprovação e complementar o material principal.</p>
            <div className="mt-6 flex gap-3 rounded-xl border border-gold/40 bg-gold-soft p-4 text-xs text-orange"><Clock className="h-5 w-5 shrink-0" /><p><b>ATENÇÃO:</b> os bônus são liberados logo após a confirmação do pedido, sem custo extra.</p></div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {bonuses.map((b) => (
              <div key={b.t} className="relative rounded-2xl border bg-card p-6 shadow-card">
                <span className="absolute -top-px right-4 rounded-b-lg bg-orange px-3 py-1 text-[10px] font-extrabold uppercase text-primary-foreground">{b.tag}</span>
                <div className="flex h-20 items-center justify-center rounded-xl border bg-muted"><Gift className="h-8 w-8 text-cta" /></div>
                <h3 className="mt-4 text-lg font-extrabold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                <div className="mt-5 flex items-center justify-between border-t pt-4">
                  <span className="rounded bg-muted px-2 py-1 text-[10px] font-extrabold uppercase text-muted-foreground">Incluso hoje</span>
                  <span className="rounded-full bg-cta px-3 py-1 text-xs font-extrabold uppercase text-cta-foreground">Grátis</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="bg-navy-gradient px-4 py-20">
        <div className="mx-auto max-w-md space-y-8">
          <div className="rounded-2xl bg-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="rounded bg-muted px-2 py-1 text-[10px] font-bold uppercase text-muted-foreground">Apenas os mapas</span>
                <h3 className="mt-2 text-lg font-bold">Plano Básico</h3>
                <p className="text-xs text-muted-foreground">Todos os mapas mentais em PDF.</p>
              </div>
              <span className="rounded-full bg-destructive/10 px-2 py-1 text-[10px] font-bold uppercase text-destructive">Sem bônus</span>
            </div>
            <ul className="mt-4 space-y-2 border-y py-4 text-sm">
              <li className="flex gap-2"><Check className="h-4 w-4 text-cta" /><b>Mapas de Enfermagem</b> em PDF</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-cta" />Alta resolução</li>
              <li className="flex gap-2 text-destructive"><X className="h-4 w-4" />Sem os 4 bônus</li>
            </ul>
            <div className="mt-4 flex items-end justify-between">
              <div><p className="text-xs text-muted-foreground line-through">De R$ 97,00</p><p className="font-black">R$<span className="text-4xl">10</span>,00</p></div>
              <span className="rounded-full bg-sky-soft px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground">Pagamento único</span>
            </div>
            <a href="#" className="mt-4 block rounded-xl bg-navy py-3 text-center text-sm font-extrabold uppercase text-navy-foreground">Quero só os mapas</a>
          </div>

          <div className="relative rounded-2xl border-2 border-cta bg-card p-8">
            <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-cta px-4 py-1 text-[10px] font-extrabold uppercase text-cta-foreground"><Sparkles className="h-3 w-3" />Melhor custo-benefício</span>
            <span className="rounded-full bg-sky-soft px-3 py-1 text-xs font-bold uppercase text-accent-foreground">Acesso completo + bônus</span>
            <h3 className="mt-3 text-2xl font-bold">Combo Completo</h3>
            <p className="text-sm text-muted-foreground">Mapas + mnemônicos, simulado e guia de cálculos.</p>
            <ul className="mt-5 space-y-3 border-y py-5 text-sm font-semibold">
              {["Todos os Mapas Mentais", "Bônus: Cronograma 60 Dias + Mural de Mnemônicos", "Bônus: Simulado + Guia de Cálculos", "Acesso vitalício com atualizações"].map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-cta" />{x}</li>)}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground line-through">Original: R$ 197,00</p>
            <p className="font-black text-cta">R$<span className="text-6xl">27</span>,00</p>
            <span className="mt-2 inline-block rounded-full bg-cta/15 px-3 py-1 text-xs font-extrabold uppercase text-cta">O mais escolhido</span>
            <a href="#" className="mt-6 block rounded-xl bg-cta py-4 text-center font-extrabold uppercase text-cta-foreground shadow-cta">Quero o combo completo</a>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-8 text-center shadow-card md:p-12">
          <Pill tone="gold"><ShieldCheck className="h-4 w-4" />Compra 100% garantida</Pill>
          <h2 className="mt-4 text-2xl font-black md:text-3xl">Risco zero: satisfação garantida ou seu dinheiro de volta.</h2>
          <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-gold bg-navy text-gold"><ShieldCheck className="h-8 w-8" /></div>
          <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">Acesse todo o conteúdo e avalie com calma. Se não gostar, peça o reembolso em até 7 dias pela plataforma de pagamento, sem burocracia.</p>
          <div className="mt-8 grid gap-4 border-t pt-8 sm:grid-cols-3">
            {["Compra segura", "Reembolso garantido", "Acesso imediato"].map((x) => <div key={x} className="rounded-xl border p-4 text-xs font-extrabold uppercase"><Check className="mx-auto mb-2 h-5 w-5 text-cta" />{x}</div>)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t px-4 py-20 text-center">
        <HelpCircle className="mx-auto h-10 w-10 text-accent-foreground" />
        <h2 className="mt-4 text-3xl font-black md:text-4xl">Ainda ficou alguma dúvida?</h2>
        <div className="mx-auto mt-10 max-w-3xl space-y-3 text-left">
          {faqs.map(([q, a], i) => (
            <div key={q} className="rounded-xl border bg-card shadow-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-5 text-sm font-bold">
                {q}{open === i ? <Minus className="h-4 w-4 text-muted-foreground" /> : <Plus className="h-4 w-4 text-muted-foreground" />}
              </button>
              {open === i && <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs font-bold uppercase tracking-wider text-muted-foreground">Agora que está tudo claro, garanta seu material.</p>
        <CTA className="mt-4">Quero garantir meu material</CTA>
      </section>
    </main>
  );
}
