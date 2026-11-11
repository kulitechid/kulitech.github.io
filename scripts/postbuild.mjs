import { readFile, writeFile, copyFile } from "node:fs/promises";
import { resolve } from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const rootDir = resolve(import.meta.dirname, "..");
const distDir = resolve(rootDir, "dist");

const pages = [
  {
    modulePath: "/src/App.jsx",
    distHtmlPath: resolve(distDir, "index.html"),
    cleanHtmlPath: null,
  },
  {
    modulePath: "/src/pages/PrivacyPolicyPage.jsx",
    distHtmlPath: resolve(distDir, "kanguru-siaga/privacy-policy/index.html"),
    cleanHtmlPath: resolve(distDir, "kanguru-siaga/privacy-policy.html"),
  },
  {
    modulePath: "/src/pages/TermsOfUsePage.jsx",
    distHtmlPath: resolve(distDir, "kanguru-siaga/term-of-use/index.html"),
    cleanHtmlPath: resolve(distDir, "kanguru-siaga/term-of-use.html"),
  },
];

async function prerender() {
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "silent",
  });

  try {
    for (const page of pages) {
      const mod = await vite.ssrLoadModule(page.modulePath);
      const PageComponent = mod.default;
      const renderedMarkup = renderToString(React.createElement(PageComponent));

      const rawHtml = await readFile(page.distHtmlPath, "utf8");
      const marker = '<div id="root"></div>';
      if (!rawHtml.includes(marker)) {
        throw new Error(`Expected ${marker} in ${page.distHtmlPath}`);
      }

      const finalHtml = rawHtml.replace(
        marker,
        `<div id="root">${renderedMarkup}</div>`
      );

      await writeFile(page.distHtmlPath, finalHtml, "utf8");
      if (page.cleanHtmlPath) {
        await copyFile(page.distHtmlPath, page.cleanHtmlPath);
        console.log(`Prerendered: ${page.cleanHtmlPath}`);
      } else {
        console.log(`Prerendered: ${page.distHtmlPath}`);
      }
    }
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error("Postbuild prerender failed:", err);
  process.exit(1);
});
