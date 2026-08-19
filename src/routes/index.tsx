import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-lar-franciscano.png.asset.json";
import { Header } from "@/components/site/Header";
import { Cta } from "@/components/site/Cta";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf0FwK1IAcQOMT59p8HpY8IIWYsrzpPxIiJMtiKb2zur39z8g/viewform";
const WHATSAPP_URL = "https://wa.me/5519998289345";

const SERVICOS = [
  {
    cidade: "Santa Bárbara d'Oeste",
    nome: "Ninho – Serviço de Acolhimento em Família Acolhedora",
    telefone: "(19) 3454-0795",
    whatsapp: true,
    obs: "telefone/WhatsApp",
  },
  {
    cidade: "Mombuca",
    nome: "Teto & Afeto – Família Acolhedora",
    telefone: "(19) 99153-3767",
    whatsapp: false,
  },
  {
    cidade: "Limeira",
    nome: "Serviço de Acolhimento em Família Acolhedora",
    telefone: "(19) 340",
    whatsapp: false,
    obs: "CEPROSOM",
  },
  {
    cidade: "Capivari",
    nome: "Teto & Afeto – Família Acolhedora",
    telefone: "(19) 99153-3767 / (19) 2146-0134",
    whatsapp: false,
  },
  {
    cidade: "Rafard",
    nome: "Teto & Afeto – Família Acolhedora",
    telefone: "(19) 99153-3767 / (19) 2146-0134",
    whatsapp: false,
  },
  {
    cidade: "Americana",
    nome: "APAM – Serviço de Família Acolhedora",
    telefone: "(19) 99927-9585",
    whatsapp: false,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Família Acolhedora — Lar Franciscano de Piracicaba" },
      {
        name: "description",
        content:
          "Conheça o Serviço de Acolhimento em Família Acolhedora do Lar Franciscano de Piracicaba e saiba como participar.",
      },
      { property: "og:title", content: "Família Acolhedora — Lar Franciscano de Piracicaba" },
      {
        property: "og:description",
        content:
          "Conheça o Serviço de Acolhimento em Família Acolhedora do Lar Franciscano de Piracicaba e saiba como participar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section id="inicio" className="scroll-mt-24 border-b border-border/60">
          <div className="mx-auto max-w-[880px] px-5 py-16 text-center sm:py-20 lg:py-24">
            <img
              src={logo.url}
              alt="Lar Franciscano de Piracicaba — nós somos o lar do amor"
              className="mx-auto h-auto w-full max-w-sm"
              width={1600}
              height={430}
            />
            <h1 className="mt-10 text-3xl font-extrabold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
              Família Acolhedora
            </h1>
            <span
              className="mx-auto mt-5 block h-1.5 w-16 rounded-full bg-destructive"
              aria-hidden="true"
            />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Acolher é oferecer proteção, cuidado e um lugar seguro para uma criança ou adolescente
              enquanto sua história é reconstruída.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Cta href={FORM_URL} variant="red" external className="w-full sm:w-auto">
                QUERO SER UMA FAMÍLIA ACOLHEDORA
              </Cta>
              <Cta href={WHATSAPP_URL} external className="w-full sm:w-auto">
                FALAR PELO WHATSAPP
              </Cta>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="scroll-mt-24">
          <div className="mx-auto max-w-[880px] px-5 py-16 sm:py-20">
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Lar Franciscano
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                O Lar Franciscano é uma Organização da Sociedade Civil parceira do Município de
                Piracicaba na execução de serviços de acolhimento destinados a crianças e
                adolescentes, integrando a rede de Proteção Social Especial de Alta Complexidade.
              </p>
              <p>
                A instituição executa o Serviço de Acolhimento Institucional para Crianças e
                Adolescentes, na modalidade Abrigo, e também atua na execução do Serviço de
                Acolhimento em Família Acolhedora, conforme parcerias formalizadas com o Município de
                Piracicaba.
              </p>
            </div>
          </div>
        </section>

        {/* FAMÍLIA ACOLHEDORA */}
        <section id="familia-acolhedora" className="scroll-mt-24 bg-primary-soft/50">
          <div className="mx-auto max-w-[880px] px-5 py-16 sm:py-20 lg:py-24">
            <span className="block h-1.5 w-16 rounded-full bg-primary" aria-hidden="true" />
            <h2 className="mt-6 text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
              O Serviço de Acolhimento em Família Acolhedora
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p className="border-l-4 border-primary pl-5 text-lg font-medium text-foreground sm:text-xl">
                O Serviço de Acolhimento em Família Acolhedora é uma modalidade de proteção destinada
                a crianças e adolescentes que, por determinação judicial, precisam ser
                temporariamente afastados de sua família de origem.
              </p>
              <p>
                Nesse serviço, a criança ou adolescente é acolhido provisoriamente por uma família
                previamente selecionada, capacitada e acompanhada pela equipe técnica responsável.
              </p>
              <p>
                A proposta é oferecer um ambiente familiar seguro, acolhedor e protetivo durante o
                período necessário, garantindo os direitos, o cuidado e o desenvolvimento da criança
                ou adolescente, enquanto são trabalhadas as possibilidades de retorno à família de
                origem ou, quando isso não for possível, outras medidas previstas legalmente.
              </p>
            </div>
          </div>
        </section>

        {/* CONTATO E INSCRIÇÃO */}
        <section id="contato" className="scroll-mt-24">
          <div className="mx-auto max-w-[1080px] px-5 py-16 sm:py-20 lg:py-24">
            <h2 className="max-w-3xl text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
              Quer saber mais sobre a Família Acolhedora?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Se você tem interesse em conhecer melhor o Serviço de Acolhimento em Família Acolhedora
              e descobrir como pode fazer parte dessa iniciativa, entre em contato conosco!
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="flex flex-col rounded-2xl border border-border bg-card p-7 sm:p-8">
                <h3 className="text-xl font-bold text-foreground">Entre em contato pelo WhatsApp</h3>
                <p className="mt-3 flex-1 text-base text-muted-foreground">(19) 99828-9345</p>
                <Cta href={WHATSAPP_URL} external className="mt-7 w-full">
                  FALAR PELO WHATSAPP
                </Cta>
              </div>

              <div className="flex flex-col rounded-2xl border-2 border-destructive/30 bg-card p-7 sm:p-8">
                <h3 className="text-xl font-bold text-foreground">Faça sua inscrição</h3>
                <p className="mt-3 flex-1" />
                <Cta href={FORM_URL} variant="red" external className="mt-7 w-full">
                  PREENCHER FORMULÁRIO
                </Cta>
              </div>
            </div>

            <p className="mt-8 text-sm text-muted-foreground sm:text-base">
              Após o preenchimento, nossa equipe entrará em contato com você para orientar sobre as
              próximas etapas.
            </p>
          </div>
        </section>

        {/* SERVIÇOS DE ACOLHIMENTO */}
        <section id="servicos" className="scroll-mt-24 bg-primary-soft/50">
          <div className="mx-auto max-w-[1080px] px-5 py-16 sm:py-20 lg:py-24">
            <h2 className="max-w-3xl text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
              Serviços de Acolhimento
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Confira os serviços de acolhimento disponíveis nas cidades diocesanas.
            </p>

            <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
              {SERVICOS.map((servico) => (
                <div
                  key={servico.cidade}
                  className="flex flex-col gap-1 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 sm:py-7"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-foreground sm:text-xl">
                      {servico.cidade}
                    </h3>
                    <p className="mt-1 text-base text-muted-foreground">{servico.nome}</p>
                    {servico.obs && (
                      <p className="mt-1 text-sm text-muted-foreground">{servico.obs}</p>
                    )}
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-base font-semibold text-primary-deep sm:mt-0 sm:shrink-0">
                    {servico.whatsapp ? (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 shrink-0"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26 9.87 9.87 0 019.865-9.865 9.87 9.87 0 019.865 9.865 9.87 9.87 0 01-9.865 9.865m8.293-9.865a8.28 8.28 0 00-8.293-8.293 8.28 8.28 0 00-8.293 8.293 8.28 8.28 0 001.266 4.382l-1.028 3.758 3.847-1.01a8.28 8.28 0 004.208 1.143 8.28 8.28 0 008.293-8.293z" />
                      </svg>
                    ) : (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    )}
                    <span>{servico.telefone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="text-base font-bold text-foreground">
              Lar Franciscano de Menores de Piracicaba
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Serviço de Acolhimento em Família Acolhedora
            </p>
          </div>
          <nav
            aria-label="Links úteis"
            className="flex flex-col gap-3 text-sm font-semibold text-primary-deep sm:flex-row sm:gap-6"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
              WhatsApp
            </a>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Formulário de inscrição
            </a>
            <a href={MAPA_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Mapa das Famílias Acolhedoras
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
