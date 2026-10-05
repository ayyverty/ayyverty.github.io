export type Project = {
  /** URL segment: /projects/<slug>/ */
  slug: string;
  name: string;
  tagline: string;
  /**
   * owner/repo on GitHub. Drives the repository link and the release feed, so
   * it is absent for anything not published yet.
   */
  repo?: string;
  /** One-paragraph summary, used for the card and meta description. */
  summary: string;
  /** Longer prose shown only on the project page. */
  detail: string;
  features?: { title: string; body: string }[];
  tech?: string[];
  /** What the visitor can actually download today. */
  platforms?: string[];
  /**
   * Whether a release GitHub has flagged `prerelease` may be treated as the
   * latest. Independent of the beta badge, which is presentation only.
   */
  includePrerelease: boolean;
  showReleases: boolean;
  /**
   * `wip` entries render as a non-linking card with no detail page, which is
   * what a placeholder should do before there is anything to link to.
   */
  status?: 'active' | 'wip';
  featured: boolean;
  order: number;
};

export const projects: Project[] = [
  {
    slug: 'rimchronicle',
    name: 'RimChronicle',
    tagline: 'Storyteller Wiki & Novel Studio',
    repo: 'averyfaulk/RimChronicle',
    summary:
      'Turns a RimWorld playthrough into an automated Markdown wiki, relationship graph, timeline chronicle and novelization studio.',
    detail:
      'A local-first Electron desktop app for turning a playthrough — or any sci-fi, fantasy or TTRPG campaign — into a living record of the world. Everything you write is stored on your device, and every feature works fully offline against a rule-based storytelling engine. Where you want more, the same features are supercharged by AI through the OpenCode gateway.',
    features: [
      {
        title: 'World Wiki',
        body: 'Nested, Obsidian-style Markdown articles with [[WikiLinks]], hover previews, backlinks, drag-and-drop folders and full-text search.',
      },
      {
        title: 'Social Web',
        body: 'A draggable character relationship graph covering romance, feuds, kinship, mentorship and more, with per-bond opinion ratings.',
      },
      {
        title: 'World Map',
        body: 'An interactive map with location nodes, danger rings, terrain-difficulty-weighted travel routes and multi-mode travel-time math.',
      },
      {
        title: 'Chronicle Timeline',
        body: 'A living in-game calendar with a master clock, event stencils, downtime vignettes and branching Crossroads scenarios.',
      },
      {
        title: 'Ideology',
        body: 'Per-faction Precept Matrices that track doctrinal stances and surface cultural-friction drama automatically.',
      },
      {
        title: 'Plot Doctor',
        body: 'A narrative consistency audit that finds plot holes, contradictions, dead zones and unresolved arcs, then bridges them.',
      },
      {
        title: 'Novel Studio',
        body: 'A full Act to Chapter to Scene manuscript editor with AI chapter generation and on-device canon enforcement.',
      },
      {
        title: 'Archivist AI',
        body: 'An in-universe Chronicler chatbot with complete knowledge of your world, wiki, timeline and factions.',
      },
    ],
    tech: ['React 19', 'TypeScript', 'Electron', 'Vite 6', 'Tailwind CSS 4', 'OpenCode'],
    platforms: ['Windows', 'Linux'],
    includePrerelease: true,
    showReleases: true,
    status: 'active',
    featured: true,
    order: 1,
  },
  {
    slug: 'humilk-co',
    name: 'HuMilk Co',
    tagline: 'RimWorld Milking Mod',
    repo: 'ayyverty/HuMilk-Co',
    summary:
      'A RimWorld 1.6 mod that adds a livestock-style milking job for female colonists, with output scaling by subject and Aphrolactone to induce lactation in non-mothers.',
    detail:
      'HuMilk Co slots a milking job into the colony work list the same way you would expect from any animal husbandry job, except the livestock is human. Any pawn with an Animals skill of at least 3 can do it, so a rancher makes the job faster and more reliable while a beginner can still cover it. Production is a property of the subject rather than the milker, so it varies per pawn. Aphrolactone research brings pawns that are not mothers into lactation, opening the job to the rest of the colony. Precepts, thoughts and quirks tie the whole loop into your ideology instead of bolting it on, and it builds on Biotech and RimJobWorld rather than replacing them.',
    features: [
      {
        title: 'Any Skilled Handler',
        body: 'Any pawn with an Animals skill of 3 or higher can milk, so early colonies can cover it and a dedicated rancher makes it far better.',
      },
      {
        title: 'Yield By Subject',
        body: 'Milk production is stat-driven per pawn rather than per milker, so output tracks the individual being milked instead of the worker doing it.',
      },
      {
        title: 'Aphrolactone Research',
        body: 'Aphrolactone is redefined to induce lactation in pawns that are not mothers, taking the job from a rare curiosity to a colony-wide work type.',
      },
      {
        title: 'Ideology Support',
        body: 'Precepts, thoughts, quirks and xenotype support tie the job into your ideology and genetics, with the option to forbid it outright.',
      },
    ],
    tech: ['C#', 'RimWorld 1.6', 'Harmony', 'XML Defs'],
    platforms: [],
    includePrerelease: false,
    showReleases: false,
    status: 'active',
    featured: true,
    order: 2,
  },
  {
    slug: 'branding-ritual',
    name: 'Branding Ritual Mod',
    tagline: 'RimWorld Ideology Ritual Mod',
    repo: 'ayyverty/RW-branding-ritual',
    summary:
      'A RimWorld 1.6 mod adding an ideology-neutral Ideology ritual that marks a pawn permanently with one of four brands.',
    detail:
      'Branding Ritual gives every ideology access to the same ritual: no memes, no extra precepts, available from the first day. A brander gathers a piece of steel, escorts the target onto a ritual spot or altar, lays them down and holds the iron while you choose a mark. Four brands are on offer and each one is a permanent global hediff that never decays and cannot be tended away, trading work speed, social impact, pain tolerance or slave suppression for something. The colony feels it too: continuous mood thoughts measure how much of the pool of slaves, prisoners and non-supremacist colonists is branded, so taking a new prisoner puts you straight back in the red.',
    features: [
      {
        title: 'Three-Stage Ritual',
        body: 'The brander fetches steel, delivers the target onto the spot itself, then holds the iron for the final stage. Interrupt it early and the steel is dropped back rather than lost.',
      },
      {
        title: 'Four Permanent Brands',
        body: 'Service trades social impact for work speed, Chains adds slave suppression, Pain blunts felt pain, and Pleasure buys social impact with focus.',
      },
      {
        title: 'Colony Mood',
        body: 'Continuous thoughts measure the branded pool. All accounted for when every member is branded, Unbranded when one is not, and a personal cost for the pawn carrying the mark.',
      },
      {
        title: 'Witnesses And Quality',
        body: 'Quality shifts narration and witness mood across three outcomes, rewarding a real Moralist brander and a crowd. It never gates which brand you apply.',
      },
      {
        title: 'Ideology Neutral',
        body: 'No meme and no precept requirement, so any ideology can run the ritual without a special build or a doctrine you do not otherwise want.',
      },
    ],
    tech: ['C#', 'RimWorld 1.6', 'Ideology'],
    platforms: [],
    includePrerelease: false,
    showReleases: false,
    status: 'active',
    featured: true,
    order: 3,
  },
  {
    slug: 'futa-ideo-stuff',
    name: 'Futa Ideo Stuff Mod',
    tagline: 'RimWorld Ideology Meme Mod',
    repo: 'ayyverty/futa-ideo-stuff',
    summary:
      'A RimWorld 1.6 mod that adds a Futanari Supremacy meme to Ideology, closing ideology roles to futanari and adding an Ascended rank.',
    detail:
      'Futa Ideo Stuff adds one meme to the Ideology expansion: futanari are the highest form and rule above all others. It is mutually exclusive with Male Supremacy and Female Supremacy, so it rewrites an existing supremacy doctrine rather than sitting beside it. While your ideology holds the meme, only futanari can fill any ideology role, vanilla leader included, and they gain a mood boost along with easier social opinion. An optional role called Ascended recognises futanari who have earned the rank, granting improved social impact and work speed. Requires Ideology and RimJobWorld.',
    features: [
      {
        title: 'Futanari Supremacy Meme',
        body: 'Belief that futanari are the ultimate form and should rule above all others, mutually exclusive with the Male and Female Supremacy memes.',
      },
      {
        title: 'Roles Closed To Others',
        body: 'While the meme is part of your ideology, only futanari may hold any ideology role, including the vanilla leader role.',
      },
      {
        title: 'Ascended Rank',
        body: 'An optional futanari role of recognition that grants improved social impact and work speed to pawns who have earned it.',
      },
      {
        title: 'Mood And Goodwill',
        body: 'Futanari gain a mood boost and inspire positive opinion, with goodwill situations and precepts covering how your colony treats them.',
      },
      {
        title: 'Futa Lover Trait',
        body: 'A social trait for pawns drawn to futanari, wired into the meme so opinions and role sentiment stay consistent with the doctrine.',
      },
    ],
    tech: ['C#', 'RimWorld 1.6', 'Harmony', 'XML Defs'],
    platforms: [],
    includePrerelease: false,
    showReleases: false,
    status: 'active',
    featured: true,
    order: 4,
  },
  {
    // Placeholder. Replace with a real project, or delete the entry.
    slug: 'new-project',
    name: 'New project',
    tagline: 'Under construction',
    summary: 'Something new. Too early to show yet.',
    detail:
      'This one is still in early stages, so there is not much to look at yet. Check back later.',
    tech: [],
    platforms: [],
    includePrerelease: false,
    showReleases: false,
    status: 'wip',
    featured: true,
    order: 5,
  },
];

export function bySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Only entries with a real page behind them. */
export function hasPage(project: Project): boolean {
  return project.status !== 'wip';
}
