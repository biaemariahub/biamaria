export default function Page() {
  const steps = [
    {
      number: '1',
      title: 'Criar um repositório no GitHub',
      description:
        'Acesse o GitHub e crie um novo repositório para receber o projeto do Visual Studio Code.',
      code: null,
      note: 'Crie o repositório antes de conectar a pasta do projeto local.',
    },
    {
      number: '2',
      title: 'Inicializar o Git na pasta do projeto',
      description:
        'Abra o terminal dentro da pasta do projeto no Visual Studio Code e execute o comando abaixo para iniciar o Git no projeto.',
      code: 'git init',
      note: 'Esse comando inicializa o Git dentro da pasta do projeto.',
    },
    {
      number: '3',
      title: 'Verificar o repositório conectado',
      description:
        'Use o comando abaixo para verificar se já existe algum repositório remoto conectado ao projeto.',
      code: 'git remote -v',
      note: 'Se nada aparecer, significa que ainda não existe repositório remoto configurado.',
    },
    {
      number: '4',
      title: 'Conectar ao repositório criado no GitHub',
      description:
        'Depois de criar o repositório no GitHub, conecte seu projeto local usando o comando abaixo.',
      code: 'git remote add origin "https://github.com/usuario/repositorio"',
      note: 'Substitua o link pelo endereço real do seu repositório.',
    },
    {
      number: '5',
      title: 'Remover um repositório remoto, se necessário',
      description:
        'Se o projeto estiver conectado ao repositório errado, remova a conexão atual e depois conecte no repositório correto.',
      code: 'git remote remove origin',
      note: 'Após remover, conecte novamente usando o comando git remote add origin.',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8 lg:py-24">
        <div className="mb-12">
          <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-300">
            Guia passo a passo
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Como conectar o projeto do Visual Studio ao repositório do GitHub
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            Esta página mostra, de forma simples, os comandos necessários para iniciar o Git
            na pasta do projeto, verificar repositórios remotos e conectar o projeto local a
            um repositório criado no GitHub.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500/15 text-lg font-bold text-sky-300 ring-1 ring-sky-400/20">
                  {step.number}
                </div>

                <div className="w-full">
                  <h2 className="text-xl font-semibold text-white md:text-2xl">{step.title}</h2>
                  <p className="mt-2 leading-7 text-slate-300">{step.description}</p>

                  {step.code && (
                    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                      <div className="border-b border-slate-800 px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                        Comando
                      </div>
                      <pre className="overflow-x-auto p-4 text-sm leading-7 text-emerald-300">
                        <code>{step.code}</code>
                      </pre>
                    </div>
                  )}

                  <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm leading-6 text-amber-100">
                    <span className="font-semibold">Observação:</span> {step.note}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <h3 className="text-xl font-semibold text-white">Sequência resumida</h3>
          <div className="mt-4 space-y-3 text-slate-300 leading-7">
            <p>
              1. Crie o repositório no GitHub.
            </p>
            <p>
              2. Na pasta do projeto, execute <code className="rounded bg-slate-800 px-2 py-1 text-emerald-300">git init</code>.
            </p>
            <p>
              3. Verifique a conexão com <code className="rounded bg-slate-800 px-2 py-1 text-emerald-300">git remote -v</code>.
            </p>
            <p>
              4. Conecte ao repositório com <code className="rounded bg-slate-800 px-2 py-1 text-emerald-300">git remote add origin {"https://github.com/usuario/repositorio"}</code>.
            </p>
            <p>
              5. Se precisar trocar o repositório, use <code className="rounded bg-slate-800 px-2 py-1 text-emerald-300">git remote remove origin</code> e conecte novamente ao repositório correto.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
