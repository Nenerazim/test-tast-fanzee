export class LocationHelper {
  public static getPathname() {
    if (import.meta.client) {
      return window.location.pathname;
    }
    return useRequestURL().pathname;
  }

  public static getSlug() {
    if (import.meta.client) {
      const pathname = window.location.pathname;
      const segments = pathname.split('/').filter(Boolean);
      return segments[segments.length - 1];
    }
    const pathname = useRequestURL().pathname;
    const segments = pathname.split('/').filter(Boolean);
    return segments[segments.length - 1];
  }

  public static getParams() {
    if (import.meta.client) {
      return useRoute().query;
    }
    const query = useRequestURL().search;
    const params = new URLSearchParams(query.startsWith('?') ? query.substring(1) : query);
    return Object.fromEntries(params.entries());
  }
}
