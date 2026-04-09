export function AccreditationBar() {
  const badges = [
    {
      label: 'Licensed by ANOFM',
      sublabel: 'Romanian National Agency for Employment',
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      label: 'GDPR Compliant',
      sublabel: 'EU Data Protection Regulation',
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      label: 'ILO Ethical Recruitment',
      sublabel: 'No fees charged to workers',
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: 'Anti-Trafficking Certified',
      sublabel: 'Zero tolerance for exploitation',
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      label: 'Operating Since 2018',
      sublabel: '7+ years of trusted placements',
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-navy-900 border-y border-navy-800 py-10 overflow-hidden">
      {/* Red shimmer line at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-navy-300 mb-8">
          Trusted · Licensed · Compliant
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 px-5 py-3.5 navy-card min-w-[190px] group"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-600/10 border border-red-600/25 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                {badge.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">{badge.label}</p>
                <p className="text-[11px] text-navy-300 leading-tight mt-0.5">{badge.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
