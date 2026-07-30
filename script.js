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
    title: "Events",
    desc: "Pop-up shop at Boho Chachkies!!!! July 24th & 25th, 12-7pm. 78 Nassau St, Toronto, ON, Kensington Market. Come hang out and shop!!!!",
    url: "https://www.google.com/maps/place/Boho+Chachkies/@43.6552235,-79.4056697,17z/data=!3m1!4b1!4m6!3m5!1s0x882b359fa27bc75b:0x2a338e100aca6423!8m2!3d43.6552235!4d-79.4030948!16s%2Fg%2F11vj8qq80z?entry=tts&g_ep=EgoyMDI2MDYwMy4xIPu8ASoASAFQAw%3D%3D&skid=5435545f-95fb-40e9-b437-398e45d8d127",
    more: "Pop-up shop at Boho Chachkies!!!! July 24th & 25th, 12-7pm. 78 Nassau St, Toronto, ON, Kensington Market. Come hang out and shop!!!!",
    share: true,
  },
  {
    logo: "images/icon-sale.png",
    title: "Upcoming Whatnot $5 Sale",
    url: "https://www.whatnot.com/live/204c7c0e-60a9-481c-a7a6-6a27f6ef2df9?app=web&sender_id=61933047&invitedBy=starkittyvintage&sharing_channel=copyLink",
    share: true,
  },
  {
    logo: "images/icon-shop.png",
    title: "Depop",
    url: "https://depop.com/starkittyvintage",
  },
  {
    logo: "images/icon-contact.png",
    title: "Contact Details",
    moreHtml: `
      <div class="contact-name">kaatje courchesne</div>
      <div class="contact-role">owner &bull; k44tjevintage</div>
      <div class="contact-row">${'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>'}<span>k44tjevintage@gmail.com</span></div>
      <div class="contact-row">${'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 15l6-6"/><path d="M10 7l.9-.9a3.5 3.5 0 0 1 5 5l-.9.9"/><path d="M14 17l-.9.9a3.5 3.5 0 0 1-5-5l.9-.9"/></svg>'}<span class="pending">website coming soon</span></div>
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
      : (link.icon ? `<span class="link-icon">${link.icon}</span>` : "");

    const bodyHtml = `
      ${iconHtml}
      <span>
        <div class="link-title">${link.title}</div>
        ${link.desc ? `<div class="link-desc">${link.desc}</div>` : ""}
      </span>
    `;

    let card;
    if (hasShare) {
      card = el("div", "link-card");
      card.tabIndex = 0;
      card.setAttribute("role", "link");
      card.innerHTML = `
        ${bodyHtml}
        <button type="button" class="card-share" aria-label="Copy link to ${link.title}" title="Copy link">${SHARE_ICON}</button>
      `;
      const open = () => window.open(link.url, "_blank", "noopener,noreferrer");
      card.addEventListener("click", (e) => {
        if (e.target.closest(".card-share")) return;
        open();
      });
      card.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && !e.target.closest(".card-share")) {
          e.preventDefault();
          open();
        }
      });
      card.querySelector(".card-share").addEventListener("click", async (e) => {
        e.stopPropagation();
        const ok = await copyToClipboard(link.url);
        showToast(ok ? "Link copied!" : "Couldn't copy link");
      });
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
    } else {
      card = el("div", "link-card link-card--info");
      card.innerHTML = bodyHtml;
    }

    group.appendChild(card);

    if (hasMore) {
      const moreId = `more-panel-${GENERAL_LINKS.indexOf(link)}`;
      const toggle = el("button", "more-toggle");
      toggle.type = "button";
      toggle.textContent = "More";
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-controls", moreId);

      const panel = el("div", "more-panel", link.more ? `<p>${link.more}</p>` : link.moreHtml);
      panel.id = moreId;
      panel.hidden = true;

      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!expanded));
        toggle.textContent = expanded ? "More" : "Less";
        panel.hidden = expanded;
      });

      group.appendChild(toggle);
      group.appendChild(panel);
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
