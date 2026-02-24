const GITHUB_API = "https://api.github.com/repos/opencar-dev/opencar-specs/contents/specifications";
const REPO_URL = "https://github.com/opencar-dev/opencar-specs";

interface GitHubFile {
  name: string;
  html_url: string;
  download_url: string;
  type: string;
}

export interface Spec {
  name: string;
  version: string;
  description: string;
  tags: string[];
  specsUrl: string;
  githubUrl: string;
}

function parseSpecMarkdown(markdown: string, htmlUrl: string): Spec {
  const titleMatch = markdown.match(/^#\s+(OC-\w+)\s+([\d.]+):\s*(.+)/m);
  const name = titleMatch?.[1] ?? "Unknown";
  const version = titleMatch?.[2] ?? "0.0.1";
  const subtitle = titleMatch?.[3]?.trim() ?? "";

  const introMatch = markdown.match(/## Introduction\s*\n+([\s\S]*?)(?=\n---|\n## )/);
  const description = introMatch?.[1]?.trim() ?? subtitle;

  return {
    name,
    version,
    description,
    tags: deriveTags(name, subtitle, markdown),
    specsUrl: htmlUrl,
    githubUrl: REPO_URL,
  };
}

function deriveTags(name: string, subtitle: string, markdown: string): string[] {
  const tags: string[] = [];

  const specType = name.replace("OC-", "");
  tags.push(specType.charAt(0) + specType.slice(1).toLowerCase() + "s");

  if (/schema/i.test(subtitle)) tags.push("Schema");
  if (/discover/i.test(markdown.slice(0, 1500))) tags.push("Discoverability");

  return [...new Set(tags)];
}

export async function fetchSpecs(): Promise<Spec[]> {
  const response = await fetch(GITHUB_API);
  if (!response.ok) {
    console.warn(`Failed to fetch specs directory: ${response.status}`);
    return [];
  }

  const files: GitHubFile[] = await response.json();
  const mdFiles = files.filter((f) => f.type === "file" && f.name.endsWith(".md"));

  const specs = await Promise.all(
    mdFiles.map(async (file) => {
      const raw = await fetch(file.download_url);
      if (!raw.ok) return null;
      const markdown = await raw.text();
      return parseSpecMarkdown(markdown, file.html_url);
    }),
  );

  return specs.filter((s): s is Spec => s !== null);
}
