
const en_US = require("./en_US");
const pt_BR = require("./pt_BR");
const es_ES = require("./es_ES");

const defaultLanguage = 'pt_BR';
const availableLanguages = ['en_US', 'pt_BR', 'es_ES'];

const languagesFull = {
    en_US: 'English',
    es_ES: 'Spanish',
    pt_BR: 'Portuguese',
}

const languages = {
    en_US: {...en_US},
    es_ES: {...es_ES},
    pt_BR: {...pt_BR},
}

exports.default = {
    availableLanguages,
    defaultLanguage,
    languages,
    languagesFull,
};

exports.languages = languages;
