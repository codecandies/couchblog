/**
 * Kommentarformular - AJAX-Submit mit Accessibility
 */
(function() {
  'use strict';

  const form = document.getElementById('commentsForm');
  if (!form) return;

  const statusRegion = document.getElementById('comments__form-status');
  const submitButton = document.getElementById('comments__submit-button');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Button deaktivieren und Status setzen
    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Wird gesendet...';

    // Status-Region leeren
    statusRegion.textContent = '';
    statusRegion.className = 'comments__form-status';

    try {
      // FormData aus dem Formular erstellen
      const formData = new FormData(form);

      // Netlify Forms benötigt den form-name Parameter
      formData.append('form-name', form.getAttribute('name'));
      if (window.localStorage.getItem('commenterEmail') !== null ) {
        formData.append('email', window.localStorage.getItem('commenterEmail'));
      }
      if (formData.get('bot-field')) {
        // Bot-Feld ist ausgefüllt - Spam-Verdacht
        throw new Error('Spam-Verdacht: Bot-Feld ist ausgefüllt.');
      }
      // AJAX-Request an Netlify senden
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        // Erfolgsmeldung
        statusRegion.textContent = '✓ Vielen Dank! Dein Kommentar wurde übermittelt und wird nach Prüfung veröffentlicht.';
        statusRegion.className = 'comments__form-status comments__form-status--success';

        // Formular zurücksetzen
        form.reset();

        // Optional: Nach einigen Sekunden zum Kommentarbereich scrollen
        setTimeout(() => {
          const commentsSection = document.getElementById('comments__container');
          if (commentsSection) {
            commentsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 2000);
      } else {
        throw new Error(`Server antwortete mit Status ${response.status}`);
      }
    } catch (error) {
      // Fehlermeldung
      console.error('Fehler beim Absenden:', error);
      statusRegion.textContent = '✗ Es gab einen Fehler beim Absenden deines Kommentars. Bitte versuche es später erneut.';
      statusRegion.className = 'comments__form-status comments__form-status--error';
    } finally {
      // Button wieder aktivieren
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
      submitButton.textContent = originalButtonText;
    }
  });

  // Client-seitige Validierung mit benutzerfreundlichem Feedback
  const requiredFields = form.querySelectorAll('[required]');
  requiredFields.forEach(field => {
    field.addEventListener('invalid', function(e) {
      e.preventDefault();

      // Fokus auf das erste fehlerhafte Feld setzen
      field.focus();

      // Visuelles Feedback
      field.setAttribute('aria-invalid', 'true');

      // Meldung in der Status-Region
      const fieldLabel = field.previousElementSibling?.textContent || 'Dieses Feld';
      statusRegion.textContent = `${fieldLabel} ist erforderlich.`;
      statusRegion.className = 'comments__form-status comments__form-status--error';
    });

    // Fehler entfernen, wenn Benutzer das Feld ausfüllt
    field.addEventListener('input', function() {
      if (field.validity.valid) {
        field.removeAttribute('aria-invalid');
        if (statusRegion.classList.contains('comments__form-status--error')) {
          statusRegion.textContent = '';
          statusRegion.className = 'comments__form-status';
        }
      }
    });
  });
})();
