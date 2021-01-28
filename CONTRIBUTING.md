## Contributing

Please, create a fork and an explicit branch/flow name. For exemple, if you fix something (ex: mail sending) create a branch like this: `git checkout -b fix/mail-sending` or with flow `git flow hotfix mail-sending`.

For commit message, follow [this convention](https://conventionalcommits.org/).

**PR are accepted on `develop` branch**. `master` branch only contains compiled sources (from production branch) to host the website on GitHub static page. `production` branch contains the stable code used in production, It is from there that the code of branch `master` is generated.

### Translation

Translation is made on self-hosted Weblate platform. To contributing to the translation, please follow this link: [Weblate FOE-Tools](https://translate.foe.tools/engage/foe-tools-website/)

#### Adding language

For adding language, create a `.po` file in `translations/` where the name is a code of language.

In `translations/common.json` add the language in `lang`. Values should following this syntax:

```json
"code ISO 639-1 of language": {
    "en": "Your language in english",
    "original": "your language in your language",
    "flag": "the emoji of flag of the country"
}

Example:
"fr": { "en": "French", "original": "Français", "flag": "🇫🇷" }
```

In `scripts/locales.js`, add your locale in **supportedLocales**.

Finally, in `nuxt.config.js`, in `i18n.locales`, add your language.

_Note: the code of language shall respect the [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) standard._
