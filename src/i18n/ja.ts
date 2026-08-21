// Japanese UI dictionary — shipped as a reference translation alongside `en`.
// Copy this file to add your own locale; `UIStrings` makes a missing key a
// type error, so nothing can silently fall back to English.
//
// Scope is UI chrome only — see the note at the top of `en.ts`.
import type { UIStrings } from './en';

export const ja: UIStrings = {
  // Header, footer, and other chrome
  'nav.home': 'ホーム',
  'nav.about': 'プロフィール',
  'nav.projects': 'プロジェクト',
  'nav.experience': 'ジャーニー',
  'nav.publications': '論文',
  'nav.certifications': '認定資格',
  'nav.blog': 'ブログ',
  'nav.contact': 'お問い合わせ',
  'nav.label': 'メインナビゲーション',
  'nav.brandHome': '{site} のホーム',
  'theme.toggle': '配色テーマを切り替える',
  'footer.notes': 'ノート',
  'social.label': 'ソーシャルリンク',

  // Pagination
  'pagination.label': 'ページ送り',
  'pagination.newer': '← 新しい記事',
  'pagination.older': '古い記事 →',
  'pagination.status': '{total} ページ中 {current} ページ目',

  // Home
  'home.primaryLinks': '主要リンク',
  'home.viewProjects': 'プロジェクトを見る',
  'home.readNotes': 'ノートを読む',
  'home.overviewLabel': 'テーマの概要',
  'home.latestProjectsEyebrow': '最新のプロジェクト',
  'home.allProjects': 'すべてのプロジェクト',
  'home.projectTech': '{title} の使用技術',
  'home.projectsEmpty':
    '<code>src/content/projects</code> にプロジェクトを追加すると、ここに最新のプロジェクトが並びます。',
  'home.latestBlogEyebrow': '最新のブログ',
  'home.allPosts': 'すべてのブログ',
  'home.postsEmpty': 'まだありません。',

  // Blog index
  'blog.title': 'ブログ',
  'blog.titlePaged': 'ブログ · {page} ページ目',
  'blog.eyebrow': 'ブログ',
  'blog.listLabel': 'ブログ記事',
  'blog.tagsEyebrow': 'タグ',

  // Blog post
  'post.eyebrow': 'ブログ',
  'post.readingTime': '約{minutes}分で読めます',
  'post.tocLabel': '目次',
  'post.contentsEyebrow': '目次',
  'post.adjacentLabel': '前後の記事',
  'post.previous': '前の記事',
  'post.next': '次の記事',
  'post.relatedEyebrow': '関連記事',
  'post.breadcrumbHome': 'ホーム',
  'post.breadcrumbBlog': 'ブログ',
  'share.label': 'シェア',
  'share.x': 'X でシェア',
  'share.linkedin': 'LinkedIn でシェア',
  'share.copy': 'リンクをコピー',
  'share.copied': 'コピーしました！',

  // Comments (rendered only when GISCUS.enabled)
  'comments.eyebrow': 'コメント',
  'comments.failed': 'コメントを読み込めませんでした。スレッドは {link} にあります。',
  'comments.failedLink': 'GitHub Discussions ↗',
  'comments.noscript':
    'コメントの表示には JavaScript が必要です。スレッドは GitHub Discussions にあります。',

  // Projects
  'projects.title': 'プロジェクト',
  'projects.eyebrow': 'プロジェクト',
  'projects.listLabel': '厳選したプロジェクト',
  'project.eyebrow': 'プロジェクト',
  'project.visit': 'プロジェクトを見る',
  'project.repository': 'リポジトリを見る',
  'project.stackEyebrow': '技術構成',

  // Work experience
  'experience.title': 'ジャーニー',
  'experience.eyebrow': 'キャリア',
  'experience.listLabel': 'ジャーニー',

  // Publications
  'publications.title': '論文',
  'publications.eyebrow': '研究',
  'publications.listLabel': '論文',

  // Certifications
  'certifications.title': '認定資格',
  'certifications.eyebrow': '資格',
  'certifications.listLabel': '認定資格',

  // About
  'about.title': 'プロフィール',
  'about.eyebrow': 'プロフィール',
  'about.ledgerLabel': '経歴の概要',

  // Contact
  'contact.title': 'お問い合わせ',

  // 404
  'notFound.title': 'ページが見つかりません',
  'notFound.description': 'お探しのページは存在しません。',
  'notFound.eyebrow': '404 — 見つかりません',
  'notFound.heading': 'このページは航路から外れました。',
  'notFound.lead':
    'アドレスが変わったか、はじめから存在しなかったのかもしれません。下のキールラインが、穏やかな水域へ戻る道です。',
  'notFound.linksLabel': '復帰用リンク',
  'notFound.home': 'ホームへ戻る',
  'notFound.blog': 'ブログを読む',
  'notFound.projects': 'プロジェクトを見る',
};
