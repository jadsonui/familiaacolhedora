import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-lar-franciscano.png.asset.json";
import { Header } from "@/components/site/Header";
import { Cta } from "@/components/site/Cta";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf0FwK1IAcQOMT59p8HpY8IIWYsrzpPxIiJMtiKb2zur39z8g/viewform";
const WHATSAPP_URL = "https://wa.me/5519998289345";
const MAPA_URL = "https://familiaacolhedora.org.br/mapa/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Família Acolhedora — Lar Franciscano de Piracicaba" },
      {
        name: "description",
        content:
          "Conheça o Serviço de Acolhimento em Família Acolhedora do Lar Franciscano de Menores de Piracicaba e saiba como participar.",
      },
      { property: "og:title", content: "Família Acolhedora — Lar Franciscano de Piracicaba" },
      {
        property: "og:description",
        content:
          "Conheça o Serviço de Acolhimento em Família Acolhedora do Lar Franciscano de Menores de Piracicaba e saiba como participar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PILARES = [
  {
    titulo: "Acolhimento temporário",
    texto:
      "A criança ou adolescente permanece com a família acolhedora durante o período necessário.",
  },
  {
    titulo: "Família preparada",
    texto: "As famílias são previamente selecionadas, capacitadas e acompanhadas.",
  },
  {
    titulo: "Proteção e cuidado",
    texto: "O objetivo é proporcionar um ambiente familiar seguro, acolhedor e protetivo.",
  },
  {
    titulo: "Acompanhamento profissional",
    texto: "Todo o processo conta com acompanhamento da equipe técnica responsável.",
  },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section id="inicio" className="scroll-mt-24 border-b border-border/60 bg-primary-soft/60">
          <div className="mx-auto max-w-[1280px] px-5 py-16 sm:py-20 lg:px-8 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="min-w-0">
                <p className="mb-5 inline-flex items-center rounded-full border border-primary/40 bg-background px-4 py-1.5 text-sm font-semibold text-primary-deep">
                  Serviço de Acolhimento em Família Acolhedora
                </p>
                <h1 className="text-3xl font-extrabold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
                  Família Acolhedora: acolher é oferecer{" "}
                  <span className="text-primary-deep">proteção, cuidado</span> e um lugar seguro.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Conheça o Serviço de Acolhimento em Família Acolhedora do Lar Franciscano de
                  Menores de Piracicaba e descubra como você pode fazer parte dessa iniciativa.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Cta href="#familia-acolhedora" variant="outline" className="w-full sm:w-auto">
                    QUERO SABER MAIS
                  </Cta>
                  <Cta href={FORM_URL} variant="red" external className="w-full sm:w-auto">
                    QUERO SER UMA FAMÍLIA ACOLHEDORA
                  </Cta>
                </div>
              </div>

              <div className="min-w-0 rounded-3xl border border-border bg-background p-7 shadow-soft sm:p-10">
                <img
                  src={logo.url}
                  alt="Lar Franciscano de Menores de Piracicaba — nós somos o lar do amor"
                  className="mx-auto h-auto w-full max-w-md"
                  width={1600}
                  height={430}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="scroll-mt-24">
          <div className="mx-auto max-w-[1280px] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div className="min-w-0">
                <span className="block h-1.5 w-16 rounded-full bg-destructive" aria-hidden="true" />
                <h2 className="mt-6 text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
                  Lar Franciscano de Menores
                </h2>
              </div>
              <div className="grid min-w-0 gap-5">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow duration-200 hover:shadow-lift sm:p-8">
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    O Lar Franciscano de Menores é uma Organização da Sociedade Civil parceira do
                    Município de Piracicaba na execução de serviços de acolhimento destinados a
                    crianças e adolescentes, integrando a rede de Proteção Social Especial de Alta
                    Complexidade.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow duration-200 hover:shadow-lift sm:p-8">
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    A instituição executa o Serviço de Acolhimento Institucional para Crianças e
                    Adolescentes, na modalidade Abrigo, e também atua na execução do Serviço de
                    Acolhimento em Família Acolhedora, conforme parcerias formalizadas com o
                    Município de Piracicaba.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE É */}
        <section id="familia-acolhedora" className="scroll-mt-24 bg-primary-soft/60 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10 lg:p-14">
              <h2 className="max-w-3xl text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
                O que é o Serviço de Acolhimento em Família Acolhedora?
              </h2>
              <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  O Serviço de Acolhimento em Família Acolhedora é uma modalidade de proteção
                  destinada a crianças e adolescentes que, por determinação judicial, precisam ser
                  temporariamente afastados de sua família de origem.
                </p>
                <p>
                  Nesse serviço, a criança ou adolescente é acolhido provisoriamente por uma família
                  previamente selecionada, capacitada e acompanhada pela equipe técnica responsável.
                </p>
              </div>
            </div>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PILARES.map((p) => (
                <li
                  key={p.titulo}
                  className="rounded-2xl border border-border bg-background p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="block h-1.5 w-10 rounded-full bg-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-foreground">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p.texto}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OBJETIVO */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="min-w-0">
                <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
                  Um lugar seguro enquanto uma nova história é construída
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    A proposta é oferecer um ambiente familiar seguro, acolhedor e protetivo durante
                    o período necessário, garantindo os direitos, o cuidado e o desenvolvimento da
                    criança ou adolescente.
                  </p>
                  <p>
                    Enquanto isso, são trabalhadas as possibilidades de retorno à família de origem
                    ou, quando isso não for possível, outras medidas previstas legalmente.
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-center rounded-3xl bg-primary p-8 shadow-lift sm:p-12">
                <p className="text-2xl font-extrabold leading-tight text-primary-foreground sm:text-3xl lg:text-4xl">
                  Acolher é proteger, cuidar e oferecer segurança
                  <span className="text-destructive">.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PARTICIPAR */}
        <section id="participar" className="scroll-mt-24 bg-primary-soft/60 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <h2 className="max-w-3xl text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
              Quer saber mais sobre a Família Acolhedora?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Se você tem interesse em conhecer melhor o Serviço de Acolhimento em Família Acolhedora
              e descobrir como pode fazer parte dessa iniciativa, entre em contato conosco!
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift sm:p-9">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  Fale com nossa equipe
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                  Tire suas dúvidas e saiba mais sobre o programa.
                </p>
                <Cta href={WHATSAPP_URL} external className="mt-7 w-full">
                  CONVERSAR PELO WHATSAPP
                </Cta>
              </div>

              <div className="flex flex-col rounded-3xl border-2 border-destructive/30 bg-card p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift sm:p-9">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  Quero ser uma Família Acolhedora
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                  Preencha o formulário de inscrição e dê o primeiro passo para conhecer melhor essa
                  iniciativa.
                </p>
                <Cta href={FORM_URL} variant="red" external className="mt-7 w-full">
                  FAZER MINHA INSCRIÇÃO
                </Cta>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground sm:text-base">
              Após o preenchimento, nossa equipe entrará em contato com você para orientar sobre as
              próximas etapas.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-primary py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-5 text-center lg:px-8">
            <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl lg:text-5xl">
              Família Acolhedora
            </h2>
            <span
              className="mx-auto mt-6 block h-1.5 w-20 rounded-full bg-destructive"
              aria-hidden="true"
            />
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground sm:text-xl">
              Acolher é oferecer proteção, cuidado e um lugar seguro para uma criança ou adolescente
              enquanto sua história é reconstruída.
            </p>
            <div className="mt-9 flex justify-center">
              <Cta href={FORM_URL} variant="white" external className="w-full sm:w-auto">
                QUERO SER UMA FAMÍLIA ACOLHEDORA
              </Cta>
            </div>
          </div>
        </section>

        {/* MAPA */}
        <section id="links-uteis" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10 lg:p-14">
              <h2 className="max-w-3xl text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
                Mapa das Famílias Acolhedoras em outros municípios
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Conheça iniciativas de Família Acolhedora em diferentes municípios e saiba mais sobre
                esse serviço de proteção.
              </p>
              <Cta href={MAPA_URL} external className="mt-8 w-full sm:w-auto">
                VER MAPA DAS FAMÍLIAS ACOLHEDORAS
              </Cta>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-primary-soft/50">
        <div className="mx-auto max-w-[1280px] px-5 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
            <div className="min-w-0">
              <img
                src={logo.url}
                alt="Lar Franciscano de Menores de Piracicaba — nós somos o lar do amor"
                className="h-12 w-auto max-w-full sm:h-14"
                width={1600}
                height={430}
              />
              <p className="mt-5 text-lg font-bold text-foreground">
                Lar Franciscano de Menores de Piracicaba
              </p>
              <p className="mt-1 text-base text-muted-foreground">
                Serviço de Acolhimento em Família Acolhedora
              </p>
            </div>

            <nav aria-label="Links úteis" className="flex min-w-0 flex-col gap-3 lg:w-80">
              <Cta href={WHATSAPP_URL} external className="w-full">
                WhatsApp
              </Cta>
              <Cta href={FORM_URL} variant="red" external className="w-full">
                Formulário de inscrição
              </Cta>
              <Cta href={MAPA_URL} variant="outline" external className="w-full">
                Mapa das Famílias Acolhedoras
              </Cta>
            </nav>
          </div>

          <p className="mt-12 border-t border-border pt-6 text-sm font-semibold text-primary-deep">
            Proteção, cuidado e acolhimento.
          </p>
        </div>
      </footer>
    </div>
  );
}
