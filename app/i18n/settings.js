export const languages = ["en", "fr"];

export function getOptions(lng, ns) {
  return {
    supportedlangs: languages,
    lng,
    ns,
  };
}
