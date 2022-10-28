import { computed } from 'vue';
import { useSiteDataByRoute, usePageData } from 'vitepress';
import { endingSlashRE, isNullish, isExternal } from '../utils';

const bitbucketRE = /bitbucket.org/;

export function useEditLink() {
  const site = useSiteDataByRoute();
  const page = usePageData();

  const url = computed(() => {
    const showEditLink = isNullish(page.value.frontmatter.editLink)
      ? site.value.themeConfig.editLinks
      : page.value.frontmatter.editLink;

    const { repo, docsDir = '', docsBranch = 'master', github = repo } = site.value.themeConfig;

    const { relativePath } = page.value;

    if (!showEditLink || !relativePath || !repo) {
      return null;
    }

    return createUrl(repo, github, docsDir, docsBranch, relativePath);
  });

  const text = computed(() => {
    return site.value.themeConfig.editLinkText || 'Edit this page';
  });

  return {
    url,
    text,
  };
}

function createUrl(
  repo: string,
  github: string,
  docsDir: string,
  docsBranch: string,
  path: string
): string {
  return bitbucketRE.test(repo)
    ? createBitbucketUrl(repo, github, docsDir, docsBranch, path)
    : createGitHubUrl(repo, github, docsDir, docsBranch, path);
}

function createGitHubUrl(
  repo: string,
  github: string,
  docsDir: string,
  docsBranch: string,
  path: string
): string {
  const base = isExternal(github) ? github : `https://github.com/${github}`;

  return (
    base.replace(endingSlashRE, '') +
    `/edit` +
    `/${docsBranch}/` +
    (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
    path
  );
}

function createBitbucketUrl(
  repo: string,
  github: string,
  docsDir: string,
  docsBranch: string,
  path: string
): string {
  const base = isExternal(github) ? github : repo;

  return (
    base.replace(endingSlashRE, '') +
    `/src` +
    `/${docsBranch}/` +
    (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
    path +
    `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
  );
}
