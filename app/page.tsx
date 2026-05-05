export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Fintech Infrastructure
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-failover when your<br />
          <span className="text-[#58a6ff]">payment processor blocks you</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          PayRoute monitors your payment processors in real time and instantly reroutes transactions to a backup when your primary gets suspended — zero downtime, zero lost revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $99/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn more
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[['&lt;30s', 'Failover time'], ['99.9%', 'Uptime SLA'], ['5+', 'Processors supported']].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-[#58a6ff]" dangerouslySetInnerHTML={{__html: val}} />
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$99<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to never lose a sale</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Real-time processor health monitoring',
              'Automatic failover in under 30 seconds',
              'Supports Stripe, Braintree, PayPal & more',
              'Webhook alerts & Slack notifications',
              'Dashboard to manage processor priority',
              'Unlimited transactions'
            ].map(f => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get started now
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No setup fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does the automatic failover work?',
              a: 'PayRoute continuously pings your payment processors via webhook health checks. The moment a processor returns errors or goes unresponsive, our system reroutes all new transactions to your configured backup processor — typically within 30 seconds.'
            },
            {
              q: 'Which payment processors are supported?',
              a: 'We currently support Stripe, Braintree, PayPal, Square, and Adyen. Additional processors can be added via our custom webhook configuration. More integrations are added regularly.'
            },
            {
              q: 'Will my customers notice the switch?',
              a: 'No. The failover happens at the API routing layer before the checkout form is submitted. Your customers experience a seamless checkout regardless of which processor handles the transaction.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} PayRoute. All rights reserved.
      </footer>
    </main>
  )
}
