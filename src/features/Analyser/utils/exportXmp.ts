export function buildXmpPreset(xmp: Record<string, any>) {
  const entries = Object.entries(xmp)
    .filter(([_, v]) => typeof v !== "object" && v !== undefined)
    .map(([key, value]) => `    <crs:${key}>${value}</crs:${key}>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/"
  xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description>
${entries}
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>`;
}

export function downloadXmp(name: string, content: string) {
  const blob = new Blob([content], { type: "application/xml" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${name}.xmp`;
  a.click();

  URL.revokeObjectURL(url);
}
