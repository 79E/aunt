
type Parameter = string | number;

export type UseNamespace = {
  b: () => string;
  e: (el: Parameter) => string;
  m: (mo: Parameter) => string;
  em: (el: Parameter, mo: Parameter) => string;
};

function createBem(namespace: string, element?: Parameter, modifier?: Parameter): string {
  let cls = namespace;
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}

/**
 * useNamespace
 * 
 * @param block current block name
 * @param needDot Do you need a dot prefix (defalut: false)
 * @returns UseNamespace
 */
function useNamespace(block: string, prefix: string = '', needDot: boolean = false): UseNamespace {
  const prefixblock = prefix ? `${prefix}-${block}` : block;
  const namespace = needDot ?  `.${prefixblock}` : `${prefixblock}`;
  const b = () => createBem(namespace);
  const e = (element: Parameter) => (element ? createBem(namespace, element) : '');
  const m = (modifier: Parameter) => (modifier ? createBem(namespace, '', modifier) : '');
  const em = (element: Parameter, modifier: Parameter) => (element && modifier ? createBem(namespace, element, modifier) : '');
  return {
    b,
    e,
    m,
    em,
  };
}

export default useNamespace;
