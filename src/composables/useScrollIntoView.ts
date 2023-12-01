import { type MaybeRefOrGetter, toValue, type ComponentPublicInstance } from 'vue';

export function useScrollIntoView(
  element: MaybeRefOrGetter<HTMLElement | undefined | null | ComponentPublicInstance>
) {
  function scrollTo() {
    if (!window) return;

    const _element = toValue(element);
    if (!_element) return;

    if (_element instanceof HTMLElement) {
      _element.scrollIntoView({ behavior: 'smooth' });
    } else {
      _element.$el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return { scrollTo };
}

export type UseScrollIntoViewReturn = ReturnType<typeof useScrollIntoView>;
