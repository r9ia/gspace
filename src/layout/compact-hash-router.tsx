import { useSyncExternalStore, type ReactNode } from 'react'
import { Router, createPath, parsePath, type Navigator, type To } from 'react-router-dom'

function routePath() {
  const hash = window.location.hash.slice(1)
  return hash.startsWith('/') ? hash : `/${hash}`
}

function href(to: To) {
  const path = typeof to === 'string' ? to : createPath(to)
  const hash = path.replace(/^\//, '')
  return hash ? `#${hash}` : window.location.pathname + window.location.search
}

function subscribe(onChange: () => void) {
  window.addEventListener('popstate', onChange)
  window.addEventListener('hashchange', onChange)
  return () => {
    window.removeEventListener('popstate', onChange)
    window.removeEventListener('hashchange', onChange)
  }
}

const navigator: Navigator = {
  createHref: href,
  go: delta => window.history.go(delta),
  push(to, state) {
    window.history.pushState({ usr: state, key: crypto.randomUUID() }, '', href(to))
    window.dispatchEvent(new Event('popstate'))
  },
  replace(to, state) {
    window.history.replaceState({ usr: state, key: crypto.randomUUID() }, '', href(to))
    window.dispatchEvent(new Event('popstate'))
  },
}

// React Router still resolves links and nested routes; only URL storage is custom.
export default function CompactHashRouter({ children }: { children: ReactNode }) {
  useSyncExternalStore(subscribe, () => window.location.href + (window.history.state?.key ?? ''))
  return (
    <Router
      navigator={navigator}
      location={{ ...parsePath(routePath()), state: window.history.state?.usr ?? null, key: window.history.state?.key ?? 'default' }}
    >
      {children}
    </Router>
  )
}
