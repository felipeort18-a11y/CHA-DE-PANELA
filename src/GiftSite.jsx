import React from "react";
import logo from "./assets/logo.png";

export default function GiftSite() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-pink-50">
      {/* Logo no topo */}
      <div className="flex flex-col items-center justify-center bg-white p-4 shadow-md w-full">
        <img
          src={logo}
          alt="Logo Daiane e Felipe"
          className="w-40 h-auto"
        />
      </div>

// === CONFIGURAÇÃO EDITÁVEL ===
const CONFIG = {
  couple: {
    names: "Daiane & Felipe",
  },
  event: {
    date: "20/12/2025",
    time: "16:00",
    venue: "Casa da Dona Jamel",
    cityState: "Angra dos Reis, RJ",
  },
  theme: {
    primary: "#b83280", // fúcsia suave
    accent: "#ffdbe8", // rosa claro de fundo
  },
  // Lista de presentes — edite livremente.
  // Dica: use links de busca do Mercado Livre para evitar quebrar o link de um vendedor específico.
  gifts: [
    {
      id: "panela",
      name: "Jogo de Panelas Antiaderente",
      note: "Tamanho médio, 5 a 7 peças",
      mlLink: "https://lista.mercadolivre.com.br/jogo-de-panelas-antiaderente",
      image:
        "https://down-br.img.susercontent.com/file/sg-11134201-7rd68-lwzxws93c3fq0d",
    },
    {
      id: "frigideira",
      name: "Frigideira antiaderente 28 cm",
      note: "Com tampa, fundo grosso",
      mlLink: "https://lista.mercadolivre.com.br/frigideira-28cm-com-tampa",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_789811-MLU78932782997_092024-O.webp",
    },
    {
      id: "faqueiro",
      name: "Faqueiro Inox 24–42 peças",
      note: "Estilo clássico",
      mlLink: "https://lista.mercadolivre.com.br/faqueiro-inox-24-pecas",
      image:
        "https://a-static.mlcdn.com.br/1500x1500/faqueiro-de-luxo-inox-24-42-pecas-com-caixa-de-madeira-conjunto-completo-de-talheres-alta-durabilidade-presente-casamento-faqueiro-completo-casitaa/innovacenter/0024/eefb2ce61441439da5505c97f1b6dfdc.jpeg",
    },
    {
      id: "liquidificador",
      name: "Liquidificador 900–1200W",
      note: "Copo de vidro ou Tritan",
      mlLink: "https://lista.mercadolivre.com.br/liquidificador-1200w",
      image:
        "https://io.convertiez.com.br/m/lojasedmil/shop/products/images/832/large/liquidificador-philco-ph900-com-12-velocidades-e-jarra-3-litros-preto_5381.jpg",
    },
    {
      id: "cafeteira",
      name: "Cafeteira Elétrica 30–40 xícaras",
      note: "Com filtro reutilizável",
      mlLink: "https://lista.mercadolivre.com.br/cafeteira-eletrica-40-xicaras",
      image:
        "https://lojasguaibim.vtexassets.com/arquivos/ids/165052-800-auto?v=638007596275070000&width=800&height=auto&aspect=true",
    },
    {
      id: "potes",
      name: "Kit Potes Herméticos (6–10 pcs)",
      note: "Para mantimentos",
      mlLink: "https://lista.mercadolivre.com.br/potes-hermeticos-kit",
      image:
        "https://invicta.vteximg.com.br/arquivos/ids/175607-480-480/Kit-com-6-Potes-de-Vidro-Hermeticos-Retangulares-10L-Invicta-7-min.png.png?v=638852470965100000",
    },
    {
      id: "assadeira",
      name: "Assadeira de vidro com tampa",
      note: "Retangular média",
      mlLink: "https://lista.mercadolivre.com.br/assadeira-vidro-tampa",
      image:
        "https://images.tcdn.com.br/img/img_prod/1215673/assadeira_lasanheira_de_vidro_retangular_c_tampa_marinex_5l_863_2_1189c7799c3b5d6fe1610027e4ce93fd.jpg",
    },
    {
      id: "ayrfra",
      name: "Assadeira de vidro com tampa",
      note: "Retangular média",
      mlLink: "https://lista.mercadolivre.com.br/air-fryer-mondial",
      image:
        "https://lebiscuit.vtexassets.com/arquivos/ids/55853331-600-600/5136083_00000_01.jpg?v=638874842061000000&width=400&height=400&format=webp&quality=75",
    },
    {
      id: "panela-pressao",
      name: "Panela de Pressão 4,5–6L",
      note: "Com válvula de segurança",
      mlLink: "https://lista.mercadolivre.com.br/panela-de-pressao-6l",
      image:
        "https://mediacdn.simonetti.com.br/media/catalog/product/cache/f777e0fcb693fc2eda14df7367849c5a/8/9/89187.jpg",
    },
  ],
};

// === COMPONENTES DE UI ===
const Heart = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    {...props}
  >
    <path d="M12 21s-6.716-4.278-9.428-7.03C1.056 12.441 0 10.856 0 8.998 0 6.238 2.239 4 5 4c1.657 0 3.156.84 4 2.09C9.844 4.84 11.343 4 13 4c2.761 0 5 2.238 5 4.998 0 1.858-1.056 3.443-2.572 4.972C18.716 16.722 12 21 12 21z" />
  </svg>
);

function PasswordGate({ children }) {
  const [input, setInput] = useState("");
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("giftSite_auth");
    if (stored === "true") setOk(true);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (input.trim() === CONFIG.password) {
      setOk(true);
      localStorage.setItem("giftSite_auth", "true");
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
  };

  if (ok) return children;

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${CONFIG.theme.accent}, #ffffff)` }}>
      <div className="max-w-sm w-full bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 text-center">
        <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: CONFIG.theme.accent }}>
          <Heart className="w-6 h-6" style={{ color: CONFIG.theme.primary }} />
        </div>
        <h1 className="text-xl font-semibold" style={{ color: CONFIG.theme.primary }}>
          Chá de Panela — {CONFIG.couple.names}
        </h1>
        <p className="text-sm text-gray-600 mt-1">Acesse com a senha para ver a lista de presentes.</p>
        <form onSubmit={submit} className="mt-5 space-y-3">
          <input
            type="password"
            required
            placeholder="Digite a senha"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2"
            style={{ borderColor: CONFIG.theme.accent, boxShadow: `0 0 0 0 rgba(0,0,0,0)`, }}
          />
          <button
            type="submit"
            className="w-full rounded-xl px-4 py-2 font-medium shadow"
            style={{ backgroundColor: CONFIG.theme.primary, color: "white" }}
          >
            Entrar
          </button>
          <p className="text-xs text-gray-500">Dica: personalize a senha no topo do código (CONFIG.password).</p>
        </form>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: CONFIG.theme.accent }} />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: CONFIG.theme.accent }} />
      </div>
      <div className="max-w-5xl mx-auto px-4 py-12 text-center">
        <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full shadow" style={{ backgroundColor: CONFIG.theme.accent }}>
          <Heart className="w-7 h-7" style={{ color: CONFIG.theme.primary }} />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: CONFIG.theme.primary }}>
          Chá de Panela — {CONFIG.couple.names}
        </h1>
        <p className="mt-3 text-gray-700 max-w-xl mx-auto">
          Com muito carinho, preparamos uma lista de presentes. Ao clicar, você será direcionado ao Mercado Livre para concluir a compra.
        </p>
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 text-sm bg-white/70 backdrop-blur px-4 py-2 rounded-full shadow">
          <span className="font-semibold" style={{ color: CONFIG.theme.primary }}>Data:</span>
          <span>{CONFIG.event.date} às {CONFIG.event.time}</span>
          <span className="mx-2">•</span>
          <span className="font-semibold" style={{ color: CONFIG.theme.primary }}>Local:</span>
          <span>{CONFIG.event.venue}</span>
          <span className="mx-2">•</span>
          <span className="font-semibold" style={{ color: CONFIG.theme.primary }}>Cidade:</span>
          <span>{CONFIG.event.cityState}</span>
        </div>
        <div className="mt-4 text-xs text-gray-600">
          Entrega: <strong>Itajaí — SC</strong> (defina o endereço de entrega na finalização do Mercado Livre).
        </div>
      </div>
    </header>
  );
}

function GiftCard({ item }) {
  const openML = () => {
    window.open(item.mlLink, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <div className="aspect-video w-full overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg" style={{ color: CONFIG.theme.primary }}>{item.name}</h3>
        {item.note && <p className="text-sm text-gray-600 mt-1">{item.note}</p>}
        <div className="mt-auto pt-4">
          <button
            onClick={openML}
            className="w-full rounded-xl px-4 py-2 font-medium shadow"
            style={{ backgroundColor: CONFIG.theme.primary, color: "white" }}
          >
            Comprar no Mercado Livre
          </button>
        </div>
      </div>
    </div>
  );
}

function GiftList() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return CONFIG.gifts;
    return CONFIG.gifts.filter((g) => `${g.name} ${g.note ?? ""}`.toLowerCase().includes(s));
  }, [q]);

  const copyEvent = async () => {
    const text = `Chá de Panela — ${CONFIG.couple.names}\nData: ${CONFIG.event.date} às ${CONFIG.event.time}\nLocal: ${CONFIG.event.venue}\nCidade: ${CONFIG.event.cityState}\n\nEntrega dos presentes: Itajaí — SC (pelo Mercado Livre).`;
    try {
      await navigator.clipboard.writeText(text);
      alert("Detalhes copiados! Cole no WhatsApp para convidar.");
    } catch (e) {
      alert("Não foi possível copiar.");
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 pb-16">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Buscar presente (ex.: panela, cafeteira)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2"
            style={{ borderColor: CONFIG.theme.accent }}
          />
        </div>
        <button onClick={copyEvent} className="rounded-xl px-4 py-2 font-medium shadow" style={{ backgroundColor: CONFIG.theme.primary, color: "white" }}>
          Copiar detalhes do evento
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <GiftCard key={item.id} item={item} />
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-6">
        Dica: Se preferir, substitua os links por itens específicos do Mercado Livre que vocês escolherem.
      </p>
    </section>
  );
}

export default function GiftSite() {
  return (
    <div className="min-h-screen" style={{ background: `linear-gradient(180deg, ${CONFIG.theme.accent} 0%, #fff 40%)` }}>
      <PasswordGate>
        <Header />
        <GiftList />
        <footer className="text-center text-xs text-gray-500 py-8">
          Com amor, {CONFIG.couple.names} ❤️
        </footer>
      </PasswordGate>
    </div>
  );
}
