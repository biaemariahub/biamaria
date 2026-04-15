export default function Page() {
  const steps = [
    {
      title: '1 - Instalar o Git via Terminal',
      description:
        'Abra o terminal do Windows e execute o comando abaixo para instalar o Git usando o winget.',
      code: 'winget install --id Git.Git -e --source winget',
      note: 'Aguarde a instalação ser concluída antes de seguir para o próximo passo.',
    },
    {
      title: '1.1 - Reiniciar o Visual Studio Code',
      description:
        'Depois que a instalação terminar, reinicie o VS Code para que o Git seja reconhecido corretamente no terminal integrado.',
      code: null,
      note: 'Lembre-se de reiniciar o VS Code após a instalação concluir!',
    },
    {
      title: '2 - Verificar a versão do Git',
      description:
        'Com o Git instalado, rode o comando abaixo para confirmar que a instalação foi feita com sucesso.',
      code: 'git --version',
      note: 'Se aparecer a versão do Git no terminal, está tudo certo.',
    },
    {
      title: '3 - Configurar identidade',
      description:
        'Agora configure seu nome de usuário e e-mail globalmente para que seus commits sejam identificados corretamente no GitHub.',
      code:
        'git config --global user.email email@exemplo.com\n' +
        'git config --global user.name SeuNomeUsuario',
      note: 'Substitua o e-mail e o nome pelos seus dados reais.',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8 lg:py-24">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
            Guia prático
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Configuração do Git e GitHub no Windows
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            Siga este passo a passo para instalar o Git, verificar a versão instalada e
            configurar sua identidade para começar a usar o GitHub no seu ambiente de
            desenvolvimento.
          </p>
        </div>

        <div className="grid gap-6">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/15 text-sm font-bold text-emerald-300 ring-1 ring-emerald-400/20">
                  {index + 1}
                </div>

                <div className="w-full">
                  <h2 className="text-xl font-semibold text-white md:text-2xl">{step.title}</h2>
                  <p className="mt-2 text-slate-300 leading-7">{step.description}</p>

                  {step.code && (
                    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                          Terminal
                        </span>
                        <span className="text-xs text-slate-500">Copie e execute</span>
                      </div>
                      <pre className="overflow-x-auto p-4 text-sm leading-7 text-emerald-300">
                        <code>{step.code}</code>
                      </pre>
                    </div>
                  )}

                  {step.note && (
                    <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm leading-6 text-amber-100">
                      <span className="font-semibold">Observação:</span> {step.note}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-sky-500/10 p-6">
          <h3 className="text-xl font-semibold text-white">Resumo rápido</h3>
          <p className="mt-3 text-slate-300 leading-7">
            Primeiro instale o Git com o winget, depois reinicie o VS Code, confirme a
            instalação com <code className="rounded bg-slate-800 px-2 py-1 text-emerald-300">git --version</code>
            {' '}e finalize configurando seu nome e e-mail globais.
          </p>
        </div>
      </section>
    </main>
  )
}
