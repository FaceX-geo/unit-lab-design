import { PlusIcon } from 'lucide-react';
import { LiquidButton, } from '@/registry/components/buttons/liquid';
export default function LiquidButtonDemo({ variant, size, }) {
    return (<LiquidButton variant={variant} size={size}>
      {size === 'icon' ? <PlusIcon /> : 'Hover me'}
    </LiquidButton>);
}
