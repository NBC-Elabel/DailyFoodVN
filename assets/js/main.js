(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* Images: if a photo fails to load, hide it and let the tinted box or SVG art show. */
  $$("[data-img]").forEach((box) => {
    const img = $("img", box);
    if (!img) return;
    const fail = () => { box.dataset.state = "error"; };
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener("error", fail, { once: true });
  });

  /* Reveal cards and partners when they enter the viewport. */
  const revealEls = $$("[data-reveal]");
  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }

  /* Scroll-driven effects, batched in one rAF. */
  const heroMedia = $(".hero__media");
  const band = $(".band");
  const timeline = $(".timeline");
  const steps = $$(".step");
  const fab = $(".fab");
  let queued = false;

  const update = () => {
    queued = false;
    const y = window.scrollY;
    const vh = window.innerHeight;
    const max = root.scrollHeight - vh;

    root.style.setProperty("--progress", max > 0 ? clamp(y / max, 0, 1).toFixed(4) : "0");

    if (fab) fab.classList.toggle("is-on", y > vh * 0.6);

    if (reduced) return;

    if (heroMedia) heroMedia.style.setProperty("--py", (clamp(y, 0, 900) * 0.2).toFixed(1));

    if (band) {
      const r = band.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh) {
        band.style.setProperty("--band-y", (-(r.top + r.height / 2 - vh / 2) * 0.12).toFixed(1));
      }
    }

    if (timeline) {
      const r = timeline.getBoundingClientRect();
      const fill = clamp((vh * 0.65 - r.top) / r.height, 0, 1);
      timeline.style.setProperty("--fill", fill.toFixed(4));
    }
  };

  const queue = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  const updateSteps = () => {
    const vh = window.innerHeight;
    steps.forEach((step) => {
      step.classList.toggle("is-on", reduced || step.getBoundingClientRect().top < vh * 0.65);
    });
  };

  window.addEventListener("scroll", () => { queue(); updateSteps(); }, { passive: true });
  window.addEventListener("resize", () => { queue(); updateSteps(); });
  update();
  updateSteps();

  /* Scroll-spy for the header links. */
  const links = $$('.site-nav a[href^="#"]');
  const targets = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window && targets.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => {
          const on = a.getAttribute("href") === `#${entry.target.id}`;
          if (on) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    targets.forEach((t) => spy.observe(t));
  }

  /* Tabs for the product catalogue. Without JS every panel stays visible. */
  const tabs = $$('[role="tab"]');
  const panels = tabs.map((t) => document.getElementById(t.getAttribute("aria-controls")));
  const tablist = $(".tablist");
  const activate = (index, focus = false, fromUser = false) => {
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
      if (!on) return;
      if (focus) tab.focus({ preventScroll: true });
      // Scroll only the tab strip sideways, never the page, and never on first load.
      if (fromUser && tablist) {
        const left = tab.offsetLeft - (tablist.clientWidth - tab.offsetWidth) / 2;
        tablist.scrollTo({ left, behavior: reduced ? "auto" : "smooth" });
      }
    });
    panels.forEach((panel, i) => {
      if (!panel) return;
      panel.hidden = i !== index;
      panel.classList.toggle("is-active", i === index);
    });
  };
  if (tabs.length) {
    activate(0);
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => activate(i, false, true));
      tab.addEventListener("keydown", (e) => {
        const last = tabs.length - 1;
        const keys = { ArrowRight: i === last ? 0 : i + 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last };
        if (!(e.key in keys)) return;
        e.preventDefault();
        activate(keys[e.key], true, true);
      });
    });
  }

  /* Copy button for the company ID. Hidden until the Clipboard API is available. */
  const copyBtn = $("[data-copy]");
  const status = $(".copy-status");
  if (copyBtn && status && navigator.clipboard) {
    const idle = copyBtn.textContent;
    let timer;
    copyBtn.hidden = false;
    const show = (state, label, message) => {
      copyBtn.dataset.state = state;
      copyBtn.textContent = label;
      status.textContent = message;
      clearTimeout(timer);
      timer = setTimeout(() => {
        delete copyBtn.dataset.state;
        copyBtn.textContent = idle;
        status.textContent = "";
      }, 2000);
    };
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(copyBtn.dataset.copy);
        show("success", "Đã chép", "Đã chép mã số doanh nghiệp");
      } catch {
        show("error", "Không chép được", "Không chép được. Hãy chọn mã và sao chép thủ công.");
      }
    });
  }
})();
