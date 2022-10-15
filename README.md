https://mantine.dev/form/recipes/#save-form-values-to-local-storage


There is no magic in form.getInputProps, it is just a shorthand for value, onChange, onFocus and onBlur props. You can set these props on your side if you need more control:


<TextInput value={form.values.input} onChange={event => form.setFieldValue('input', event.target.value)} />
error
