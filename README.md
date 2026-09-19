# dic-form-validation

Client-side JavaScript series assignment - Form validation.

The contact form now compares the Email and Email (confirmation) fields in real
time instead of only when the send button is clicked.

## Behaviour

- While the two fields differ, the message "Emails do not match" is shown
  directly below the Email (confirmation) row in `#d14539`, and the field
  background turns `rgba(230, 169, 171, .5)`.
- As soon as the two fields match, the message and the background are removed.
- Written in plain JavaScript. No jQuery.

## Implementation notes

The `input` event is used so the check runs on every keystroke, on both the
Email field and the Email (confirmation) field.

The browser generates a `<tbody>` element for the table even though it is not
written in the source, so the row to insert after is reached from the input
element through `parentNode` rather than being looked up directly.

## Files

```
validation.html
css/normalize.css
css/contact_validation.css
javascripts/validation.js
```

Open `validation.html` in a browser to run it.
