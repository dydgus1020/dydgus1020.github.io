(function () {
  "use strict";

  var storageKey = "siteLanguage";
  var supportedLanguages = ["en", "ko"];

  function readLanguage() {
    try {
      var savedLanguage = localStorage.getItem(storageKey);
      return supportedLanguages.indexOf(savedLanguage) !== -1 ? savedLanguage : "en";
    } catch (error) {
      return "en";
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(storageKey, language);
    } catch (error) {
      // Keep the selected language for this page when storage is unavailable.
    }
  }

  function applyLanguage(language, persist) {
    if (supportedLanguages.indexOf(language) === -1) {
      language = "en";
    }

    document.documentElement.setAttribute("data-language", language);

    document.querySelectorAll("[data-lang]").forEach(function (element) {
      var isActive = element.getAttribute("data-lang") === language;
      element.hidden = !isActive;
      element.setAttribute("aria-hidden", String(!isActive));
    });

    document.querySelectorAll("[data-language-option]").forEach(function (button) {
      var isSelected = button.getAttribute("data-language-option") === language;
      button.setAttribute("aria-pressed", String(isSelected));
    });

    if (persist) {
      saveLanguage(language);
    }
  }

  var initialLanguage = readLanguage();
  document.documentElement.setAttribute("data-language", initialLanguage);

  function initializeLanguageToggle() {
    applyLanguage(initialLanguage, false);

    document.querySelectorAll("[data-language-option]").forEach(function (button) {
      button.addEventListener("click", function () {
        applyLanguage(button.getAttribute("data-language-option"), true);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeLanguageToggle);
  } else {
    initializeLanguageToggle();
  }
}());
