<%_ if (type === 'data-v') { _%>
import debounce from 'lodash/debounce';
import Ro from 'resize-observer-polyfill';
<%_ } _%>

<%_ if (type === 'data-v') { _%>
// 监听节点变化
export function resizeEvent(el, fn, wait = 100) {
    if (!el) return;
    const cb = debounce(fn, wait);

    const handler = entries => {
        entries.forEach(entry => {
            const target = entry.target;
            const listeners = target.__resizeListeners__ || [];
            listeners.forEach(fn => fn());
        });
    };

    const removeListeners = () => {
        el.__resizeListeners__.splice(el.__resizeListeners__.indexOf(cb), 1);
        if (el.__resizeListeners__.length === 0) {
            el.__ro__.disconnect();
        }
    };

    if (!el.__resizeListeners__) {
        el.__resizeListeners__ = [];
        el.__ro__ = new Ro(handler);
        el.__ro__.observe(el);
    }
    el.__resizeListeners__.push(cb);

    return {
        removeListeners,
    };
}
<%_ } _%>
