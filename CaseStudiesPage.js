import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsAppFloat from '../components/UI/WhatsAppFloat';
import '../components/CaseStudies/CaseStudies.css';

import vidFashion    from '../assets/CaseStudiesVid/Phabna(2).mp4';
import vidRealEstate from '../assets/CaseStudiesVid/houzz mood case study.mp4';
import vidSalon      from '../assets/CaseStudiesVid/salon.mp4';
import vidCafe       from '../assets/CaseStudiesVid/Chai_Kaapi.mp4';
import vidPersonal   from '../assets/CaseStudiesVid/personal branding case study.mp4';
import vidNews       from '../assets/CaseStudiesVid/Raftar news case study.mp4';

/* ─────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────── */
var projects = [
  {
    id: '01', num: '01 / 06', category: 'FASHION BRAND',
    title: 'Fashion Brand Growth',
    tags: ['#ReelsStrategy', '#InfluencerContent', '#Visibility'],
    wrongLabel: 'WHAT WAS WRONG',
    wrongText: 'Brand had strong products but low visibility and inconsistent content. Not getting good reach on reels and posts.',
    improvedLabel: 'HOW WE IMPROVED',
    improvedText: 'Planned weekly content calendar, shot high-quality outfit reels, used influencer-style content formats, focused on Instagram growth.',
    strategy: 'Planned weekly content calendar; shot high-quality outfit reels; used influencer-style content formats; focused on Instagram growth.',
    outcome: '2x–4x reach growth (30 days); 8–20% follower growth; 30–80% engagement boost; 10–30 inbound leads organically using paid campaign.',
    stats: [{ value: '2x–4x', label: 'REACH GROWTH' }, { value: '30–80%', label: 'ENGAGEMENT BOOST' }]
  },
  {
    id: '02', num: '02 / 06', category: 'REAL ESTATE',
    title: 'Real-Estate Lead Gen',
    tags: ['#PropertyMarketing', '#Walkthroughs', '#DirectLeads'],
    wrongLabel: 'WHAT WAS WRONG',
    wrongText: 'Low-quality leads, high broker dependency with loss of control, poor social media presence.',
    improvedLabel: 'HOW WE IMPROVED',
    improvedText: 'Built cinematic property reels, voiceover-based walkthroughs, highlighted lifestyle & amenities, consistent posting structure.',
    strategy: 'Built a property storytelling and walkthrough content system focused on lifestyle-led reels and consistent posting.',
    outcome: 'Increased inquiries; higher engagement on listings; improved brand perception.',
    stats: [{ value: 'Increased', label: 'INQUIRIES' }, { value: 'Higher', label: 'ENGAGEMENT' }]
  },
  {
    id: '03', num: '03 / 06', category: 'SALON BRAND',
    title: 'Premium Salon Positioning',
    tags: ['#LuxuryBranding', '#CinematicContent', '#Positioning'],
    wrongLabel: 'WHAT WAS WRONG',
    wrongText: 'Brand looked generic and lacked premium positioning. No clear luxury identity in the market.',
    improvedLabel: 'HOW WE IMPROVED',
    improvedText: 'Created premium product shoots, slow-motion cinematic reels, occasion-based campaigns (wedding/festive), minimal clean visual identity.',
    strategy: 'Focused on luxury storytelling and aesthetic branding through premium shoots and cinematic reels.',
    outcome: 'Elevated brand perception; higher engagement; stronger premium positioning.',
    stats: [{ value: 'Elevated', label: 'PERCEPTION' }, { value: 'Stronger', label: 'POSITIONING' }]
  },
  {
    id: '04', num: '04 / 06', category: 'CAFE BRAND',
    title: 'Café Local Reach',
    tags: ['#LocalReach', '#FoodReels', '#Footfall'],
    wrongLabel: 'WHAT WAS WRONG',
    wrongText: "Low footfall and minimal local visibility. Content wasn't driving customers to the location.",
    improvedLabel: 'HOW WE IMPROVED',
    improvedText: 'Created trend-based food reels, showcased aesthetic plating & café vibe, collaborated with local influencers, used geo-targeted hashtags.',
    strategy: 'Created a local reach and viral reels strategy using trend-based food content and local influencer collaborations.',
    outcome: 'Increased footfall; strong local recognition; higher engagement and shares.',
    stats: [{ value: 'Increased', label: 'FOOTFALL' }, { value: 'Strong', label: 'LOCAL RECOGNITION' }]
  },
  {
    id: '05', num: '05 / 06', category: 'FOUNDERS & THOUGHT LEADERS',
    title: 'Personal Branding Authority',
    tags: ['#FounderContent', '#Authority', '#Leadership'],
    wrongLabel: 'WHAT WAS WRONG',
    wrongText: 'No clear positioning and inconsistent content. Founder struggled to build authority and influence online.',
    improvedLabel: 'HOW WE IMPROVED',
    improvedText: 'Built talking-head reels, educational & value-driven content, consistent posting system, niche-based content strategy.',
    strategy: 'Built a founder-led content system focused on authority using talking-head reels and value-driven educational content.',
    outcome: 'Rapid follower growth; increased engagement; strong authority positioning.',
    stats: [{ value: 'Rapid', label: 'FOLLOWER GROWTH' }, { value: 'Strong', label: 'AUTHORITY' }]
  },
  {
    id: '06', num: '06 / 06', category: 'NEWS CHANNEL',
    title: 'Bharat Raftaar — News Channel',
    tags: ['#ReelsFirst', '#News', '#SocialGrowth'],
    wrongLabel: 'PROBLEM',
    wrongText: 'Low follower base and inconsistent reach on social platforms.',
    improvedLabel: 'EXECUTION',
    improvedText: 'Optimised Instagram content formats; strengthened posting consistency; focused on engagement-led content.',
    strategy: 'Reels-first growth strategy; shareable, fast-moving news formats; consistent publishing and trend alignment.',
    outcome: 'Instagram growth: 1K → 13K followers in 1 month; Facebook growth: 5K followers organically; significant improvement in reach and engagement.',
    stats: [{ value: '1K → 13K', label: 'INSTAGRAM (1 MONTH)' }, { value: '5K', label: 'FACEBOOK (ORGANIC)' }]
  }
];

var globalStats = [
  { value: '32%', label: 'AVG FOLLOWER GROWTH' },
  { value: '4x',  label: 'REACH MULTIPLIER' },
  { value: '50%', label: 'SALES INCREASE' },
  { value: '6+',  label: 'CASE STUDIES' }
];

var videoMap = {
  '01': vidFashion,
  '02': vidRealEstate,
  '03': vidSalon,
  '04': vidCafe,
  '05': vidPersonal,
  '06': vidNews
};

/* ─────────────────────────────────────────────────────────────
   Pure-JS renderer — MOBILE ONLY (completely unchanged)
───────────────────────────────────────────────────────────── */
function initMobileCaseStudies() {
  var container = document.getElementById('case-studies-app');
  if (!container) return;

  var mobileHTML = projects.map(function (p) {
    var tags = p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('');
    var s = p.strategy
      ? '<div class="cs-detail-row"><p class="cs-label">STRATEGY</p><p class="cs-text">' + p.strategy + '</p></div>'
      : '';
    var o = p.outcome
      ? '<div class="cs-detail-row"><p class="cs-label">OUTCOME ACHIEVED</p><p class="cs-text">' + p.outcome + '</p></div>'
      : '';
    return (
      '<section class="cs-mobile-section">' +
        '<div class="cs-container">' +
          '<div class="cs-mobile-content">' +
            '<span class="cs-project-num">' + p.num + '</span>' +
            '<span class="cs-project-category">' + p.category + '</span>' +
            '<h2>' + p.title + '</h2>' +
            '<div class="cs-project-tags">' + tags + '</div>' +
            '<div class="cs-project-details">' +
              '<div class="cs-detail-row"><p class="cs-label">' + p.wrongLabel + '</p><p class="cs-text">' + p.wrongText + '</p></div>' +
              '<div class="cs-detail-row"><p class="cs-label cs-mt-4">' + p.improvedLabel + '</p><p class="cs-text">' + p.improvedText + '</p></div>' +
              s + o +
            '</div>' +
          '</div>' +
          '<div class="cs-mobile-media">' +
            '<video class="cs-card-video" src="' + videoMap[p.id] + '" muted autoplay loop playsinline preload="auto" aria-label="Case study video"></video>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }).join('');

  var mobileStatsHTML =
    '<section class="cs-big-stats-section"><div class="cs-container"><div class="cs-stats-grid">' +
      globalStats.map(function (s) {
        return '<div class="cs-big-stat"><h2>' + s.value + '</h2><p>' + s.label + '</p></div>';
      }).join('') +
    '</div></div></section>';

  container.innerHTML =
    '<section class="cs-hero">' +
      '<div class="cs-hero-ticker">CASE STUDIES • CASE STUDIES • CASE STUDIES • CASE STUDIES</div>' +
      '<div class="cs-container cs-text-center">' +
        '<h1 class="cs-outline-text cs-reveal cs-is-visible">CASE STUDIES</h1>' +
      '</div>' +
    '</section>' +
    mobileHTML +
    mobileStatsHTML;

  setTimeout(function () {
    try {
      var v = container.querySelector('.cs-mobile-media video');
      if (v) { v.muted = true; v.play().catch(function () {}); }
    } catch (e) {}
  }, 400);
}

/* ─────────────────────────────────────────────────────────────
   React component
───────────────────────────────────────────────────────────── */
export default function CaseStudiesPage() {
  var isMobile = typeof window !== 'undefined' && window.innerWidth <= 1023;

  /* Mobile: populate the app div via the original JS renderer */
  useEffect(function () {
    if (isMobile) {
      initMobileCaseStudies();
    }
    return function () {
      var el = document.getElementById('case-studies-app');
      if (el) el.innerHTML = '';
      document.documentElement.style.removeProperty('--cs-bg-main');
    };
  }, []);

  /* ── DESKTOP JSX ──
     Left column : all text content (centered in its column)
     Right column: portrait video, autoplay muted loop
  ── */
  var desktopContent = !isMobile ? (
    <>
      {/* Hero — identical to original */}
      <section className="cs-hero">
        <div className="cs-hero-ticker">CASE STUDIES • CASE STUDIES • CASE STUDIES • CASE STUDIES</div>
        <div className="cs-container cs-text-center">
          <h1 className="cs-outline-text">CASE STUDIES</h1>
        </div>
      </section>

      {/* Two-column list */}
      <div className="cs-desktop-list">
        {projects.map(function (p) {
          return (
            <article key={p.id} className="cs-desktop-entry">

              {/* ── LEFT: content ── */}
              <div className="cs-desktop-content">
                <div className="cs-desktop-eyebrow">
                  <span className="cs-project-num">{p.num}</span>
                  <span className="cs-project-category">{p.category}</span>
                </div>

                <h2>{p.title}</h2>

                <div className="cs-project-tags">
                  {p.tags.map(function (t) { return <span key={t}>{t}</span>; })}
                </div>

                <div className="cs-desktop-stats">
                  {p.stats.map(function (s) {
                    return (
                      <div key={s.label} className="cs-desktop-stat-item">
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="cs-project-details">
                  <div className="cs-detail-row">
                    <p className="cs-label">{p.wrongLabel}</p>
                    <p className="cs-text">{p.wrongText}</p>
                  </div>
                  <div className="cs-detail-row">
                    <p className="cs-label">{p.improvedLabel}</p>
                    <p className="cs-text">{p.improvedText}</p>
                  </div>
                  {p.strategy && (
                    <div className="cs-detail-row">
                      <p className="cs-label">STRATEGY</p>
                      <p className="cs-text">{p.strategy}</p>
                    </div>
                  )}
                  {p.outcome && (
                    <div className="cs-detail-row">
                      <p className="cs-label">OUTCOME ACHIEVED</p>
                      <p className="cs-text">{p.outcome}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* ── RIGHT: portrait video ── */}
              <div className="cs-desktop-video-col">
                <div className="cs-desktop-video-wrap">
                  <video
                    src={videoMap[p.id]}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    aria-label={p.title + ' case study video'}
                  />
                </div>
              </div>

            </article>
          );
        })}
      </div>

      {/* Global stats strip */}
      <section className="cs-big-stats-section">
        <div className="cs-container">
          <div className="cs-stats-grid">
            {globalStats.map(function (s) {
              return (
                <div key={s.label} className="cs-big-stat">
                  <h2>{s.value}</h2>
                  <p>{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  ) : null;

  return (
    <div className="App">
      <Navbar />
      <WhatsAppFloat />
      <main>
        {/* Desktop: React JSX — two-column layout with video */}
        {desktopContent}

        {/* Mobile: populated by initMobileCaseStudies() via useEffect */}
        <div id="case-studies-app" />
      </main>
      <Footer />
    </div>
  );
}