
import React from 'react';
import { ColorTheme, PreviewSettings } from '../../types';

interface SectionProps {
  theme: ColorTheme;
  settings: PreviewSettings;
}

const Pricing: React.FC<SectionProps> = ({ theme, settings }) => {
  const plans = [
    { name: 'Starter', price: '$0', features: ['3 Projects', 'Basic Themes', 'Community Support'], popular: false },
    { name: 'Pro', price: '$29', features: ['Unlimited Projects', 'Advanced Color Engine', 'Priority Support', 'Custom Domains'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Full White-label', 'API Access', 'SSO & Security', 'Dedicated Account Manager'], popular: false },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6" style={{ backgroundColor: `${theme.surface}22` }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4" style={{ color: theme.text }}>Simple Transparent Pricing</h2>
          <p className="opacity-50 text-sm md:text-base" style={{ color: theme.text }}>Scale your vision without breaking the bank.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl md:rounded-3xl p-6 md:p-8 border transition-all duration-500 ${plan.popular ? 'md:scale-105 shadow-2xl order-first md:order-none' : ''}`}
              style={{ 
                backgroundColor: plan.popular ? theme.surface : 'transparent',
                borderColor: plan.popular ? theme.primary : `${theme.text}11`,
                boxShadow: plan.popular ? `0 25px 50px -12px ${theme.glow}` : 'none'
              }}
            >
              {plan.popular && (
                <div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg" 
                  style={{ backgroundColor: theme.primary, color: theme.background }}
                >
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2" style={{ color: theme.text }}>{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold" style={{ color: theme.text }}>{plan.price}</span>
                {plan.price !== 'Custom' && <span className="opacity-50 text-sm" style={{ color: theme.text }}>/month</span>}
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm opacity-70" style={{ color: theme.text }}>
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: theme.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button 
                className="w-full py-3 md:py-4 rounded-xl text-sm font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg"
                style={{ 
                  backgroundColor: plan.popular ? theme.primary : `${theme.text}11`, 
                  color: plan.popular ? theme.background : theme.text 
                }}
              >
                {plan.popular ? 'Get Pro Now' : 'Choose ' + plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
