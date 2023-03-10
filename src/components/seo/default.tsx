import {DefaultSeo, DefaultSeoProps} from 'next-seo';
import {defaultOrigin, defaultLocale, supportedLocales} from '@/lib/env';
import {useRouter} from 'next/router';
import {buildLocalizedUrlFromLocale} from '@/lib/url';
import {buildLanguageAlternates} from '@/lib/seo';
import {useTranslation} from 'react-i18next';

/** OG画像幅。Facebook推奨に合わせ1200 */
const ogImageWidth = 1200;
/** OG画像高さ。Facebook推奨に合わせ630 */
const ogImageHeight = 630;

/** Twitterスクリーンネーム */
const twitterScreenName = `@${process.env.NEXT_PUBLIC_TWITTER_SCREEN_NAME ?? '******'}`;

/** Twitter SEO設定 */
const twitter: DefaultSeoProps['twitter'] = twitterScreenName
    ? {
        handle: twitterScreenName,
        site: twitterScreenName,
        cardType: 'summary_large_image',
    }
    : undefined;

/** FacebookのSEO設定 */
const facebook: DefaultSeoProps['facebook'] = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID
    ? {
        appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
    }
    : undefined;

/** デフォルトのSEO設定。
 * 必要な部分をページ毎で上書きして使用する
 * @see https://github.com/garmeeh/next-seo
 */
export const MyDefaultSeo = (): JSX.Element => {
    const {t} = useTranslation('seo');
    const {locale, pathname} = useRouter();
    const siteName = t('$site-name');
    const titleTemplate = `${siteName} | %s`;
    const description = t('$site-description');
    const ogImageUrl = `${defaultOrigin}${t('$og-image-path')}`;
    const canonical = buildLocalizedUrlFromLocale(pathname, locale!, defaultOrigin, defaultLocale);
    const languageAlternates = buildLanguageAlternates(pathname, supportedLocales, defaultOrigin, defaultLocale);

    return (
        <DefaultSeo
            defaultTitle={siteName}
            titleTemplate={titleTemplate}
            description={description}
            // additionalLinkTags={[{ rel: 'preconnect', href: defaultApiOrigin }]}
            canonical={canonical}
            languageAlternates={languageAlternates}
            openGraph={{
                description,
                title: siteName,
                images: [{url: ogImageUrl, height: ogImageHeight, width: ogImageWidth, alt: siteName}],
                type: 'website',
                site_name: siteName,
                locale,
                url: canonical,
            }}
            facebook={facebook}
            twitter={twitter}
        />
    );
};