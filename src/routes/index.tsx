import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Check,
  X,
  Plus,
  Minus,
  Eye,
  Users,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mapas Mentais de Odontologia — Estude para concursos" },
      {
        name: "description",
        content:
          "Estude com mais clareza e confiança para concursos de Odontologia. 200 mapas mentais visuais em PDF, organizados em 6 módulos.",
      },
      { property: "og:title", content: "Mapas Mentais de Odontologia" },
      {
        property: "og:description",
        content:
          "200 mapas mentais visuais em PDF para estudantes e profissionais de Odontologia revisarem com mais clareza e confiança.",
      },
    ],
  }),
  component: Index,
});

function CTA({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href="#planos"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-cta-foreground shadow-cta transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  );
}

function Pill({ children, tone = "sky" }: { children: ReactNode; tone?: "sky" | "gold" | "dark" }) {
  const t =
    tone === "gold"
      ? "bg-gold-soft text-orange border-gold/40"
      : tone === "dark"
        ? "bg-navy-soft/60 text-sky border-sky/40"
        : "bg-sky-soft text-accent-foreground border-sky/30";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${t}`}
    >
      {children}
    </span>
  );
}

const modules = [
  {
    n: "01",
    t: "SUS e saúde bucal coletiva",
    d: "Visualize os princípios do SUS, as políticas públicas de saúde bucal e os fundamentos da Odontologia Coletiva em mapas que ajudam a conectar legislação, prevenção e promoção da saúde.",
    i: [
      "Leis 8.080 e 8.142",
      "Política Nacional de Saúde Bucal",
      "Atenção Primária e ESF",
      "Epidemiologia e índices odontológicos",
    ],
    c: "from-sky to-cta",
  },
  {
    n: "02",
    t: "Fundamentos, anatomia e diagnóstico",
    d: "Reforce os conhecimentos essenciais da formação odontológica com uma revisão visual sobre estruturas da cavidade oral, funcionamento do sistema estomatognático e métodos de diagnóstico.",
    i: [
      "Anatomia dental e de cabeça e pescoço",
      "Histologia e fisiologia oral",
      "Oclusão e sistema estomatognático",
      "Radiologia e diagnóstico odontológico",
    ],
    c: "from-cta to-cta",
  },
  {
    n: "03",
    t: "Cariologia, dentística e periodontia",
    d: "Conecte os principais conceitos sobre cárie dentária, materiais restauradores e doenças periodontais sem se perder em anotações extensas e conteúdos espalhados.",
    i: [
      "Diagnóstico e prevenção da cárie",
      "Materiais dentários e restaurações",
      "Gengivite e periodontite",
      "Terapia periodontal básica",
    ],
    c: "from-accent-foreground to-sky",
  },
  {
    n: "04",
    t: "Endodontia, cirurgia e urgências odontológicas",
    d: "Revise os fundamentos das principais intervenções odontológicas, desde alterações pulpares até procedimentos cirúrgicos e situações de urgência, com mais organização e clareza.",
    i: [
      "Diagnóstico pulpar e periapical",
      "Tratamento endodôntico",
      "Anestesia local e exodontias",
      "Traumatismos e urgências odontológicas",
    ],
    c: "from-sky to-accent-foreground",
  },
  {
    n: "05",
    t: "Odontopediatria, estomatologia e especialidades",
    d: "Reúna conhecimentos importantes sobre saúde bucal nas diferentes fases da vida, alterações da mucosa oral e conceitos essenciais de especialidades odontológicas.",
    i: [
      "Dentição decídua e odontopediatria",
      "Lesões bucais e estomatologia",
      "Ortodontia e desenvolvimento da oclusão",
      "Prótese dentária e reabilitação oral",
    ],
    c: "from-destructive to-destructive",
  },
  {
    n: "06",
    t: "Biossegurança, ética e legislação odontológica",
    d: "Tenha normas, responsabilidades profissionais e protocolos de biossegurança reunidos em mapas para retomar os assuntos cobrados em concursos e fundamentais para a atuação do cirurgião-dentista.",
    i: [
      "Lei 5.081/66",
      "Código de Ética Odontológica",
      "Esterilização e controle de infecção",
      "Atribuições e responsabilidade profissional",
    ],
    c: "from-orange to-gold",
  },
];

const bonuses = [
  {
    tag: "Presente especial",
    t: "Cronograma de Aprovação 60 Dias",
    image: "/bonus/cronograma.jpg",
    paragraphs: [
      "Uma planilha guiada que organiza sua rotina diária de estudo dos mapas mentais de Odontologia.",
      "Saiba quais disciplinas revisar a cada dia, distribua os conteúdos ao longo das semanas e acompanhe seu progresso sem precisar perder tempo montando um planejamento do zero.",
    ],
  },
  {
    tag: "Muito exclusivo",
    t: "Mural de Mnemônicos Odontológicos",
    image: "/bonus/mnemonicos.jpg",
    paragraphs: [
      "Um pôster estratégico em PDF com siglas, associações visuais e frases curtas para facilitar a memorização de conteúdos que costumam exigir atenção aos detalhes.",
      "Revise classificações odontológicas, anatomia dental, nervos cranianos, índices de saúde bucal e outros conceitos importantes de maneira rápida e visual.",
    ],
  },
  {
    tag: "Teste de retenção",
    t: "Simulado de Questões Gabaritadas",
    image: "/bonus/simulado.jpg",
    paragraphs: [
      "100 questões de Odontologia, com gabarito comentado e organizadas por assuntos relacionados aos mapas mentais.",
      "Pratique os conhecimentos revisados, familiarize-se com o estilo das questões de concurso e identifique os conteúdos que precisam de mais atenção antes da próxima prova.",
    ],
  },
  {
    tag: "Guia prático",
    t: "Guia de Farmacologia e Anestesia Odontológica",
    image: "/bonus/farmacologia.jpg",
    paragraphs: [
      "Organize os principais conceitos de farmacologia aplicada à Odontologia com explicações visuais sobre anestésicos locais, cálculos de doses, indicações, contraindicações e cuidados farmacológicos.",
      "Um material complementar para reforçar os fundamentos teóricos e revisar temas que costumam gerar dúvidas durante a graduação e a preparação para concursos.",
    ],
  },
];

const steps = [
  [
    "01 / ENCONTRE",
    "Escolha o tema.",
    "Vai revisar anatomia dental, cariologia ou cirurgia? Abra o módulo e encontre o mapa do assunto que precisa estudar.",
    "text-sky",
  ],
  [
    "02 / ENTENDA",
    "Conecte as ideias.",
    "Visualize palavras-chave, classificações e relações entre conceitos odontológicos para compreender os conteúdos de forma mais organizada.",
    "text-gold",
  ],
  [
    "03 / AVANCE",
    "Ganhe ritmo nos estudos.",
    "Retome os assuntos, identifique os pontos que precisam de reforço e continue sua preparação com questões, exercícios e revisões.",
    "text-cta",
  ],
];

const audiences = [
  {
    Icon: Sparkles,
    title: "Na preparação para concursos",
    paragraphs: [
      "Reforce os conteúdos mais cobrados em provas de Odontologia, organize suas revisões e chegue às questões com os conceitos, classificações e fundamentos mais claros na cabeça.",
      "Revise disciplinas como Saúde Bucal Coletiva, Anatomia Dental, Dentística, Periodontia, Endodontia, Cirurgia e Legislação Odontológica de maneira mais prática e organizada.",
    ],
  },
  {
    Icon: Plus,
    title: "Da faculdade à rotina do consultório",
    paragraphs: [
      "Retome conhecimentos da graduação, conecte conceitos essenciais e desenvolva uma base teórica cada vez mais sólida.",
      "Seja para revisar antes de uma prova, acompanhar as disciplinas clínicas ou consultar conteúdos durante sua preparação profissional, tenha seus principais assuntos organizados em um único material.",
    ],
  },
];

const faqs = [
  [
    "Quais formas de pagamento são aceitas?",
    "As formas de pagamento disponíveis são apresentadas na página de checkout, antes da confirmação do pedido.",
  ],
  [
    "O acesso é imediato após a compra?",
    "Sim! Após a confirmação do pagamento, você recebe as instruções para acessar os mapas mentais de Odontologia em formato digital.",
  ],
  [
    "Tem alguma mensalidade ou cobrança recorrente?",
    "Não! O valor apresentado corresponde a um pagamento único. Não existe mensalidade ou assinatura obrigatória.",
  ],
  [
    "O material é digital?",
    "Sim! Os 200 mapas mentais de Odontologia são disponibilizados em formato PDF, permitindo estudar pelo celular, tablet ou computador.",
  ],
  [
    "Posso imprimir o material?",
    "Sim! Os mapas mentais são fornecidos em alta resolução, permitindo imprimir os conteúdos para organizar suas revisões da maneira que preferir.",
  ],
  [
    "Recebo os bônus junto com o material?",
    "Sim! Ao adquirir o Combo Odontologia de Elite, você recebe os 200 mapas mentais e os quatro materiais complementares anunciados na oferta.",
  ],
  [
    "A compra é segura?",
    "A compra é processada pela plataforma de pagamento parceira. Antes de finalizar, você pode conferir as informações do pedido e as condições de pagamento.",
  ],
  [
    "E se eu tiver algum problema com o acesso?",
    "Caso encontre qualquer dificuldade para acessar o conteúdo, entre em contato com o suporte pelo canal informado na confirmação do pedido.",
  ],
  [
    "Existe garantia?",
    "Sim! Você tem 7 dias após a compra para conhecer o material e solicitar reembolso, conforme as condições de garantia apresentadas na oferta.",
  ],
];

// Empty galleries show no images, quotes or counters until assets are provided.
type GalleryImage = { src: string; alt: string };
const testimonialImages: GalleryImage[] = [
  {
    src: "/depoimentos/camila.jpg",
    alt: "Depoimento de Camila sobre os mapas de Odontologia no WhatsApp",
  },
  {
    src: "/depoimentos/larissa.jpg",
    alt: "Depoimento de Larissa sobre a revisão com mapas mentais no WhatsApp",
  },
  {
    src: "/depoimentos/mariana.jpg",
    alt: "Depoimento de Mariana sobre os mapas de anatomia, cariologia e saúde coletiva no WhatsApp",
  },
];

function MaterialGallery({
  images,
  emptyText,
  portrait = false,
}: {
  images: GalleryImage[];
  emptyText: string;
  portrait?: boolean;
}) {
  const [slide, setSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  if (!images.length)
    return (
      <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-current/20 p-10 text-sm">
        {emptyText}
      </p>
    );
  return (
    <div className={`mx-auto mt-8 ${portrait ? "max-w-md" : "max-w-2xl"}`}>
      <p className="text-sm">Arraste para o lado ou toque nas miniaturas para navegar.</p>
      <p className="mt-2 text-xs font-bold">Arraste →</p>
      <div
        className="relative mt-4 touch-pan-y overflow-hidden rounded-2xl border bg-card text-foreground"
        onTouchStart={(event) => setTouchStart(event.changedTouches[0].clientX)}
        onTouchEnd={(event) => {
          if (touchStart !== null) {
            const distance = touchStart - event.changedTouches[0].clientX;
            if (Math.abs(distance) > 40)
              setSlide(
                (current) => (current + (distance > 0 ? 1 : -1) + images.length) % images.length,
              );
          }
          setTouchStart(null);
        }}
      >
        <img
          src={images[slide].src}
          alt={images[slide].alt}
          loading="lazy"
          width={portrait ? 896 : 1280}
          height={portrait ? 1200 : 960}
          className={portrait ? "block h-auto w-full" : "aspect-[4/3] w-full object-contain"}
        />
      </div>
      <span
        aria-live="polite"
        className="mt-3 inline-block rounded-full bg-navy px-3 py-1 text-xs font-bold text-navy-foreground"
      >
        {slide + 1} / {images.length}
      </span>
      <div className="mt-4 flex justify-center gap-3 overflow-x-auto pb-2">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Ver imagem ${i + 1}: ${image.alt}`}
            aria-pressed={i === slide}
            onClick={() => setSlide(i)}
            className={`h-14 w-16 shrink-0 overflow-hidden rounded-md border-2 ${i === slide ? "border-cta" : "border-transparent opacity-60"}`}
          >
            <img src={image.src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function TrustLabels({ complete = false }: { complete?: boolean }) {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
      <span>🔒 {complete ? "100% Seguro" : "Seguro"}</span>
      <span>⚡ Envio Já</span>
      <span>🛡️ {complete ? "Risco Zero" : "Garantia"}</span>
    </div>
  );
}

const checkoutUrls = {
  basic: "https://pay.cakto.com.br/aq3wzps_1220564",
  special: "https://pay.cakto.com.br/b6oh44n_1220627",
  complete: "https://pay.cakto.com.br/jugv22d_1220635",
};

function BasicPlanOffer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState<"basic" | "special" | null>(null);

  function choosePlan(plan: "basic" | "special") {
    const url = checkoutUrls[plan];
    if (url) {
      window.location.assign(url);
      return;
    }
    setSelection(plan);
    setIsOpen(false);
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          onClick={() => setSelection(null)}
          className="mt-4 block w-full rounded-xl bg-navy px-4 py-3 text-center text-sm font-extrabold uppercase text-navy-foreground transition-colors hover:bg-navy-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cta"
        >
          QUERO SÓ OS MAPAS
        </button>
      </Dialog.Trigger>
      {selection && (
        <p
          role="status"
          className="mt-4 rounded-xl border bg-muted p-4 text-sm text-muted-foreground"
        >
          Você selecionou{" "}
          {selection === "special"
            ? "o Combo Odontologia de Elite por R$ 17,00"
            : "os 200 mapas de Odontologia por R$ 10,00"}
          . A finalização da compra estará disponível em breve.
        </p>
      )}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:animate-none" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border-2 border-cta bg-card text-foreground shadow-2xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 motion-reduce:animate-none">
          <div className="relative bg-navy-gradient px-5 pb-5 pt-6 text-center text-navy-foreground sm:px-8">
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Fechar oferta"
                className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-navy-soft text-navy-foreground transition-colors hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
            <span className="mx-7 inline-flex items-center gap-1 rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-gold sm:text-xs">
              <Sparkles className="h-3 w-3 shrink-0" /> Oportunidade exclusiva
            </span>
            <Dialog.Title className="mt-3 text-xl font-black leading-tight sm:text-2xl">
              Leve o Combo Odontologia de Elite por apenas{" "}
              <span className="whitespace-nowrap text-gold">R$ 17,00!</span>
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-xs leading-relaxed text-navy-foreground/80 sm:text-sm">
              De <span className="line-through">R$ 27</span> por <strong>R$ 17</strong>: apenas R$ 7
              a mais que o plano básico para levar os mapas e os 4 bônus.
            </Dialog.Description>
          </div>
          <div className="space-y-4 p-4 sm:p-5">
            <div className="rounded-xl border bg-muted/60 p-4">
              <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide">
                <Sparkles className="h-4 w-4 shrink-0 text-cta" />
                Tudo o que você desbloqueia no combo:
              </h3>
              <ul className="mt-3 grid gap-x-4 gap-y-2 text-xs leading-relaxed min-[460px]:grid-cols-2">
                {[
                  "Todos os 200 Mapas de Odontologia em PDF",
                  "Cronograma de Aprovação 60 Dias",
                  "Mural de Mnemônicos Odontológicos",
                  "100 Questões Gabaritadas",
                  "Guia de Farmacologia e Anestesia Odontológica",
                  "Acesso Vitalício + Atualizações",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-xl border border-cta/40 bg-cta/10 p-4">
              <div>
                <p className="text-xs text-muted-foreground line-through">De R$ 27,00</p>
                <span className="mt-1 inline-block rounded bg-destructive/10 px-2 py-1 text-[10px] font-extrabold uppercase text-destructive">
                  R$ 10 de desconto
                </span>
              </div>
              <div className="shrink-0 text-right text-cta">
                <p className="whitespace-nowrap text-3xl font-black sm:text-4xl">R$ 17,00</p>
                <p className="text-[10px] font-bold uppercase">Pagamento único</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => choosePlan("special")}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-4 py-4 text-sm font-extrabold uppercase text-cta-foreground shadow-cta transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
            >
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>
                SIM! QUERO O COMBO POR <span className="whitespace-nowrap">R$ 17</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => choosePlan("basic")}
              className="w-full rounded-lg px-3 py-2 text-xs font-semibold leading-relaxed text-muted-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-cta"
            >
              Prefiro só os 200 mapas por R$ 10,00, sem os 4 bônus →
            </button>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 border-t pt-3 text-[9px] font-bold uppercase text-muted-foreground sm:text-[10px]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-cta" />
                Compra segura
              </span>
              <span>⚡ Envio já</span>
              <span>🛡️ 7 dias de garantia</span>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <main className="min-h-screen">
      <div className="bg-navy py-2 text-center text-sm font-bold text-navy-foreground">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cta" />
        Acesso com desconto até HOJE
      </div>

      <section className="mx-auto max-w-5xl px-4 pb-16 pt-10 text-center">
        <Pill>MATERIAL DE APOIO PARA ESTUDANTES E PROFISSIONAIS DE ODONTOLOGIA</Pill>
        <h1 className="mt-6 text-4xl font-black leading-[1.1] md:text-7xl">
          Estude com mais clareza e confiança para{" "}
          <span className="text-gradient-title">concursos de Odontologia</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
          Reúna os conteúdos mais importantes da Odontologia em{" "}
          <strong>200 mapas mentais visuais</strong> para revisar disciplinas, compreender conceitos
          essenciais, reforçar seu aprendizado e consultar informações de forma prática durante sua
          preparação.
        </p>
        <div className="mx-auto mt-8 w-full max-w-lg overflow-hidden rounded-2xl border shadow-card">
          <img
            src="/mockup-200-mapas-odontologia.png"
            alt="Mockup dos 200 Mapas Mentais de Odontologia em PDF, com livro, tablet e celular"
            width={1254}
            height={1254}
            fetchPriority="high"
            className="block h-auto w-full"
          />
        </div>
        <CTA className="mt-8">QUERO MEUS MAPAS MENTAIS AGORA</CTA>
        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Check className="h-4 w-4 shrink-0 text-cta" />
          Acesso imediato ao material completo em formato PDF.
        </p>
      </section>

      <section className="bg-navy-gradient px-4 py-20 text-center text-navy-foreground">
        <Pill tone="dark">
          <Eye className="h-4 w-4" />
          Amostra Real do Material
        </Pill>
        <h2 className="mt-4 text-3xl font-black md:text-4xl">Navegue por Dentro do Material</h2>
        <MaterialGallery
          images={[]}
          emptyText="As amostras dos mapas mentais de Odontologia estarão disponíveis em breve."
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <Pill>Conteúdo Programático</Pill>
        <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black md:text-5xl">
          Da Saúde Bucal Coletiva à Cirurgia Odontológica: tudo organizado para sua próxima revisão.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          <strong>200 mapas mentais distribuídos em 6 módulos.</strong> Você escolhe o tema, abre o
          material e concentra sua atenção no que realmente importa: estudar.
        </p>
        <div className="mt-12 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <div key={m.n} className="overflow-hidden rounded-2xl border bg-card shadow-card">
              <div className={`h-1.5 bg-gradient-to-r ${m.c}`} />
              <div className="border-b p-5">
                <span className="rounded-full bg-sky-soft px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-accent-foreground">
                  Módulo {m.n}
                </span>
                <h3 className="mt-3 text-lg font-extrabold">{m.t}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{m.d}</p>
                <ul className="mt-4 space-y-2">
                  {m.i.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-semibold">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-6xl rounded-3xl bg-navy-gradient p-8 text-center text-navy-foreground shadow-card md:p-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-black md:text-4xl">
            Em vez de começar do zero, comece pelo que você precisa dominar.
          </h2>
          <p className="mt-3 text-sm text-sky">
            Um jeito simples de fazer sua revisão caber entre as aulas, os atendimentos, os estágios
            e a rotina do consultório.
          </p>
          <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
            {steps.map(([label, title, description, color]) => (
              <div
                key={label}
                className="rounded-2xl border border-navy-foreground/10 bg-navy-soft/60 p-6"
              >
                <p className={`text-xs font-extrabold uppercase tracking-wider ${color}`}>
                  {label}
                </p>
                <h3 className="mt-2 font-extrabold">{title}</h3>
                <p className="mt-3 text-sm text-navy-foreground/80">{description}</p>
              </div>
            ))}
          </div>
          <CTA className="mt-10">
            Quero ganhar tempo nas minhas revisões!
            <ArrowRight className="h-4 w-4 shrink-0" />
          </CTA>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-2xl font-black md:text-3xl">
          Para quem quer passar no concurso e crescer com confiança na Odontologia.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Um material para acompanhar suas revisões nas diferentes fases da sua jornada acadêmica e
          profissional.
        </p>
        <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
          {audiences.map(({ Icon, title, paragraphs }) => (
            <div key={title} className="rounded-2xl border bg-card p-6 shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-soft text-accent-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-extrabold">{title}</h3>
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 text-center">
        <Pill>
          <Users className="h-4 w-4" />
          Depoimentos Reais
        </Pill>
        <h2 className="mt-4 text-3xl font-black md:text-5xl">
          O que dizem os profissionais e estudantes que já usam os Mapas Mentais
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Conheça as experiências de estudantes e profissionais que utilizam materiais visuais para
          organizar suas revisões e estudar com mais foco e praticidade.
        </p>
        <MaterialGallery
          images={testimonialImages}
          portrait
          emptyText="Os depoimentos de compradores do material de Odontologia estarão disponíveis em breve."
        />
        <CTA className="mt-10">Quero garantir os meus mapas agora!</CTA>
      </section>

      <section className="border-t px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <Pill tone="gold">Presentes Exclusivos</Pill>
            <h2 className="mt-5 text-4xl font-black leading-tight">
              Garantindo seu material hoje, você ainda leva{" "}
              <span className="text-cta">estes presentes:</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Estes bônus foram criados para acelerar suas revisões, fortalecer sua preparação para
              concursos e ajudar você a consolidar conhecimentos importantes da Odontologia.
            </p>
            <p className="mt-4 text-muted-foreground">
              Eles complementam o material principal e estão disponíveis nesta condição especial.
            </p>
            <div className="mt-6 flex gap-3 rounded-xl border border-gold/40 bg-gold-soft p-4 text-xs text-orange">
              <Clock className="h-5 w-5 shrink-0" />
              <p>
                <b>ATENÇÃO:</b> Os bônus serão liberados imediatamente para download após a
                confirmação do pedido, sem custos extras.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {bonuses.map((b) => (
              <div
                key={b.t}
                className="relative flex flex-col rounded-2xl border bg-card p-6 shadow-card"
              >
                <span className="absolute -top-px right-4 rounded-b-lg bg-orange px-3 py-1 text-[10px] font-extrabold uppercase text-primary-foreground">
                  {b.tag}
                </span>
                <div className="flex justify-center rounded-xl border bg-muted/40 px-3 py-4">
                  <img
                    src={b.image}
                    alt={`Apresentação do bônus ${b.t}`}
                    width={896}
                    height={1200}
                    loading="lazy"
                    className="h-52 w-auto max-w-full rounded-lg object-contain sm:h-56"
                  />
                </div>
                <h3 className="mt-4 text-lg font-extrabold">{b.t}</h3>
                <div className="mb-5">
                  {b.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-sm text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between border-t pt-4">
                  <span className="rounded bg-muted px-2 py-1 text-[10px] font-extrabold uppercase text-muted-foreground">
                    Incluso Hoje
                  </span>
                  <span className="rounded-full bg-cta px-3 py-1 text-xs font-extrabold uppercase text-cta-foreground">
                    🎁 GRÁTIS
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
          <strong>🎁 Aproveite agora:</strong> esta oferta foi pensada para entregar o máximo de
          valor e facilitar sua rotina de estudos em Odontologia.
        </p>
      </section>

      <section id="planos" className="scroll-mt-6 bg-navy-gradient px-4 py-20">
        <div className="mx-auto max-w-lg space-y-10">
          <div className="rounded-2xl bg-card p-6">
            <span className="rounded bg-muted px-2 py-1 text-[10px] font-bold uppercase text-muted-foreground">
              Apenas os Mapas
            </span>
            <h2 className="mt-3 text-xl font-bold">Plano Odontologia Prática</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Os 200 mapas mentais completos em PDF.
            </p>
            <span className="mt-3 inline-block rounded-full bg-destructive/10 px-2 py-1 text-[10px] font-bold uppercase text-destructive">
              Sem os Bônus
            </span>
            <ul className="mt-4 space-y-2 border-y py-4 text-sm">
              <li className="flex gap-2">
                <Check className="h-4 w-4 shrink-0 text-cta" />
                200 Mapas de Odontologia em PDF
              </li>
              <li className="flex gap-2">
                <Check className="h-4 w-4 shrink-0 text-cta" />
                Alta Resolução (Pronto para Imprimir)
              </li>
              <li className="flex gap-2 text-destructive">
                <X className="h-4 w-4 shrink-0" />
                Sem os 4 Materiais de Bônus
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs text-muted-foreground line-through">De R$ 97,00</p>
                <p className="text-4xl font-black">R$ 10,00</p>
              </div>
              <span className="rounded-full bg-sky-soft px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground">
                PAGAMENTO ÚNICO
              </span>
            </div>
            <BasicPlanOffer />
            <TrustLabels />
          </div>
          <div className="relative rounded-2xl border-2 border-cta bg-card p-6 sm:p-8">
            <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-cta px-4 py-1 text-[10px] font-extrabold uppercase text-cta-foreground">
              <Sparkles className="h-3 w-3" />
              MELHOR CUSTO-BENEFÍCIO
            </span>
            <span className="rounded-full bg-sky-soft px-3 py-1 text-xs font-bold uppercase text-accent-foreground">
              Acesso Completo + Bônus
            </span>
            <h2 className="mt-3 text-2xl font-bold">Combo Odontologia de Elite</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              O pacote completo com mapas mentais, mnemônicos, simulados práticos e guia de
              farmacologia e anestesia odontológica.
            </p>
            <ul className="mt-5 space-y-3 border-y py-5 text-sm font-semibold">
              {[
                "Todos os 200 Mapas Mentais",
                "Bônus: Cronograma 60 Dias + Mural de Mnemônicos Odontológicos",
                "Bônus: 100 Questões Gabaritadas + Guia de Farmacologia e Anestesia",
                "Acesso Vitalício Garantido com Atualizações",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-cta" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground line-through">Original: R$ 197,00</p>
            <p className="text-5xl font-black text-cta sm:text-6xl">R$ 27,00</p>
            <span className="mt-2 inline-block rounded-full bg-cta/15 px-3 py-1 text-xs font-extrabold uppercase text-cta">
              COMBO COMPLETO
            </span>
            <a
              href={checkoutUrls.complete}
              className="mt-6 block rounded-xl bg-cta px-4 py-4 text-center font-extrabold uppercase text-cta-foreground shadow-cta"
            >
              QUERO O COMBO COMPLETO
            </a>
            <TrustLabels complete />
            <p className="mt-5 text-center text-xs text-muted-foreground">
              Você tem 7 dias de garantia para conhecer o material com tranquilidade.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-8 text-center shadow-card md:p-12">
          <Pill tone="gold">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            COMPRA 100% GARANTIDA
          </Pill>
          <h2 className="mt-4 text-2xl font-black md:text-3xl">
            Risco Zero Para Você! Satisfação Garantida ou 100% de Reembolso.
          </h2>
          <div className="mx-auto mt-8 flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-gold bg-navy text-gold">
            <ShieldCheck className="h-7 w-7" />
            <span className="mt-1 text-xl font-black">7 DIAS</span>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
            Você pode adquirir os Mapas Mentais de Odontologia hoje, acessar todo o conteúdo e
            avaliar com calma se ele realmente faz sentido para sua rotina de estudos.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Se por qualquer motivo não gostar, basta solicitar o reembolso dentro do prazo de 7 dias
            diretamente pela plataforma de pagamento parceira, conforme as condições informadas no
            momento da compra.
          </p>
          <div className="mt-8 grid gap-4 border-t pt-8 sm:grid-cols-3">
            {["Compra 100% Segura", "Reembolso Garantido", "Acesso Imediato"].map((item) => (
              <div key={item} className="rounded-xl border p-4 text-xs font-extrabold uppercase">
                <Check className="mx-auto mb-2 h-5 w-5 text-cta" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t px-4 py-20 text-center">
        <HelpCircle className="mx-auto h-10 w-10 text-accent-foreground" />
        <h2 className="mt-4 text-3xl font-black md:text-4xl">Ainda ficou alguma dúvida?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Veja as respostas rápidas para as principais dúvidas e garanta seus Mapas Mentais de
          Odontologia com total segurança.
        </p>
        <div className="mx-auto mt-10 max-w-3xl space-y-3 text-left">
          {faqs.map(([q, a], i) => (
            <div key={q} className="rounded-xl border bg-card shadow-card">
              <h3>
                <button
                  type="button"
                  id={`faq-question-${i}`}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold"
                >
                  {q}
                  {open === i ? (
                    <Minus className="h-4 w-4 shrink-0 text-muted-foreground" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                </button>
              </h3>
              <p
                hidden={open !== i}
                id={`faq-answer-${i}`}
                aria-labelledby={`faq-question-${i}`}
                className="px-5 pb-5 text-sm text-muted-foreground"
              >
                {a}
              </p>
            </div>
          ))}
        </div>
        <h2 className="mx-auto mt-12 max-w-2xl text-xl font-bold">
          Agora que está tudo claro, você pode garantir seu material com tranquilidade.
        </h2>
        <CTA className="mt-6">QUERO GARANTIR MEU MATERIAL AGORA</CTA>
      </section>

      <footer className="border-t bg-navy px-4 py-12 text-center text-navy-foreground">
        <div className="mx-auto max-w-4xl">
          <p className="text-xl font-extrabold">Mapas de Odontologia</p>
          <p className="mt-3 text-xs">© 2026 Mapas de Odontologia. Todos os direitos reservados.</p>
          <div className="mt-6 space-y-4 text-xs leading-relaxed text-navy-foreground/75">
            <p>
              Este site não possui afiliação com o Conselho Federal de Odontologia (CFO), Conselhos
              Regionais de Odontologia (CROs), instituições públicas ou bancas examinadoras.
            </p>
            <p>
              Os conteúdos compartilhados possuem natureza exclusivamente educacional e têm como
              objetivo oferecer suporte didático a estudantes e profissionais de Odontologia.
            </p>
            <p>
              O material não substitui aulas práticas, formação supervisionada, avaliação clínica ou
              atualização profissional. Toda conduta odontológica real deve seguir as diretrizes
              científicas vigentes, a legislação profissional e os protocolos de biossegurança
              aplicáveis.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
