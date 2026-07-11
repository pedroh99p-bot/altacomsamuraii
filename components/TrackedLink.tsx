"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  trackEvent,
  type AnalyticsEventName,
  type AnalyticsPayload,
} from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: AnalyticsEventName;
  payload?: AnalyticsPayload;
  children: ReactNode;
};

export function TrackedLink({
  eventName,
  payload,
  children,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent(eventName, {
          link_url: props.href,
          ...payload,
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
