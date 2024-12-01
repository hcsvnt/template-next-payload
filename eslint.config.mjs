/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import tseslint from 'typescript-eslint';
import pluginNext from '@next/eslint-plugin-next';
import parser from '@typescript-eslint/parser';
import pluginPromise from 'eslint-plugin-promise';
// import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import functional from 'eslint-plugin-functional';
import eslintConfigPrettier from 'eslint-config-prettier';

// https://github.com/vercel/next.js/issues/71763
// https://typescript-eslint.io/getting-started/typed-linting/

export default tseslint.config(
    tseslint.configs.recommendedTypeChecked, // either or
    // tseslint.configs.strictTypeChecked,
    pluginPromise.configs['flat/recommended'],
    // importPlugin.flatConfigs.recommended, // eh, meh
    jsxA11y.flatConfigs.recommended,
    // comment out functional when you've had enough
    functional.configs.externalTypeScriptRecommended,
    functional.configs.recommended,
    functional.configs.stylistic,
    eslintConfigPrettier,

    {
        name: 'ESLint Config - nextjs',
        languageOptions: {
            parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                },
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        plugins: {
            '@next/next': pluginNext
        },
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        rules: {
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs['core-web-vitals'].rules,
            '@typescript-eslint/no-unused-vars': 'warn', // because we're not perfect
        }
    }
);
