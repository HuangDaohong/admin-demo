module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'import', 'eslint-plugin-react'],
    rules: {
        'import/extensions': [
            0,
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ],
        'react/react-in-jsx-scope': 'off'
    },
    settings: {
        'import/resolver': {
            typescript: {},
            node: ['js', 'jsx', 'ts', 'tsx']
        }
    },
    ignorePatterns: ['!.*', 'node_modules']
};
