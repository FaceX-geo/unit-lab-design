import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@/components/ui/button":"runtime/components/ui/button.jsx","@/lib/utils":"runtime/lib/utils.js","@/components/ui/card":"runtime/components/ui/card.jsx","next/image":"atlas-adapters/next-image.jsx"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
