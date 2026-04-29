export default function Page() {
  const steps = [
    {
      title: '1 - Clonar um projeto do GitHub',
      description:
        'Use o comando abaixo para clonar um repositório remoto para sua máquina, definindo também o nome da pasta local.',
      code: 'git clone "url_do_projeto" "pasta_do_projeto"',
      note: 'Substitua pela URL do repositório e o nome da pasta desejada.',
    },
    {
      title: '1.1 - Navegar até a pasta do projeto',
      description:
        'Entre na pasta criada após o clone para começar a trabalhar no projeto.',
      code: 'cd /pasta_do_projeto',
      note: null,
    },
    {
      title: '1.2 - Ver o conteúdo da pasta',
      description:
        'Liste os arquivos e diretórios do projeto para conferir se tudo foi clonado corretamente.',
      code: 'ls',
      note: null,
    },
    {
      title: '2 - Instalar o projeto clonado',
      description:
        'Instale todas as dependências do projeto utilizando o gerenciador de pacotes.',
      code: 'npm install',
      note: 'Certifique-se de estar dentro da pasta do projeto antes de rodar o comando.',
    },
    {
      title: '3 - Remover o repositório do projeto clonado',
      description:
        'Verifique e remova o vínculo com o repositório original caso queira conectar a outro.',
      code: 'git remote -v\n\ngit remote remove origin',
      note: 'Isso desvincula o projeto do repositório original.',
    },
    {
      title: '4 - Conectar ao seu repositório particular',
      description:
        'Adicione um novo repositório remoto e prepare a branch principal.',
      code: 'git remote add origin "url_do_git"\n\ngit branch -M main',
      note: 'Use a URL do seu próprio repositório no GitHub.',
    },
    {
      title: '5 - Enviar o projeto para seu repositório',
      description:
        'Adicione os arquivos, crie um commit e envie para o repositório remoto.',
      code:
        'git add .\n\n' +
        'git commit -m "versao 1"\n\n' +
        'git push -u origin main',
      note: 'Após o primeiro push, os próximos podem ser feitos apenas com git push.',
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
            Clonar, configurar e subir projeto no GitHub
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            Siga este passo a passo para clonar um projeto, instalar dependências,
            remover o repositório original e conectar ao seu próprio GitHub.
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
                  <h2 className="text-xl font-semibold text-white md:text-2xl">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-slate-300 leading-7">
                    {step.description}
                  </p>

                  {step.code && (
                    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                          Terminal
                        </span>
                        <span className="text-xs text-slate-500">
                          Copie e execute
                        </span>
                      </div>
                      <pre className="overflow-x-auto p-4 text-sm leading-7 text-emerald-300">
                        <code>{step.code}</code>
                      </pre>
                    </div>
                  )}

                  {step.note && (
                    <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm leading-6 text-amber-100">
                      <span className="font-semibold">Observação:</span>{' '}
                      {step.note}
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
            Clone o projeto, entre na pasta, instale as dependências, remova o
            repositório original e conecte ao seu. Depois, faça add, commit e push.
          </p>
        </div>
      </section>
    </main>
  )
} ;
