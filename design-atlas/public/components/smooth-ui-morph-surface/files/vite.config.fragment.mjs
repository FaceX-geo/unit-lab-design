import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
export const componentAliases=Object.fromEntries(Object.entries({"@repo/smoothui/components/smooth-button":"runtime/packages/smoothui/components/smooth-button/index.jsx","@repo/shadcn-ui/lib/utils":"runtime/packages/shadcn-ui/lib/utils.js","../siri-orb":"runtime/packages/smoothui/components/siri-orb/index.jsx","../ai-core":"runtime/packages/smoothui/components/ai-core/index.jsx","./use-click-outside":"runtime/packages/smoothui/components/morph-surface/use-click-outside.jsx"}).map(([key,value])=>[key,path.resolve(root,value)]));
export default {resolve:{alias:componentAliases}};
