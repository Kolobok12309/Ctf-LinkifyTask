import linkifyHtml from 'linkifyjs/html'

const linkChecker = (url) => {
  const domain = new URL(location.href).host
  const escapedDomain = domain.replace(/\./g, '\\\\')
  const regexp = new RegExp(`^((https?://)?(.*\\.)*${escapedDomain})?(/.*)?$`)
  return regexp.test(url)
}

const config = {
  attributes: (href, type) => {
    return {
      rel: linkChecker(href)
        ? 'noopener noreferrer'
        : 'nofollow noopener noreferrer'
    }
  },
  formatHref: (href, type) =>
    linkChecker(href) ? href : `/away?href=${encodeURIComponent(href)}`
}

export default (text) => linkifyHtml(text, config)
