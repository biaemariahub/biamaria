export default function DeployPage() {
  const steps = [
    {
      
      title: '1 - Acessar o site da Vercel',
      description:
        'Entre no site da Vercel e faça login utilizando sua conta do GitHub.',
      code: 'https://vercel.com',
      note: 'Clique em "Login" e escolha GitHub.',
    },
    {
      title: '2 - Importar repositório do GitHub',
      description:
        'Após logar, clique em "Add New" → "Project" e selecione o repositório que deseja publicar.',
      code: null,
      note: 'Se não aparecer, autorize o acesso ao GitHub.',
    },
    {
      title: '3 - Configurar o projeto',
      description:
        'A Vercel detecta automaticamente projetos Next.js. Basta revisar as configurações.',
      code: null,
      note: 'Normalmente não precisa alterar nada.',
    },
    {
      title: '4 - Fazer o deploy',
      description:
        'Clique no botão Deploy para iniciar a publicação do seu projeto.',
      code: null,
      note: 'Aguarde o processo finalizar.',
    },
    {
      title: '5 - Acessar o site publicado',
      description:
        'Após o deploy, a Vercel irá gerar um link público do seu site.',
      code: 'https://seu-projeto.vercel.app',
      note: 'Você pode compartilhar esse link com qualquer pessoa.',
    },
    {
      title: '6 - Atualizar o site automaticamente',
      description:
        'Toda vez que você fizer um push no GitHub, a Vercel atualiza o site automaticamente.',
      code: 'git add .\ngit commit -m "update"\ngit push',
      note: 'Deploy contínuo ativado automaticamente.',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8 lg:py-24">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-sm font-medium text-purple-300">
            Deploy
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Como publicar seu site na Vercel
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            Siga este guia passo a passo para fazer o deploy do seu projeto
            diretamente do GitHub usando a Vercel.
          </p>
        </div>

        <div className="grid gap-6">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-purple-400/15 text-sm font-bold text-purple-300 ring-1 ring-purple-400/20">
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
                          Exemplo
                        </span>
                        <span className="text-xs text-slate-500">
                          Referência
                        </span>
                      </div>
                      <pre className="overflow-x-auto p-4 text-sm leading-7 text-purple-300">
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

        <div className="mt-10 rounded-3xl border border-slate-800 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 p-6">
          <h3 className="text-xl font-semibold text-white">Resumo</h3>
          <p className="mt-3 text-slate-300 leading-7">
            Conecte seu GitHub à Vercel, importe o projeto, clique em deploy e
            pronto — seu site estará online com deploy automático.
          </p>
        </div>
      </section>
    </main>
  )
}
