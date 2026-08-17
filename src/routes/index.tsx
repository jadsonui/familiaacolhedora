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
              alt="Lar Franciscano de Menores de Piracicaba — nós somos o lar do amor"
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
              Lar Franciscano de Menores
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                O Lar Franciscano de Menores é uma Organização da Sociedade Civil parceira do
                Município de Piracicaba na execução de serviços de acolhimento destinados a crianças
                e adolescentes, integrando a rede de Proteção Social Especial de Alta Complexidade.
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

        {/* MAPA */}
        <section id="mapa" className="scroll-mt-24 bg-primary-soft/50">
          <div className="mx-auto max-w-[1080px] px-5 py-16 sm:py-20 lg:py-24">
            <h2 className="max-w-3xl text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
              Mapa das Famílias Acolhedoras em outros municípios
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Conheça iniciativas de Família Acolhedora em outros municípios.
            </p>
            <Cta href={MAPA_URL} external className="mt-8 w-full sm:w-auto">
              VER MAPA DAS FAMÍLIAS ACOLHEDORAS
            </Cta>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
              <iframe
                title="Mapa das Famílias Acolhedoras"
                src={MAPA_URL}
                loading="lazy"
                className="h-[360px] w-full border-0 sm:h-[520px]"
              />
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
