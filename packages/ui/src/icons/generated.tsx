import React from 'react';
import { IconBase } from './IconBase';
import type { IconProps } from './IconBase';

export type IconName =
  | 'activity'
  | 'alert-circle'
  | 'alert-triangle'
  | 'align-horizontal'
  | 'align-justify'
  | 'app-window'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'badge'
  | 'battery'
  | 'bell'
  | 'bluetooth'
  | 'book'
  | 'box'
  | 'calendar'
  | 'camera'
  | 'check-square'
  | 'check'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron'
  | 'circle-dot'
  | 'clock'
  | 'close'
  | 'cloud'
  | 'code'
  | 'component'
  | 'copy'
  | 'credit-card'
  | 'database'
  | 'download'
  | 'edit'
  | 'external-link'
  | 'eye-off'
  | 'eye'
  | 'file-text'
  | 'file'
  | 'filter'
  | 'folder'
  | 'form-input'
  | 'ghost'
  | 'gift'
  | 'git-commit'
  | 'github'
  | 'grid'
  | 'grip'
  | 'hash'
  | 'heading1'
  | 'heart'
  | 'help-circle'
  | 'history'
  | 'home'
  | 'image'
  | 'info'
  | 'lab'
  | 'laptop'
  | 'layout-template'
  | 'layout'
  | 'link'
  | 'linkedin'
  | 'list-checks'
  | 'list-collapse'
  | 'list-filter'
  | 'list'
  | 'loader2'
  | 'lock'
  | 'log-in'
  | 'log-out'
  | 'mail'
  | 'map-pin'
  | 'menu'
  | 'message-circle'
  | 'message-square'
  | 'mic'
  | 'milestone'
  | 'minus'
  | 'monitor'
  | 'moon'
  | 'more-horizontal'
  | 'mouse-pointer'
  | 'music'
  | 'panel-left'
  | 'panel-top'
  | 'panel'
  | 'phone'
  | 'plus'
  | 'rectangle-horizontal'
  | 'refresh'
  | 'rocket'
  | 'ruler'
  | 'search'
  | 'server'
  | 'settings'
  | 'share'
  | 'shield'
  | 'shopping-cart'
  | 'sliders-horizontal'
  | 'smartphone'
  | 'spark'
  | 'sparkles'
  | 'spinner'
  | 'square'
  | 'star'
  | 'sun'
  | 'table'
  | 'tablet'
  | 'tag'
  | 'text-cursor'
  | 'theme-dark'
  | 'theme-light'
  | 'toggle-right'
  | 'trash'
  | 'type'
  | 'unlock'
  | 'upload-cloud'
  | 'upload'
  | 'user-circle'
  | 'user'
  | 'video'
  | 'warning'
  | 'wifi'
  | 'x'
  | 'zap';

const icons = {
  'activity': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\" />",
  },
  'alert-circle': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" />\n  <line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" />",
  },
  'alert-triangle': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" />\n  <path d=\"M12 9v4\" />\n  <path d=\"M12 17h.01\" />",
  },
  'align-horizontal': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"6\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\" />\n  <rect width=\"6\" height=\"10\" x=\"16\" y=\"7\" rx=\"2\" />\n  <path d=\"M12 2v20\" />",
  },
  'align-justify': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M3 5h18\" />\n  <path d=\"M3 12h18\" />\n  <path d=\"M3 19h18\" />",
  },
  'app-window': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\" />\n  <path d=\"M10 4v4\" />\n  <path d=\"M2 8h20\" />\n  <path d=\"M6 4v4\" />",
  },
  'arrow-down': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 5v14\" />\n  <path d=\"m19 12-7 7-7-7\" />",
  },
  'arrow-left': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m12 19-7-7 7-7\" />\n  <path d=\"M19 12H5\" />",
  },
  'arrow-right': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M5 12h14\" />\n  <path d=\"m12 5 7 7-7 7\" />",
  },
  'arrow-up': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m5 12 7-7 7 7\" />\n  <path d=\"M12 19V5\" />",
  },
  'badge': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\" />",
  },
  'battery': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M 22 14 L 22 10\" />\n  <rect x=\"2\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\" />",
  },
  'bell': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\" />\n  <path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\" />",
  },
  'bluetooth': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m7 7 10 10-5 5V2l5 5L7 17\" />",
  },
  'book': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\" />\n  <path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\" />",
  },
  'box': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z\" />\n  <path d=\"m3.3 7 8.7 5 8.7-5\" />\n  <path d=\"M12 22V12\" />",
  },
  'calendar': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M8 2v4\" />\n  <path d=\"M16 2v4\" />\n  <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" />\n  <path d=\"M3 10h18\" />",
  },
  'camera': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z\" />\n  <circle cx=\"12\" cy=\"13\" r=\"3\" />",
  },
  'check-square': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344\" />\n  <path d=\"m9 11 3 3L22 4\" />",
  },
  'check': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M20 6 9 17l-5-5\" />",
  },
  'chevron-down': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m6 9 6 6 6-6\" />",
  },
  'chevron-left': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m15 18-6-6 6-6\" />",
  },
  'chevron-right': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m9 18 6-6-6-6\" />",
  },
  'chevron-up': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m18 15-6-6-6 6\" />",
  },
  'chevron': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m9 18 6-6-6-6\" />",
  },
  'circle-dot': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <circle cx=\"12\" cy=\"12\" r=\"1\" />",
  },
  'clock': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <path d=\"M12 6v6l4 2\" />",
  },
  'close': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M18 6 6 18\" />\n  <path d=\"m6 6 12 12\" />",
  },
  'cloud': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z\" />",
  },
  'code': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m10 9-3 3 3 3\"/><path d=\"m14 15 3-3-3-3\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  },
  'component': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z\" />\n  <path d=\"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z\" />\n  <path d=\"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z\" />\n  <path d=\"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z\" />",
  },
  'copy': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" />\n  <path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" />",
  },
  'credit-card': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\" />\n  <line x1=\"2\" x2=\"22\" y1=\"10\" y2=\"10\" />",
  },
  'database': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\" />\n  <path d=\"M3 5V19A9 3 0 0 0 21 19V5\" />\n  <path d=\"M3 12A9 3 0 0 0 21 12\" />",
  },
  'download': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 15V3\" />\n  <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" />\n  <path d=\"m7 10 5 5 5-5\" />",
  },
  'edit': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\" />\n  <path d=\"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z\" />",
  },
  'external-link': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M15 3h6v6\" />\n  <path d=\"M10 14 21 3\" />\n  <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  },
  'eye-off': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49\" />\n  <path d=\"M14.084 14.158a3 3 0 0 1-4.242-4.242\" />\n  <path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143\" />\n  <path d=\"m2 2 20 20\" />",
  },
  'eye': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" />\n  <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  },
  'file-text': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\" />\n  <path d=\"M14 2v5a1 1 0 0 0 1 1h5\" />\n  <path d=\"M10 9H8\" />\n  <path d=\"M16 13H8\" />\n  <path d=\"M16 17H8\" />",
  },
  'file': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\" />\n  <path d=\"M14 2v5a1 1 0 0 0 1 1h5\" />",
  },
  'filter': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z\" />",
  },
  'folder': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\" />",
  },
  'form-input': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\" />\n  <path d=\"M12 12h.01\" />\n  <path d=\"M17 12h.01\" />\n  <path d=\"M7 12h.01\" />",
  },
  'ghost': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M9 10h.01\" />\n  <path d=\"M15 10h.01\" />\n  <path d=\"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z\" />",
  },
  'gift': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 7v14\" />\n  <path d=\"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8\" />\n  <path d=\"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5\" />\n  <rect x=\"3\" y=\"7\" width=\"18\" height=\"4\" rx=\"1\" />",
  },
  'git-commit': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"12\" cy=\"12\" r=\"3\" />\n  <line x1=\"3\" x2=\"9\" y1=\"12\" y2=\"12\" />\n  <line x1=\"15\" x2=\"21\" y1=\"12\" y2=\"12\" />",
  },
  'github': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4\" />\n  <path d=\"M9 18c-4.51 2-5-2-7-2\" />",
  },
  'grid': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" />\n  <path d=\"M3 9h18\" />\n  <path d=\"M3 15h18\" />\n  <path d=\"M9 3v18\" />\n  <path d=\"M15 3v18\" />",
  },
  'grip': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"12\" cy=\"5\" r=\"1\"/><circle cx=\"19\" cy=\"5\" r=\"1\"/><circle cx=\"5\" cy=\"5\" r=\"1\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"19\" cy=\"12\" r=\"1\"/><circle cx=\"5\" cy=\"12\" r=\"1\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/><circle cx=\"19\" cy=\"19\" r=\"1\"/><circle cx=\"5\" cy=\"19\" r=\"1\"/>",
  },
  'hash': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M16 8.9V7H8l4 5-4 5h8v-1.9\"/>",
  },
  'heading1': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M4 12h8\" />\n  <path d=\"M4 18V6\" />\n  <path d=\"M12 18V6\" />\n  <path d=\"m17 12 3-2v8\" />",
  },
  'heart': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\" />",
  },
  'help-circle': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\" />\n  <path d=\"M12 17h.01\" />",
  },
  'history': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" />\n  <path d=\"M3 3v5h5\" />\n  <path d=\"M12 7v5l4 2\" />",
  },
  'home': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" />\n  <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />",
  },
  'image': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\" />\n  <circle cx=\"9\" cy=\"9\" r=\"2\" />\n  <path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\" />",
  },
  'info': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <path d=\"M12 16v-4\" />\n  <path d=\"M12 8h.01\" />",
  },
  'lab': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2\" />\n  <path d=\"M6.453 15h11.094\" />\n  <path d=\"M8.5 2h7\" />",
  },
  'laptop': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z\" />\n  <path d=\"M20.054 15.987H3.946\" />",
  },
  'layout-template': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"18\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\" />\n  <rect width=\"9\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\" />\n  <rect width=\"5\" height=\"7\" x=\"16\" y=\"14\" rx=\"1\" />",
  },
  'layout': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" />\n  <line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\" />\n  <line x1=\"9\" y1=\"9\" x2=\"21\" y2=\"9\" />",
  },
  'link': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\" />\n  <path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\" />",
  },
  'linkedin': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\" />\n  <rect width=\"4\" height=\"12\" x=\"2\" y=\"9\" />\n  <circle cx=\"4\" cy=\"4\" r=\"2\" />",
  },
  'list-checks': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M13 5h8\" />\n  <path d=\"M13 12h8\" />\n  <path d=\"M13 19h8\" />\n  <path d=\"m3 17 2 2 4-4\" />\n  <path d=\"m3 7 2 2 4-4\" />",
  },
  'list-collapse': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M10 5h11\" />\n  <path d=\"M10 12h11\" />\n  <path d=\"M10 19h11\" />\n  <path d=\"m3 10 3-3-3-3\" />\n  <path d=\"m3 20 3-3-3-3\" />",
  },
  'list-filter': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M2 5h20\" />\n  <path d=\"M6 12h12\" />\n  <path d=\"M9 19h6\" />",
  },
  'list': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M3 5h.01\" />\n  <path d=\"M3 12h.01\" />\n  <path d=\"M3 19h.01\" />\n  <path d=\"M8 5h13\" />\n  <path d=\"M8 12h13\" />\n  <path d=\"M8 19h13\" />",
  },
  'loader2': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M21 12a9 9 0 1 1-6.219-8.56\" />",
  },
  'lock': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" />\n  <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />",
  },
  'log-in': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m10 17 5-5-5-5\" />\n  <path d=\"M15 12H3\" />\n  <path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\" />",
  },
  'log-out': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m16 17 5-5-5-5\" />\n  <path d=\"M21 12H9\" />\n  <path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\" />",
  },
  'mail': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\" />\n  <rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\" />",
  },
  'map-pin': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" />\n  <circle cx=\"12\" cy=\"10\" r=\"3\" />",
  },
  'menu': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M4 5h16\" />\n  <path d=\"M4 12h16\" />\n  <path d=\"M4 19h16\" />",
  },
  'message-circle': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\" />",
  },
  'message-square': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\" />",
  },
  'mic': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 19v3\" />\n  <path d=\"M19 10v2a7 7 0 0 1-14 0v-2\" />\n  <rect x=\"9\" y=\"2\" width=\"6\" height=\"13\" rx=\"3\" />",
  },
  'milestone': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 13v8\" />\n  <path d=\"M12 3v3\" />\n  <path d=\"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z\" />",
  },
  'minus': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M5 12h14\" />",
  },
  'monitor': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\" />\n  <line x1=\"8\" x2=\"16\" y1=\"21\" y2=\"21\" />\n  <line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"21\" />",
  },
  'moon': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" />",
  },
  'more-horizontal': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"12\" cy=\"12\" r=\"1\" />\n  <circle cx=\"19\" cy=\"12\" r=\"1\" />\n  <circle cx=\"5\" cy=\"12\" r=\"1\" />",
  },
  'mouse-pointer': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M14 4.1 12 6\" />\n  <path d=\"m5.1 8-2.9-.8\" />\n  <path d=\"m6 12-1.9 2\" />\n  <path d=\"M7.2 2.2 8 5.1\" />\n  <path d=\"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z\" />",
  },
  'music': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M9 18V5l12-2v13\" />\n  <circle cx=\"6\" cy=\"18\" r=\"3\" />\n  <circle cx=\"18\" cy=\"16\" r=\"3\" />",
  },
  'panel-left': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" />\n  <path d=\"M9 3v18\" />",
  },
  'panel-top': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" />\n  <path d=\"M3 9h18\" />",
  },
  'panel': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M12 3v18\"/>",
  },
  'phone': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\" />",
  },
  'plus': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M5 12h14\" />\n  <path d=\"M12 5v14\" />",
  },
  'rectangle-horizontal': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\" />",
  },
  'refresh': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" />\n  <path d=\"M21 3v5h-5\" />\n  <path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" />\n  <path d=\"M8 16H3v5\" />",
  },
  'rocket': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\" />\n  <path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09\" />\n  <path d=\"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z\" />\n  <path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05\" />",
  },
  'ruler': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z\" />\n  <path d=\"m14.5 12.5 2-2\" />\n  <path d=\"m11.5 9.5 2-2\" />\n  <path d=\"m8.5 6.5 2-2\" />\n  <path d=\"m17.5 15.5 2-2\" />",
  },
  'search': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m21 21-4.34-4.34\" />\n  <circle cx=\"11\" cy=\"11\" r=\"8\" />",
  },
  'server': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\" />\n  <rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\" />\n  <line x1=\"6\" x2=\"6.01\" y1=\"6\" y2=\"6\" />\n  <line x1=\"6\" x2=\"6.01\" y1=\"18\" y2=\"18\" />",
  },
  'settings': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\" />\n  <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  },
  'share': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 2v13\" />\n  <path d=\"m16 6-4-4-4 4\" />\n  <path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\" />",
  },
  'shield': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\" />",
  },
  'shopping-cart': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"8\" cy=\"21\" r=\"1\" />\n  <circle cx=\"19\" cy=\"21\" r=\"1\" />\n  <path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\" />",
  },
  'sliders-horizontal': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M10 5H3\" />\n  <path d=\"M12 19H3\" />\n  <path d=\"M14 3v4\" />\n  <path d=\"M16 17v4\" />\n  <path d=\"M21 12h-9\" />\n  <path d=\"M21 19h-5\" />\n  <path d=\"M21 5h-7\" />\n  <path d=\"M8 10v4\" />\n  <path d=\"M8 12H3\" />",
  },
  'smartphone': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\" />\n  <path d=\"M12 18h.01\" />",
  },
  'spark': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\" />\n  <path d=\"M20 2v4\" />\n  <path d=\"M22 4h-4\" />\n  <circle cx=\"4\" cy=\"20\" r=\"2\" />",
  },
  'sparkles': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\" />\n  <path d=\"M20 2v4\" />\n  <path d=\"M22 4h-4\" />\n  <circle cx=\"4\" cy=\"20\" r=\"2\" />",
  },
  'spinner': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M21 12a9 9 0 1 1-6.219-8.56\" />",
  },
  'square': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" />",
  },
  'star': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\" />",
  },
  'sun': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"12\" cy=\"12\" r=\"4\" />\n  <path d=\"M12 2v2\" />\n  <path d=\"M12 20v2\" />\n  <path d=\"m4.93 4.93 1.41 1.41\" />\n  <path d=\"m17.66 17.66 1.41 1.41\" />\n  <path d=\"M2 12h2\" />\n  <path d=\"M20 12h2\" />\n  <path d=\"m6.34 17.66-1.41 1.41\" />\n  <path d=\"m19.07 4.93-1.41 1.41\" />",
  },
  'table': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 3v18\" />\n  <rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" />\n  <path d=\"M3 9h18\" />\n  <path d=\"M3 15h18\" />",
  },
  'tablet': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\" ry=\"2\" />\n  <line x1=\"12\" x2=\"12.01\" y1=\"18\" y2=\"18\" />",
  },
  'tag': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z\" />\n  <circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\" />",
  },
  'text-cursor': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6\" />\n  <path d=\"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7\" />\n  <path d=\"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1\" />\n  <path d=\"M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1\" />\n  <path d=\"M9 6v12\" />",
  },
  'theme-dark': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" />",
  },
  'theme-light': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"12\" cy=\"12\" r=\"4\" />\n  <path d=\"M12 2v2\" />\n  <path d=\"M12 20v2\" />\n  <path d=\"m4.93 4.93 1.41 1.41\" />\n  <path d=\"m17.66 17.66 1.41 1.41\" />\n  <path d=\"M2 12h2\" />\n  <path d=\"M20 12h2\" />\n  <path d=\"m6.34 17.66-1.41 1.41\" />\n  <path d=\"m19.07 4.93-1.41 1.41\" />",
  },
  'toggle-right': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"15\" cy=\"12\" r=\"3\" />\n  <rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"7\" />",
  },
  'trash': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\" />\n  <path d=\"M3 6h18\" />\n  <path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" />",
  },
  'type': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 4v16\" />\n  <path d=\"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2\" />\n  <path d=\"M9 20h6\" />",
  },
  'unlock': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" />\n  <path d=\"M7 11V7a5 5 0 0 1 9.9-1\" />",
  },
  'upload-cloud': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 13v8\" />\n  <path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\" />\n  <path d=\"m8 17 4-4 4 4\" />",
  },
  'upload': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 3v12\" />\n  <path d=\"m17 8-5-5-5 5\" />\n  <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" />",
  },
  'user-circle': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <circle cx=\"12\" cy=\"10\" r=\"3\" />\n  <path d=\"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662\" />",
  },
  'user': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" />\n  <circle cx=\"12\" cy=\"7\" r=\"4\" />",
  },
  'video': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5\" />\n  <rect x=\"2\" y=\"6\" width=\"14\" height=\"12\" rx=\"2\" />",
  },
  'warning': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" />\n  <path d=\"M12 9v4\" />\n  <path d=\"M12 17h.01\" />",
  },
  'wifi': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M12 20h.01\" />\n  <path d=\"M2 8.82a15 15 0 0 1 20 0\" />\n  <path d=\"M5 12.859a10 10 0 0 1 14 0\" />\n  <path d=\"M8.5 16.429a5 5 0 0 1 7 0\" />",
  },
  'x': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<path d=\"M18 6 6 18\" />\n  <path d=\"m6 6 12 12\" />",
  },
  'zap': {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    body: "<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\" />",
  },
} satisfies Record<IconName, {
  viewBox: string;
  fill: string;
  stroke: string;
  strokeWidth: string;
  strokeLinecap: string;
  strokeLinejoin: string;
  body: string;
}>;

export interface NamedIconProps extends IconProps {
  name: IconName;
}

export function Icon({ name, ...props }: NamedIconProps) {
  const icon = icons[name];
  return (
    <IconBase
      viewBox={icon.viewBox}
      fill={icon.fill}
      stroke={icon.stroke}
      strokeWidth={Number(icon.strokeWidth)}
      strokeLinecap={icon.strokeLinecap as React.SVGProps<SVGSVGElement>['strokeLinecap']}
      strokeLinejoin={icon.strokeLinejoin as React.SVGProps<SVGSVGElement>['strokeLinejoin']}
      dangerouslySetInnerHTML={{ __html: icon.body }}
      {...props}
    />
  );
}

function createNamedIcon(name: IconName) {
  return function NamedIcon(props: IconProps) {
    return <Icon name={name} {...props} />;
  };
}

export const ActivityIcon = createNamedIcon('activity' as IconName);
export const AlertCircleIcon = createNamedIcon('alert-circle' as IconName);
export const AlertTriangleIcon = createNamedIcon('alert-triangle' as IconName);
export const AlignHorizontalIcon = createNamedIcon('align-horizontal' as IconName);
export const AlignJustifyIcon = createNamedIcon('align-justify' as IconName);
export const AppWindowIcon = createNamedIcon('app-window' as IconName);
export const ArrowDownIcon = createNamedIcon('arrow-down' as IconName);
export const ArrowLeftIcon = createNamedIcon('arrow-left' as IconName);
export const ArrowRightIcon = createNamedIcon('arrow-right' as IconName);
export const ArrowUpIcon = createNamedIcon('arrow-up' as IconName);
export const BadgeIcon = createNamedIcon('badge' as IconName);
export const BatteryIcon = createNamedIcon('battery' as IconName);
export const BellIcon = createNamedIcon('bell' as IconName);
export const BluetoothIcon = createNamedIcon('bluetooth' as IconName);
export const BookIcon = createNamedIcon('book' as IconName);
export const BoxIcon = createNamedIcon('box' as IconName);
export const CalendarIcon = createNamedIcon('calendar' as IconName);
export const CameraIcon = createNamedIcon('camera' as IconName);
export const CheckSquareIcon = createNamedIcon('check-square' as IconName);
export const CheckIcon = createNamedIcon('check' as IconName);
export const ChevronDownIcon = createNamedIcon('chevron-down' as IconName);
export const ChevronLeftIcon = createNamedIcon('chevron-left' as IconName);
export const ChevronRightIcon = createNamedIcon('chevron-right' as IconName);
export const ChevronUpIcon = createNamedIcon('chevron-up' as IconName);
export const ChevronIcon = createNamedIcon('chevron' as IconName);
export const CircleDotIcon = createNamedIcon('circle-dot' as IconName);
export const ClockIcon = createNamedIcon('clock' as IconName);
export const CloseIcon = createNamedIcon('close' as IconName);
export const CloudIcon = createNamedIcon('cloud' as IconName);
export const CodeIcon = createNamedIcon('code' as IconName);
export const ComponentIcon = createNamedIcon('component' as IconName);
export const CopyIcon = createNamedIcon('copy' as IconName);
export const CreditCardIcon = createNamedIcon('credit-card' as IconName);
export const DatabaseIcon = createNamedIcon('database' as IconName);
export const DownloadIcon = createNamedIcon('download' as IconName);
export const EditIcon = createNamedIcon('edit' as IconName);
export const ExternalLinkIcon = createNamedIcon('external-link' as IconName);
export const EyeOffIcon = createNamedIcon('eye-off' as IconName);
export const EyeIcon = createNamedIcon('eye' as IconName);
export const FileTextIcon = createNamedIcon('file-text' as IconName);
export const FileIcon = createNamedIcon('file' as IconName);
export const FilterIcon = createNamedIcon('filter' as IconName);
export const FolderIcon = createNamedIcon('folder' as IconName);
export const FormInputIcon = createNamedIcon('form-input' as IconName);
export const GhostIcon = createNamedIcon('ghost' as IconName);
export const GiftIcon = createNamedIcon('gift' as IconName);
export const GitCommitIcon = createNamedIcon('git-commit' as IconName);
export const GithubIcon = createNamedIcon('github' as IconName);
export const GridIcon = createNamedIcon('grid' as IconName);
export const GripIcon = createNamedIcon('grip' as IconName);
export const HashIcon = createNamedIcon('hash' as IconName);
export const Heading1Icon = createNamedIcon('heading1' as IconName);
export const HeartIcon = createNamedIcon('heart' as IconName);
export const HelpCircleIcon = createNamedIcon('help-circle' as IconName);
export const HistoryIcon = createNamedIcon('history' as IconName);
export const HomeIcon = createNamedIcon('home' as IconName);
export const ImageIcon = createNamedIcon('image' as IconName);
export const InfoIcon = createNamedIcon('info' as IconName);
export const LabIcon = createNamedIcon('lab' as IconName);
export const LaptopIcon = createNamedIcon('laptop' as IconName);
export const LayoutTemplateIcon = createNamedIcon('layout-template' as IconName);
export const LayoutIcon = createNamedIcon('layout' as IconName);
export const LinkIcon = createNamedIcon('link' as IconName);
export const LinkedinIcon = createNamedIcon('linkedin' as IconName);
export const ListChecksIcon = createNamedIcon('list-checks' as IconName);
export const ListCollapseIcon = createNamedIcon('list-collapse' as IconName);
export const ListFilterIcon = createNamedIcon('list-filter' as IconName);
export const ListIcon = createNamedIcon('list' as IconName);
export const Loader2Icon = createNamedIcon('loader2' as IconName);
export const LockIcon = createNamedIcon('lock' as IconName);
export const LogInIcon = createNamedIcon('log-in' as IconName);
export const LogOutIcon = createNamedIcon('log-out' as IconName);
export const MailIcon = createNamedIcon('mail' as IconName);
export const MapPinIcon = createNamedIcon('map-pin' as IconName);
export const MenuIcon = createNamedIcon('menu' as IconName);
export const MessageCircleIcon = createNamedIcon('message-circle' as IconName);
export const MessageSquareIcon = createNamedIcon('message-square' as IconName);
export const MicIcon = createNamedIcon('mic' as IconName);
export const MilestoneIcon = createNamedIcon('milestone' as IconName);
export const MinusIcon = createNamedIcon('minus' as IconName);
export const MonitorIcon = createNamedIcon('monitor' as IconName);
export const MoonIcon = createNamedIcon('moon' as IconName);
export const MoreHorizontalIcon = createNamedIcon('more-horizontal' as IconName);
export const MousePointerIcon = createNamedIcon('mouse-pointer' as IconName);
export const MusicIcon = createNamedIcon('music' as IconName);
export const PanelLeftIcon = createNamedIcon('panel-left' as IconName);
export const PanelTopIcon = createNamedIcon('panel-top' as IconName);
export const PanelIcon = createNamedIcon('panel' as IconName);
export const PhoneIcon = createNamedIcon('phone' as IconName);
export const PlusIcon = createNamedIcon('plus' as IconName);
export const RectangleHorizontalIcon = createNamedIcon('rectangle-horizontal' as IconName);
export const RefreshIcon = createNamedIcon('refresh' as IconName);
export const RocketIcon = createNamedIcon('rocket' as IconName);
export const RulerIcon = createNamedIcon('ruler' as IconName);
export const SearchIcon = createNamedIcon('search' as IconName);
export const ServerIcon = createNamedIcon('server' as IconName);
export const SettingsIcon = createNamedIcon('settings' as IconName);
export const ShareIcon = createNamedIcon('share' as IconName);
export const ShieldIcon = createNamedIcon('shield' as IconName);
export const ShoppingCartIcon = createNamedIcon('shopping-cart' as IconName);
export const SlidersHorizontalIcon = createNamedIcon('sliders-horizontal' as IconName);
export const SmartphoneIcon = createNamedIcon('smartphone' as IconName);
export const SparkIcon = createNamedIcon('spark' as IconName);
export const SparklesIcon = createNamedIcon('sparkles' as IconName);
export const SpinnerIcon = createNamedIcon('spinner' as IconName);
export const SquareIcon = createNamedIcon('square' as IconName);
export const StarIcon = createNamedIcon('star' as IconName);
export const SunIcon = createNamedIcon('sun' as IconName);
export const TableIcon = createNamedIcon('table' as IconName);
export const TabletIcon = createNamedIcon('tablet' as IconName);
export const TagIcon = createNamedIcon('tag' as IconName);
export const TextCursorIcon = createNamedIcon('text-cursor' as IconName);
export const ThemeDarkIcon = createNamedIcon('theme-dark' as IconName);
export const ThemeLightIcon = createNamedIcon('theme-light' as IconName);
export const ToggleRightIcon = createNamedIcon('toggle-right' as IconName);
export const TrashIcon = createNamedIcon('trash' as IconName);
export const TypeIcon = createNamedIcon('type' as IconName);
export const UnlockIcon = createNamedIcon('unlock' as IconName);
export const UploadCloudIcon = createNamedIcon('upload-cloud' as IconName);
export const UploadIcon = createNamedIcon('upload' as IconName);
export const UserCircleIcon = createNamedIcon('user-circle' as IconName);
export const UserIcon = createNamedIcon('user' as IconName);
export const VideoIcon = createNamedIcon('video' as IconName);
export const WarningIcon = createNamedIcon('warning' as IconName);
export const WifiIcon = createNamedIcon('wifi' as IconName);
export const XIcon = createNamedIcon('x' as IconName);
export const ZapIcon = createNamedIcon('zap' as IconName);

export { icons as iconRegistry };
