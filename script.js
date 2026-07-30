// ---------------------------------------------------------------------------
// EDIT YOUR CONTENT HERE. Everything below is rendered automatically.
// ---------------------------------------------------------------------------

const SOCIAL_LINKS = [
  { name: "Instagram", url: "https://www.instagram.com/starkittyvintage", icon: "instagram" },
  { name: "Depop", url: "https://depop.com/starkittyvintage", icon: "website" },
  { name: "TikTok", url: "https://www.tiktok.com/@starkittyvintage", icon: "tiktok" },
];

const GENERAL_LINKS = [
  {
    iconKey: "pin",
    title: "Events",
    desc: "Pop-up shop at Boho Chachkies!!!! July 24th & 25th, 12-7pm. 78 Nassau St, Toronto, ON, Kensington Market. Come hang out and shop!!!!",
    url: "https://www.google.com/maps/place/Boho+Chachkies/@43.6552235,-79.4056697,17z/data=!3m1!4b1!4m6!3m5!1s0x882b359fa27bc75b:0x2a338e100aca6423!8m2!3d43.6552235!4d-79.4030948!16s%2Fg%2F11vj8qq80z?entry=tts&g_ep=EgoyMDI2MDYwMy4xIPu8ASoASAFQAw%3D%3D&skid=5435545f-95fb-40e9-b437-398e45d8d127",
    more: "Pop-up shop at Boho Chachkies!!!! July 24th & 25th, 12-7pm. 78 Nassau St, Toronto, ON, Kensington Market. Come hang out and shop!!!!",
    moreInline: true,
  },
  {
    iconKey: "sale",
    title: "Upcoming Whatnot $5 Sale",
    url: "https://www.whatnot.com/live/204c7c0e-60a9-481c-a7a6-6a27f6ef2df9?app=web&sender_id=61933047&invitedBy=starkittyvintage&sharing_channel=copyLink",
    share: true,
  },
  {
    iconKey: "shop",
    title: "Depop",
    url: "https://depop.com/starkittyvintage",
    share: true,
  },
  {
    iconKey: "contact",
    title: "Contact Details",
    toggle: true,
    moreHtml: `
      <div class="contact-name">kaatje courchesne</div>
      <div class="contact-role">owner &bull; k44tjevintage</div>
      <div class="contact-row contact-row--copy" data-copy="k44tjevintage@gmail.com" title="Click to copy">${'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>'}<span>k44tjevintage@gmail.com</span>${'<svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>'}</div>
      <div class="contact-row contact-row--copy" data-copy="https://starkittyvintage.github.io/" title="Click to copy">${'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 15l6-6"/><path d="M10 7l.9-.9a3.5 3.5 0 0 1 5 5l-.9.9"/><path d="M14 17l-.9.9a3.5 3.5 0 0 1-5-5l.9-.9"/></svg>'}<span>starkittyvintage.github.io</span>${'<svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>'}</div>
    `,
  },
];

// ---------------------------------------------------------------------------
// Rendering (no need to edit below this line)
// ---------------------------------------------------------------------------

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.31 1.38V7.3s-1.88.09-3.25-1.48z"/></svg>',
  website: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg>',
  sale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12V6a2 2 0 0 1 2-2h6l10 10-8 8L3 12z"/><circle cx="8" cy="8" r="1.3" fill="currentColor" stroke="none"/></svg>',
  shop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  contact: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H10l-4.5 3.5V16H6.5A2.5 2.5 0 0 1 4 13.5v-7z"/><path d="M15.6 7.6l.6 1.3 1.4.2-1 1 .2 1.4-1.2-.7-1.2.7.2-1.4-1-1 1.4-.2z"/></svg>',
};

const SHARE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>';

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("share-toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
}

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    return true;
  } catch (e) {
    return false;
  }
}

function renderSocials() {
  const container = document.getElementById("socials");
  SOCIAL_LINKS.forEach((s) => {
    const a = el("a", `social-link social-link--${s.icon}`, ICONS[s.icon] || "");
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", s.name);
    a.title = s.name;
    container.appendChild(a);
  });
}

function renderLinks() {
  const container = document.getElementById("links");
  GENERAL_LINKS.forEach((link) => {
    const group = el("div", "link-group");
    const isLink = Boolean(link.url);
    const hasShare = Boolean(link.share && link.url);
    const hasMore = Boolean(link.more || link.moreHtml);

    const iconHtml = link.logo
      ? `<span class="link-icon link-icon--badge"><img src="${link.logo}" alt="" loading="lazy" /></span>`
      : link.iconKey
        ? `<span class="link-icon link-icon--vector">${ICONS[link.iconKey] || ""}</span>`
        : (link.icon ? `<span class="link-icon">${link.icon}</span>` : "");

    const bodyHtml = `
      ${iconHtml}
      <span>
        <div class="link-title">${link.title}</div>
        ${link.desc ? `<div class="link-desc">${link.desc}</div>` : ""}
      </span>
    `;

    let card;

    if (link.toggle) {
      // Whole card click expands/collapses the panel beneath it, no navigation.
      card = el("div", "link-card");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-expanded", "false");
      card.innerHTML = bodyHtml;

      const panel = el("div", "more-panel", link.more ? `<p>${link.more}</p>` : link.moreHtml);
      panel.hidden = true;

      panel.querySelectorAll("[data-copy]").forEach((row) => {
        row.addEventListener("click", async (e) => {
          e.stopPropagation();
          const ok = await copyToClipboard(row.dataset.copy);
          showToast(ok ? "Copied!" : "Couldn't copy");
        });
      });

      const toggle = () => {
        const expanded = card.getAttribute("aria-expanded") === "true";
        card.setAttribute("aria-expanded", String(!expanded));
        panel.hidden = expanded;
      };
      card.addEventListener("click", toggle);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });

      group.appendChild(card);
      group.appendChild(panel);
    } else if (isLink && (link.share || link.moreInline)) {
      const stacked = Boolean(link.moreInline && hasMore);
      card = el("div", stacked ? "link-card link-card--stacked" : "link-card");
      card.tabIndex = 0;
      card.setAttribute("role", "link");
      card.innerHTML = `
        <div class="card-top">
          ${bodyHtml}
          ${link.share ? `<button type="button" class="card-share" aria-label="Copy link to ${link.title}" title="Copy link">${SHARE_ICON}</button>` : ""}
        </div>
        ${stacked ? `<button type="button" class="more-toggle more-toggle--inline" aria-expanded="false">More</button>` : ""}
      `;

      const open = () => window.open(link.url, "_blank", "noopener,noreferrer");
      card.addEventListener("click", (e) => {
        if (e.target.closest(".card-share") || e.target.closest(".more-toggle")) return;
        open();
      });
      card.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && !e.target.closest(".card-share") && !e.target.closest(".more-toggle")) {
          e.preventDefault();
          open();
        }
      });
      if (link.share) {
        card.querySelector(".card-share").addEventListener("click", async (e) => {
          e.stopPropagation();
          const ok = await copyToClipboard(link.url);
          showToast(ok ? "Link copied!" : "Couldn't copy link");
        });
      }

      group.appendChild(card);

      if (stacked) {
        const panel = el("div", "more-panel", link.more ? `<p>${link.more}</p>` : link.moreHtml);
        panel.hidden = true;
        const moreToggle = card.querySelector(".more-toggle--inline");
        moreToggle.addEventListener("click", (e) => {
          e.stopPropagation();
          const expanded = moreToggle.getAttribute("aria-expanded") === "true";
          moreToggle.setAttribute("aria-expanded", String(!expanded));
          moreToggle.textContent = expanded ? "More" : "Less";
          panel.hidden = expanded;
        });
        group.appendChild(panel);
      }
    } else if (isLink) {
      card = el("a", "link-card");
      card.href = link.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.innerHTML = `
        ${bodyHtml}
        <span class="link-arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </span>
      `;
      group.appendChild(card);
    } else {
      card = el("div", "link-card link-card--info");
      card.innerHTML = bodyHtml;
      group.appendChild(card);
    }

    container.appendChild(group);
  });
}

function initShare() {
  const btn = document.getElementById("share-btn");
  btn.addEventListener("click", async () => {
    const ok = await copyToClipboard(window.location.href);
    showToast(ok ? "Link copied!" : "Couldn't copy link");
  });
}

renderSocials();
renderLinks();
initShare();
