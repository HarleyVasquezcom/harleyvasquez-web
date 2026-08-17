type EventName =
  | "project_click"
  | "contact_submit"
  | "language_switch"
  | "cv_download"
  | "blog_read";

type EventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props: EventProps }) => void;
  }
}

export function track(event: EventName, props?: EventProps) {
  if (typeof window !== "undefined") {
    import("@vercel/analytics").then(({ track: vaTrack }) => {
      vaTrack(event, props);
    });
  }
  if (typeof window?.plausible === "function") {
    window.plausible(event, props ? { props } : undefined);
  }
}

export const trackProjectClick   = (name: string)  => track("project_click",   { name });
export const trackContactSubmit  = ()               => track("contact_submit");
export const trackLanguageSwitch = (locale: string) => track("language_switch", { locale });
export const trackCVDownload     = ()               => track("cv_download");
export const trackBlogRead       = (slug: string)   => track("blog_read",       { slug });
