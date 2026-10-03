import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@/components/ui/dropdown-menu":"runtime/components/ui/dropdown-menu.jsx","@/lib/utils":"runtime/lib/utils.js","../icons/gemini":"runtime/components/icons/gemini.jsx","next/link":"atlas-adapters/next-link.jsx","next/image":"atlas-adapters/next-image.jsx"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
