
## Update Site Logo

Replace the current logo files with the uploaded images:

1. **Light logo** (white text, for dark backgrounds): Copy `PrimesourceLogo1.png` to `src/assets/logo-light.png`
2. **Dark logo** (black text, for light backgrounds): Copy `PrimesourceLogo3.png` to `src/assets/logo-dark.png`

No code changes needed since the Header and Footer already import from these exact paths (`@/assets/logo-light.png` and `@/assets/logo-dark.png`).

### Where the logos appear
- **Header**: Shows dark logo when scrolled, light logo when at top of page
- **Footer**: Shows light logo on the dark footer background
