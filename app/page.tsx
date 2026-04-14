import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16 sm:px-10">
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800 sm:p-12">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-2xl bg-zinc-900 p-3 dark:bg-zinc-100">
              <Image
                src="/github-mark.svg"
                alt="Logo do GitHub"
                width={40}
                height={40}
                className="dark:invert"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Plataforma de desenvolvimento
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                O que é o GitHub?
              </h1>
            </div>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            O <span className="font-semibold text-zinc-900 dark:text-zinc-100">GitHub</span> é uma
            plataforma online usada para armazenar, organizar e compartilhar códigos de projetos.
            Ele funciona junto com o <span className="font-semibold text-zinc-900 dark:text-zinc-100">Git</span>,
            um sistema de controle de versão que ajuda desenvolvedores a acompanhar mudanças no código
            ao longo do tempo.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="mb-3 text-2xl font-semibold">Para que serve?</h2>
              <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                O GitHub serve para facilitar o desenvolvimento de software, permitindo que uma ou
                várias pessoas trabalhem no mesmo projeto de forma organizada, segura e prática.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="mb-3 text-2xl font-semibold">Principais usos</h2>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li>• Guardar projetos na nuvem</li>
                <li>• Controlar versões do código</li>
                <li>• Trabalhar em equipe</li>
                <li>• Compartilhar projetos públicos</li>
                <li>• Contribuir com projetos open source</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
              <h3 className="mb-2 text-lg font-semibold">Repositórios</h3>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                São as pastas dos projetos, onde ficam os arquivos, códigos e histórico de alterações.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
              <h3 className="mb-2 text-lg font-semibold">Commits</h3>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Registram cada mudança feita no projeto, ajudando a acompanhar a evolução do código.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
              <h3 className="mb-2 text-lg font-semibold">Branches</h3>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Permitem testar novas ideias e funcionalidades sem alterar a versão principal.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="mb-3 text-2xl font-semibold">Por que o GitHub é importante?</h2>
            <p className="leading-8 text-zinc-600 dark:text-zinc-400">
              O GitHub é muito importante porque ajuda programadores a manter seus projetos
              organizados, colaborar com outras pessoas e mostrar seus trabalhos para empresas,
              clientes ou para a comunidade. Hoje ele é uma das ferramentas mais usadas no mundo do
              desenvolvimento web e de software.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
            >
              Acessar GitHub
            </a>

            <a
              href="https://docs.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Ver documentação
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}