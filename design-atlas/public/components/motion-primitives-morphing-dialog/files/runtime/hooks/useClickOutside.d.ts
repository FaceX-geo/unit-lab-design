import { RefObject } from 'react';
declare function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, handler: (event: MouseEvent | TouchEvent) => void): void;
export default useClickOutside;
